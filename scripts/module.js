const https = require('https');
const modsj = require('jsdom');


const HTML = require('./bot-html.js'); // if you changed the file change it here too


const Discord = require('discord.js');
const { JSDOM } = modsj;
const html = new JSDOM(HTML);
const client = new Discord.Client();
var htmldom = html.window.document;
const prefix = html.window.document.getElementById('prefix').className; 
console.log('Online | j log: ' + prefix);

/* ---------------------------------------- */

require('./src/events.js')(client, htmldom);

if (html.window.document.getElementById('login')) {
  client.login(html.window.document.getElementById('login').className);
};