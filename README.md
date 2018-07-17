# Atlassian

## Prancing Unicorn

### Spec:
Your task is make an easter egg, (https://en.wikipedia.org/wiki/Easter_egg_(media)#Software) on our www.atlassian.com homepage.  When a visitor presses the “u” key on their keyboard an image of a unicorn should dance across the screen from left to right.  Use your favorite unicorn image (from the internet, don’t send us the unicorn image), and make sure you clean up the DOM after unicorn has left the screen.  
You should send us your Javascript code in text.  We will take your text of your code and paste it into the Chrome Javascript Developer Console (https://developers.google.com/web/tools/chrome-devtools/console/ ) and hit enter.  

### Improvements:
  * Search page for other z-index values and to ensure mine is higher.

## Form Field Fandango

### Spec:
Go to https://www.atlassian.com/ondemand/signup/form?product=jira-software.ondemand. There is a “Full name” label with 2 input fields “First name” and “Last name”. Your hypothesis as a Growth hacker is that combining those 2 fields into a single “Full name” input field might reduce the number of fields that a user has to input, making the form easier to use and thereby increase signups.

Create a script (runnable in the browser console) that can “spoof” the proposed signup form above that can prove or disprove your hypothesis. Feel free to share your own opinion as to whether this would be a valuable test to run and explain why or why not.


### Improvements
  * Instead of modifying the first name div, a brand new div should be created. Perhaps out of scope for this assignment, but I would likely do this in production.
  * Add a green checkmark to the full name input.

### My Opinion on Form Field Fandango
  I actually think our time could be better spent on other projects for several reasons.
  1. Many browsers have an auto fill feature that is used to fill out similar forms. This feature could result in a  negative experience as the it could inaccurately fill in information making the user have to make corrections.

  2. There are only 5 fields for the user to currently fill out. If we had the user fill out 10,000 fields then we should definitely start making an effort to remove some, but in the current state I do not believe this would be an impactful change.

  3. We likely already made the sale prior to this point as they have already seen the pricing and chosen an option. Our main goals on this page are to maintain ease and appeal. Although this change can potentially make signing up easier. I think efforts are better spent increasing appeal by making other changes.

Of course these are my opinions and if the team decides to proceed with this test we will still gather useful data. We don't *really* know if this will have an effect on user signups until we conduct the test. I  would just likely advocate for another test of potentially higher value.

## Open-ended Experimentation

### Spec:
Check out the flow to sign up for JIRA Software from atlassian.com. Think of some ideas on how you could improve the signup flow and come up with one experiment idea. Define the hypothesis, the experiment variation, and what goals/metrics you would use to measure the experiment. Provide the code that we could run in the console to see your experiment
