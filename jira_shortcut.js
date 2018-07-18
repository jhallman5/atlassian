// Meant to be run on https://www.atlassian.com/
// Original submission with no summit banner
// const otherProducts = document.querySelector('div .hero-text a')\

// Updated to compensate for the addition of atlassian summit banner
const otherProducts = document.querySelector('div .colspan-2 a[href="/try"]')
const jiraDirect = document.createElement('a')
jiraDirect.setAttribute('href','/software/jira/try')
jiraDirect.setAttribute('class', 'button blue-dark standard button green-solid')
jiraDirect.textContent = 'Go agile with Jira for free'
otherProducts.textContent = 'Checkout our other products'
otherProducts.parentElement.insertBefore(jiraDirect, otherProducts)
