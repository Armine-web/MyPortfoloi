$(function(){
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        blockId = $(this).data('scroll');
        blockOffset =$(blockId).offset().top;
       
        $("html, body").animate({
            scrollTop: blockOffset -50
        }, 700);

    });
    $("[data-modal]").on("click", function(event){
        event.preventDefault();

        $(modal_resume).addClass('show');
    });
    $(modal_resume).on("click", function() {
        $(modal_resume).removeClass('show');

    });
});

    
    let noOfCharac = 0;
    let contents = document.querySelectorAll(".content");
    contents.forEach(content=>{
        if(content.textContent.length < noOfCharac){
            content.nextElementSibling.style.display="none";
        }
        else{
          let displayText = content.textContent.slice(0, noOfCharac);
          let moreText = content.textContent.slice(noOfCharac);
          content.innerHTML = `${displayText}<span class="dots"></span><span class = "hide more">${moreText}</span>`;

        }
    });
    
    function readMore(btn){
        let post = btn.parentElement;
        post.querySelector(".dots").classList.toggle("hide");
        post.querySelector(".more").classList.toggle("hide");
        btn.textContent=="Read Less" ? btn.textContent="Read More": btn.textContent="Read Less";
    }
 