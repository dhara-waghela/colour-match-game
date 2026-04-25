function randomColor(){
    return{
        r:Math.floor(Math.random()*256),
        g:Math.floor(Math.random()*256),
        b:Math.floor(Math.random()*256)
    };
}

let target = randomColor();

document.getElementById("target").style.background =
`rgb(${target.r},${target.g},${target.b})`;

function updateColor(){

    let r = document.getElementById("r").value;
    let g = document.getElementById("g").value;
    let b = document.getElementById("b").value;

    document.getElementById("user").style.background =
    `rgb(${r},${g},${b})`;

    check();
}

document.getElementById("r").oninput = updateColor;
document.getElementById("g").oninput = updateColor;
document.getElementById("b").oninput = updateColor;

function check(){

    let r = document.getElementById("r").value;
    let g = document.getElementById("g").value;
    let b = document.getElementById("b").value;

    let diff =
        Math.abs(target.r-r) +
        Math.abs(target.g-g) +
        Math.abs(target.b-b);

    let accuracy =
        ((1 - diff/(255*3))*100).toFixed(2);

    document.getElementById("acc").innerText =
        accuracy + "%";
}

updateColor();
