// ==================== INITIALIZATION ====================

// Create clock markers
const markersContainer = document.getElementById("markers");
for (let i = 0; i < 60; i++) {
  const marker = document.createElement("div");
  marker.className =
    i % 5 === 0
      ? "absolute top-2 left-1/2 w-1 h-6 bg-slate-500 rounded-full origin-bottom transform-gpu"
      : "absolute top-3 left-1/2 w-0.5 h-3 bg-slate-700 rounded-full origin-bottom transform-gpu";
  marker.style.transform = `translateX(-50%) rotate(${i * 6}deg)`;
  marker.style.transformOrigin = "50% 136px";
  markersContainer.appendChild(marker);
}

// ==================== CLOCK FUNCTIONS ====================

function updateClock() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  const ms = now.getMilliseconds();

  // Update analog clock hands
  const hourHand = document.getElementById("hourHand");
  const minuteHand = document.getElementById("minuteHand");
  const secondHand = document.getElementById("secondHand");

  if (hourHand)
    hourHand.style.transform = `rotate(${(h % 12) * 30 + m * 0.5}deg)`;
  if (minuteHand) minuteHand.style.transform = `rotate(${m * 6}deg)`;
  if (secondHand) secondHand.style.transform = `rotate(${s * 6}deg)`;

  // Update digital time
  const digitalTime = document.getElementById("digitalTime");
  if (digitalTime) {
    digitalTime.textContent = `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }

  // Update date display
  const dateDisplay = document.getElementById("dateDisplay");
  if (dateDisplay) {
    dateDisplay.textContent = now.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  // Update stats
  updateStats(now);

  // Update world clocks
  updateWorldClocks();
}

function updateStats(now) {
  // Local time
  const localTime = document.getElementById("localTime");
  if (localTime) {
    const h = now.getHours();
    const m = now.getMinutes();
    localTime.textContent = `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}`;
  }

  // Day of year
  const dayOfYear = document.getElementById("dayOfYear");
  if (dayOfYear) {
    const startOfYear = new Date(now.getFullYear(), 0, 0);
    const diff = now - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    dayOfYear.textContent = day;
  }

  // Week number
  const weekNumber = document.getElementById("weekNumber");
  if (weekNumber) {
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const days = Math.floor((now - startOfYear) / (24 * 60 * 60 * 1000));
    const week = Math.ceil((days + startOfYear.getDay() + 1) / 7);
    weekNumber.textContent = week;
  }

  // Unix timestamp
  const unixTime = document.getElementById("unixTime");
  if (unixTime) {
    unixTime.textContent = Math.floor(now.getTime() / 1000);
  }
}

// Start clock
updateClock();
setInterval(updateClock, 1000);

// ==================== TAB SWITCHING ====================

const tabButtons = document.querySelectorAll("[data-tab]");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabName = button.dataset.tab;

    // Remove active class from all buttons
    tabButtons.forEach((btn) => {
      btn.classList.remove("bg-primary", "border-primary", "text-white");
      btn.classList.add("bg-slate-800", "border-slate-700", "text-slate-300");
    });

    // Add active class to clicked button
    button.classList.remove(
      "bg-slate-800",
      "border-slate-700",
      "text-slate-300"
    );
    button.classList.add("bg-primary", "border-primary", "text-white");

    // Hide all tab contents
    tabContents.forEach((content) => {
      content.classList.add("hidden");
    });

    // Show selected tab content
    const selectedTab = document.getElementById(tabName + "Tab");
    if (selectedTab) {
      selectedTab.classList.remove("hidden");
    }
  });
});

// ==================== WORLD CLOCKS ====================

// Default timezones
let userTimezones = [
  {
    city: "New York",
    country: "United States",
    timezone: "America/New_York",
    flag: "🇺🇸",
  },
  {
    city: "London",
    country: "United Kingdom",
    timezone: "Europe/London",
    flag: "🇬🇧",
  },
  { city: "Tokyo", country: "Japan", timezone: "Asia/Tokyo", flag: "🇯🇵" },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    timezone: "Asia/Dubai",
    flag: "🇦🇪",
  },
  {
    city: "Sydney",
    country: "Australia",
    timezone: "Australia/Sydney",
    flag: "🇦🇺",
  },
];

function updateWorldClocks() {
  const timezoneGrid = document.getElementById("timezoneGrid");
  if (!timezoneGrid) return;

  const now = new Date();
  timezoneGrid.innerHTML = "";

  userTimezones.forEach((tz, index) => {
    const time = now.toLocaleTimeString("en-US", {
      timeZone: tz.timezone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const date = now.toLocaleDateString("en-US", {
      timeZone: tz.timezone,
      month: "short",
      day: "numeric",
    });

    const timezoneItem = document.createElement("div");
    timezoneItem.className =
      "flex justify-between items-center p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-slate-800 hover:border-primary/50 transition-all duration-300 group";
    timezoneItem.innerHTML = `
            <div class="flex items-center gap-3">
                <span class="text-2xl">${tz.flag}</span>
                <div>
                    <div class="font-semibold text-slate-100">${tz.city}</div>
                    <div class="text-xs text-slate-400">${tz.country}</div>
                </div>
            </div>
            <div class="flex items-center gap-3">
                <div class="text-right">
                    <div class="text-2xl font-bold text-primary font-mono">${time}</div>
                    <div class="text-xs text-slate-400">${date}</div>
                </div>
                <button class="remove-tz opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:text-red-400" data-index="${index}">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
        `;
    timezoneGrid.appendChild(timezoneItem);
  });

  // Add remove functionality
  document.querySelectorAll(".remove-tz").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = parseInt(e.currentTarget.dataset.index);
      userTimezones.splice(index, 1);
      updateWorldClocks();
    });
  });
}

// Add timezone button
const addTimezoneBtn = document.getElementById("addTimezoneBtn");
const searchContainer = document.getElementById("searchContainer");
const timezoneSearch = document.getElementById("timezoneSearch");
const searchResults = document.getElementById("searchResults");

addTimezoneBtn.addEventListener("click", () => {
  searchContainer.classList.toggle("hidden");
  if (!searchContainer.classList.contains("hidden")) {
    timezoneSearch.focus();
  }
});

// Search functionality
timezoneSearch.addEventListener("input", (e) => {
  const query = e.target.value.trim();

  if (query.length < 2) {
    searchResults.classList.add("hidden");
    searchResults.innerHTML = "";
    return;
  }

  const results = searchTimezones(query);

  if (results.length === 0) {
    searchResults.innerHTML =
      '<div class="p-3 text-slate-400 text-sm">No cities found</div>';
    searchResults.classList.remove("hidden");
    return;
  }

  searchResults.innerHTML = "";
  results.slice(0, 10).forEach((tz) => {
    const resultItem = document.createElement("div");
    resultItem.className =
      "p-3 hover:bg-slate-700 cursor-pointer transition-colors duration-200 flex items-center gap-3 border-b border-slate-700 last:border-b-0";
    resultItem.innerHTML = `
            <span class="text-xl">${tz.flag}</span>
            <div>
                <div class="text-slate-100 font-medium">${tz.city}</div>
                <div class="text-xs text-slate-400">${tz.country}</div>
            </div>
        `;

    resultItem.addEventListener("click", () => {
      // Check if already added
      const exists = userTimezones.some(
        (utz) => utz.city === tz.city && utz.timezone === tz.timezone
      );

      if (!exists) {
        userTimezones.push(tz);
        updateWorldClocks();
      }

      // Clear search
      timezoneSearch.value = "";
      searchResults.classList.add("hidden");
      searchContainer.classList.add("hidden");
    });

    searchResults.appendChild(resultItem);
  });

  searchResults.classList.remove("hidden");
});

// Close search when clicking outside
document.addEventListener("click", (e) => {
  if (!searchContainer.contains(e.target) && e.target !== addTimezoneBtn) {
    searchContainer.classList.add("hidden");
    timezoneSearch.value = "";
    searchResults.classList.add("hidden");
  }
});

// ==================== TIMER ====================

let timerInterval = null;
let timerRunning = false;
let timerSeconds = 0; // DÜZƏLDILDI: timerSecond -> timerSeconds
let timerTotalSeconds = 0;

const timerDisplay = document.getElementById("timerDisplay");
const timerStart = document.getElementById("timerStart");
const timerReset = document.getElementById("timerReset");
const timerHours = document.getElementById("timerHours");
const timerMinutes = document.getElementById("timerMinutes");
const timerSecondsInput = document.getElementById("timerSeconds"); // DÜZƏLDILDI: ayrı ad

function formatTimerDisplay(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  if (hrs > 0) {
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }
  return `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
}

function updateTimerDisplay() {
  timerDisplay.textContent = formatTimerDisplay(timerSeconds);
}

timerStart.addEventListener("click", () => {
  if (!timerRunning) {
    // DÜZƏLDILDI: yalnız əvvəl 0 idisə input dəyərlərini götür
    if (timerSeconds === 0) {
      const h = parseInt(timerHours.value) || 0;
      const m = parseInt(timerMinutes.value) || 0;
      const s = parseInt(timerSecondsInput.value) || 0; // DÜZƏLDILDI: timerSecondsInput

      timerTotalSeconds = h * 3600 + m * 60 + s;
      timerSeconds = timerTotalSeconds;
    }

    if (timerSeconds <= 0) {
      alert("Please set a valid time!");
      return;
    }

    timerRunning = true;
    timerStart.textContent = "Pause";
    timerStart.classList.remove("bg-primary");
    timerStart.classList.add("bg-yellow-600", "hover:bg-yellow-500");

    // Disable inputs
    timerHours.disabled = true;
    timerMinutes.disabled = true;
    timerSecondsInput.disabled = true; // DÜZƏLDILDI
    timerHours.classList.add("opacity-50", "cursor-not-allowed");
    timerMinutes.classList.add("opacity-50", "cursor-not-allowed");
    timerSecondsInput.classList.add("opacity-50", "cursor-not-allowed"); // DÜZƏLDILDI

    timerInterval = setInterval(() => {
      timerSeconds--;
      updateTimerDisplay();

      if (timerSeconds <= 0) {
        clearInterval(timerInterval);
        timerRunning = false;
        timerStart.textContent = "Start";
        timerStart.classList.remove("bg-yellow-600", "hover:bg-yellow-500");
        timerStart.classList.add("bg-primary");

        // Play sound or show notification
        playTimerSound();
        showTimerNotification();

        // Enable inputs
        timerHours.disabled = false;
        timerMinutes.disabled = false;
        timerSecondsInput.disabled = false; // DÜZƏLDILDI
        timerHours.classList.remove("opacity-50", "cursor-not-allowed");
        timerMinutes.classList.remove("opacity-50", "cursor-not-allowed");
        timerSecondsInput.classList.remove("opacity-50", "cursor-not-allowed"); // DÜZƏLDILDI
      }
    }, 1000);
  } else {
    // Pause
    timerRunning = false;
    timerStart.textContent = "Resume";
    timerStart.classList.remove("bg-yellow-600", "hover:bg-yellow-500");
    timerStart.classList.add("bg-primary");
    clearInterval(timerInterval);
  }
});

timerReset.addEventListener("click", () => {
  timerRunning = false;
  timerSeconds = 0;
  timerTotalSeconds = 0;
  clearInterval(timerInterval);

  timerHours.value = "0";
  timerMinutes.value = "5";
  timerSecondsInput.value = "0"; // DÜZƏLDILDI
  timerDisplay.textContent = "05:00";
  timerStart.textContent = "Start";
  timerStart.classList.remove("bg-yellow-600", "hover:bg-yellow-500");
  timerStart.classList.add("bg-primary");

  // Enable inputs
  timerHours.disabled = false;
  timerMinutes.disabled = false;
  timerSecondsInput.disabled = false; // DÜZƏLDILDI
  timerHours.classList.remove("opacity-50", "cursor-not-allowed");
  timerMinutes.classList.remove("opacity-50", "cursor-not-allowed");
  timerSecondsInput.classList.remove("opacity-50", "cursor-not-allowed"); // DÜZƏLDILDI
});

function playTimerSound() {
  // Create audio context and play beep
  try {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = "sine";

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + 0.5
    );

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  } catch (e) {
    console.log("Audio not supported");
  }
}

function showTimerNotification() {
  // Show browser notification if permitted
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification("Timer Finished!", {
      body: "Your countdown timer has completed.",
      icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%236366f1"><circle cx="12" cy="12" r="10"/></svg>',
    });
  } else if ("Notification" in window && Notification.permission !== "denied") {
    Notification.requestPermission();
  }

  // Visual alert
  alert("Timer Finished! ⏰");
}

// Validate timer inputs
[timerHours, timerMinutes, timerSecondsInput].forEach((input) => {
  // DÜZƏLDILDI
  input.addEventListener("input", (e) => {
    let value = parseInt(e.target.value);
    const max = parseInt(e.target.max);
    const min = parseInt(e.target.min);

    if (value > max) e.target.value = max;
    if (value < min) e.target.value = min;

    // Update display
    const h = parseInt(timerHours.value) || 0;
    const m = parseInt(timerMinutes.value) || 0;
    const s = parseInt(timerSecondsInput.value) || 0; // DÜZƏLDILDI
    const total = h * 3600 + m * 60 + s;
    timerDisplay.textContent = formatTimerDisplay(total);
  });
});

// ==================== STOPWATCH ====================
// ƏLAVƏ EDİLDİ: Stopwatch funksionallığı

let stopwatchInterval = null;
let stopwatchRunning = false;
let stopwatchMilliseconds = 0;
let lapCounter = 1;

const stopwatchDisplay = document.getElementById("stopwatchDisplay");
const stopwatchStart = document.getElementById("stopwatchStart");
const stopwatchLap = document.getElementById("stopwatchLap");
const stopwatchReset = document.getElementById("stopwatchReset");
const stopwatchTab = document.getElementById("stopwatchTab");
const lapsContainer = document.getElementById("lapsContainer");
const lapsList = document.getElementById("lapsList");

function formatStopwatchDisplay(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const centiseconds = Math.floor((ms % 1000) / 10);
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}.${centiseconds.toString().padStart(2, "0")}`;
}

function updateStopwatchDisplay() {
  stopwatchDisplay.textContent = formatStopwatchDisplay(stopwatchMilliseconds);
}

stopwatchStart.addEventListener("click", () => {
  if (!stopwatchRunning) {
    stopwatchRunning = true;
    stopwatchStart.textContent = "Pause";
    stopwatchStart.classList.remove("bg-primary");
    stopwatchStart.classList.add("bg-yellow-600", "hover:bg-yellow-500");
    stopwatchLap.disabled = false;
    stopwatchLap.classList.remove("opacity-50");

    const startTime = Date.now() - stopwatchMilliseconds;
    stopwatchInterval = setInterval(() => {
      stopwatchMilliseconds = Date.now() - startTime;
      updateStopwatchDisplay();
    }, 10);
  } else {
    stopwatchRunning = false;
    stopwatchStart.textContent = "Resume";
    stopwatchStart.classList.remove("bg-yellow-600", "hover:bg-yellow-500");
    stopwatchStart.classList.add("bg-primary");
    clearInterval(stopwatchInterval);
  }
});

stopwatchLap.addEventListener("click", () => {
  if (stopwatchRunning) {
    const lapTime = formatStopwatchDisplay(stopwatchMilliseconds);
    const lapItem = document.createElement("div");
    lapItem.className =
      "flex justify-between items-center p-3 bg-slate-800/50 rounded-lg";
    lapItem.innerHTML = `
      <span class="text-slate-400">Lap ${lapCounter}</span>
      <span class="font-mono text-lg text-primary">${lapTime}</span>
    `;
    lapsList.insertBefore(lapItem, lapsList.firstChild);
    lapsContainer.classList.remove("hidden");
    lapCounter++;
  }
});

stopwatchReset.addEventListener("click", () => {
  stopwatchRunning = false;
  stopwatchMilliseconds = 0;
  lapCounter = 1;
  clearInterval(stopwatchInterval);

  stopwatchDisplay.textContent = "00:00.00";
  stopwatchStart.textContent = "Start";
  stopwatchStart.classList.remove("bg-yellow-600", "hover:bg-yellow-500");
  stopwatchStart.classList.add("bg-primary");
  stopwatchLap.disabled = true;
  stopwatchLap.classList.add("opacity-50");

  lapsList.innerHTML = "";
  lapsContainer.classList.add("hidden");
});

// ==================== ALARMS ====================

// Toggle switches functionality
document
  .querySelectorAll('#alarmList input[type="checkbox"]')
  .forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      const alarmItem = e.target.closest(".flex");
      const timeDisplay = alarmItem.querySelector(".text-3xl");

      if (e.target.checked) {
        timeDisplay.classList.remove("text-slate-500");
        timeDisplay.classList.add("text-primary");
      } else {
        timeDisplay.classList.remove("text-primary");
        timeDisplay.classList.add("text-slate-500");
      }
    });
  });

// ==================== KEYBOARD SHORTCUTS ====================

document.addEventListener("keydown", (e) => {
  // Space to start/pause stopwatch (when on stopwatch tab)
  if (e.code === "Space" && !stopwatchTab.classList.contains("hidden")) {
    e.preventDefault();
    stopwatchStart.click();
  }

  // L for lap (when stopwatch is running)
  if (
    e.code === "KeyL" &&
    stopwatchRunning &&
    !stopwatchTab.classList.contains("hidden")
  ) {
    e.preventDefault();
    stopwatchLap.click();
  }

  // R for reset
  if (e.code === "KeyR" && !stopwatchTab.classList.contains("hidden")) {
    e.preventDefault();
    stopwatchReset.click();
  }
});

// ==================== REQUEST NOTIFICATION PERMISSION ====================

if ("Notification" in window && Notification.permission === "default") {
  // Request permission after 3 seconds
  setTimeout(() => {
    Notification.requestPermission();
  }, 3000);
}

// ==================== INITIALIZE ====================

// Update world clocks immediately
updateWorldClocks();
