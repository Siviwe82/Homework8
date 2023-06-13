function test(response) {
  let location = document.querySelector(".location");
  let dscrp1 = document.querySelector(".dscrp1");
  let icon1 = document.querySelector("#icon1");
  let iconUrl1 = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[0].condition.icon}.png`;
  let iconUrl2 = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[1].condition.icon}.png`;
  let iconUrl3 = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[2].condition.icon}.png`;
  let iconUrl4 = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[3].condition.icon}.png`;
  let iconUrl5 = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[4].condition.icon}.png`;
  let iconUrl6 = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[5].condition.icon}.png`;
  let time1 = document.querySelector(".time1");
  let date = document.querySelector(".date");
  let temp1 = document.querySelector(".temp1");
  let temp2 = document.querySelector(".temp2");
  let temp3 = document.querySelector(".temp3");
  let temp4 = document.querySelector(".temp4");
  let temp5 = document.querySelector(".temp5");
  let temp6 = document.querySelector(".temp6");
  let icon2 = document.querySelector("#icon2");
  let icon3 = document.querySelector("#icon3");
  let icon4 = document.querySelector("#icon4");
  let icon5 = document.querySelector("#icon5");
  let icon6 = document.querySelector("#icon6");
  let day1 = document.querySelector(".day1");
  let day2 = document.querySelector(".day2");
  let day3 = document.querySelector(".day3");
  let day4 = document.querySelector(".day4");
  let day5 = document.querySelector(".day5");

  let getDay1 = new Date(response.data.daily[0].time * 1000);
  let getDay2 = new Date(response.data.daily[1].time * 1000);
  let getDay3 = new Date(response.data.daily[2].time * 1000);
  let getDay4 = new Date(response.data.daily[3].time * 1000);
  let getDay5 = new Date(response.data.daily[4].time * 1000);
  let getDay6 = new Date(response.data.daily[5].time * 1000);

   const today = new Date();
  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  location.innerHTML = response.data.city;
  time1.innerHTML = `${today.getHours()}:${today.getMinutes()}, `;
  date.innerHTML = `${days[getDay1.getDay()]} ${today.getDate()} ${
    months[today.getMonth()]
  }`;
  