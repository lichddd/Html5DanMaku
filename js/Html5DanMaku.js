

var tempdanmaku=[];

var d=new Date();
var video


$().ready(function () {
	
	
	video=$('#video_continer');
//	console.log(video);
	
	d.setHours(0,0,0,0);
	video.on('timeupdate',ontime);
//	video.on('play');
});




function ontime() {
		console.log(Math.floor(video.prop('currentTime')));
//		console.log(d);
		d.setHours(0,0,0,0);
		d.setMilliseconds(video.prop('currentTime')*1000);
		$('h1').text(d.toTimeString());
		
		var temparr=new Array();
		var i=0;
		while (danmaku.length>0){
			var danmakuO=danmaku[0];
			if(Math.floor(video.prop('currentTime'))==danmakuO.time)
			{
				
				var p;
				p=$('<p></p>');
				temparr.push(p);
				p.text(danmakuO.text);
				p.css('top',(i%25*10+10)+'px');
				p.css('left','640px');
				p.addClass('danmaku');
				
				

				p.appendTo('#danmaku_continer');
				i++;
				danmaku.shift();
			}
			else
			{
				break;
			}
		}

		
		for (var j = 0; j < temparr.length;j++) {
			
				var o= temparr[j];
				o.css('left','-'+o.width()+'px');
				
		}
//		setTimeout(function () {
//					p.css('left','-'+p.width()+'px');
//					
//				},1);
				
		setTimeout(function () {
					for (var j = 0; j < temparr.length;j++) {
			
				var o= temparr[j];
				o.remove();
				
		}
				},2000);
		
		
				

		
		
	}