var Game = {
    
    preload : function() {
        game.load.image('optionsTitle', '/assets/images/start.jpg')
    },
    
    create: function () { 
        this.add.sprite(0, 0, 'startTitle');
    },
    
    update: function() {

    }
};