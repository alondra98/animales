// JavaScript Document
$(document).ready(function(e) {
    $('#principal').height($('#page').height());//calcular el alto de la pantalla del dispositivo
	document.addEventListener("deviceready",function(){
		//precarga el sonido
		audio=window.plugins.LowLatencyAudio;
		audio.preloadFX('puerco','audio/puerco.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('gallina','audio/gallina.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('gato','audio/gato.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('perico','audio/perico.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('perro','audio/perro.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('vaca','audio/vaca.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('aguila','audio/aguila.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('cocodrilo','audio/cocodrilo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('elefante','audio/elefante.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('hipopotamo','audio/hipopotamo.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('gorila','audio/gorila.mp3',function(){},function(e){alert('Error '+e);});
		audio.preloadFX('tigre','audio/tigre.mp3',function(){},function(e){alert('Error '+e);});
		//reproducir las notas
		$('.nota').bind('touchstart', function(){$(this).addclass('tocada');
		audio.play($(this).attr('id'));});
		$('.nota').bind('touchend',function(){$(this).removeClass('tocada');});
		
		},false);//deviceready
});//ready