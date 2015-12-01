var Spaceman = function(top, left, timeBetweenSteps) {
  while(top < 250){
    top = $("body").height() * Math.random();
  }
  Dancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

Spaceman.prototype = Object.create(Dancer.prototype);
Spaceman.prototype.constructor = Spaceman;

Spaceman.prototype.step = function() {
    Dancer.prototype.step.call(this);
    // call the old version of step at the beginning of any call to this new version of step
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // this.$node.css('border', '20px solid blue')
    this.$node.css('content', "url('https://media.giphy.com/media/T1z62QsZNHFWU/giphy.gif')")
    this.$node.css('border', '0px')
}

Spaceman.prototype.lineUp = function(){
    this.setPosition(350, this.left);
}
