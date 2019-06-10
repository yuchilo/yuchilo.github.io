//home page
//enter sound effect
function enter() {
    setTimeout(function() {
        var sound = document.getElementById('enter');
        console.log(sound.play());
    }, 0);
    setTimeout(function() {
        console.log(window.location.href = "index.html");
    }, 1500);
}


//Eyeshadow
var obt = document.querySelector('#eye1').style.display = 'none';
var obt = document.querySelector('#eye2').style.display = 'none';
var obt = document.querySelector('#eye3').style.display = 'none';
var obt = document.querySelector('#eye4').style.display = 'none';

var on = new Audio("puton.wav");
var off = new Audio("cancel.mp3");

function makeupbutton(item) {
    var obt = document.querySelector(item);
    if (obt.style.display == "none") {
        obt.style.display = "inline";
        on.play();
    } else {
        obt.style.display = "none";
        off.play();
    }
}

function eyeshadow1() {
    makeupbutton('#eye1');
}

function eyeshadow2() {
    makeupbutton('#eye2');
}

function eyeshadow3() {
    makeupbutton('#eye3');
}

function eyeshadow4() {
    makeupbutton('#eye4');
}

//Blush
var obt = document.querySelector('#blush1').style.display = 'none';
var obt = document.querySelector('#blush2').style.display = 'none';
var obt = document.querySelector('#blush3').style.display = 'none';
var obt = document.querySelector('#blush4').style.display = 'none';


function blush1() {
    makeupbutton('#blush1');
}

function blush2() {
    makeupbutton('#blush2');
}

function blush3() {
    makeupbutton('#blush3');
}

function blush4() {
    makeupbutton('#blush4');
}

//Lipstick
var obj = document.querySelector('#lip1').style.display = 'none';
var obj = document.querySelector('#lip2').style.display = 'none';
var obj = document.querySelector('#lip3').style.display = 'none';
var obj = document.querySelector('#lip4').style.display = 'none';
var obj = document.querySelector('#lip5').style.display = 'none';
var obj = document.querySelector('#lip6').style.display = 'none';

function lip1() {
    makeupbutton('#lip1');
}

function lip2() {
    makeupbutton('#lip2');
}

function lip3() {
    makeupbutton('#lip3');
}

function lip4() {
    makeupbutton('#lip4');
}

function lip5() {
    makeupbutton('#lip5');
}

function lip6() {
    makeupbutton('#lip6');
}

//Contact lenses
var obt = document.querySelector('#lens1').style.display = 'none';
var obt = document.querySelector('#lens2').style.display = 'none';
var obt = document.querySelector('#lens3').style.display = 'none';
var obt = document.querySelector('#lens4').style.display = 'none';


function lens1() {
    makeupbutton('#lens1');
}

function lens2() {
    makeupbutton('#lens2');
}

function lens3() {
    makeupbutton('#lens3');
}

function lens4() {
    makeupbutton('#lens4');
}

// Remover
// 重置網頁
function remove() {
    if (confirm("你確定要卸除整臉的妝容嗎！？")) {　　
        window.location.reload()
    }
}

function guide() {
    alert('按下化妝品按鈕，即可上妝\n再按一下，便可卸除\n若要卸除全臉妝容，可以點選最下排左側的卸妝水')
}

function music() {
    var audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
        audio.loop = true;
        $("#musicbt").click(function() {
            $("#chgicon").attr("src", "pic/sound.png");
        });
    } else {
        audio.pause();
        $("#musicbt").click(function() {
            $("#chgicon").attr("src", "pic/nosound.png");
        });
    }
}