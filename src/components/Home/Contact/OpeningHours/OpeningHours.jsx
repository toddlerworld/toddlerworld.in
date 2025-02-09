import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./OpeningHours.scss";

const OpeningHours = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = new Date().getDay();
  const today = daysOfWeek[currentDay];

  const openingHours = {
    Monday: "10:00 am – 04:00 pm",
    Tuesday: "10:00 am – 04:00 pm",
    Wednesday: "10:00 am – 04:00 pm",
    Thursday: "10:00 am – 04:00 pm",
    Friday: "10:00 am – 04:00 pm",
    Saturday: "10:00 am – 03:00 pm",
    Sunday: "Closed",
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="opening-hours">
      <AnimatePresence mode="wait">
        {!isDropdownOpen ? (
          <motion.div
            key="closed"
            className="today-hours"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDropdownOpen(true)}
          >
            <span className="status">
              {today === "Sunday" ? "Closed Today" : "Open Today"}
            </span>
            <span className="hours">{openingHours[today]}</span>
            <span className="arrow">▼</span>
          </motion.div>
        ) : (
          <motion.div
            key="open"
            className="all-hours"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className={`day-row ${day === today ? "current" : ""}`}
                onClick={() => setDropdownOpen(false)}
              >
                <span className="day">{day}</span>
                <span className="hours">{openingHours[day]}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OpeningHours;
