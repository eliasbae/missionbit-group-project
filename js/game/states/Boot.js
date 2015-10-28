var Template = function () {};
//template is that name of my file

Template.Boot = function () {};

Template.Boot.prototype = {
    preload: function () {
        // use your own images;

        //this.load.image("logo", "assests/images/logo.png");
        this.load.image("preloadBar", "assests/images/preloader-bar.png");

    },
    create: function() {
        this.game.stage.backgroundColor = "fff";
        
        //how many fingers/ clickers you want
        this.input.maxPointers=1;
        
        if (this.game.device.desktop) {
            this.scale.pageAlignHorizontally = true;
        }
        else {
            this.scale.scaleMode= Phaser.ScaleManager.SHOW_ALL;
            this.scale.minWidth = 568;
            this.scale.minHeight = 600;
            this.scale.maxWidth = 2048;
            this.scale.maxHeight = 1536;
            this.scale.forceLandscape = true;
            this.scale.pageAlignHorizontally= true;
            this.scale.setScreenSize(true);
        }
        // this a all the game configurations 
        // now begins the loading of the actual game assests
        //this commanf will move the game on to the next statea
        console.log("about to go to preload");
        this.state.start('Preload');
    }
};