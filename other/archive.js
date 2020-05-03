const https = require('https');
const apiendpoint = 'https://discordapp.com/api/v6';
const HTML = require('./bot-html.js');

module.exports.guild = {
  "icon": async (guild_id) => {
      let options = {
  hostname: 'discordapp.com',
  port: 443,
  path: `${apiendpoint}/icons/${guild_id}/guild_icon.png`,
  method: 'GET'
}

const req = await https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
});
req.end()
    return req;
  },
"banner": async (guild_id) => {
        let options = {
  hostname: 'discordapp.com',
  port: 443,
  path: `${apiendpoint}/banners/${guild_id}/guild_banner.png`,
  method: 'GET'
}

const req = await https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
});
req.end()
    return req;
}

}