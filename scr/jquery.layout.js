$(document).ready(function(){/* jQuery toggle layout */
    $('#btnToggle').click(function(){
        if ($(this).hasClass('on')) {
            //$('.container .col-md-6').addClass('col-md-4').removeClass('col-md-6');
            $('.container .col-lg-4').addClass('col-lg-6').removeClass('col-lg-4');
            $('#sidebar .col-lg-4').addClass('col-lg-2').removeClass('col-lg-4');
            $(this).removeClass('on');
        }
        else {
            //$('.container .col-md-4').addClass('col-md-6').removeClass('col-md-4');
            $('.container .col-lg-6').addClass('col-lg-4').removeClass('col-lg-6');
            $('#sidebar .col-lg-2').addClass('col-lg-4').removeClass('col-lg-2');
            $(this).addClass('on');
        }
    });
});
