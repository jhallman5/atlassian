// Remove the last name div and wrapper
document.querySelector('.half.right').remove()

// Update the firstname div to represent a full name
const FullNameInput = document.getElementById('firstName')
FullNameInput.setAttribute('placeholder', 'Full name')
FullNameInput.setAttribute('ng-pattern', '[a-zA-Z]+\s[a-zA-Z]+')
FullNameInput.setAttribute('pattern', '[a-zA-Z]+\s[a-zA-Z]+')
FullNameInput.classList.remove('.half')
/* The half class defined width as 186px, the removed last name
div had a left margin of 10px. 186 * 2 + 10 = 382 */
FullNameInput.style.width = '382px'

FullNameInput.addEventListener('blur', (event) => {
  if(!RegExp(event.target.pattern).test(event.target.value)){
    event.target.style.border = '2px solid #d04437'
    console.log('set')
  }
})

const fullNameErrorDiv = document.querySelector('p[ng-show="signupForm.firstName.$invalid"] span')
fullNameErrorDiv.innerHTML = 'Please enter your full name spearated by a space'
console.log(fullNameErrorDiv)
// const fullNameErrorDiv = document.createElement('div')
// fullNameErrorDiv.style.backgroundColor = 'blue'
// fullNameErrorDiv.style.height = '100px'
// fullNameErrorDiv.style.width = '100px'
