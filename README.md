<!-- PROJECT SHIELDS -->

[![Build Status][build-shield]]()
[![Contributors][contributors-shield]]()
[![LinkedIn][linkedin-shield]][linkedin-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">Tindev</h3>

  <p align="center">
    ..Description
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
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

There are many great README templates available on GitHub, however, I didn't find one that really suit my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need.

Here's why:

- Your time should be focused on creating something amazing. A project that solves a problem and helps others
- You shouldn't be doing the same tasks over and over like creating a README from scratch
- You should element DRY principles to the rest of your life :smile:

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue.

A list of commonly used resources that I find helpful are listed in the acknowledgements.

### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

[![MongoDB Atlas][mongodb-shield]][mongodb-url]
[![Express][express-shield]][express-url]
[![Nodemon][nodemon-shield]][nodemon-url]
[![Insomnia][insomnia-shield]][insomnia-url]
[![Mongoose][mongoose-shield]][mongoose-url]
[![React][react-shield]][react-url]
[![Cors][cors-shield]][cors-url]
[![JavaFX][javafx-shield]][javafx-url]

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

```sh
npm install npm@latest -g
```

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo

```sh
git clone https:://github.com/your_username_/Project-Name.git
```

3. Install NPM packages

```sh
npm install
```

4. Enter your API in `config.js`

```JS
const API_KEY = 'ENTER YOUR API';
```

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<!-- ROADMAP -->

## Roadmap

Backend:
The first step of this project, the server uses [Express][express-url] for the connection with the apps and [Nodemon][nodemon-url] to automate the refresher while changes occurs.

Server creation:
The first API was created to create de user database, at this step, the [Insomnia][insomnia-url] desk app took place to help debugging the API. After some tests I finally reached out a good model for connecting the with the [MongoDB Atlas][mongodb-url]. Then, thanks to [Mongoose][mongoose-url] that helped to keep the communication with server simple, I created the structure for the backend, after some researches, being segregated in: model, controllers and view. At this moment, I also realized that the server.js was getting messy, therefore, I segregated the "routes" in another file.

Users table:
Now, with the server settings ready, I created the first model that is charge to keep the users registration. The idea is to use the GitHub API to get the informations from the users, once the user have to have a GitHub account. The Schema was set as: name, user, bio and avatar.
After some researchs, I created then the API connection inside the controller using [axios][axios-url] module to help execute the following:

1. gets the user name from the app API.
2. posts the user name on the GitHub API.
3. saves the necessary information on specific variable.
4. posts variable on the database constructor.

Also, after some tests, I have implemented a if conditions to avoid the creating same user on the table.

Like and Dislikes:
I created 2 fields on each user registration where I can add the MongoDB ID of each user that liked or disliked. On this way, I also created 3 new API methods to post the like and dislikes and also to get the users who have not interacted yet.

Also, after some researchs, I figured out that MongoDB could block access to React, therefore I have connected the module to allow this connection

Frontend
Webapp:
With [React][react-url] I start the web app frontend and UI development.

The login page was very simple and easy to develop, as soon as the user insert the GitHub username to log in the connection with the API for the database starts, again with [axios][axios-url], it regirsters the user/or retreive the info of the existent user. I decided to create a separated file on services folder for the main API address and another for the routes.

The main page is loaded after the user log in, I created the styles with grid of 3 per row for the cards with the picture, name, bio and button for like or dislike.
At this moment, I had to use the new APIs from [React][react-url]: useEffect and useState to handle the cards creation and reload of the card list.

Mobile:
Developed with React-Native, the app has the similarities of the webapp. there are some changes on the scripts for like and dislike in reason to adapt for [JavaFX][javafx-url]. Tindev is available on Android and iOS.

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

[![Gui][gui-shield]][gui-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Img Shields](https://shields.io)
- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Pages](https://pages.github.com)
- [Animate.css](https://daneden.github.io/animate.css)
- [Loaders.css](https://connoratherton.com/loaders)
- [Slick Carousel](https://kenwheeler.github.io/slick)
- [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll)
- [Sticky Kit](http://leafo.net/sticky-kit)
- [JVectorMap](http://jvectormap.com)
- [Font Awesome](https://fontawesome.com)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

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
[product-screenshot]: img/project.png
