var character = document.getElementById('character');
var blocks = document.getElementById('blocks');

function jump (){

    if(character.classList != 'animate'){
        character.classList.add('animate');
    }
    setTimeout(function(){
        character.classList.remove('animate');
    }, 500)
}

var checkDead = setInterval(function(){

    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    var blocksLeft = parseInt(window.getComputedStyle(blocks).getPropertyValue('left'));

    if (blocksLeft < 55 && blocksLeft > 0 && characterTop >= 130){
        blocks.style.animation = 'none';
        blocks.style.display = 'none';
        alert('Gotcha Sister Lily');
    }
}, 10)