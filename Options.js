var Options = {
    
    preload : function() {
        game.load.image('optionsTitle', '/assets/images/options.jpg')
        game.load.image('startTitle', '/assets/images/start.jpg')
        game.load.image('returnTitle', '/assets/images/return.jpg')},
    
    
    create: function () { 
        this.add.sprite(0, 0, 'optionsTitle');
        this.add.button(0, 350, 'returnTitle', this.titleScreen, this);
    },
:// returnTitle:function(){
          ://   game.state.save('titleScreen');
    ://     }
    update: function() {

    }
};
 