
const fs=require("fs"); //fs module
const path=require("path"); //path module
let types={
  media:["mp4","mkv","mp3"],
  archives:['zip','7z','rar','tar','gz','ar','iso',"xz"],
  documents:['docx','doc','pdf','xlsx','xls','odt','ods','odp','odg','odf','txt','ps','tex'],
  app:['exe','dmg','pkg',"deb"],
  images:['png','jpg','jpeg']
}

function organize(srcPath)
{
    // 1. to check if source path is present
    
    if(srcPath==undefined)
    {
        //the process.cwd() methode returns the current working directory of the Node.
        //js process.
        // console.log(srcPath);
        srcPath=process.cwd();
        console.log("source path is",srcPath);
    }
    // else console.log(srcPath);
    // 2. to create a directory by the name of organized_files
   let organizedFiles=path.join(srcPath,"organized_files");
    // let organizedFiles=srcPath+"/"+"organized_files";
    console.log("organized files folder path is ",organizedFiles);
    if(fs.existsSync(organizedFiles)==false)
    {
        fs.mkdirSync(organizedFiles);
    }   
    else console.log('folder already exists');
    //3.scan th entire sourcepath(download folder in this case)
    // read the content of directory->basically reads the names of the file present in the directory
    let allFiles=fs.readdirSync(srcPath);
    // console.log(allFiles )

    //4. traverse over the files and classify them on the basis of their extension(.pdf,.mp3)
    for(let i=0;i<allFiles.length;i++)
    {
        // let ext=allFiles[i].split(".")[1];
        let ext=path.extname(allFiles[i]);
        console.log(ext);
    }

 }
let srcPath="C:/Users/Hp/Desktop/learnjs/Node/fileOraganizer/downloads";
organize(srcPath);