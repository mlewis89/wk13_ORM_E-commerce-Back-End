

# Bootcamp Challenge Week Thirteen - Object-Relational Mapping (ORM): E-commerce Back End
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


## Description

The purpose of this application is to test my knowledge of the Sequelise npm module to create a MYSQL database to provide the backend API for an e-commerce store.

This application allows for GET, UPDATE, CREATE and DELETE intergrations to the database.

During this project I learnt how to make use of the Sequelise Module to create mySQL data models and then apply queiries to a MYSYL database. 

## Table of Contents
    
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Testing](#testing)
- [Usage](#usage)
- [Screenshots/Video](<#screenshots--video-of-completed-challenge>)
- [License](#license)
- [Credits](#credits)
- [Questions / How to Contribute](#questions--how-to-contribute)

## User Story

```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Installation

Clone the repo to a local folder and open a MYSQL instance within the 'Develop' foler and run the following command.
    SOURCE db/schema.sql;

exit mysql.

then from the terminal inside the 'Develop' directory, run the following command to install the necessary dependancies.
       
    npm i

Seed the database with the sample code.
       
    npm run seed

## Testing

No self tests exist for this application

## Usage
    
Open the terminal in the 'Develop' Folder and enter the following command.

    npm run start

Then use insomnia to communicate with the API interface. 


## GitHub repository
https://github.com/mlewis89/wk13_ORM_E-commerce-Back-End


## Screenshots / Video of Completed Challenge
[Click here to view a video of the application in use](./assets/CodeExample.webm)
[google drive link to video](https://drive.google.com/file/d/1bl9MdOzQdQstMaTZAwA3KpLw3xlCQIqT/view)

## License
This project is licensed under the MIT.
    
## Questions / How to Contribute
    
If you have any questions about the repo, open an issue. You can veiw my other work on git hub [mlewis89](https://github.com/mlewis89/)

## Credits

Monash University Full Stack Coding bootcamp


---
