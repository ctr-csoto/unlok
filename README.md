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

Install ffmpeg from [ffmpeg.org](https://ffmpeg.org/download.html).

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
  npm i aws-sdk @hapi/boom bcrypt cors dotenv express fluent-ffmpeg jimp joi jsonwebtoken knex mkdirp morgan multer mysql npm sequelize cli sharp sqlite3 winston
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

`FFMPEG_PATH`

`FFPROBE_PATH`



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

