function updateTime() {
  let now = new Date();

  let hours = now.getUTCHours();
  let minutes = now.getUTCMinutes();
  let currentTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}`; //padStart is to ensure hours and minutes always have 2 values.
  console.log(currentTime);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let day = now.getDay();
  let dayOfWeek = days[day];
  console.log(dayOfWeek);

  document.getElementById("day").innerHTML = dayOfWeek;
  document.getElementById("time").innerHTML = currentTime;
}

updateTime();

setInterval(updateTime, 1000);
