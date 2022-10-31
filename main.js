//Bài 1
function Bai1(){
    var S=0;
    var i=0;
    while (S<10000){
        i++;
        S=S+i;    
    }
    var resultInt="<p>Số nguyên dương nhỏ nhất là: "+i+"</p>";
    document.getElementById("resultInt").innerHTML=resultInt;
}
Bai1();
//Bài 2
document.getElementById("btnCalSn").onclick=function(){
    var S=0;
    var x=document.getElementById("numberx").value*1;
    var n=document.getElementById('numbern').value*1;
    for (var i=1;i<n+1;i++){
        S=S+x**i;
    }
    var resultCalSn="<p>Tổng S(n) là: "+S+"</p>";
    document.getElementById("resultCalSn").innerHTML=resultCalSn;
}
//Bài 3
document.getElementById("btnCalFn").onclick=function(){
    var Fn=1;    
    var n=document.getElementById('number').value*1;
    for (var i=1;i<=n;i++){
        Fn=Fn*i;
    }
    var resultCalFn="<p> F(n) là: "+Fn+"</p>";
    document.getElementById("resultCalFn").innerHTML=resultCalFn;
}
//Bài 4
document.getElementById("btnPrintDiv").onclick=function(){
    var resultPrintDiv="";
    for(var i=1;i<=10;i++){
        if(i%2!==0){
            resultPrintDiv+="<p style='background-color:blue;'>"+"Div lẻ "+i+"</p>";
        }
        else{
            resultPrintDiv+="<p style='background-color:red;'>"+"Div chẵn "+i+"</p>";
        }
    }   
    document.getElementById("resultPrintDiv").innerHTML=resultPrintDiv;
}