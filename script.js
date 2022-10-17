var character = document.getElementById('character');
var blocks = document.getElementById('blocks');

function jump(){
    if(character.classList != 'animate'){
        character.classList.add('animate');
    }
    setTimeout(function(){
        character.classList.remove('animate')
    }, 500)
}

var checkDead = setInterval(function(){

    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    var blockLeft = parseInt(window.getComputedStyle(blocks).getPropertyValue('left'));

    if(blockLeft < 20 && blockLeft > 0 && characterTop>= 150){
        blocks.style.animation = 'none';
        blocks.style.display = 'none';
        alert('You Lose!');
    }
}, 10)