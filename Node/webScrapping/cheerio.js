//19 march
const request = require("request");
//cheerio
//cheerio parses HTML and  it trverses the html so that data can be manipulated according to user's needs
const cheerio= require("cheerio");
let html=`<ul id="fruits">
<li class="apple">Apple</li>
<li class="orange">Orange</li>
<li class="pear">Pear</li>
</ul>
`
//cheerio stores data in the form of object
let selecTool=cheerio.load(html);

let fruitNameArr=selecTool ("#fruits");
console.log(fruitNameArr.text());