var danmaku=[
{time:1,text:'aaaaaaaaaa'},
{time:5,text:'bbbbbbbbb'},
{time:9,text:'cccccccccccc'}









];

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
		for (var i = 0; i < danmaku.length;) {
			if(Math.floor(video.prop('currentTime'))==danmaku[i].time)
			{
				var p=$('<p></p>');
				p.text(danmaku[i].text);
				p.css('top','100px');
				p.css('left','640px');
				

				p.appendTo('#danmaku_continer');
				p.addClass('danmaku');
				var sx =setTimeout(function () {
					
					p.css('left','-'+p.width()+'px');
				},1);
				
//				var st =setTimeout(function () {
//					p.remove();
//				},2000);
				danmaku.shift();
			}
			else
			{
				break;
			}
			
		}
	}