var Game = {
    
    preload : function() {
        game.load.image('optionsTitle', '/assets/images/options.png')
    },
    
    create: function () { 
        this.add.sprite(0, 0, 'optionsTitle');
    },
    
    update: function() {

    }
};