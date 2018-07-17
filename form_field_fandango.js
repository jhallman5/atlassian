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
  if(RegExp(event.target.getAttribute('ng-pattern')).test(event.target.value)){
    event.target.style.border = null
    event.target.classList.remove('ng-invalid')
    ErrorWrapper.classList.add('ng-hide')
  }else{
    event.target.style.border = '2px solid #d04437'
    event.target.classList.add('ng-invalid')
    ErrorWrapper.classList.remove('ng-hide')
  }
})

// Updates fullName Error Message
const fullNameErrorSpan = document.querySelector('p[ng-show="signupForm.firstName.$invalid"] span')
fullNameErrorSpan.textContent = 'Please enter your full name separated by a space'

// Prevents default form submission
const submitButton = document.querySelector('.wac-button')
submitButton.addEventListener('click', (event) => {
  event.preventDefault()
  alert('Real form validation probably required.')
})

// Checks validity of form by checking for value and ng-invalid class
// Removes / Applies disabled attr on submitButton
const checkFormValidity = () => {
  let validity = true
  document.querySelectorAll('.cloud-signup-col2 input').forEach(input => {
    if(input.getAttribute('type') == 'checkbox') return
    const invalid = input.getAttribute('class').split(' ').includes('ng-invalid')
    if(input.value.length == 0) validity = false
    if(invalid) validity = false
  })
  if(validity){
    submitButton.removeAttribute('disabled')
  }else{
    submitButton.setAttribute('disabled','disabled')
  }
}

// A sleep timer is needed for form validation
const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// Used Event capturing due to using a blur event handler
document.querySelector('.cloud-signup-col2 section').addEventListener('blur', event => {
  sleep(50).then(() => {
    checkFormValidity()
  });
},true)
