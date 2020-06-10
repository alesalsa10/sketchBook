function createGrid(num){
    for (let i = 0; i < num * num; i++){
        $('.grid').append('<div class = "items"></div>');
    }
}
createGrid(16);

function fill(){
    $('.grid').on('mouseenter', '.items',function(){
        $(this).addClass('hovered');
    })
}
fill();

function chooseSize(){
    $(".grid-size").on('click',function(){
        let size = prompt('Type your preferred grip size');
        $('.grid').removeClass('grid-default');
        $('.items').remove();
        createGrid(size);
        $('.grid').css({
            'display': 'grid',
            'grid-template-columns': 'repeat(' + size + ', 1fr)',
            'grid-template-rows': 'repeat(' + size + ', 1fr)',
        })
        
    })
}
chooseSize();

function reset(){
    $('.reset').on('click',function(){
        $('.items').removeClass('hovered');
    })
    
}
reset();