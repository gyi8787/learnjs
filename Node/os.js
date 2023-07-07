// 8 march
const os=require("os");
// return the underlying architecture
// let mySystemArch=os.arch();
// console.log(mySystemArch);

// =======================================================

// return all information of cpus
// let mycupinfo=os.cpus();
// console.log(mycupinfo)
// =======================================================

//Return the host name of the opearting system as a string
// let hostName=os.hostname();
// console.log(hostName);
// =======================================================

//return the object containg netwrok interface that have been assign a netwok address\
// let netwokInfo=os.networkInterfaces();
// console.log(netwokInfo);
// =======================================================

//rerturn the operating system as a string
// console.log(os.release());
//return total amount of system memory in bytes as an integer
// console.log(os.totalmem());
//return the system uptime in number of second
// console.log(os.uptime());

let uptimeinmin=os.uptime();
console.log(uptimeinmin);