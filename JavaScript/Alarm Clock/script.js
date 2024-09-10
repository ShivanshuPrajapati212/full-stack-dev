//  QuerySelectors
let timer_container = document.getElementsByClassName("timer")[0];
let form = document.getElementsByTagName("form")[0];
let user_input = document.getElementById("user_input");
let current_container = document.getElementsByClassName("current-time")[0];

// Event Listeners
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const time = user_input.value;
  timer_container.innerHTML = "Timer Started"
  setTimeout(() => {
    var audio = new Audio("alarm.wav");
    audio.play();
    
  }, user_input.value * 60000);
});

(async () => {
  setInterval(() => {
    let current_hours = new Date().getHours();
    let current_mins = new Date().getMinutes();
    let current_secs = new Date().getSeconds();
    current_container.innerHTML = `${current_hours}:${current_mins}:${current_secs}`;
  }, 1000);
  
  
})();
