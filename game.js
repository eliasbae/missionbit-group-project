/*global Phaser*/
/*jslint sloppy:true, browser: true, devel: true, eqeq: true, vars: true, white: true*/ 

// Initialize Phaser
var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gameDiv');

// And finally we tell Phaser to add and start our 'main' state
//game.state.add('main', main);
game.state.add('menu', Menu);
game.state.start('menu');
