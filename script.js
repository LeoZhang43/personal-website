const ulElement = document.getElementById("indicator");
const navBar = document.getElementById("nav-bar");

const updateLabelChecked = (event) => {
    var ev = event || window.Event;
    var target = ev.target || ev.srcElement;
    // console.log(event.target.nodeName.toLowerCase());
    if(event.target.nodeName.toLowerCase()=='a'){
        var value = target.getAttribute('value');
        // console.log(value);
        const curLabel = document.getElementById(value);
        curLabel.checked = true;
    }
}   

const updateLiClick = (event) =>{
    var ev = event || window.Event;
    var target = ev.target || ev.srcElement;
    if(event.target.nodeName.toLowerCase()=='label'){
        var value = target.getAttribute('value');
        // console.log(value);
        const curLI = document.getElementById(`${value}-li`);
        curLI.click();
    }
}

ulElement.addEventListener("click", ((e) => {
    updateLabelChecked(e);
}));

navBar.addEventListener("click", ((e) => {
    updateLiClick(e);
}));