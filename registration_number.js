//var show = document.getElementById('display');

function myFunction() {
    var user = document.getElementById("myInput").value;
    var filter = user.toUpperCase();
    var plate = document.createElement('div');

    plate.classList.add('myReg');
    var t = document.createTextNode(filter);
    plate.appendChild(t);
    document.body.appendChild(plate);
    document.getElementById("myInput").value = "";
    regNumbers.push(plate);
}

function checkTown(location) {
    var fromTownReg = [];
    for (var i = 0; i < regNumbers.length; i++) {
        if (document.body.children[i].textContent.startsWith(location)) {
            // fromTownReg.push(regNumbers)
            document.body.children[i].style.display = 'block';
        }else{
            document.body.children[i].style.display = 'none';
        }
    }
}

function allTown(){
    if (document.getElementById('bellville').checked) {
        checkTown('CY');

    } else if(document.getElementById('capetown').checked) {
        checkTown('CA');

    } else if (document.getElementById('paarl').checked) {
        checkTown('CJ')

    } else if (document.getElementById('all').checked) {
        document.body.appendChild(plate);
}
}








/*
function

//assert.equal(fromWhere("CY"), "Bellville");

function checkTown(){

if (document.getElementById('bellville').checked) {

}
}


function myFunction() {
var input, filter, table, tr, td, i;
input = document.getElementById("myInput");
filter = input.value.toUpperCase();
table = document.getElementById("myTable");
tr = table.getElementsByTagName("tr");

for (i = 0; i < tr.length; i++) {
td = tr[i].getElementsByTagName("td")[0];
if (td) {
if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
tr[i].style.display = "";
} else {
tr[i].style.display = "none";
}
}
}

function myFunction() {
'use strict';
var user = document.getElementById('myInput').value;
var btn = document.createElement("li");

if (user.length > 0 && user !== null){
var t = document.createElement(user);
btn.appendChild(t);
document.body.appendChild(btn);
document.getElementById("myList").appendChild(btn);

} else{
alert('Please insert a valid registration number')
}
}
function regNumbers(){
  'use strict';

  var li = document.createElement('li');
  li.textContent = user;
  ul.appendChild(li);
}
}

function myFunction (){
var input, filter, div, ul;
input = document.getElementById("myInput");
filter = input.value.toUpperCase();
div = document.getElementsByTagName("showInput");
ul = document.getElementById("myList");

}
*/
