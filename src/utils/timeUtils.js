/**
 * Format milliseconds to stopwatch display (MM:SS.mmm)
 */
export const formatStopwatch = (ms) => {
  const mins = Math.floor(ms / 60000);
  const secs = Math.floor((ms % 60000) / 1000);
  const millis = Math.floor(ms % 1000);
  return `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}.${millis.toString().padStart(3, "0")}`;
};

/**
 * Format milliseconds to lap time display (MM:SS.mm)
 */
export const formatLapTime = (ms) => {
  const mins = Math.floor(ms / 60000);
  const secs = Math.floor((ms % 60000) / 1000);
  const centis = Math.floor((ms % 1000) / 10);
  return `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}.${centis.toString().padStart(2, "0")}`;
};

/**
 * Format seconds to timer display (HH:MM:SS or MM:SS)
 */
export const formatTimer = (seconds) => {
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
};

/**
 * Get day of year from date
 */
export const getDayOfYear = (date) => {
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

/**
 * Get week number from date
 */
export const getWeekNumber = (date) => {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor((date - startOfYear) / (24 * 60 * 60 * 1000));
  return Math.ceil((days + startOfYear.getDay() + 1) / 7);
};

/**
 * Get Unix timestamp in seconds
 */
export const getUnixTimestamp = (date) => {
  return Math.floor(date.getTime() / 1000);
};

/**
 * Play beep sound for timer completion
 */
export const playBeepSound = () => {
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
  } catch (error) {
    console.warn("Audio playback not supported");
  }
};

/**
 * Show browser notification
 */
export const showNotification = (title, body) => {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(title, { body });
  }
};

/**
 * Request notification permission
 */
export const requestNotificationPermission = () => {
  if ("Notification" in window && Notification.permission === "default") {
    setTimeout(() => {
      Notification.requestPermission();
    }, 3000);
  }
};
