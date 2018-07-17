// This script is meant to be run on https://www.atlassian.com/ondemand/signup/form?product=jira-software.ondemand
// Removes the lastName div and wrapper
document.querySelector('.half.right').remove()

// Updates the firstName div to represent a full name
// The half class defined width as 186px, the removed last name div had a left margin of 10px. 186 * 2 + 10 = 382
const FullNameInput = document.getElementById('firstName')
FullNameInput.setAttribute('id', 'fullName')
FullNameInput.setAttribute('placeholder', 'Full name')
FullNameInput.setAttribute('ng-pattern', '[a-zA-Z]+ +[a-zA-Z]+')
FullNameInput.style.width = '382px'

// Checks value against regex pattern and emluates a similar error to the other fields.
FullNameInput.addEventListener('blur', (event) => {
  const ErrorWrapper = document.querySelector('p[ng-show="signupForm.firstName.$invalid"]')
  if(!RegExp(event.target.getAttribute('ng-pattern')).test(event.target.value)){
    event.target.style.border = '2px solid #d04437'
    ErrorWrapper.classList.remove('ng-hide')
    event.target.classList.add('ng-invalid')

  }else {
    event.target.style.border = null
    ErrorWrapper.classList.add('ng-hide')
    event.target.classList.remove('ng-invalid')
  }
})

// Updates Error Message
const fullNameErrorSpan = document.querySelector('p[ng-show="signupForm.firstName.$invalid"] span')
fullNameErrorSpan.textContent = 'Please enter your full name spearated by a space'

const buttonY = document.querySelector('.wac-button')
buttonY.addEventListener('click', (event) => {
  event.preventDefault()
  alert('Real form validation probably required.')
})
buttonY.removeAttribute('disabled')

document.querySelectorAll('.cloud-signup-col2 input').forEach(input => {
  if(input.getAttribute('class').split(' ').includes('ng-invalid')){
    console.log('Invalid ')
  }
})
