# NoSQL Social Network API

## Description

This project is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. The criteria for this project were as follows: 

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation

N/A, this program is ran within the integrated terminal inside the VScode program. Routes are tested using the Insomnia development platform.

Source code for the application can be found here: [NoSQL-Social-Network-API code](https://github.com/IVignollesJeong/NoSQL-Social-Network-API/blob/master/server.js).

## Usage



((VIDEO))





The application functions as follows:

- Upon downloading the code and launching VScode, the user can initialize the program by running the command "npm install" in the VScode terminal, followed by starting the program with the command "npm run start".
- At this point, the application will be running live on a local server.
- Users are encouraged to use API testing software such as Insomnia to test the functionality of this API.

## Credits

[Mongoose NPM package](https://www.npmjs.com/package/mongoose) </br>
[Express.js NPM package](https://www.npmjs.com/package/express) </br>
[Insomnia API testing platform](https://insomnia.rest/) </br>
[StackOverflow date/time help](https://stackoverflow.com/questions/10211145/getting-current-date-and-time-in-javascript) </br>
OSU Bootcamp Module 18</br>

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) </br>

MIT License

Copyright (c) [2023] [Ian Vignolles-Jeong]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

