// Meant to be run on https://www.atlassian.com/
// Lines 3 - 9 can be used on atlassian.com when the summit banner is not present. 
// const jiraDirect = document.createElement('a')
// const otherProducts = document.querySelector('div .hero-text a')
// jiraDirect.setAttribute('href','/software/jira/try')
// jiraDirect.setAttribute('class', 'button blue-dark standard button green-solid')
// jiraDirect.textContent = 'Go agile with Jira for free'
// otherProducts.textContent = 'or checkout our other products'
// otherProducts.parentElement.insertBefore(jiraDirect, otherProducts)

// Updated to compensate for the addition of atlassian summit banner
const jiraDirect = document.createElement('a')
const otherProducts = document.querySelector('div .colspan-2 a[href="/try"]')
jiraDirect.setAttribute('href','/software/jira/try')
jiraDirect.setAttribute('class', 'button blue-dark standard button green-solid')
jiraDirect.textContent = 'Go agile with Jira for free'
otherProducts.textContent = 'or checkout our other products'
otherProducts.parentElement.insertBefore(jiraDirect, otherProducts)
