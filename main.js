import data from "./data.json" assert { type: "json" };

const typeCard = document.getElementsByClassName("typecard");
const current = document.getElementsByClassName("currenthours");
const previousDesc = document.getElementsByClassName("prevdesc");

const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

daily.addEventListener("click", dailyStats);
weekly.addEventListener("click", weeklyStats);
monthly.addEventListener("click", monthlyStats);

window.onload = weeklyStats();

function dailyStats() {
  daily.classList.add("active");
  weekly.classList.remove("active");
  weekly.classList.add("link");
  monthly.classList.remove("active");

  typeCard[0].textContent = `${data[0].title}`;
  typeCard[1].textContent = `${data[1].title}`;
  typeCard[2].textContent = `${data[2].title}`;
  typeCard[3].textContent = `${data[3].title}`;
  typeCard[4].textContent = `${data[4].title}`;
  typeCard[5].textContent = `${data[5].title}`;

  current[0].textContent = `${data[0].timeframes.daily.current + "hrs"}`;
  previousDesc[0].textContent = `Yesterday - ${data[0].timeframes.daily.previous}hrs`;
  current[1].textContent = `${data[1].timeframes.daily.current + "hrs"}`;
  previousDesc[1].textContent = `Yesterday - ${data[1].timeframes.daily.previous}hrs`;
  current[2].textContent = `${data[2].timeframes.daily.current + "hrs"}`;
  previousDesc[2].textContent = `Yesterday - ${data[2].timeframes.daily.previous}hrs`;
  current[3].textContent = `${data[3].timeframes.daily.current + "hrs"}`;
  previousDesc[3].textContent = `Yesterday - ${data[3].timeframes.daily.previous}hrs`;
  current[4].textContent = `${data[4].timeframes.daily.current + "hrs"}`;
  previousDesc[4].textContent = `Yesterday - ${data[4].timeframes.daily.previous}hrs`;
  current[5].textContent = `${data[5].timeframes.daily.current + "hrs"}`;
  previousDesc[5].textContent = `Yesterday - ${data[5].timeframes.daily.previous}hrs`;
}

function weeklyStats() {
  weekly.classList.add("active");
  daily.classList.remove("active");
  monthly.classList.remove("active");

  typeCard[0].textContent = `${data[0].title}`;
  typeCard[1].textContent = `${data[1].title}`;
  typeCard[2].textContent = `${data[2].title}`;
  typeCard[3].textContent = `${data[3].title}`;
  typeCard[4].textContent = `${data[4].title}`;
  typeCard[5].textContent = `${data[5].title}`;

  current[0].textContent = `${data[0].timeframes.weekly.current + "hrs"}`;
  previousDesc[0].textContent = `Last Week - ${data[0].timeframes.weekly.previous}hrs`;
  current[1].textContent = `${data[1].timeframes.weekly.current + "hrs"}`;
  previousDesc[1].textContent = `Last Week - ${data[1].timeframes.weekly.previous}hrs`;
  current[2].textContent = `${data[2].timeframes.weekly.current + "hrs"}`;
  previousDesc[2].textContent = `Last Week - ${data[2].timeframes.weekly.previous}hrs`;
  current[3].textContent = `${data[3].timeframes.weekly.current + "hrs"}`;
  previousDesc[3].textContent = `Last Week - ${data[3].timeframes.weekly.previous}hrs`;
  current[4].textContent = `${data[4].timeframes.weekly.current + "hrs"}`;
  previousDesc[4].textContent = `Last Week - ${data[4].timeframes.weekly.previous}hrs`;
  current[5].textContent = `${data[5].timeframes.weekly.current + "hrs"}`;
  previousDesc[5].textContent = `Last Week - ${data[5].timeframes.weekly.previous}hrs`;
}

function monthlyStats() {
  monthly.classList.add("active");
  daily.classList.remove("active");
  weekly.classList.remove("active");

  typeCard[0].textContent = `${data[0].title}`;
  typeCard[1].textContent = `${data[1].title}`;
  typeCard[2].textContent = `${data[2].title}`;
  typeCard[3].textContent = `${data[3].title}`;
  typeCard[4].textContent = `${data[4].title}`;
  typeCard[5].textContent = `${data[5].title}`;

  current[0].textContent = `${data[0].timeframes.monthly.current + "hrs"}`;
  previousDesc[0].textContent = `Last Month - ${data[0].timeframes.monthly.previous}hrs`;
  current[1].textContent = `${data[1].timeframes.monthly.current + "hrs"}`;
  previousDesc[1].textContent = `Last Month - ${data[1].timeframes.monthly.previous}hrs`;
  current[2].textContent = `${data[2].timeframes.monthly.current + "hrs"}`;
  previousDesc[2].textContent = `Last Month - ${data[2].timeframes.monthly.previous}hrs`;
  current[3].textContent = `${data[3].timeframes.monthly.current + "hrs"}`;
  previousDesc[3].textContent = `Last Month - ${data[3].timeframes.monthly.previous}hrs`;
  current[4].textContent = `${data[4].timeframes.monthly.current + "hrs"}`;
  previousDesc[4].textContent = `Last Month - ${data[4].timeframes.monthly.previous}hrs`;
  current[5].textContent = `${data[5].timeframes.monthly.current + "hrs"}`;
  previousDesc[5].textContent = `Last Month - ${data[5].timeframes.monthly.previous}hrs`;
}
