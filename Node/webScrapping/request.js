const request = require("request");
//cheerio
//cheerio parses HTML and  it trverses the html so that data can be manipulated according to user's needs
request("https://www.worldometers.info/coronavirus/",cb);
function cb(err,res,body)
{
    console.error("error",err);
    console.log(res);
    console.log(body);
}