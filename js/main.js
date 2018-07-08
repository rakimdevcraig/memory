// CLick on card
// Add selected
// If two cards have have selected - see if they are a match
// If they are a match add match class and remove select, so you can keep selecting

const game = {
  checkIfMatch: function(){
    if( $('.selected').eq(0).attr('class') == $('.selected').eq(1).attr('class') ){
      $('selected').addClass('matched').removeClass('selected')
    }else{
      $('.selected').removeClass('selected')
    }
  },
  checkEnd: function(){
    if( $('.card').length == $('.matched').length ){
      alert("Game Over!")
    }
  }
}

$('.card').on('click', function(){
  $(this).toggleClass('selected')
  if($('.selected').length == 2){
    game.checkIfMatch()
  }
  game.checkEnd()
});
