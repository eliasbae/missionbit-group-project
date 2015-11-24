var TitleScreen = {
    
    preload : function() {
        game.load.image('optionsTitle', '/assets/images/rsz_1options.png');
        game.load.image('startTitle', '/assets/images/rsz_1rsz_play.png');
        game.load.image('titleImage', '/assets/images/missionbit 2.png');
        game.load.image('titleText', '/assets/images/title.jpg');
        game.load.image('titleHelp', '/assets/images/rsz_help.png');
    },
    
    create: function () {
        this.add.image(0, 0, 'titleImage');
        this.add.image(576, 0, 'titleImage');
        this.add.image(576, 416, 'titleImage');
        this.add.image(0, 416, 'titleImage');
        this.add.image(120, 0, 'titleText');
        this.add.button(290, 250, 'optionsTitle', this.options, this);
        this.add.button(290, 150, 'startTitle', this.startGame, this);
        this.add.button(290, 350, 'titleHelp', this.help, this);
        game.stage.backgroundColor = '#66ffcc';
    },
    
    options: function () {
        //begins the Options state
        this.state.start('Options');
    },

    startGame: function() {
        this.state.start('Game');
    }
    
};