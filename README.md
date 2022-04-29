<<<<<<< HEAD
# Unlok Api Backend

This file will explain how to access the different requests to the Unlok API


---

**Steps to start the project**

```sh
	npm i 
	npm run start
```

---


## Run Locally

Install Node.js and npm from [NodeJS.org](https://nodejs.org/en/).

Clone the project

```bash
  git clone https://andresmanzanounlokme@bitbucket.org/andresmanzanounlokme/unlokmebackend.git
```

Go to the project directory

```bash
  cd UnlokmeBackend
```

Install dependencies

```bash
  npm i aws-sdk @hapi/boom bcrypt cors dotenv express ffmpeg jimp joi jsonwebtoken knex mkdirp morgan multer mysql npm sequelize cli sharp sqlite3 winston
  npm i nodemon -D
```

Start the server

```bash
  npm run start
```

Start the project in development mode

```bash
  npm run dev
```



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file. Although you can rely on the .env.example file

`AWS_S3_ACCESS_KEY_ID`

`AWS_S3_BUCKET`

`AWS_S3_REGION`

`AWS_S3_SECRET_ACCESS_KEY`

`NODE_ENV`

`PORT`

`SALT_ROUNDS`

`CORS`

`DB_DIALECT`

`DB_HOST`

`DB_USER`

`DB_PASSWORD`

`DB_NAME`

`JWT_ALGORITHM`

`JWT_EXPERIES_IN`

`JWT_SECRET`

`UPLOADED_FILES_FOLDER`

`LOGGER`



## Roadmap

The API has service-oriented architecture (SOA), with each service divided into components folder.

  1) We begin the application in the Server class, which is located within the index.js file. This file is in charge of:

  - Express start-up
  - Setting the port
  - Setting the smallest configuration for managing all types of requests
  - Start the view engine with the ejs module.
  - Transporting CORS and error-handling middleware
    - We can map errors like 404 not found, bad implementation, and 'catch' exceptions in error middlewares, among other things.
  - And starting the server's listening using subprocesses that allow you to take advantage of the server's processing power.

  2) The project has a route controller, which controls each of the components

  3) We have each of the services that our application provides within the component folder, such as the service of authenticating a user and verifying their role, which we do in the auth folder, which is made up of:

  - ```Controller```: The controller is in charge of calling the various services of the incoming request, assembling the response, and returning it to the user.
  - ```Service```: In a nutshell, this service is responsible for connecting to the database, generating documents, and sending emails. This file contains the code needed for each request to work properly.

![Image](https://unlokme-develop-media.s3.amazonaws.com/uploads/readme/readme.png)



##  Database
We use the ORM Sequelize to connect and to manipulate the database.
### Connection example

```javascript
const Sequelize = require('sequelize');
const { unlokmeDBConn } = require('./index');

const app = new Sequelize(
  unlokmeDBConn.dbName,
  unlokmeDBConn.dbUsername,
  unlokmeDBConn.dbPassword,
  {
    host: unlokmeDBConn.dbHost,
    dialect: unlokmeDBConn.dbDialect,
    timezone: '-05:00',
    pool: {
      max: 100,
      min: 50,
      acquire: 60000,
      idle: 20000
    },
    logging: false 
  }
);
```

## API Reference
- Dev environment: https://unlokme-api-develop.lean-tech.io
- Staging environment: https://unlokme-api-develop.lean-tech.io


#### Login Request

```http
POST /auth/login
```

| Parameter | Type     | Required                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **true**.      |
| `password` | `string` | **true**.      |


#### Verify token

```http
POST /auth/verifyToken
```

| Parameter | Type     | Required                       |
| :-------- | :------- | :-------------------------------- |
| `token`      | `string` | **true**. User Token |


#### media/uploadservice

```http
POST /media/uploadservice
```

| Parameter    |  Type    | Required  | Description |
| :----------- | :------- | :-------- | :---------- |
| `id`         | `string` | **true** |  Identifier of the user  |
| `userFiles`  | `file`   | **true** |  Files can to be images or videos  |
| `type`       | `string` | **true** |  Content type [Reel, plus, post, profile, and etc.]  |
| `username`   | `string` | **true** |  Username with which the user can be found on Unlok  |

=======
**Edit a file, create a new file, and clone from Bitbucket in under 2 minutes**

When you're done, you can delete the content in this README and update the file with details for others getting started with your repository.

*We recommend that you open this README in another tab as you perform the tasks below. You can [watch our video](https://youtu.be/0ocf7u76WSo) for a full demo of all the steps in this tutorial. Open the video in a new tab to avoid leaving Bitbucket.*

---

## Edit a file

You’ll start by editing this README file to learn how to edit a file in Bitbucket.

1. Click **Source** on the left side.
2. Click the README.md link from the list of files.
3. Click the **Edit** button.
4. Delete the following text: *Delete this line to make a change to the README from Bitbucket.*
5. After making your change, click **Commit** and then **Commit** again in the dialog. The commit page will open and you’ll see the change you just made.
6. Go back to the **Source** page.

---

## Create a file

Next, you’ll add a new file to this repository.

1. Click the **New file** button at the top of the **Source** page.
2. Give the file a filename of **contributors.txt**.
3. Enter your name in the empty file space.
4. Click **Commit** and then **Commit** again in the dialog.
5. Go back to the **Source** page.

Before you move on, go ahead and explore the repository. You've already seen the **Source** page, but check out the **Commits**, **Branches**, and **Settings** pages.

---

## Clone a repository

Use these steps to clone from SourceTree, our client for using the repository command-line free. Cloning allows you to work on your files locally. If you don't yet have SourceTree, [download and install first](https://www.sourcetreeapp.com/). If you prefer to clone from the command line, see [Clone a repository](https://confluence.atlassian.com/x/4whODQ).

1. You’ll see the clone button under the **Source** heading. Click that button.
2. Now click **Check out in SourceTree**. You may need to create a SourceTree account or log in.
3. When you see the **Clone New** dialog in SourceTree, update the destination path and name if you’d like to and then click **Clone**.
4. Open the directory you just created to see your repository’s files.

Now that you're more familiar with your Bitbucket repository, go ahead and add a new file locally. You can [push your change back to Bitbucket with SourceTree](https://confluence.atlassian.com/x/iqyBMg), or you can [add, commit,](https://confluence.atlassian.com/x/8QhODQ) and [push from the command line](https://confluence.atlassian.com/x/NQ0zDQ).
>>>>>>> 3b5837c40bd119a181ed83627cf2c10ce258f482
