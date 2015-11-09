var TitleScreen = {
    
    preload : function() {
        game.load.image('optionsTitle', '/assets/images/options.jpg');
        game.load.image('startTitle', '/assets/images/start.jpg');
        game.load.image('titleImage', '/assets/images/missionbit 2.png');
        game.load.image('titleText', '/assets/images/title.jpg');
    },
    
    create: function () {
        this.add.image(0, 0, 'titleImage');
        this.add.image(576, 0, 'titleImage');
        this.add.image(576, 416, 'titleImage');
        this.add.image(0, 416, 'titleImage');
        this.add.image(200, 0, 'titleText');
        this.add.button(200, 250, 'optionsTitle', this.options, this);
        this.add.button(200, 150, 'startTitle', this.startGame, this);
        game.stage.backgroundColor = '#00FF00';
    },
    
    options: function () {
        //begins the Options state
        this.state.start('Options');
    },

    startGame: function() {
        this.state.start('Game');
    }
    
};