var color=generatecolors(6);
var selected=color[Math.floor(Math.random() * color.length)];
console.log(selected);
var pallete=document.querySelectorAll(".square")
var select=document.getElementById("select");
var jumbotron=document.querySelector(".jumbotron");
var message=document.querySelector("#message")
var PlayAgain=document.querySelector("#PlayAgain");
var reset=document.querySelector("#reset");
var countwin=document.querySelector("#win")
var countlose=document.querySelector("#lose");
var lose=0;
var win=0;

var mode=document.querySelectorAll(".mode");

var num=6;

select.textContent=selected;

for(var i=0;i<pallete.length;i++)
{
    // giving color to each pallete
    if(color[i])
    pallete[i].style.backgroundColor=color[i];
    else
    pallete[i].style.display="none";
    // checking which color is given to which pallete
    pallete[i].addEventListener("click",function(){
        var checkcolor=this.style.backgroundColor;
        if(checkcolor===selected&&PlayAgain.textContent==="New Colors")
        {
            win++;

            changecolor();
            message.textContent="Correct!";
            countwin.textContent=win;
            PlayAgain.textContent="Play Again!";
        }
        else 
        {
            if(PlayAgain.textContent==="New Colors")
            {
            lose++;
            this.style.backgroundColor="#252525";
            countlose.textContent=lose;
            message.textContent="Try Again!";
            }
        
        }
    });
    
    
}
PlayAgain.addEventListener("click",function(){
    color=generatecolors(num);
    selected=color[Math.floor(Math.random() * color.length)];
    
    newboard();
 
});
// Changes Each pallete color after we guess right color
function changecolor(){
    for(var i=0;i<pallete.length;i++)
    pallete[i].style.backgroundColor=selected;
    // jumbotron.style.backgroundColor=selected;
    
}
reset.addEventListener("click",function(){
    color=generatecolors(num);
    selected=color[Math.floor(Math.random() * color.length)];
    win=0;
    lose=0;
    countwin.textContent=win;
    countlose.textContent=lose;
    newboard();
 
});
// Changes Each pallete color after we guess right color


// Genrate an array of random colors
function generatecolors(num){
    var arr=[];
    for(var i=0;i<num;i++)
    arr.push(randomcolor());
    return arr;
}
function randomcolor(){
    var r=Math.floor(Math.random() * 256);
    var g=Math.floor(Math.random() * 256);
    var b=(Math.floor(Math.random() * 256)%(r+g)+r)%256;
    var c="rgb("+r+", "+g+", "+b+")";
    return c;


}
var ii=0;
for( ii=0;ii<3;ii++)
{ 
     console.log(ii);
    (mode[ii]).addEventListener( "click", function(){
        console.log(this.textContent);
       
       num=Number(this.value);
       console.log(num);
       
        
    for(var j=0;j<mode.length;j++)
    {
       
        mode[j].classList.remove("selected");
    }
    this.classList.add("selected");


    newboard();
    });

}

function newboard(){
    color=generatecolors(num);
    selected=color[Math.floor(Math.random() * color.length)];
    for(var i=0;i<pallete.length;i++)
    {
        if(color[i])
        {
        pallete[i].style.backgroundColor=color[i];
        pallete[i].style.display="block";
        }
        else
        pallete[i].style.display="none";
        
        
    }
    // jumbotron.style.backgroundColor="pink";
    PlayAgain.textContent="New Color Set";
    message.textContent="";
    select.textContent=selected;
    console.log(selected);



};


