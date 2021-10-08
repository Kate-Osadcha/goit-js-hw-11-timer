"use strict";

const daysRef = document.querySelector('[data-value="days"]');
const hoursRef = document.querySelector('[data-value="hours"]');
const minsRef = document.querySelector('[data-value="mins"]');
const secsRef = document.querySelector('[data-value="secs"]');
const timerRef = document.querySelector("#timer-1");


class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  dataTimer = setInterval(() => {
    let currentDate = Date.now();
    let time = this.targetDate - currentDate;

    this.updateTimer(time);
    this.finishTimer(time);
  }, 1000);

  updateTimer(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    daysRef.textContent = `${days}`;
    hoursRef.textContent = `${hours}`;
    minsRef.textContent = `${mins}`;
    secsRef.textContent = `${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  finishTimer(time) {
    if (time < 0) {
        clearInterval(this.dataTimer);
        timerRef.textContent = "Timer is finished";
    }
  }
}


new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 1, 2022"),
});
