var character = document.getElementById('character');
var block = document.getElementById('blocks');

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
    blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    if(blockLeft < 39 && blockLeft > 0 && characterTop>= 130){
        block.style.animation = 'none';
        block.style.display = 'none';
        alert('Gotcha Sister Lily')
    }
},10)