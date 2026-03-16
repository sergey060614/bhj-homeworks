const totalDurationInSeconds = 59;
const timerElement = document.getElementById("timer");
function convertSecondsToHMS(timeInSeconds) {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startCountdown(duration) {
  let remainingTime = duration;
  const intervalId = setInterval(() => {
    if (remainingTime >= 0) {
      timerElement.textContent = convertSecondsToHMS(remainingTime--);
    } else {
      clearInterval(intervalId);
      alert("Вы победили в конкурсе!");
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  startCountdown(totalDurationInSeconds);
});
