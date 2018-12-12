var fs =require('fs');
var opn = require('opn');

var userObj = "";
var resultObj = "";
var blockChain = "";
var unminedBlock = "";
var minerKey = "147BE269C047AD258B0369D148BE269C047AD258C036AD148BE269C147AE258C";
var senderPublicKey = "";
var senderPrivateKey = "";
var ammount = "";
var receiverPublicKey = "";
var userConfig = "newuser" + "\nfalse\n" + "Ibra";
var mineConfig = "mine\n" + minerKey;

function newUser(){
    fs.writeFile("cppConfig.txt", userConfig, function(err){
        if(err) throw err;
        console.log("Saved User!")
    })
}
 
function mine(){
    fs.writeFile("cppConfig.txt", mineConfig, function(err){
        if(err) throw err;
        console.log("Saved!")
    })
}

function trans(){
    fs.writeFile("cppConfig.txt", minerKey, function(err){
        if(err) throw err;
        console.log("Saved!")
    })
}


function exec(){
    opn('cppCD.exe');
}


function readFiles(){
    fs.readFile("users.json", "utf8", function(err, data){
        if(err) throw err;
        //console.log(JSON.parse(data));
        userObj = JSON.parse(data);
        console.log(userObj);
        //userObj = userObj.userList;
    });

    fs.readFile("result.txt", "utf8",function(err, data){
        if(err) throw err;
        //console.log(data);
        resultObj = JSON.stringify(data);
        resultObj = resultObj + "";
    });

    fs.readFile("blockchain.json", "utf8", function(err, data){
        if(err) throw err;
        blockChain = JSON.parse(data);
        //console.log(blockChain);
        blockChain = blockChain.block;
    });

    fs.readFile("unminedBlock.json", "utf8", function(err, data){
        if(err) throw err;
        unminedBlock = JSON.parse(data);
        //console.log(unminedBlock);
    })

    //console.log("Users: " + userObj + "\nResult: " + resultObj + "\nBlockchain: " + blockChain + "\nUnmined: " + unminedBlock);

}


mine();
exec();
readFiles();



