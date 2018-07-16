// Remove the last name div and wrapper
document.querySelector('.half.right').remove()

// Update the firstname div to represent a full name
const FullNameInput = document.getElementById('firstName')
FullNameInput.setAttribute('placeholder', 'Full name')
FullNameInput.setAttribute('required pattern', '[a-zA-Z]+\s[a-zA-Z]+')
FullNameInput.classList.remove('.half')
/* The half class defined width as 186px, the removed last name
div had a left margin of 10px. 186 * 2 + 10 = 382 */
FullNameInput.style.width = '382px'

FullNameInput.addEventListener('blur', (event) => {
  if(!RegExp(event.target.pattern).test(event.target.value)){
    
  }
})
