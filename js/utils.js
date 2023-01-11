// hide-and-show-abstract/bibtext
function lihideallbibs() {
    var el = document.getElementsByTagName("li") ;
    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "pub") {
            var bib = el[i].getElementsByTagName("pre") ;
            if (bib.length > 0) {
                bib [0] .style.display = 'none' ;
            }
        }
    }
}
function divhideallbibs(){
    var el = document.getElementsByTagName("div") ;
    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "pub") {
            var bib = el[i].getElementsByTagName("pre") ;
            if (bib.length > 0) {
                bib [0] .style.display = 'none' ;
            }
        }
    }
}
 
function togglebib(paperid){
    var paper = document.getElementById(paperid) ;
    var bib = paper.getElementsByTagName('pre') ;
    if (bib.length > 0) {
        if (bib [0] .style.display == 'none') {
            bib [0] .style.display = 'block' ;
        } else {
            bib [0] .style.display = 'none' ;
        }
    }
}

function divhideallabs(){
    var el = document.getElementsByTagName("div") ;
    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "pub") {
            var spans = el[i].getElementsByTagName("span") ;
            for (var j = 0; j < spans.length; ++j) {
                if (spans[j].className = "blurb") {
                  spans [j] .style.display = 'none' ;
                }
            }
        }
    }
}

function lihideallabs(){
    var el = document.getElementsByTagName("li") ;
    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "pub") {
            var spans = el[i].getElementsByTagName("span") ;
            for (var j = 0; j < spans.length; ++j) {
                if (spans[j].className = "blurb") {
                  spans [j] .style.display = 'none' ;
                }
            }
        }
    }
}

function toggleabs(paperid){
    var el = document.getElementById(paperid) ;
    var abs = el.getElementsByTagName('span') ;
    if (abs.length > 0) {
        if (abs [0] .style.display == 'none') {
            abs [0] .style.display = 'block' ;
        } else {
            abs [0] .style.display = 'none' ;
        }
    }
}

// go-to-top
$(function () {
	$(window).scroll(function(){  //只要窗口滚动,就触发下面代码 
		var scrollt = document.documentElement.scrollTop + document.body.scrollTop; //获取滚动后的高度 
		if( scrollt >200 ){  //判断滚动后高度超过200px,就显示  
			$("#gotop").fadeIn(400); //淡出     
		}else{      
			$("#gotop").stop().fadeOut(400); //如果返回或者没有超过,就淡入.必须加上stop()停止之前动画,否则会出现闪动   
		}
	});
	$("#gotop").click(function(){ //当点击标签的时候,使用animate在200毫秒的时间内,滚到顶部
			$("html,body").animate({scrollTop:"0px"},200);
	});
});

