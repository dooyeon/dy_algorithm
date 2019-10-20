
// var sync = require('./public/sync.js')
// var appRoot = require('app-root-path').path;
// var fs = require('fs');
// var PythonShell = require('python-shell')
// var request = require('sync-request');
// var async = require('async');
// var execSync = require('child_process').execSync;
// var propertiesConfig = require(appRoot + '/config/propertiesConfig.js');
// var pythonConfig = require(appRoot + '/config/pythonConfig'); 

/*
// - python code
PythonShell.run = sync(PythonShell.run);
//typo  
pythonConfig.typoOptions.args.push(JSON.stringify(dataToTypoArgs(Result)));
var resPyStr = sync.await(PythonShell.run('typo.py', pythonConfig.typoOptions, sync.defer()));
var resPyArr = JSON.parse(resPyStr[0].replace(/'/g, '"'));  
*/

/*
// - api test code
// - sync.js needed

var serviceUrl = 'https://cloud-westus.ocrsdk.com';
// Name of application you created
var appId = 'test_taih_app';
// Password should be sent to your e-mail after application was created
var password = '!en423156';
 

var convertFilpath = appRoot + '/images/aaa.png';
var outputPath = 'result/Y-P8001B_Data Sheet_001-6.txt';

sync.fiber(function()
{
    try 
    {
        let result = sync.await(callApi(convertFilpath, sync.defer())); 
    } catch(e) {
        console.log(e);
    } 
})

function callApi(req, done) {
    var pharsedJson = "";
    try {
        var uploadImage = fs.readFileSync(req, 'binary');
        var base64 = new Buffer(uploadImage, 'binary').toString('base64');
        var binaryString = new Buffer(base64, 'base64').toString('binary');
        uploadImage = new Buffer(binaryString, "binary");

        var res = request('POST', propertiesConfig.uri, {
            headers: {
                'Ocp-Apim-Subscription-Key': propertiesConfig.subscriptionKey,
                'Content-Type': 'application/octet-stream'
            },
            uri: propertiesConfig.uri + '?' + 'language=ko&detectOrientation=true',
            body: uploadImage,
            method: 'POST'
        });
        var resJson = JSON.parse(res.getBody('utf8'));
        // console.log(res.getBody('utf8')); 

        return done(null, pharsedJson);
    } catch (err) {
        console.log(err);
        return done(null, 'error');
    } finally {

    }
}
*/
 