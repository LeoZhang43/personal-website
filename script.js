const ulElement = document.getElementById("indicator");

const updateLabelChecked = (event) => {
    var ev = event || window.Event;
    var target = ev.target || ev.srcElement;
    // console.log(event.target.nodeName.toLowerCase());
    if(event.target.nodeName.toLowerCase()=='a'){
        var value = target.getAttribute('value');
        console.log(value);
        const curLabel = document.getElementById(value);
        curLabel.checked = true;
    }
}   

ulElement.addEventListener("click", ((e) => {
    updateLabelChecked(e);
}));