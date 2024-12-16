let btn = document.getElementById("btn");
let heading = document.getElementById("heading");
btn.onclick = () =>{
    if(document.body.style.backgroundColor === "white"){
        document.body.style.backgroundColor = "black";
         heading.style.color = "white";
        btn.textContent="Click to light Mode";
    }

    else{
        document.body.style.backgroundColor = "white";
        heading.style.color = "black";
        btn.textContent="Click to Dark Mode"
    }
    
}
