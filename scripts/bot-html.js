module.exports = `
<!DOCTYPE HTML>
<!-- to login to the bot add the code <p id="login" class="bot-token" />  replace class with your token.-->
<!-- an event listener will be called <onEvent>-->
<!-- whatever you put inside the listener will be what gets run. -->
<!-- at the moment you will need to have javascript in there, and it is based off of discord.js. -->
<!-- on the listener you have to set the title as the functions so title="message" for a message event , for reactions it'd be like title="(reaction, user)" -->
<!-- for the name field you put the event name, like name="guildCreate" -->

<p id="prefix" class="html!" />
<onEvent name="message" title="message">
// Example
console.log(message);
<onEvent/>
<p id="login" class="bot-token" />
`;
