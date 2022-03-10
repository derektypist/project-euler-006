# Project Euler 006 - Sum Square Difference

The sum of squares of the first 10 natural numbers is:

    `(1*1) + (2*2) + ... + (10*10) = 385`

The square of the sum of the first 10 natural numbers is:

    `(1+2+...+10) * (1+2+...+10) = 55*55 = 3025`

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is `3025 - 385 = 2640`.

The aim is to find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

Information at [Project Euler 006](https://projecteuler.net/problem=6)

## UX

**Getting Started**

Enter a whole number between 1 and 200 in the input field and click on the Submit Button.  You will see the number you have entered as well as the difference between the sum of the squares up to and including that number and the square of the sum, unless you have made an invalid input.  For example, the number entered was 3 and the difference is 22.  Click on the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

    - Not enter anything in the input field
    - Enter a number less than 1 or greater than 200
    - Entering text that is not a number (e.g. bus)
    - Entering a number, but it is not an integer

As a user, I expect the function `sumSquareDifference(10)` to return a number.

As a user, I expect the function `sumSquareDifference(10)` to return 2640.

As a user, I expect the function `sumSquareDifference(20)` to return 41230.

As a user, I expect the function `sumSquareDifference(100)` to return 25164150.

**Information Architecture**

The function `sumSquareDifference(n)` returns a number (integer), where `n` is a number between 1 and 200.

## Features

Allows the user to enter a number as well as getting the difference between the sum of the squares of the first natural numbers up to and including that number and the square of the sum.  Peforms checks on valid user input.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Google Fonts and Bootstrap 5.1.3.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-006) at the main branch.

## Credits

### Content

Written by me.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)