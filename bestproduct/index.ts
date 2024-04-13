// ©2024 - BestDeveloper - BestMat, Inc. - All rights reserved.
const execSync = require('child_process').execSync;
var welcome_message: string = "Welcome to BestProduct by BestDeveloper!";
console.log(welcome_message);

module.exports.startDevServer = function(type, func){
    if(type == "desktop"){
        const cmd = "npm start";
        const options = {
            encoding: 'utf8'
        };
        console.log(execSync(cmd, options));
    }
    (func)()
}
