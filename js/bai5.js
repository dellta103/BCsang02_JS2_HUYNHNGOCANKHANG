var inputNum=document.getElementById("so")
var result5=document.getElementById("ketqua5")
function tinhso(){
    var ten=Math.floor(inputNum.value/10)
    var unit=inputNum.value%10
    var bai5=(ten*1)+(unit*1)
    result5.innerText="Kết quả là: " + bai5
}