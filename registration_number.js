var showInput = document.getElementById('showInput');

function myFunction() {
    var user = document.getElementById("myInput").value;
    var filter = user.toUpperCase();
    var plate = document.createElement('div');
    var t = document.createTextNode(filter);
    plate.classList.add('myReg');
    plate.appendChild(t);
    showInput.appendChild(plate);
    document.getElementById("myInput").value = "";
}

function checkTown(location) {

    for (var i = 0; i < showInput.children.length; i++) {
        if (showInput.children[i].textContent.startsWith(location)) {
                showInput.children[i].style.display = '';
        }else{
            showInput.children[i].style.display = 'none';
        }
    }
}

var x = document.getElementById("myFilter");
x.addEventListener("click", allTown);

function allTown(){
    if (document.getElementById('bellville').checked) {
        checkTown('CY');
        checkTown('cy');


    } else if(document.getElementById('capetown').checked) {
        checkTown('CA');
        checkTown('ca')

    } else if (document.getElementById('paarl').checked) {
        checkTown('CJ');
        checkTown('cj');

    } else if (document.getElementById('all').checked) {

    }
}
