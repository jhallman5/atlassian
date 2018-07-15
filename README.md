# Atlassian

## Prancing Unicorn

### Spec:
Your task is make an easter egg, (https://en.wikipedia.org/wiki/Easter_egg_(media)#Software) on our www.atlassian.com homepage.  When a visitor presses the “u” key on their keyboard an image of a unicorn should dance across the screen from left to right.  Use your favorite unicorn image (from the internet, don’t send us the unicorn image), and make sure you clean up the DOM after unicorn has left the screen.  
You should send us your Javascript code in text.  We will take your text of your code and paste it into the Chrome Javascript Developer Console (https://developers.google.com/web/tools/chrome-devtools/console/ ) and hit enter.  

### Improvements:
  * Performance issues occur when theres a lot of unicorn images on screen.
  * Might want to use an object to set styles
  * Search page for other z-index values and ensure mine is on top.
  * General clean up

## Form Field Fandango

### Spec:
Go to https://www.atlassian.com/ondemand/signup/form?product=jira-software.ondemand. There is a “Full name” label with 2 input fields “First name” and “Last name”. Your hypothesis as a Growth hacker is that combining those 2 fields into a single “Full name” input field might reduce the number of fields that a user has to input, making the form easier to use and thereby increase signups.

Create a script (runnable in the browser console) that can “spoof” the proposed signup form above that can prove or disprove your hypothesis. Feel free to share your own opinion as to whether this would be a valuable test to run and explain why or why not.

### TODOS
  * Determine which version increases sign ups
  * Write my opinion on this test

### Improvements
  * Instead of modifying the first name div, a brand new div should be created. Perhaps out of scope for this assignment, but would likely do this in production.
