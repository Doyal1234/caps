var textbox=Number(document.getElementById("Textbox").value);
var div1=document.getElementById("div1").value;
var weight=document.getElementById("weight").value;
var height=document.getElementById("height").value;
var x= document.getElementById("myAudio").value;

function submit() { 
    
    if(textbox.value>0) {
        
        
       
        if(textbox.value<=10) {
            document.getElementById("div1").style.visibility="visible";
            x.play();
        }
        else{
            document.getElementById("div1").style.visibility="hidden";
        }
        if(textbox.value>10&&textbox.value<=50) {
            window.location="second.html"
            
        }
        
    } 
   
        
        if(height.value<=0){
            x.pause()
            
            document.getElementById("div1").style.visibility="hidden";
            document.getElementById("third").style.visibility="visible";
        }


        
    if(weight.value<=0){
        x.pause()
        
        document.getElementById("div1").style.visibility="hidden";
        document.getElementById("second").style.visibility="visible";
    }

    if(textbox.value<=0){
        x.pause()
        
        document.getElementById("div1").style.visibility="hidden";
        document.getElementById("first").style.visibility="visible";
        
    }
    
}
function reset() {
document.getElementById("Textbox").value="";
document.getElementById("weight").value="";
document.getElementById("height").value="";
x.pause()

document.getElementById("div1").style.visibility="hidden";

}


