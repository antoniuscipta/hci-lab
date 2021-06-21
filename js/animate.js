

$(document).ready(() => {
    let index = 0;
    let slider = initSlider();
    $('#next').click(function (e) { 
        e.preventDefault();
        index = nextSlide(slider, index);
    });
    $('#prev').click(function (e) { 
        e.preventDefault();
        index = prevSlide(slider, index);
     });
});

function nextSlide(slider, index){
    $(slider[index]).removeClass('show');
    $(slider[index]).addClass('hide');
    let nextIdx = (index+1) % slider.length;
    $(slider[index]).fadeOut('slow', function(){
        $(slider[nextIdx]).fadeIn('slow');
    })
    
    
    // $(slider[nextIdx]).removeClass('hide');
    // $(slider[nextIdx]).addClass('show');
    return nextIdx;
}

function prevSlide(slider, index){
    // $(slider[index]).removeClass('show');
    // $(slider[index]).addClass('hide');
    let nextIdx = (index-1);
    if(nextIdx < 0)
    {
        nextIdx = slider.length - 1;
    }
    console.log(nextIdx);
    $(slider[index]).fadeOut('slow', function(){
        $(slider[nextIdx]).fadeIn('slow');
    })
    // $(slider[nextIdx]).removeClass('hide');
    // $(slider[nextIdx]).addClass('show');
    return nextIdx;
}

function initSlider(){
    console.log("test");
    let slider = $('.slider-detail');
    slider.addClass('hide');
    $(slider[0]).removeClass('hide');
    $(slider[0]).addClass('show');
    console.log(slider);
    return slider;
}