var Options = {
    
    preload : function() {
        game.load.image('optionsTitle', '/assets/images/options.jpg');
        game.load.image('returnTitle', '/assets/images/return.jpg');
        game.load.image('startTitle', '/assets/images/start.jpg');
    },
    
    create: function () { 
        this.add.sprite(0, 0, 'optionsTitle');
        this.add.button(0, 350, 'returnTitle', this.titleScreen, this);
    },
    
    titleScreen: function() {
        game.state.start('TitleScreen');
    },
    
    update: function() {

    }
};