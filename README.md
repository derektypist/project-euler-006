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

Enter a whole number between 1 and 200 in the input field and click on the Submit Button.  You will see the number you have entered as well as the difference between the sum of the squares up to and including that number and the square of the sum, unless you have made an invalid input.  For example, the number entered was 3 and the difference is 22.

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