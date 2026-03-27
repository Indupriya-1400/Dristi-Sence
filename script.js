const upload = document.getElementById("imageUpload");
const preview = document.getElementById("preview");

upload.addEventListener("change", function(event){

const file = event.target.files[0];

if(file){

const reader = new FileReader();

reader.onload = function(e){
preview.src = e.target.result;
preview.style.display = "block";
}

reader.readAsDataURL(file);

}

});
let analyzed = false;

function analyzeFlood(){

if(analyzed){
return; // stop re-running
}

analyzed = true;

let result = document.getElementById("result");

let random = Math.random();

if(random > 0.7){

document.getElementById("floodArea").innerText = "1800 km²";
document.getElementById("population").innerText = "520K";
document.getElementById("districts").innerText = "15";
document.getElementById("confidence").innerText = "0.91";

result.innerHTML = "⚠ Flood Risk Detected";
result.style.color = "red";

}

else if(random > 0.4){

document.getElementById("floodArea").innerText = "900 km²";
document.getElementById("population").innerText = "300K";
document.getElementById("districts").innerText = "8";
document.getElementById("confidence").innerText = "0.75";

result.innerHTML = "⚠ Moderate Flood Probability";
result.style.color = "orange";

}

else{

document.getElementById("floodArea").innerText = "200 km²";
document.getElementById("population").innerText = "80K";
document.getElementById("districts").innerText = "3";
document.getElementById("confidence").innerText = "0.93";

result.innerHTML = "✅ No Flood Risk";
result.style.color = "green";

}

}