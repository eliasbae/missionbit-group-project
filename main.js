/*global Phaser*/
/*jslint sloppy:true, browser: true, devel: true, eqeq: true, vars: true, white: true*/ 

// Initialize Phaser
var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gameDiv');

//adds TitleScreen state to game
game.state.add('TitleScreen', TitleScreen);

//adds Options state to game
game.state.add('Options', Options)

//adds Game state to game
game.state.add('Game', Game);

game.state.add('Help', Help);

//to add more states
//game.state.add('what the state will be named', the object that the state is contained within)

//begins the game at the TitleScreen state
game.state.start('TitleScreen');