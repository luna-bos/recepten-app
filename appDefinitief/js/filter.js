function filterCake(){
if ($('.btnCake').hasClass('clicked')){
    $('.hide').removeClass('hide');
    $('.clicked').removeClass('clicked');

}
   else if($('.panel-cake').hasClass('hide')){
        $('.panel-cake').removeClass('hide');
        $('.btnCake').addClass('clicked');
        $('.panel-koek').addClass('hide');
        $('.panel-overig').addClass('hide');
    }
    else{
        $('.btnCake').addClass('clicked');
        $('.panel-koek').addClass('hide');
        $('.panel-overig').addClass('hide');
    }

}

function filterKoek(){
    if ($('.btnKoek').hasClass('clicked')){
        $('.hide').removeClass('hide');
        $('.clicked').removeClass('clicked');
    }
       else if($('.panel-koek').hasClass('hide')){
            $('.panel-koek').removeClass('hide');
            $('.btnKoek').addClass('clicked');
            $('.panel-cake').addClass('hide');
            $('.panel-overig').addClass('hide');
        }
        else{
            $('.btnKoek').addClass('clicked');
            $('.panel-cake').addClass('hide');
            $('.panel-overig').addClass('hide');
        }
}

function filterOverig(){
    if ($('.btnOverig').hasClass('clicked')){
        $('.hide').removeClass('hide');
        $('.clicked').removeClass('clicked');
    }
       else if($('.panel-overig').hasClass('hide')){
            $('.panel-overig').removeClass('hide');
            $('.btnOverig').addClass('clicked');
            $('.panel-koek').addClass('hide');
            $('.panel-cake').addClass('hide');
        }
        else{
            $('.panel-koek').addClass('hide');
            $('.panel-cake').addClass('hide');
            $('.btnOverig').addClass('clicked');
        }
}