module.exports = (client, htmldom) => {
  const Listeners = htmldom.getElementsByTagName('onEvent');
const listeners = Array.from(Listeners);

listeners.forEach(listener => {
  let arg = listener.title;
  client.on(`${listener.name}`, arg => {
    listener.innerHTML;
  });
});

};