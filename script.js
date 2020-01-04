let projectWrapperDiv = document.getElementById("projectsWrapper");
let projectItemsArray = [];
let modalsDiv = document.getElementById("modals");
let modalsArray = [];

projectItemsArray = projectWrapperDiv.children;
console.log(projectItemsArray);

modalsArray = modalsDiv.children;
console.log(modalsArray);

var modal = document.getElementById("modal020401");
var modal = document.getElementById("modal030101");
var modal = document.getElementById("modal030301");
var modal = document.getElementById("modal030401");

var span = document.getElementsByClassName("close")[0];

//projectItemsArray[0].onclick = function () {
//    modalsArray[0].style.display = "block";
//}

for (let i = 0, projlen = projectItemsArray.length; i < projlen; i++) {

    console.log(i);
    projectItemsArray[i].onclick = function () {
        j=i;
        console.log("click" + i);
        modalsArray[i].style.display = "block";
    }
    span.onclick = function () {
        console.log("span" + j);
        modalsArray[j].style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modalsArray[j]) {
            modalsArray[j].style.display = "none";
        }
    }
}


//for(var i = 0 ; i<projectWrapperDiv.children.length; i+=1){
//    projectItemsArray[i] = projectWrapperDiv.children[i];
//}
