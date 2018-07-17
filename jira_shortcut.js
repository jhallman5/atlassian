// Meant to be run on https://www.atlassian.com/
const jiraDirect = document.createElement('a')
const otherProducts = document.querySelector('div .hero-text a')
jiraDirect.setAttribute('href','/software/jira/try')
jiraDirect.setAttribute('class', 'button blue-dark standard button green-solid')
jiraDirect.textContent = 'Go agile with Jira for free'
otherProducts.textContent = 'or checkout our other products'
otherProducts.parentElement.insertBefore(jiraDirect, otherProducts)
