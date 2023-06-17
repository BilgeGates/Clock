const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const am_pm = document.getElementById("am_pm");

const updateTime = () => {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let am = h >= 12 ? "PM" : "AM";

  if (h > 12) {
    h -= 12;
  }

  hours.textContent = h < 10 ? "0" + h : h;
  minutes.textContent = m < 10 ? "0" + m : m;
  seconds.textContent = s < 10 ? "0" + s : s;
  am_pm.textContent = am;

  const hourRotation = h * 30 + m / 2;
  const minuteRotation = m * 6;
  const secondRotation = s * 6;

  hr.style.transform = `rotateZ(${hourRotation}deg)`;
  mn.style.transform = `rotateZ(${minuteRotation}deg)`;
  sc.style.transform = `rotateZ(${secondRotation}deg)`;
};

setInterval(updateTime, 1000);
