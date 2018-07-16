// Remove the last name div and wrapper
document.querySelector('.half.right').remove()

// Update the firstname div to represent a full name
const FullNameInput = document.getElementById('firstName')
FullNameInput.setAttribute('placeholder', 'Full name')
// TODO Form Validation!
FullNameInput.setAttribute('ng-pattern', '[a-zA-Z]+ +[a-zA-Z]+')
FullNameInput.setAttribute('pattern', '[a-zA-Z]+ +[a-zA-Z]+')
/* The half class defined width as 186px, the removed last name
div had a left margin of 10px. 186 * 2 + 10 = 382 */
FullNameInput.style.width = '382px'

FullNameInput.addEventListener('blur', (event) => {
  const fullNameDiv = document.querySelector('p[ng-show="signupForm.firstName.$invalid"]')
  if(!RegExp(event.target.pattern).test(event.target.value)){
    event.target.style.border = '2px solid #d04437'
    fullNameDiv.classList.remove('ng-hide')
  }else {
    fullNameDiv.classList.add('ng-hide')
    event.target.style.border = null
  }
})

//Updates Error Message
const fullNameErrorSpan = document.querySelector('p[ng-show="signupForm.firstName.$invalid"] span')
fullNameErrorSpan.innerHTML = 'Please enter your full name spearated by a space'
