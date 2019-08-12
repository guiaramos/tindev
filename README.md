<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]]()
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div style="text-align:center">
<p>

  <h3 align="center">Tindev</h3>
  <img src="frontend/src/assets/logo-tindev.svg" alt="Tindev">
  <p align="center">
    A social network for developers.
    <br />
    <a href="https://github.com/guiaramos/tindev"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/guiaramos/tindev">View Demo</a>
    ·
    <a href="https://github.com/guiaramos/tindev/issues">Report Bug</a>
    ·
    <a href="https://github.com/guiaramos/tindev/issues">Request Feature</a>
  </p>
</p>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

The social network made for all developers. This project was built for the Omnistack 8.0 of [Rocketseat](https://rocketseat.com.br/). The project is focused on the MERN stack, and the challenge is to build a web app and mobile app.

The app has features such as live match with [Socket.io][websocket-url]. Also is available on Android and iOS due to [React Native][reactnative-url].

### Built With

This is the list of the tech stack:

[![React Native][reactnative-shield]][reactnative-url]

[![React][react-shield]][react-url]
[![WebSocket.io][websocket-shield]][websocket-url]
[![JSX][jsx-shield]][jsx-url]

[![MongoDB Atlas][mongodb-shield]][mongodb-url]
[![Express][express-shield]][express-url]
[![Nodemon][nodemon-shield]][nodemon-url]
[![Insomnia][insomnia-shield]][insomnia-url]
[![Mongoose][mongoose-shield]][mongoose-url]
[![Cors][cors-shield]][cors-url]

<!-- GETTING STARTED -->

## Getting Started

To getting start you need a GitHub account and input it on log-ing page.

### Prerequisites

This is the prerequisites to run the project locally:

- npm

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo

```sh
git clone https://github.com/guiaramos/tindev.git
```

2. Install NPM packages

```sh
npm install
```

<!-- USAGE EXAMPLES -->

## Usage

This app is can be used similiar as Tinder, where you can like or dislike the other devs and receive a Match information.

<!-- ROADMAP -->

## Roadmap

Backend:
The first step of this project, the server uses [Express][express-url] for the connection with the apps and [Nodemon][nodemon-url] to automate the refresher while changes occur.

Server creation:
The first API was created to create de user database, at this step, the [Insomnia][insomnia-url] desk app took place to help to debug the API. After some tests, I finally reached out a good model for connecting the with the [MongoDB Atlas][mongodb-url]. Then, thanks to [Mongoose][mongoose-url] that helped to keep the communication with server simple, I created the structure for the backend, after some researches, being segregated in: model, controllers, and view. At this moment, I also realized that the server.js was getting messy, therefore, I segregated the "routes" in another file.

Users table:
Now, with the server settings ready, I created the first model that keeps the user's registration. The idea is to use the GitHub API to get the information from the users, once the user has to have a GitHub account. The Schema was set as name, user, bio and avatar.
After some research, I created then the API connection inside the controller using [axios][axios-url] module to help execute the following:

1. gets the user name from the app API.
2. posts the user name on the GitHub API.
3. saves the necessary information on a specific variable.
4. posts variable on the database constructor.

Also, after some tests, I have implemented and if conditions to avoid creating the same user on the table.

Likes and Dislikes:
I created 2 fields on each user registration where I can add the MongoDB ID of each user that liked or disliked. On this way, I also created 3 new API methods to post the like and dislikes and also to get the users who have not interacted yet.

Also, after some research, I figured out that MongoDB could block access to React, therefore I have connected the module to allow this connection

Frontend
Webapp:
With [React][react-url] I start the web app frontend and UI development.

The login page was very simple and easy to develop, as soon as the user inserts the GitHub username to log in the connection with the API for the database starts, again with [axios][axios-url], it registers the user/or retrieve the info of the existent user. I decided to create a separated file on services folder for the main API address and another for the routes.

The main page is loaded after the user logs in, I created the styles with a grid of 3 per row for the cards with the picture, name, bio, and button for like or dislike.
At this moment, I had to use the new APIs from [React][react-url]: useEffect and useState to handle the creation of the card and reload of the card list.

Mobile:
Developed with React-Native, the app has the similarities of the web app. there are some changes on the scripts for like and dislike in reason to adapt for [JavaFX][javafx-url]. Tindev is available on Android and iOS.

Live Match:
By the end of the project, I added the live feature of the match, using [WebSocket.io][websocket-url] when two Dev liked each other.

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->

## Contact

[![Gui][gui-shield]][gui-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [OmniStack 8.0](https://rocketseat.com.br/week-8/inscricao)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[mongodb-shield]: https://img.shields.io/badge/MongoDB-database-red.svg?logo=MongoDB
[mongodb-url]: https://www.mongodb.com/what-is-mongodb
[express-shield]: https://img.shields.io/badge/Express-framework-red.svg?logo=JavaScript
[express-url]: https://expressjs.com/
[nodemon-shield]: https://img.shields.io/badge/Nodemon-auto--reload-red.svg?logo=Nodemon
[nodemon-url]: https://nodemon.io/
[insomnia-shield]: https://img.shields.io/badge/Insomnia-API--debug-red.svg?logo=Apple
[insomnia-url]: https://insomnia.rest/
[mongoose-shield]: https://img.shields.io/badge/Mongoose-Object--Modeling-red.svg?logo=MongoDB
[mongoose-url]: https://mongoosejs.com/
[react-shield]: https://img.shields.io/badge/React.js-front--end-blue.svg?logo=React
[react-url]: https://reactjs.org/
[cors-shield]: https://img.shields.io/badge/CORS-auto--reload-red.svg?logo=Node.js
[cors-url]: https://www.npmjs.com/package/cors
[jsx-shield]: https://img.shields.io/badge/JSX-front--end-blue.svg?logo=React
[jsx-url]: https://reactjs.org/docs/introducing-jsx.html
[websocket-shield]: https://img.shields.io/badge/Socket.io-front--end-blue.svg?logo=JavaScript
[websocket-url]: https://socket.io/
[reactnative-shield]: https://img.shields.io/badge/React--Native-mobile-purple.svg?logo=React
[reactnative-url]: https://facebook.github.io/react-native/
[license-shield]: https://img.shields.io/github/license/guiaramos/Best-README-Template.svg?style=flat-square
[requests-shield]: https://img.shields.io/badge/Requests-python_framework-red.svg?logo=Python
[beautifulsoup-shield]: https://img.shields.io/badge/Beautiful_Soup-python_framework-red.svg?logo=Python
[bokeh-shield]: https://img.shields.io/badge/Bokeh-python_framework-red.svg?logo=Python
[math-shield]: https://img.shields.io/badge/Math-python_framework-red.svg?logo=Python
[jupyter-shield]: https://img.shields.io/badge/Jupyter_Notebook-code%20editor-lightgrey.svg?logo=jupyter
[requests-url]: https://2.python-requests.org/en/master/
[beautifulsoup-url]: https://www.crummy.com/software/BeautifulSoup/bs4/doc/
[bokeh-url]: https://bokeh.pydata.org/en/latest/
[math-url]: https://docs.python.org/3/library/math.html
[jupyter-url]: https://jupyter.org/
[bootstrap4-shield]: https://img.shields.io/badge/Bootstrap%204-front--end%20framework-blue.svg?logo=Bootstrap
[css-shield]: https://img.shields.io/badge/CSS3-front--end-blue.svg?logo=CSS3
[pyenv-shield]: https://img.shields.io/badge/Python_Virtual_Envoriment-database-red.svg?logo=Python
[heruko-shield]: https://img.shields.io/badge/Heroku-server-success.svg?logo=Heroku
[git-shield]: https://img.shields.io/badge/Git-version_control-success.svg?logo=Git
[build-shield]: https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square
[contributors-shield]: https://img.shields.io/badge/contributors-1-orange.svg?style=flat-square
[license-shield]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[vscode-shield]: https://img.shields.io/badge/Visual%20Studio%20Code-code%20editor-lightgrey.svg?logo=visual-studio-code
[python-shield]: https://img.shields.io/badge/Python-back--end-red.svg?logo=Python
[hosts-shield]: https://img.shields.io/badge/-Hosts-lightgrey.svg?logo=internet-explorer
[gui-shield]: https://img.shields.io/badge/Guilherme%20Ramos-e--Mail-lightgrey.svg
[html-shield]: https://img.shields.io/badge/HTML5-front--end-blue.svg?logo=HTML5
[txt-shield]: https://img.shields.io/badge/-TXT-lightgrey.svg?logo=sublime-text
[flask-shield]: https://img.shields.io/badge/Flask-python_framework-red.svg?logo=Python
[tkinter-shield]: https://img.shields.io/badge/tKinter-python_framework-red.svg?logo=Python
[pyinstaller-shield]: https://img.shields.io/badge/PyInstaller-python_framework-red.svg?logo=Python
[datetime-shield]: https://img.shields.io/badge/Datetime-python_framework-red.svg?logo=Python
[dreamweaver-shield]: https://img.shields.io/badge/Dreamweaver-code_editor-lightgrey.svg?logo=Adobe-Dreamweaver
[js-shield]: https://img.shields.io/badge/JavaScript-front--end-blue.svg?logo=JavaScript
[php-shield]: https://img.shields.io/badge/PHP-front--end_preprocessor-blue.svg?logo=PHP
[cv2-shield]: https://img.shields.io/badge/OpenCV2-python_framework-red.svg?logo=Python
[time-shield]: https://img.shields.io/badge/Time-python_framework-red.svg?logo=Python
[pandas-shield]: https://img.shields.io/badge/Pandas-python_framework-red.svg?logo=Python
[bootstrap4-url]: https://getbootstrap.com/
[css-url]: http://www.css3.info/
[pyenv-url]: https://docs.python.org/3/tutorial/venv.html
[heruko-url]: https://heroku.com/
[git-url]: https://git-scm.com/
[linkedin-url]: https://www.linkedin.com/in/guilhermearamos/
[vscode-url]: https://code.visualstudio.com/docs
[python-url]: https://docs.python.org/3/
[hosts-url]: https://www.howtogeek.com/howto/27350/beginner-geek-how-to-edit-your-hosts-file/
[gui-url]: gui_aramos@outlook.com
[html-url]: https://www.w3schools.com/html/html5_intro.asp
[txt-url]: https://en.wikipedia.org/wiki/Comma-separated_values
[flask-url]: http://flask.pocoo.org/
[tkinter-url]: https://docs.python.org/3/library/tkinter.html
[pyinstaller-url]: https://www.pyinstaller.org/
[datetime-url]: https://docs.python.org/3/library/datetime.html
[dreamweaver-url]: https://www.adobe.com/products/dreamweaver.html
[js-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[php-url]: https://php.net/
[cv2-url]: https://pypi.org/project/opencv-python/
[time-url]: https://docs.python.org/3/library/time.html
[pandas-url]: https://pandas.pydata.org/
[license-url]: https://github.com/guiaramos/Best-README-Template/blob/master/LICENSE.txt
[product-screenshot]: frontend/src/assets/itsamatch.png
[logo-screenshot]: frontend/src/assets/logo-tindev.svg
