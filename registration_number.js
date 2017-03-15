var showInput = document.getElementById('showInput');

function myFunction() {
    var user = document.getElementById("myInput").value;

    if (user.match(/^[A-Za-z\d\s-]+$/) && !user.startsWith(" ")){
        console.log(user.length);
        var filter = user.toUpperCase();
        var plate = document.createElement('div');
        plate.classList.add('myReg');
        plate.textContent = filter;
        showInput.appendChild(plate);
        document.getElementById("myInput").value = "";
    }else{
        alert("Please enter a valid Registration Number!");
    }
}

function checkTown(location) {

    for (var i = 0; i < showInput.children.length; i++) {
        if (showInput.children[i].textContent.startsWith(location)) {
                showInput.children[i].style.display = 'block';
        }else{
            showInput.children[i].style.display = 'none';
        }
    }
}

function allTown(){
    if (document.getElementById('bellville').checked) {
        checkTown('CY');

    } else if(document.getElementById('capetown').checked) {
        checkTown('CA');

    } else if (document.getElementById('paarl').checked) {
        checkTown('CJ');

    } else if (document.getElementById('all').checked) {
        for (i=0;i<showInput.children.length;i++){
              showInput.children[i].style.display = 'block';
          }
      }
}
