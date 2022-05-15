// clicar no simbolo de like
//1
$('#like_icon_1').on('click', () => {

  let qtd = $("#like_count_1").text();

  if ($('#like_icon_1').data('liked') == false){ //da o like
    qtd++;
    $("#like_count_1").text(qtd)
    $('#like_icon_1').data('liked', true)
    $('#like_icon_1').removeClass('fa-thumbs-o-up')
    $('#like_icon_1').addClass('fa-thumbs-up')
    if ($('#dislike_icon_1').data('disliked') == true){
      let dislike_qtd = $("#dislike_count_1").text()
      dislike_qtd--;
      $("#dislike_count_1").text(dislike_qtd)
      $('#dislike_icon_1').data('disliked', false)
      $('#dislike_icon_1').removeClass('fa-thumbs-down')
      $('#dislike_icon_1').addClass('fa-thumbs-o-down')
    }
  }
  else{ //remove o like
    qtd--;
    $("#like_count_1").text(qtd)
    $('#like_icon_1').data('liked', false)
    $('#like_icon_1').removeClass('fa-thumbs-up')
    $('#like_icon_1').addClass('fa-thumbs-o-up')
  }
})

//2
$('#like_icon_2').on('click', () => {

  let qtd = $("#like_count_2").text();

  if ($('#like_icon_2').data('liked') == false){ //da o like
    qtd++;
    $("#like_count_2").text(qtd)
    $('#like_icon_2').data('liked', true)
    $('#like_icon_2').removeClass('fa-thumbs-o-up')
    $('#like_icon_2').addClass('fa-thumbs-up')
    if ($('#dislike_icon_2').data('disliked') == true){
      let dislike_qtd = $("#dislike_count_2").text()
      dislike_qtd--;
      $("#dislike_count_2").text(dislike_qtd)
      $('#dislike_icon_2').data('disliked', false)
      $('#dislike_icon_2').removeClass('fa-thumbs-down')
      $('#dislike_icon_2').addClass('fa-thumbs-o-down')
    }
  }
  else{ //remove o like
    qtd--;
    $("#like_count_2").text(qtd)
    $('#like_icon_2').data('liked', false)
    $('#like_icon_2').removeClass('fa-thumbs-up')
    $('#like_icon_2').addClass('fa-thumbs-o-up')
  }
})

//3
$('#like_icon_3').on('click', () => {

  let qtd = $("#like_count_3").text();

  if ($('#like_icon_3').data('liked') == false){ //da o like
    qtd++;
    $("#like_count_3").text(qtd)
    $('#like_icon_3').data('liked', true)
    $('#like_icon_3').removeClass('fa-thumbs-o-up')
    $('#like_icon_3').addClass('fa-thumbs-up')
    if ($('#dislike_icon_3').data('disliked') == true){
      let dislike_qtd = $("#dislike_count_3").text()
      dislike_qtd--;
      $("#dislike_count_3").text(dislike_qtd)
      $('#dislike_icon_3').data('disliked', false)
      $('#dislike_icon_3').removeClass('fa-thumbs-down')
      $('#dislike_icon_3').addClass('fa-thumbs-o-down')
    }
  }
  else{ //remove o like
    qtd--;
    $("#like_count_3").text(qtd)
    $('#like_icon_3').data('liked', false)
    $('#like_icon_3').removeClass('fa-thumbs-up')
    $('#like_icon_3').addClass('fa-thumbs-o-up')
  }
})



//clicar no simbolo de dislike
//1
$('#dislike_icon_1').on('click', () => {

  let qtd = $("#dislike_count_1").text();

  if ($('#dislike_icon_1').data('disliked') == false){ //da o like
    qtd++;
    $("#dislike_count_1").text(qtd)
    $('#dislike_icon_1').data('disliked', true)
    $('#dislike_icon_1').removeClass('fa-thumbs-o-down')
    $('#dislike_icon_1').addClass('fa-thumbs-down')
    if ($('#like_icon_1').data('liked') == true){
      let like_qtd = $("#like_count_1").text()
      like_qtd--;
      $("#like_count_1").text(like_qtd)
      $('#like_icon_1').data('liked', false)
      $('#like_icon_1').removeClass('fa-thumbs-up')
      $('#like_icon_1').addClass('fa-thumbs-o-up')
    }
  }
  else{ //remove o like
    qtd--;
    $("#dislike_count_1").text(qtd)
    $('#dislike_icon_1').data('disliked', false)
    $('#dislike_icon_1').removeClass('fa-thumbs-down')
    $('#dislike_icon_1').addClass('fa-thumbs-o-down')
  }
})

//2
$('#dislike_icon_2').on('click', () => {

  let qtd = $("#dislike_count_2").text();

  if ($('#dislike_icon_2').data('disliked') == false){ //da o like
    qtd++;
    $("#dislike_count_2").text(qtd)
    $('#dislike_icon_2').data('disliked', true)
    $('#dislike_icon_2').removeClass('fa-thumbs-o-down')
    $('#dislike_icon_2').addClass('fa-thumbs-down')
    if ($('#like_icon_2').data('liked') == true){
      let like_qtd = $("#like_count_2").text()
      like_qtd--;
      $("#like_count_2").text(like_qtd)
      $('#like_icon_2').data('liked', false)
      $('#like_icon_2').removeClass('fa-thumbs-up')
      $('#like_icon_2').addClass('fa-thumbs-o-up')
    }
  }
  else{ //remove o like
    qtd--;
    $("#dislike_count_2").text(qtd)
    $('#dislike_icon_2').data('disliked', false)
    $('#dislike_icon_2').removeClass('fa-thumbs-down')
    $('#dislike_icon_2').addClass('fa-thumbs-o-down')
  }
})

//3
$('#dislike_icon_3').on('click', () => {

  let qtd = $("#dislike_count_3").text();

  if ($('#dislike_icon_3').data('disliked') == false){ //da o like
    qtd++;
    $("#dislike_count_3").text(qtd)
    $('#dislike_icon_3').data('disliked', true)
    $('#dislike_icon_3').removeClass('fa-thumbs-o-down')
    $('#dislike_icon_3').addClass('fa-thumbs-down')
    if ($('#like_icon_3').data('liked') == true){
      let like_qtd = $("#like_count_3").text()
      like_qtd--;
      $("#like_count_3").text(like_qtd)
      $('#like_icon_3').data('liked', false)
      $('#like_icon_3').removeClass('fa-thumbs-up')
      $('#like_icon_3').addClass('fa-thumbs-o-up')
    }
  }
  else{ //remove o like
    qtd--;
    $("#dislike_count_3").text(qtd)
    $('#dislike_icon_3').data('disliked', false)
    $('#dislike_icon_3').removeClass('fa-thumbs-down')
    $('#dislike_icon_3').addClass('fa-thumbs-o-down')
  }
})