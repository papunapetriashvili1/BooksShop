var date = new Date();
date.setDate(new Date().getDate()+1);
var year = date.getFullYear();
var month = date.getMonth()+1;
month = (month < 10 ? "0" : "") + month;
var todayDate = String(date.getDate()).padStart(2,'0');
var datePattern = year + "-" + month + "-" + todayDate;
document.getElementById("formdate").value = datePattern;



var checks = document.querySelectorAll(".check");
var max = 2;
for (var i = 0; i < checks.length; i++)
checks[i].onclick = selectiveCheck;
function selectiveCheck (event) {
var checkedChecks = document.querySelectorAll(".check:checked");
if (checkedChecks.length >= max + 1)
return false;
}

var inp = document.getElementsByTagName("input");
var btn = document.getElementById("btn");
btn.disabled = "disabled";

function checkForm() {
for (var i = 0; i < inp.length; i++) {
    if (inp[i].checkValidity() == false) {
        btn.disabled = "disabled";
    } else {
        btn.disabled = false;
    }
}
}