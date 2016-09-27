'use strict'
var restify         = require('restify');
var child_process   = require('child_process');
var commandLineArgs = require('command-line-args');
var scraper         = require('table-scraper');

const optionDefinitions = [
    { name: 'port_number', alias: 'p', type: Number},
    { name: 'scrape_page', alias: 's', type: String}
]

const OPTIONS     = commandLineArgs(optionDefinitions)
const PORT        = OPTIONS.port_number || 3000; //6554;
// const PYTHON_VER  = OPTIONS.python_version || 'python';
const SCRAPE_PAGE = OPTIONS.scrape_page || 'http://datawactest.com/AlexandraInstituttet_output.php'

var server = restify.createServer({
  name: 'rest-container',
});

server.get('containers', function(req, res, next) {

    scraper.get(SCRAPE_PAGE).then(function(tableData){
        var json_data = JSON.stringify(tableData);
        res.json(json_data);

    }).catch(function (e){
        res.send(e)
    });
});


server.listen(PORT);
