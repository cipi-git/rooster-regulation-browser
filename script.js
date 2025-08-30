// Rooster object (browser version)
const Rooster = {
  announceDawn() {
    return "cock-a-doodle-doo!";
  },

  timeAtDawn(hour) {
    if (hour < 0 || hour > 23 || !Number.isInteger(hour)) {
      return "⚠️ Invalid hour. Must be between 0–23.";
    }
    return `Hour is ${hour}`;
  }
};

// DOM interaction
const crowBtn = document.getElementById("crowBtn");
const roosterCall = document.getElementById("roosterCall");
const checkHourBtn = document.getElementById("checkHourBtn");
const hourInput = document.getElementById("hourInput");
const hourResult = document.getElementById("hourResult");

crowBtn.addEventListener("click", () => {
  roosterCall.textContent = Rooster.announceDawn();
});

checkHourBtn.addEventListener("click", () => {
  const hour = parseInt(hourInput.value);
  hourResult.textContent = Rooster.timeAtDawn(hour);
});
