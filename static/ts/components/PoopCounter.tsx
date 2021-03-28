import * as React from "react";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import axios from "../axiosConfig";

interface IPoop {
  id: number;
  created_at: string;
}

export const PoopCounter = () => {
  const [lastPoopTime, setLastPoopTime] = useState<IPoop>({
    id: 0,
    created_at: "",
  });

  const submit = () => {
    axios()
      .post("/poops/")
      .then((res) => setLastPoopTime(res.data))
      .catch((err) => console.log(err));
  };

  const fetch = () => {
    axios()
      .get("/poops/")
      .then((res) => setLastPoopTime(res.data[0]))
      .catch((err) => console.log(err));
  };

  dayjs.extend(relativeTime);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="col-sm-12 col-md-6">
      <div className="card border-warning mt-2">
        <div className="card-body">
          <div className="row">
            <div className="col-2">
              <img
                src="/static/images/poo.png"
                alt="poop"
                style={{ borderRadius: "50%" }}
                width="90%"
              />
            </div>
            <div className="col-10">
              <h5 className="card-title">Poops</h5>
              <p className="card-text">
                <b>Last poop: </b>{" "}
                {dayjs(lastPoopTime.created_at).format("HH:mm")} (
                {dayjs(lastPoopTime.created_at).fromNow()})
              </p>
              <a
                onClick={() => {
                  submit();
                }}
                className="btn btn-outline-dark"
              >
                Just pooped
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
