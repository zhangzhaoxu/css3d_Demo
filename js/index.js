function stageMove() {

}

var m = stageMove.prototype;

m.to = function(obj,options) {
  var self = this;
  var style = '';
  for(var key in options) {
    if(key == "rotateX" || key == "rotateY" || key == "rotateZ")
      style += key + '(' + options[key] + 'deg) ';
    else
      style += key + '(' + options[key] + ')';
  }
  obj.css('transform', style);
}

m.damping = function(obj,translateZ) {
  var self = this;
  var dis = (250 - translateZ)/10;
  translateZ = translateZ > 250 ? 250 : translateZ + dis;
  self.to(obj,{'translateZ': translateZ});
}

var stageMove = new stageMove();



function stage(wrapper,forX) {
  this.init(wrapper,forX);
};

var s = stage.prototype;

s.init = function(wraper,forX) {

  var self = this;
  self.rotateXStart = 0;
  self.rotateYStart = 0;
  self.rotateXEnd = 0;
  self.rotateYEnd = 0;
  self.rotateY = 0;
  self.rotateX = 0;
  self.bodyWidth = document.body.clientWidth;
  self.bodyHeight = document.body.clientHeight;
  self.wraperCon = [];
  self.wraperCon.push(wraper);
  self.forX = forX;

  
  $('body')[0].addEventListener('touchstart',self.handleMouseStart.bind(self));
  $('body')[0].addEventListener('touchmove',self.handleMouseMove.bind(self));
  $('body')[0].addEventListener('touchend',self.handleMouseEnd.bind(self));
  

};

s.handleMouseStart = function(ev) {
  var self = this;
  ev.preventDefault();
  self.rotateXStart = ev.pageX || ev.touches[0].pageX;
  self.rotateYStart = ev.pageY || ev.touches[0].pageY;
}

s.handleMouseMove = function(ev) {
  var self = this;
  var addX = 0;
  var addY = 0;
  ev.preventDefault();
  self.rotateXEnd = ev.pageX || ev.touches[0].pageX;
  self.rotateYEnd = ev.pageY || ev.touches[0].pageY;
  addX = -(self.rotateXEnd - self.rotateXStart);
  addY =  (self.rotateYEnd - self.rotateYStart);
  var rotateY = addX/self.bodyWidth*160 + self.rotateY;
  var rotateX = addY/self.bodyHeight*60 + self.rotateX;
  if(rotateX > 30)
    rotateX = 30;
  else if(rotateX < -30) 
    rotateX = -30;
  self.wraperCon.forEach(function(wraper) {
    m.to(wraper,{'rotateY': rotateY, 'translate': '-50%,-50%'});
  });
  m.to(self.forX,{'translateZ': '580px','rotateY': '-9','rotateX': rotateX});
}

s.handleMouseEnd = function(ev) {
  var self = this;
  ev.preventDefault();
  self.rotateY = -(self.rotateXEnd - self.rotateXStart)/self.bodyWidth*160 + self.rotateY;
  self.rotateX = (self.rotateYEnd - self.rotateYStart)/self.bodyHeight*60 + self.rotateX;
  if(self.rotateX > 30) 
    self.rotateX = 30;
  else if(self.rotateX < -30)
    self.rotateX = -30;
};


var stage = new stage($('.j_ImgWrap1'),$(".j_control"));





