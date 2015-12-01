$(document).ready(function(){
	$('.modalbox').on('click',function(){
		var src = $(this).attr('src');
		var alt = $(this).attr('alt');
		//var img = '<img class="img-responsive" src="' + src + '" />';
		var img = '<p class="text-center"><img class="img-responsive" src="' + src + '" alt="' + alt + '" /></p>';
		$('#myModal').modal();
		$('#myModal').on('shown.bs.modal', function(){
			$('#myModal .modal-title').html(alt);
			$('#myModal .modal-body').html(img);
		});
		$('#myModal').on('hidden.bs.modal', function(){
			$('#myModal .modal-body').html('');
		});
	});
});
