Template.Preload = function() {
    this.ready=false;

};

Template.Preload.prototype = {
    Preload: function() {
        this.preload = this.add.sprite(this.game.world.centerX, this.game.world.centerY+ 128, "preloadBar");
        this.preload.anchor.setTo(0.5);
        
        this.load.setpreloadSprite(this.preloadBar);
        
        // here you load all the game images and what not
        

       
        
        //sprite hseets are dofferent
        //(monicer, path,width og eaWch image, heigh of image, how many in sprite sheet
       
        
        
        // now lets load music
        // (monicer,[array of music so that web browser will decide which to play)
        
    
        
        // loading bitmap fonts
        this.load.onLoadComplete.add(this.onLoadComplete, this);
       
        
    },
    create: function() {
        console.log("preload bar is: "+this.preloadBar);
        this.preloadBar.cropEnabled = true;   
    },
    
    update: function() {
        if(this.ready===true){
            this.state.start('MainMenu');
        }
    },
    
    onLoadComplete: function(){
        this.ready = true;
    }
};