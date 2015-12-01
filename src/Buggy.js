var Buggy = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  this.directionLeft = true
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

Buggy.prototype = Object.create(Dancer.prototype);
Buggy.prototype.constructor = Buggy;

Buggy.prototype.step = function() {
    Dancer.prototype.step.call(this);
    // call the old version of step at the beginning of any call to this new version of step

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.css('content', "url('http://vignette1.wikia.nocookie.net/mafiawars/images/4/47/Huge_item_moonbuggy_01.png/revision/latest?cb=20110803001829')");
    this.$node.css('max-width', '200px')
    this.$node.css('height', 'auto')
    this.$node.css('left', this.left+'px')
    //loop over all div elements 
    for(var i = 0; i < window.dancers.length; i++){
      //if Buggy is in same width height 
      if(window.dancers[i].constructor !== Buggy &&
         window.dancers[i].constructor !== UFO){
        if(window.dancers[i].left > this.left + 140 &&
           window.dancers[i].left < this.left + 180){
          if(window.dancers[i].top > this.top + 50 &&
           window.dancers[i].top < this.top + 215){
              window.dancers[i].$node.fadeOut(500);
           } 
        } 
        // call fadout on element it hits
      }
    }

  };

  Buggy.prototype.lineUp = function(){
    this.setPosition(200, this.left);
}