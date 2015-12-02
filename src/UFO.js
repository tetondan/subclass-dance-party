var UFO = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  this.directionLeft = true
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

UFO.prototype = Object.create(Dancer.prototype);
UFO.prototype.constructor = UFO;

UFO.prototype.step = function() {
    Dancer.prototype.step.call(this);
    // call the old version of step at the beginning of any call to this new version of step

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.css('content', "url('http://aliens-extraterrestrial.com/picture_library/ufo.png')");
      // https://media.giphy.com/media/T47kk9ZsHjxWo/giphy.gif')")
    this.$node.css('border', '0px');
    this.$node.css('width', '25%');
    this.$node.css('height', '25%');
    this.$node.css('left', this.left+'px');

    if(this.left <= -160){
      this.directionLeft = false
    } else if(this.left >= $("body").width()-160){
      this.directionLeft = true;
    }
    if(this.directionLeft){
      this.left = this.left - 10;
    } else {
      this.left = this.left + 10;
    }
    //loop over all div elements 
    for(var i = 0; i < window.dancers.length; i++){
      //if UFO is in same width height 
      if(window.dancers[i].constructor !== UFO){
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

  UFO.prototype.lineUp = function(){
    this.setPosition(200, this.left);
}