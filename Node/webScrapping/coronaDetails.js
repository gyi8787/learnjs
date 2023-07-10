const request = require("request");
//cheerio
//cheerio parses HTML and  it trverses the html so that data can be manipulated according to user's needs
const cheerio=require("cheerio");
request("https://www.worldometers.info/coronavirus/",cb);
function cb(err,res,body)
{
    if(err)
    {
        console.error("error",err);
    }
    else{
        handleHtml(body);
    }
}
function handleHtml(html)
{
    let selecTool=cheerio.load(html);
    let coronaStats=selecTool(".maincounter-number");
    // console.log(coronaStats.text());
    let totalCases=selecTool(coronaStats[0]).text();
    console.log("Total Case ->"+totalCases);

    let totalDeaths=selecTool(coronaStats[1]).text();
    console.log("Total Death ->"+totalDeaths);

    let totalRecovered=selecTool(coronaStats[2]).text();
    console.log("Total Recovered ->"+totalRecovered);
}