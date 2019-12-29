(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
								     m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
															  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-20492090-1', 'auto');
ga('send', 'pageview');

var links = document.querySelectorAll('a');
var left = null;
var right = null;
if (links.length == 3) {
    left = links[0].href;
    right = links[2].href;
} else if (links.length == 2) {
    if (links[0].href.endsWith('index.html')) {
	right = links[1].href;
    } else {
	left = links[0].href;
    }
}

function handle(event) {
    var key = event.keyCode;
    if (key == 37 && left != null) {
	window.location.href = left;
    } else if (key == 39 && right != null) {
	window.location.href = right;
    }
}

document.body.addEventListener('keydown', handle);

var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
	return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
	if ( xDiff < 0 && left != null ) {
	    window.location.href = left;
	} else if ( right != null ) {
	    window.location.href = right;
	}
    }

    xDown = null;
    yDown = null;                                             
};

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

