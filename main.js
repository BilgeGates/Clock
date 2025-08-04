const hourContainer = document.getElementById("hourMarkers");
for (let i = 0; i < 12; i++) {
  const marker = document.createElement("div");
  marker.className = "hour-marker";
  marker.style.transform = `rotate(${i * 30}deg)`;
  hourContainer.appendChild(marker);
}

const minuteContainer = document.getElementById("minuteMarkers");
for (let i = 0; i < 60; i++) {
  if (i % 5 !== 0) {
    const marker = document.createElement("div");
    marker.className = "minute-marker";
    marker.style.transform = `rotate(${i * 6}deg)`;
    minuteContainer.appendChild(marker);
  }
}

const particles = document.getElementById("particles");
for (let i = 0; i < 20; i++) {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = Math.random() * 100 + "%";
  particle.style.top = Math.random() * 100 + "%";
  particle.style.animationDelay = Math.random() * 6 + "s";
  particles.appendChild(particle);
}

const updateClock = () => {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  document.getElementById("hourHand").style.transform = `rotate(${
    (h % 12) * 30 + m * 0.5
  }deg)`;
  document.getElementById("minuteHand").style.transform = `rotate(${m * 6}deg)`;
  document.getElementById("secondHand").style.transform = `rotate(${s * 6}deg)`;

  document.getElementById("digitalTime").textContent = `${h
    .toString()
    .padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s
    .toString()
    .padStart(2, "0")}`;

  document.getElementById("dateDisplay").textContent = now.toLocaleDateString(
    "en-US",
    { weekday: "long", year: "numeric", month: "long", day: "numeric" }
  );
};

updateClock();
setInterval(updateClock, 1000);
