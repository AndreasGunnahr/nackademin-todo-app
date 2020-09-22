[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License: MIT][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/andreasgunnahr/nackademin-todo-app/">
    <img src="https://github.com/AndreasGunnahr/nackademin-todo-app/blob/master/client/src/assets/logo.png" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">Todo application</h3>

  <p align="center">
    An awesome todo application with a Trello styled twist
    <br />
    <a href="https://nackademin-todo-app.herokuapp.com/api-docs"><strong>Explore the REST API docs »</strong></a>
    <br />
    <br />
    <a href="https://nackademin-todo-app.herokuapp.com/">View application</a>
    ·
    <a href="https://github.com/andreasgunnahr/nackademin-todo-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/andreasgunnahr/nackademin-todo-app/issues">Request Feature</a>
  </p>
</p>

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

The project involved building a Restful API with MVC structure for a todo application. It also included building different types of middlewares for authentication (JWT) and authorization.

Also chose to write a [Swagger documentation](https://nackademin-todo-app.herokuapp.com/api-docs) in case anyone would like to build their own front-end application with my todo API.

Also expand the task with a react frontend application. The design is reminiscent of the trello.com system to create and follow its various tasks, however as a lightweight variant.

A list of used resources that I used during the project is listed in the acknowledgements.

### Built With

Backend - API

- [NodeJS](www.nodejs.org)
- [Express](www.expressjs.com)
- [MongoDB Atlas](www.mongodb.com)
- [MongoDB In-memory Server](https://www.npmjs.com/package/mongodb-memory-server)

- [Mongoose](www.mongoosejs.com)
- [JWT](www.jwt.io)

Test - Unit/Integration

- [Mocha](wwww.mochajs.org)
- [Chai](www.chaijs.com)

Documentation - API

- [Swagger](wwww.swagger.io)

Deployment

- [Heroku](www.heroku.com)

Frontend

- [React](wwww.reactjs.org)
- [Styled components](www.styled-components.com)

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- npm

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/andreasgunnahr/nackademin-todo-app/
```

3. Install NPM packages for our API

```sh
npm install
```

4. Create a .env file inside root folder with following:

```JS
MONGO_URI = <Your MongoDb Atlas cluster connection string>
PORT = 5000
TOKEN_SECTET = <Your JWT token secret>
```

5. Cd into client folder & install NPM packages for our react client

```sh
npm install
```

6. Create a .env file inside client folder with following (Absolute path support):

```JS
NODE_PATH = src/
```

7. Open on terminal inside root folder of the project and run:

```sh
npm run dev
```

8. Open on another terminal inside client folder and run:

```sh
npm start
```

9. Have fun with the project!

## Usage

You can inside the application create your own boards and track your tasks. The application is perfect for someone who want to sort their task to specific area/board and also track the progress.

The backend API can also be re-used for other application if someone wants to build their own frontend.

For more information I recommend to check out our API [Swagger documentation](https://nackademin-todo-app.herokuapp.com/api-docs)\_

## Roadmap

Future ideas

- Let a user invite another user to a board
- Display which user is connected to the board

If you have any ideas feel free to [propose a feature](https://github.com/andreasgunnahr/nackademin-todo-app/issues)

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Andreas Gunnahr - [LinkedIn](https://www.linkedin.com/in/andreas-gunnahr-8310a8129/) - Andreas.gunnahr@hotmail.com

Project Link: [https://github.com/andreasgunnahr/nackademin-todo-app/](https://github.com/andreasgunnahr/nackademin-todo-app/)

## Acknowledgements

- [Illustrations](wwww.drawkit.io)
- [Img Shields](https://shields.io)
- [Font Awesome](https://fontawesome.com)

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/AndreasGunnahr/nackademin-todo-app.svg?style=flat-square
[contributors-url]: https://github.com/andreasgunnahr/nackademin-todo-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AndreasGunnahr/nackademin-todo-app.svg?style=flat-square
[forks-url]: https://github.com/andreasgunnahr/nackademin-todo-app/network/members
[stars-shield]: https://img.shields.io/github/stars/AndreasGunnahr/nackademin-todo-app.svg?style=flat-square
[stars-url]: https://github.com/andreasgunnahr/nackademin-todo-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/AndreasGunnahr/nackademin-todo-app.svg?style=flat-square
[issues-url]: https://github.com/andreasgunnahr/nackademin-todo-app/issues
[license-shield]: https://img.shields.io/badge/License-MIT-yellow.svg
[license-url]: https://opensource.org/licenses/MIT
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/andreas-gunnahr-8310a8129

<!-- [product-screenshot]: images/screenshot.png -->
