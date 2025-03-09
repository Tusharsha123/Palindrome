let div = document.querySelector("div");
let divone = document.createElement("div");
document.body.appendChild(divone);
divone.appendChild(div);

divone.style.cssText = `
background-color: #efefef;
margin: 100px auto;
width: 500px;
height: 400px;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #d3d4d5;
// padding-top: 50px;
// padding-bottom: 50px;
// padding-left: 20px;
// padding-right: 20px;
`;
div.style.cssText = `
margin-left: auto;
margin-right: auto;
width: 80%;
padding: 20px;
background-color: white;
border: 1px solid #ccc;
text-align: center;    
box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);

text-
`;

// Styling & More
let input = document.querySelector("input");
input.style.cssText = `
display: flex;
margin: 10px 0;
width: 90%;
padding: 10px;
`;

let button = document.querySelector("button");
button.style.cssText = `
width: 100%;
padding: 10px 15px;
font-size: 15px;
background-color: #007bff;
color: #f8fafe;
border: none;
border-radius: 5px;
cursor: pointer;
font-weight: bold;


`;

let p = document.querySelector("p");
p.style.fontSize = "18px";
p.style.fontWeight ="bold";


let resultP= document.createElement("p");
div.appendChild(p);
p.innerText = "";

button.onclick = palindrome;

// Palindrome Function
function palindrome(){

input.value = input.value.toLocaleLowerCase().trim();
input.value = input.value.replace(/[^a-z0-9]/g, "");
    if (input.value == "") {
        alert("please enter a value");
        return;
        
    }
let inputRev = input.value.split("").reverse().join("");
    if (inputRev === input.value){
        p.style.color = "#48a349";
        p.innerText = `"${input.value}" is a palindrome`;       
    }

    else {
        p.style.color = "#fd3a25";
        p.innerText = `"${input.value}" is not a palindrome` ;   
    }
};
