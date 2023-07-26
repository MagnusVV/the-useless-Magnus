![Jessica](https://media.giphy.com/media/B1bMjDNIwe4T09fNai/giphy.gif)

The project for the course in JS. The task was to create a webpage without any inherent purpose, except for the joy of visiting it and interact with it.

# Is it useless?

It's pretty useless. It's got some text, two different kinds of event listeners, one small object, some svg's and some sound effects.
Oh, and there are a couple of for loops as well!

https://the-useless-magnus.vercel.app/

# Installation

Everything, including images and sound effects, are sorted in a system below the root. It's pretty strightforward to deploy it Netlify, Vercel or such, or you can just use Live Server in VsCode to run it local.

# Code Review 

1. `script.js:15` - Your paragraph buttons could use a pointer cursor (css) to indicate that they are clickable. I would also suggest that you add a hover effect to them, to make them more interactive and accessible.
2. `script.js:51-79` - You could use a switch statement here instead of a bunch of if statements. It would make your code more readable and easier to maintain. You could also use a forEach loop to iterate over the array of buttons. This would make your code more DRY.
3. `global.css:41` - This variable name doesn't match the naming convention of the rest of your variables. This name uses underscores, while the rest of your variables use hyphens. This is a small thing, but it's important to be consistent with your naming conventions.
4. `script.js:186` - There is a console.log here that should be removed before you deploy your code. Console.logs are only for debugging and should be removed before you deploy your code.
5. `style.css` - In this file you repeat the same padding and margin rules for the same elements multiple times. You could use a class to group these rules together and apply the class to the elements that need them. This would make your code more DRY. You could also use a class to group the rules that are repeated for the same elements in the `global.css` file. Or you could use variables to not repeat yourself. This is a small thing, but it could make your code more readable and easier to maintain. Especially for bigger projects in the future. So it's good to get into the habit of doing this now. Small things like this can make a big difference in the long run. I found these articles useful about DRY code: https://medium.com/circuits-technical-talks/dry-css-9cbe3215af3d and https://meiert.com/en/blog/dry-css/.

# Testers

Tested by the following people:

1. Johanna Pihl
2. Axel Enghamre
