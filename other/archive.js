const https = require('https');
const apiendpoint = 'https://discord.com/api/v9';
const HTML = require('./bot-html.js');

module.exports.guild = {
  "icon": async (guild_id) => {
      let options = {
  hostname: 'discord.com',
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
  hostname: 'discord.com',
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
