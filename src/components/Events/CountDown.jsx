import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const CountDown = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const { t } = useTranslation();
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    if (
      typeof timeLeft.days === "undefined" &&
      typeof timeLeft.hours === "undefined" &&
      typeof timeLeft.minutes === "undefined" &&
      typeof timeLeft.seconds === "undefined"
    ) {
      // axios.delete(`${server}/event/delete-shop-event/${data?._id}`)
    }
    return () => clearTimeout(timer);
  });
  function calculateTimeLeft() {
    const difference = +new Date(data?.Finish_Date) - +new Date();

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        //TODO: Floor rounds down and return the largest integer less than or equal to a given number
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }
  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }
    return (
      <span className="text-[25px] text-[#475ad2]">
        {timeLeft[interval]}
        {interval}
        {" "}
      </span>
    );
  });
  return (
    <div >
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-[red] text-[25px] ">
          {t("dashboard.timeUp")}


        </span>
      )}
    </div>
  );
};

export default CountDown;
