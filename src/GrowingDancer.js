var GrowingDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);
  this.size = 10
  this.grow = true
  this.$node.css('border', this.size+'px solid green');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

GrowingDancer.prototype = Object.create(Dancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;

GrowingDancer.prototype.step = function() {
    Dancer.prototype.step.call(this);
    // call the old version of step at the beginning of any call to this new version of step
    
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    
    this.$node.css('border', this.size+'px solid green');
    this.$node.css('border-radius', this.size+'px');
    if(this.size === 30){
      this.grow = false
    } else if(this.size === 10){
      this.grow = true;
    }
    if(this.grow){
      this.size++;
    } else {
      this.size--;
    }
  };