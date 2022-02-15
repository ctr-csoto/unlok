const credentials = require('./config/sequelize');
const Sequelize = require('sequelize');
const getModels = require('./');

const dbConnection = new Sequelize(
    credentials.development.database,
    credentials.development.username,
    credentials.development.password,
    {
        host: credentials.development.host,
        dialect: credentials.development.dialect,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        logging: true,
    }
);

const UnlokMe = getModels(dbConnection);


const preConditions = [];

const postConditions = [
    `ALTER TABLE users ADD CONSTRAINT users_rol_id_fkey FOREIGN KEY (rol_id) REFERENCES roles(id) ON UPDATE CASCADE ON DELETE SET NULL`
]

const insertConstants =[
    `INSERT INTO roles (id, name) VALUES(1, 'super_admin')`,
    `INSERT INTO roles (id, name) VALUES(2, 'company_admin')`,
    `INSERT INTO roles (id, name) VALUES(3, 'sales_rep')`,
    `INSERT INTO roles (id, name) VALUES(4, 'account_payable')`,
    `INSERT INTO roles (id, name) VALUES(5, 'model')`,
    `INSERT INTO roles (id, name) VALUES(6, 'user_client')`,
    `INSERT INTO users
    (name, last_name, username, password, photo, phone, token, last_activity_at, enabled, rol_id, created_at)
    VALUES('Andres', 'Manzano', 'amanzano@lean-tech.io', '$2b$10$IMJ.tOXdCfDpv52hE1C/hebMP7NQUecptOSCRkEdFOt1YtTVJxoBa', '', NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODQ4LCJpYXQiOjE2NDQ4OTkwNjksImV4cCI6MTY0ODQ5OTA2OX0._IsN8AaBmeOpjCFmxQbco1mdnBvpAnDqaUmbZ6vjqA4', '2022-02-14 23:24:31.495', true, 1, '2022-02-01 15:28:12.086');
    `
]

async function syncTables() {
    let modelsToSync = {};
    console.log('Amount of Models is ', Object.keys(UnlokMe).length - 2);

    for (let modelName in UnlokMe) {
        if (!['Sequelize', 'sequelize'].includes(modelName)) {
            modelsToSync[modelName] = UnlokMe[modelName];
        }
    }
    while (Object.keys(modelsToSync).length > 0) {
        console.log('=========================================================')
        console.log('++++++++++++++++++++++++++++++++++++++++++ Next iteration');
        console.log('=========================================================')

        for (let modelName in modelsToSync) {
            try {
                let model = modelsToSync[modelName];
                await model.sync();
                console.log(`Synchronization of ${modelName} was succesful`);
                delete modelsToSync[modelName];
            }
            catch (error) {
                console.log(`Synchronization of ${modelName} have a error`, error.message);
            }
        }

        
        for (let precondition of preConditions) {
            await UnlokMe.sequelize.query(precondition);
        }
    }

    for (let postcondition of postConditions) {
        await UnlokMe.sequelize.query(postcondition);
    }

    for (let insertConstant of insertConstants) {
        await UnlokMe.sequelize.query(insertConstant);
    }
    process.exit();
}

syncTables();