/*const h2 = document.createElement("h2");
h2.textContent = "This content added by Javascript";

document.querySelector("body").appendChild(h2);*/

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollX > 18){
            $(".navBar").addClass(".zeller");
        }else{
            $(".navBar").removeClass(".zeller");
        }
    });

    // menu-navBar toggle script
    $(".menu-btn").click(function(){
        $(".navBar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });
});