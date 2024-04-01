const ulElement = document.getElementById("indicator");
const navBar = document.getElementById("nav-bar");
const sections = document.querySelectorAll('section');

let justClicked = false;

const updateLabelChecked = (event) => {
    var ev = event || window.Event;
    var target = ev.target || ev.srcElement;
    if(event.target.nodeName.toLowerCase()=='a'){
        var value = target.getAttribute('value');
        console.log("ulvalue" + value);
        const curLabel = document.getElementById(value);
        curLabel.checked = true;
    }
    justClicked = true;
    setTimeout(() => {
        justClicked = false;
    }, 500);
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
    justClicked = true;
    setTimeout(() => {
        justClicked = false;
    }, 500);
}

const options = {
    threshold: 0.8 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting && !justClicked){
            let[id, part] = entry.target.id.split('-');
            console.log(id + " " + part);
            const curLI = document.getElementById(`${id}-li`);
            curLI.click();
        }
    })
}, options);

sections.forEach(section => {
	observer.observe(section);
});

ulElement.addEventListener("click", ((e) => {
    updateLabelChecked(e);
}));

navBar.addEventListener("click", ((e) => {
    updateLiClick(e);
}));