import * as React from "react";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import axios from "../axiosConfig";

interface IFeeding {
  id: number;
  created_at: string;
}

export const FeedingCounter = () => {
  const [lastFeedTime, setLastFeedTime] = useState<IFeeding>({
    id: 0,
    created_at: "",
  });

  const submit = () => {
    axios()
      .post("/feedings/")
      .then((res) => setLastFeedTime(res.data))
      .catch((err) => console.log(err));
  };

  const fetch = () => {
    axios()
      .get("/feedings/")
      .then((res) => setLastFeedTime(res.data[0]))
      .catch((err) => console.log(err));
  };

  dayjs.extend(relativeTime);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="col-sm-12 col-md-6">
      <div className="card border-primary mt-2">
        <div className="card-body">
          <div className="row">
            <div className="col-2">
              <img
                src="/static/images/baby-bottle.png"
                alt="poop"
                style={{ borderRadius: "50%" }}
                width="90%"
              />
            </div>
            <div className="col-10">
              <h5 className="card-title">Feeds</h5>
              <p className="card-text">
                <b>Last feed: </b>{" "}
                {dayjs(lastFeedTime.created_at).format("HH:mm")} (
                {dayjs(lastFeedTime.created_at).fromNow()})
              </p>
              <a
                onClick={() => {
                  submit();
                }}
                className="btn btn-outline-dark"
              >
                Just fed
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
