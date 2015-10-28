//creating a game object

var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

//adding the games states that the game will have 
game.state.add('Boot', Template.Boot);
game.state.add('Preload', Template.Preload);
game.state.add('MainMenu',Template.MainMenu);

game.state.add('Game',Template.Game);

//starts the Boot game state

game.state.start('Boot');
//game.state.start('preload');
