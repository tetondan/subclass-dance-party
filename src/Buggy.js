var Buggy = function(top, left, timeBetweenSteps) {
  while(top < 250){
    top = $("body").height() * Math.random();
  }
  timeBetweenSteps = 250;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.css('content', "url('./img/buggy_left.png')");
  this.saveCount = 0;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

Buggy.prototype = Object.create(Dancer.prototype);
Buggy.prototype.constructor = Buggy;

Buggy.prototype.step = function() {
    Dancer.prototype.step.call(this);
    // call the old version of step at the beginning of any call to this new version of step
    
    
    this.$node.css('max-width', '200px')
    this.$node.css('height', 'auto')
    this.$node.css('left', this.left+'px');
    this.$node.css('top', this.top+'px');
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //loop over all div elements 
    var current = this;
    var height = $('body').height();
    var width = $('body').width();
    $('body').keydown(function( event ) {     
      if ( event.which === 87 && current.top >= 200) {
        current.top = current.top - 1;
      }else if ( event.which === 83  && current.top <= height - 200) {
        current.top = current.top + 1;
      }else if ( event.which === 68 && current.left < width - 200) {
        current.left = current.left + 1;
        current.$node.css('content', "url('./img/buggy_right.png')");
      }else if ( event.which === 65 && current.left >= 0) {
        current.left = current.left - 1;
        current.$node.css('content', "url('./img/buggy_left.png')");
      }
    });

    this.setPosition(this.top, this.left);

    for(var i = 0; i < window.dancers.length; i++){
      //if Buggy is in same width height 
      if(window.dancers[i].constructor !== Buggy &&
         window.dancers[i].constructor !== UFO){
        if(window.dancers[i].left > this.left &&
           window.dancers[i].left < this.left + 200){
          if(window.dancers[i].top > this.top &&
           window.dancers[i].top < this.top + 200){
              window.dancers[i].$node.fadeOut(500);
              window.dancers.splice(i,1);
              this.saveCount++;
              $('.score').html('<span class="score">Spacemen Saved: '+ this.saveCount +'</span>');
           } 
        } 
        // call fadout on element it hits
      }
    }

  };

  Buggy.prototype.lineUp = function(){
    this.setPosition(400, this.left);
}