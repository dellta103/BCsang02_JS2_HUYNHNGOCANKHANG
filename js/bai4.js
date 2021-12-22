var canh1=document.getElementById("c1")
var canh2=document.getElementById("c2")
var resultcv=document.getElementById("chuvi")
var resultdt=document.getElementById("dientich")
function tinhchuvi(){
    
    var cv=(canh1.value*1+canh2.value*1)*2
    
    resultcv.innerText="Chu vi là: " + cv
}
function tinhdientich(){
    var dt=(canh1.value*canh2.value)
    resultdt.innerText="Diện tích là: " + dt
}