const fs = require('fs');
/**
 * 
 * @param {*} message 
 * @param {*} status 
 */
function log_message(message, status) {
    const now = new Date();
    let line = now.toISOString().replace('T', ' ')+ " ["+status+"]"+ " "+message+"\n";
    fs.appendFile("./log.txt", line, (err) => {
        if (err) throw err;
    });
}

//Example:
//log_message("teste2","INFO");


/**
 * TC:
 * Pre-requirment: User witch access to the Log File
 * User loggin should generate a system log
 * Step 1; Open the System
 * Expected: The system should be opened
 * Step 2: Log in the System with a valid user
 * Expected: The user should be able to login into the System
 * Step 3: Open the Log File
 * Expected: A new line contain [actualtime][status] Message should show up 
 *          Ex: [2023-04-24 12:34:56] [INFO] User logged in
 */