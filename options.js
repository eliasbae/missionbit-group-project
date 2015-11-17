var Options = {
    
    preload : function() {
        game.load.image('optionsTitle', '/assets/images/imageedit_1_5623684860.png');
        game.load.image('returnTitle', '/assets/images/rsz_backt.png');
        game.load.image('startTitle', '/assets/images/start.jpg');
    },
    
    create: function () { 
        this.add.sprite(150, 0, 'optionsTitle');
        this.add.button(0, 350, 'returnTitle', this.titleScreen, this);
    },
    
    titleScreen: function() {
        game.state.start('TitleScreen');
    },
    
    update: function() {

    }
};