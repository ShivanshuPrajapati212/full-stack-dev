const timezone = document.getElementsByClassName("timezone")[0];
const time = document.getElementsByClassName("time")[0];
const date = document.getElementsByClassName("date")[0];




date.innerHTML = dayjs().format('dddd, D MMMM, YYYY')

setInterval(() => {
  time.innerHTML = `${dayjs().hour()}:${dayjs().minute()}:${dayjs().second()}`;
}, 1000);
