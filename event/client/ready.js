module.exports = client => {
    client.user.setPresence({ activities: [{ name: 'en développement' }], status: 'dnd' });
    console.log("client opérationnel");
};