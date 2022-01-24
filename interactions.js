'use strict';


document.addEventListener('DOMContentLoaded', function () {

    // *---------------  SQUARE 1  --------------* //

    let square1 = document.getElementById('main-box');
    let video1 = document.getElementById('video-one');
    let videoTitle1 = document.getElementById('video-title1')

    square1.addEventListener('mouseenter', function () {
        video1.classList.add('opacity1');
        videoTitle1.classList.add('display-title');
    });

    square1.addEventListener('mouseleave', function () {
        video1.classList.remove('opacity1');
        videoTitle1.classList.remove('display-title');
    })

    // TACTILE

    square1.addEventListener('touchend', function () {
        video1.classList.remove('opacity1');
        videoTitle1.classList.remove('display-title');
    })

    square1.addEventListener('touchstart', function () {
        video1.classList.add('opacity1');
        videoTitle1.classList.add('display-title');
    });

    // *---------------  SQUARE 2  --------------* //

    let square2 = document.getElementById('video-box2');
    let videoTitle2 = document.getElementById('video-title2')

    square2.addEventListener('mouseenter', function () {
        square2.classList.add('opacity1');
        videoTitle2.classList.add('display-title');
    });

    square2.addEventListener('mouseleave', function () {
        square2.classList.remove('opacity1');
        videoTitle2.classList.remove('display-title');
    })

    // TACTILE

    square2.addEventListener('touchstart', function () {
        square2.classList.add('opacity1');
        videoTitle2.classList.add('display-title');
    });

    square2.addEventListener('touchend', function () {
        square2.classList.remove('opacity1');
        videoTitle2.classList.remove('display-title');
    })

    // *---------------  SQUARE 3  --------------* //

    let square3 = document.getElementById('video-box3');
    let videoTitle3 = document.getElementById('video-title3')

    square3.addEventListener('mouseenter', function () {
        square3.classList.add('opacity1');
        videoTitle3.classList.add('display-title');
    });

    square3.addEventListener('mouseleave', function () {
        square3.classList.remove('opacity1');
        videoTitle3.classList.remove('display-title');
    })

    // TACTILE

    square3.addEventListener('touchstart', function () {
        square3.classList.add('opacity1');
        videoTitle3.classList.add('display-title');
    });

    square3.addEventListener('touchend', function () {
        square3.classList.remove('opacity1');
        videoTitle3.classList.remove('display-title');
    })

    // *---------------  SQUARE 4  --------------* //

    let square4 = document.getElementById('video-box4');
    let videoTitle4 = document.getElementById('video-title4')

    square4.addEventListener('mouseenter', function () {
        square4.classList.add('opacity1');
        videoTitle4.classList.add('display-title');
    });

    square4.addEventListener('mouseleave', function () {
        square4.classList.remove('opacity1');
        videoTitle4.classList.remove('display-title');
    })

    // TACTILE

    square4.addEventListener('touchstart', function () {
        square4.classList.add('opacity1');
        videoTitle4.classList.add('display-title');
    });

    square4.addEventListener('touchend', function () {
        square4.classList.remove('opacity1');
        videoTitle4.classList.remove('display-title');
    })

    // *---------------  SQUARE 5  --------------* //

    let square5 = document.getElementById('video-box5');
    let videoTitle5 = document.getElementById('video-title5')

    square5.addEventListener('mouseenter', function () {
        square5.classList.add('opacity1');
        videoTitle5.classList.add('display-title');
    });

    square5.addEventListener('mouseleave', function () {
        square5.classList.remove('opacity1');
        videoTitle5.classList.remove('display-title');
    })

    // TACTILE 

    square5.addEventListener('touchstart', function () {
        square5.classList.add('opacity1');
        videoTitle5.classList.add('display-title');
    });

    square5.addEventListener('touchend', function () {
        square5.classList.remove('opacity1');
        videoTitle5.classList.remove('display-title');
    })
})


// *-----------------------------------------------------* //
// *---------------  PLAY VIDEOS ON HOVER  --------------* //
// *-----------------------------------------------------* //


let videoOne = document.getElementById("video-one");
let videoTwo = document.getElementById("video-two");
let videoThree = document.getElementById("video-three");
let videoFour = document.getElementById("video-four");
let videoFive = document.getElementById("video-five"); 

function playVid1()
{ 
    videoOne.play();
    
} 

function pauseVid1()
{ 
    videoOne.pause();
}

function playVid2()
{ 
    videoTwo.play();
    videoOne.pause(); // to pause autoplayed video 1
} 

function pauseVid2()
{
    videoTwo.pause();
}

function playVid3()
{ 
    videoThree.play();
    videoOne.pause();
} 

function pauseVid3()
{
    videoThree.pause();
}

function playVid4()
{ 
    videoFour.play();
    videoOne.pause();
} 

function pauseVid4()
{
    videoFour.pause();
}

function playVid5()
{ 
    videoFive.play();
    videoOne.pause();
} 

function pauseVid5()
{
    videoFive.pause();
}


// *-----------------------------------------------------* //
// *----------  CHANGE VIDEO SOURCE ON MOBILE  ----------* //
// *-----------------------------------------------------* //



let mediaQuery = window.matchMedia("(max-width: 800px)")

function myFunction(mediaQuery) {
    if (mediaQuery.matches) { 
        videoOne.setAttribute('src', '/medias/liberte_sans_nom-tiny.mp4');
        videoTwo.setAttribute('src', '/medias/identite-tiny.mp4');
        videoThree.setAttribute('src', '/medias/leo_fifty_five-tiny.mp4');
        videoFour.setAttribute('src', '/medias/sombrero-tiny.mp4');
        videoFive.setAttribute('src', '/medias/jaia_rose-tiny.mp4');
    } else {
        videoOne.setAttribute('src', '/medias/liberte_sans_nom.mp4');
        videoTwo.setAttribute('src', '/medias/identite.mp4');
        videoThree.setAttribute('src', '/medias/leo_fifty_five.mp4');
        videoFour.setAttribute('src', '/medias/sombrero.mp4');
        videoFive.setAttribute('src', '/medias/jaia_rose.mp4');
    }
}
   
myFunction(mediaQuery) 
mediaQuery.addListener(myFunction)