// Get the Elements
const input_container = document.getElementsByClassName("input-container")[0]
const form = document.getElementsByTagName("form")[0]
const user_input = document.getElementsByClassName("input")[0]
const clock = document.getElementsByClassName("clock")[0]

// Add Event Listener
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    input_container.style.display = "none"
    clock.style.display = "flex"

    const input = user_input.value;
    const input_milli = input * 60 * 1000;
    const start = Date.now()

    setInterval(()=>{

        const elapsed = Date.now() - start
        const remaining = input_milli - elapsed
        
        if (remaining <= 0){
            clearInterval()
            clock.textContent == "00:00"
            let mySound = new Audio('alarm.wav')
            mySound.play()
            return;
        }

        const remainingMinutes = Math.floor(remaining / 60000);
        const remainingSeconds = Math.floor((remaining % 60000) / 1000);

        clock.textContent = 
                    `${String(remainingMinutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    })

    
})