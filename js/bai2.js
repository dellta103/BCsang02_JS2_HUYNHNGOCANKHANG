var So1=document.getElementById("input1")
var So2=document.getElementById("input2")
var So3=document.getElementById("input3")
var So4=document.getElementById("input4")
var So5=document.getElementById("input5")
var result2=document.getElementById("ketqua2")
function tinhtrungbinh(){
    var bai2=((So1.value)*1+(So2.value)*1+(So3.value)*1+(So4.value)*1+(So5.value)*1)/5
    
    result2.innerText="Giá trị trung bình của 5 số được nhập là: " + bai2
}
