'use strict';


document.addEventListener('DOMContentLoaded', function () {

    let square2 = document.getElementById('video-box2');
    let videoTitle2 = document.getElementById('video-title2')

    square2.addEventListener('mouseenter', function (e) {
        square2.classList.add('opacity');
        videoTitle2.classList.add('display-title');
    });

    square2.addEventListener('mouseleave', function () {
        square2.classList.remove('opacity');
        videoTitle2.classList.remove('display-title');
    })

    // *---------------  SQUARE 3  --------------* //

    let square3 = document.getElementById('video-box3');
    let videoTitle3 = document.getElementById('video-title3')

    square3.addEventListener('mouseenter', function (e) {
        square3.classList.add('opacity');
        videoTitle3.classList.add('display-title');
    });

    square3.addEventListener('mouseleave', function () {
        square3.classList.remove('opacity');
        videoTitle3.classList.remove('display-title');
    })

    // *---------------  SQUARE 4  --------------* //

    let square4 = document.getElementById('video-box4');
    let videoTitle4 = document.getElementById('video-title4')

    square4.addEventListener('mouseenter', function (e) {
        square4.classList.add('opacity');
        videoTitle4.classList.add('display-title');
    });

    square4.addEventListener('mouseleave', function () {
        square4.classList.remove('opacity');
        videoTitle4.classList.remove('display-title');
    })

    // *---------------  SQUARE 5  --------------* //

    let square5 = document.getElementById('video-box5');
    let videoTitle5 = document.getElementById('video-title5')

    square5.addEventListener('mouseenter', function (e) {
        square5.classList.add('opacity');
        videoTitle5.classList.add('display-title');
    });

    square5.addEventListener('mouseleave', function () {
        square5.classList.remove('opacity');
        videoTitle5.classList.remove('display-title');
    })
})




// *-----------------------------------------------------* //
// *---------------  PLAY VIDEOS ON HOVER  --------------* //
// *-----------------------------------------------------* //


let videoTwo = document.getElementById("video-two");
let videoThree = document.getElementById("video-three");
let videoFour = document.getElementById("video-four");
let videoFive = document.getElementById("video-five"); 

function playVid2()
{ 
    videoTwo.play();
} 

function pauseVid2()
{
    videoTwo.pause();
}

function playVid3()
{ 
    videoThree.play();
} 

function pauseVid3()
{
    videoThree.pause();
}

function playVid4()
{ 
    videoFour.play();
} 

function pauseVid4()
{
    videoFour.pause();
}

function playVid5()
{ 
    videoFive.play();
} 

function pauseVid5()
{
    videoFive.pause();
}
