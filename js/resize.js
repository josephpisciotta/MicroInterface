$(function(){
resize()

    $(window).resize(function(){
		resize()
    });
});

function resize(){
	$('#right_container').css({'width':(($(window).width())-300)+'px'});
	$('#right_container').css({'height':(($(window).height())-250)+'px'});
	$('#right_container').css({'top':(($('#top_container').height()))+'px'});
	$('#left_container').css({'height':(($(window).height())-250)+'px'});
	$('#searchbox').css({'width':(($(window).width())-120)+'px'});
	$('#json_tree').css({'height':(($('#left_container').height())-40)+'px'});
	$('#result_container').css({'height':(($('#right_container').height())-40)+'px'});
	$('#result_container').css({'width':(($('#right_container').width())-60)+'px'});
}
