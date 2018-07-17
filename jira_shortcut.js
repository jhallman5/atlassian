// Meant to be run on https://www.atlassian.com/
const jiraDirect = document.createElement('a')
const otherProducts = document.querySelector('div .hero-text a')
const parentHero = otherProducts.parentElement
jiraDirect.setAttribute('href','/software/jira/try')
jiraDirect.setAttribute('class', 'button blue-dark standard button green-solid')
jiraDirect.textContent = 'Go agile with Jira for free'
otherProducts.textContent = 'or checkout our other products'
parentHero.insertBefore(jiraDirect, otherProducts)
