document.getElementById("colorButton").addEventListener("click", function() {
    let color = Randcolorgen();
    document.body.style.backgroundColor = color;
    document.getElementById("colorcheck").textContent = color;
   
});

function Randcolorgen() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        console.log(color);
    }
    return color;
}