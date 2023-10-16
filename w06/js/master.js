var Body = {
  setBackgroundColor : function(color){
    $('body').css('background-color', color);
  },
  setColor : function(color){
    $('body').css('color', color);
  }
}
var Links = {
  setColor : function(color){
    $('a').css('color', color);
  }
}
var Btn = {
  setValue: function(value){
      $('.night_day').val(value);
  }
}
function nightDayHandler(){
  var target = document.querySelector('body');
  if($('.night_day').val()=='night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    Links.setColor('powderblue'); 
    Btn.setValue('day');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');        
    Links.setColor('blue');
    Btn.setValue('night');
  }
} 
var mainText = {
  setColor: function(color){
    $('#maintext').css('color', color);
  }
}
function fontColorHandler(self){
  mainText.setColor(self.value);
}