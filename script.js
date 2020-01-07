let projectWrapperDiv = document.getElementById("projectsWrapper");
let projectItemsArray = [];
let modalsDiv = document.getElementById("modals");
let modalsArray = [];

//get all children from projectwrapper div and add in array
projectItemsArray = projectWrapperDiv.children;
console.log("[INFO] Found project cards: ");
console.log(projectItemsArray);

//get all children from modals div and add in array
modalsArray = modalsDiv.children;
console.log("[INFO] Found modals: ");
console.log(modalsArray);

//add all the x buttons in array
let span = document.getElementsByClassName("close");
console.log("[INFO] Found close buttons from modals: ");
console.log(span);

let j = 0;

//Every card will have same modal and span (ex projectItemsArray[0] has modalsArray[0] and span[0])
console.log("[INFO] Adding onclick events");
for (let i = 0, projlen = projectItemsArray.length; i < projlen; i++) {

    console.log(i);
    projectItemsArray[i].onclick = function () {
        //j becomes the clicked card's index to syncronize with the span and window click
        j=i;
        console.log("[INFO] Clicked on card " + i);
        modalsArray[i].style.display = "block";
    }
    span[i].onclick = function () {
        console.log("[INFO] Clicked on span " + j);
        modalsArray[j].style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modalsArray[j]) {
            console.log("[INFO] Clicked on window " + j);
            modalsArray[j].style.display = "none";
        }
    }
}


//for(var i = 0 ; i<projectWrapperDiv.children.length; i+=1){
//    projectItemsArray[i] = projectWrapperDiv.children[i];
//}
