var TitleScreen = {
    
    preload : function() {
        game.load.image('startTitle', '/assets/images/rsz_1rsz_play.png');
        game.load.image('titleImage', '/assets/images/transmissionbit.png');
        game.load.image('titleText', '/assets/images/title.jpg');
        game.load.image('titleHelp', '/assets/images/rsz_help.png');
        game.load.image('titleCredit', '/assets/images/credits.png');
    },
    
    create: function () {
        this.add.image(0, 0, 'titleImage');
        this.add.image(576, 0, 'titleImage');
        this.add.image(576, 416, 'titleImage');
        this.add.image(0, 416, 'titleImage');
        this.add.image(120, 0, 'titleText');
        this.add.button(290, 150, 'startTitle', this.startGame, this);
        this.add.button(290, 250, 'titleHelp', this.help, this);
        this.add.button(290, 350, 'titleCredit', this.credit, this);
        game.stage.backgroundColor = '#66ffcc';
    },

    startGame: function() {
        this.state.start('Game');
    },
    
    help: function() {
        this.state.start('Help');
    },
    
    credit: function() {
        this.state.start('Credits');
    },
    
};