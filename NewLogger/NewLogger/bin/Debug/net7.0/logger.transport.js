const fs = require("fs");
const logMessage = "This is a newer test log message.\n";
const format = require('./logger.formatter');
const logData = require("./logData.json");
const logconfig = require("./logconfig.json");

class transport {
    constructor() {
    }

    async toConsole(logMessage) {
        /*
            this function should define the format for a logMessage when published to the console.
            this format will be standard for all log publishing to the console as part of this
            solution.
        */
        if (!logMessage) {
            //console.log('no message received') logging no message
            exit;
        }
        const message = await logMessage;
        console.log("Console Log Data: ", message);
    }

    async toFile(logMessage) {
        // log message returns as a promise object.
        // since returns as an object, it is unable to be appended to the file.
        // using await allows logMessage to stay a string.
        const message = await logMessage + '\n';
        if (!message) {
            exit;
        }
        // When appendFile is called and logFile.log doesn't exist, the file will be created by the function.
        fs.appendFile("logFile.log", message, (err) => {
            if (err) throw err;
            console.log("The string was successfully appended to the file!");
        });
    }

    async toAPI(logData) {
        /*
                this function should define the format for a log Data when published to the console.
                this format will be standard for all log publishing an api as part of this
                solution.
            */
        const apiPath = als.get(constants.KEY_API_PATH);
        // als = async local storage
        // constants = pull from /commoncode/constants/constants.js folder
    }

    // async toDB(logData) {
    //     /*
    //         this function should define the format for a log Data when published to the console.
    //         this format will be standard for all log publishing to a database as part of this
    //         solution.
    //     */
    //     const pool = new Pool({
    //         user: "1",
    //         host: "2",
    //         database: "3",
    //         password: "4",
    //         port: "5",
    //         });
    //         const logQuery = {
    //         text: "insert log",
    //         values: [logData],
    //         };

    //         pool
    //         .query(logQuery)
    //         .then(() => {
    //             console.log("[DATABASE] log successfully saved");
    //             pool.end();
    //         })
    //         .catch((error) => {
    //             console.log("[DATABASE] error saving log: ", error);
    //             pool.end();
    //         });
    //     return logMessage;
    // }
}
module.exports = transport;
FooterCaesars Entertainment
Caesars Entertainment
Caesars Entertainment