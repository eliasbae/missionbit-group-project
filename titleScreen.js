var TitleScreen = {
    
    preload : function() {
        game.load.image('optionsTitle', '/assets/images/options.jpg');
        game.load.image('startTitle', '/assets/images/start.jpg');
        game.load.image('titleImage', '/assets/images/missionbit.png');
        game.load.image('titleText', '/assets/images/title.jpg');
    },
    
    create: function () {
        this.add.image(200, 0, 'titleImage');
        this.add.image(175, 250, 'titleText');
        this.add.button(350, 350, 'optionsTitle', this.options, this);
        this.add.button(0, 350, 'startTitle', this.startGame, this);
    },
    
    options: function () {
        //begins the Options state
        this.state.start('Options');
    },

    startGame: function() {
        this.state.start('Game');
    }
    
};