// How Event Delegation works

// Selecting parent element

const evenDelegation = document.querySelector('.eventDelegation')

const title = document.querySelector('.title')
// evenDelegation.style.background = 'red'

evenDelegation.addEventListener('click', (event)=> {
    if(event.target.tagName === "BUTTON"){
        console.log("Button Clicked")
        title.textContent = "This is event delegation"
        title.style.color = "red"
    }
})
// console.log(evenDelegation)