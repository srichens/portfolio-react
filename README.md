# React Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)

## Bootcamp Week 20 Challenge

This week's challenge was to create a single-page application portfolio using React. The requirements included the following:

1. Portfolio contains a header, content section, and footer.
2. The header includes a profile picture and navigation links to About Me, Portfolio, Contact and Resume that take you to each section without reloading the page.
3. The Portfolio section includes links to six projects and their Github repos.
4. The Contact section has a form to enter name, email, and a message; each field is required and validated by an error message.
5. The Resume page includes a link to a downloadable resume.
6. The footer includes links to Github, LinkedIn, and another site like Stack Overflow.


## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Process Highlights](#process-highlights)
4. [License](#license)
5. [Contributing](#contributing)
6. [Questions](#questions)

## Installation
This app is deployed to GitHub pages and can be viewed there; otherwise, to run it from the terminal, it requires Node.js, npm and React.

## Usage
Click on the deployed link and navigate through the site; or from the ternimal, run npm install, npm run build, and then npm start.

[*LINK TO DEPLOYED PORTFOLIO*](https://srichens.github.io/portfolio-react/)

![Screenshot 2023-05-04 at 5 32 21 PM](https://user-images.githubusercontent.com/117301473/236343679-c5daed93-fc79-42f8-93f3-0aa2f6774bf0.png)


## Process Highlights

1. This was a pretty fun project. *Note: I added a landing page for the website that was not part of the requirements (but hopefully won't count against me)*. I wanted to have fun with the design, but I wanted most of the application to be clean and easy to design. I used a conditional statement to render the landing page, and then render the main page (which is supposed to be the page loaded first according to the requirements).
2. I used plain CSS rather than Bootstrap so that I could practice for the final project, so making sure everything was responsive took a while.
3. It took me a while to get the title links to be highlighted when on each page. I used :target and IDs to correspond to the href, but that seemed like a workaround. I tried to do it with useState, but I couldn't figure that out. 
4. I split up my CSS files per page. I realized early on that just because they were separate didn't mean they weren't connected. Every element of the same type had to have a specific name, just as if they were in one file. In the end, I liked using the separate CSS files, because one file would have been long and cumbersome. 

*Update: After bootcamp, I added React router to simplify navigation, added Emailjs to make the contact form functional, and cleaned up/improved responsiveness.

## License
This product is licensed under MIT.

## Contributing
If you would like to contribute to this application, please refer to the [Contributor Covenant](https://www.contributor-covenant.org/).

## Questions
If you have any questions, please contact me at sarahgrichens@gmail.com or view my projects at https://github.com/srichens.