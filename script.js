window.onscroll = function(){
scrollFunction();
};

function scrollFunction(){
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
        document.getElementById("top").style.display = "block";
    }
    else{
        document.getElementById("top").style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function show(input){
    var chars = document.getElementsByClassName("character_tile");
    var i;
    var visible = false;

    if(input == "everything"){
        for(i = 0; i < chars.length; i++){
            chars[i].style.display = "";
        }
        return;
    }
    for(i = 0; i < chars.length; i++){
        var name = chars[i].className;
        if(!name.includes(input) && chars[i].style.display != "none"){
            visible = true;
            break;
        }
    }
    for(i = 0; i < chars.length; i++){
        var name = chars[i].className;
        if(!name.includes(input)){
            if(!visible){
                chars[i].style.display = "";
            }
            else{
                chars[i].style.display = "none";
            }
        }
        else{
            chars[i].style.display = "";
        }
    }
}
