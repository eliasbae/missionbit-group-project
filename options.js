var Options = {
    
    preload : function() {
        game.load.image('optionsTitle', '/assets/images/options.jpg')
    },
    
    create: function () { 
        this.add.sprite(0, 0, 'optionsTitle');
    },
    
    update: function() {

    }
};