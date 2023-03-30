# Socialite

## Purpose

An API for a social network web application that uses a NoSQL database where users can share their thoughts, react to friends' thoughts, and create a friend list.

When I am presented a social network API, I can enter in a command to initiate the application in the terminal, starting the server and Mongoose models are synced to the MongoDB database. When the API GET routes for users and thoughts are opened in Insomnia, then the data for each of these routes is displayed in formmated JSON. When the API POST, PUT, and DELETE routes are tested in Insomnia, then the user is able to create, update, and delete users and thoughts in the database successfully. When the API POST and DELETE routes are tested in Insomnia for Reactions and Friends, then the user isi able to successfully create and delete reactions to thoughts and add and remove friends to a users's friend list. This was achieved by using express.js, MongoDB, and the npm Mongoose. 

## Examples

User, Thought, and Reaction Models:

![Screen Shot 2023-03-30 at 3 00 21 PM](https://user-images.githubusercontent.com/116764540/228937562-964f0742-2e48-4aae-8125-a69bdbe8b648.png)

![Screen Shot 2023-03-30 at 3 01 36 PM](https://user-images.githubusercontent.com/116764540/228937814-38bbed17-173e-4b78-81d6-dfc4437d4ddd.png)

![Screen Shot 2023-03-30 at 3 02 05 PM](https://user-images.githubusercontent.com/116764540/228937902-a782d96b-718a-48f4-9b8c-dc1ccd26228b.png)

User and Thought Routes:

![Screen Shot 2023-03-30 at 3 02 46 PM](https://user-images.githubusercontent.com/116764540/228938049-103f2d3b-fa63-4d4e-9e4e-b9e5af5bb8d3.png)

![Screen Shot 2023-03-30 at 3 03 06 PM](https://user-images.githubusercontent.com/116764540/228938108-ec57b1b0-1bf3-4fee-ac24-c472f8aff6a2.png)

User and Thought Controllers:

![Screen Shot 2023-03-30 at 3 03 43 PM](https://user-images.githubusercontent.com/116764540/228938207-049ab5e9-00fd-4b2d-a3c9-e3d6ccde5523.png)

![Screen Shot 2023-03-30 at 3 04 26 PM](https://user-images.githubusercontent.com/116764540/228938355-914abfcc-3a36-45b5-894e-30cf82c09217.png)

Create User in Insomnia:

![Screen Shot 2023-03-30 at 3 07 10 PM](https://user-images.githubusercontent.com/116764540/228938926-db004b5b-3061-4b7a-b8c7-a39aa4d59256.png)


## License

MIT License

Copyright (c) 2022 Kelley Flinn

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

## Technologies Used

Language: JavaScript

NPM: Mongoose

NPM: Express

MongoDB

## Link to Video Demo

https://drive.google.com/file/d/14dGXADZbB-xehlBd3Kj-cW9K8p4744lS/view
