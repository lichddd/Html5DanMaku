

var tempdanmaku=[];

var d=new Date();
var video;
var canvas;
var stage2d;

$().ready(function () {
	
	
	video=$('#video_continer');
//	console.log(video);
	
	d.setHours(0,0,0,0);
//	video.on('timeupdate',ontime);
	video.on('timeupdate',ontime2);
//	video.on('play');
	canvas=document.getElementById('danmaku_canvas');
	stage2d=new createjs.Stage(canvas);


	createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick", tick);
	

	

});
function tick(event) {



		for(var i=0;i<stage2d.getNumChildren();i++)
      	{
      		var txt=stage2d.getChildAt(i);
            txt.x-=5;
            if(txt.x<0)
            {
            	stage2d.removeChild(txt);
            }
      	}
		
		// update the stage:
		stage2d.update(event);
	}


var canvastexts=new Array();


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
				p.css('left',(50*Math.floor(i/25)+640)+'px');
				p.addClass('danmaku');
				
				

				p.appendTo('#danmaku_continer');
				i++;
				
				
				
				
				
				txt = new createjs.Text(danmakuO.text, "16px  Arial", "#FFF");
				txt.x = (50*Math.floor(i/25)+640);
				txt.y = (i%25*10+10);
//				txt.rotation = 20;
				stage2d.addChild(txt);
//				canvastexts.push(txt);
				
				
				
				
				
				danmaku.shift();
//				p.css('left','-'+o.width()+'px');
			}
			else
			{
				break;
			}
		}

		
		for (var j = 0; j < temparr.length;j++) {

				temparr[j].css('left','-'+temparr[j].width()+'px');

				
		}
		setTimeout(function () {
				for (var j = 0; j < temparr.length;j++) {
				temparr[j].remove();
				
		}
				},3000);
		
		

		

		
		
	}




function ontime2() {
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
				

				i++;
				
				
				
				
				
				txt = new createjs.Text(danmakuO.text, "16px  Arial", "#FFF");
				txt.x = (50*Math.floor(i/25)+640);
				txt.y = (i%25*10+10);

				stage2d.addChild(txt);

				danmaku.shift();

			}
			else
			{
				break;
			}
		}

	}