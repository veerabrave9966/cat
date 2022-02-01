function setup(){
    canvas= createCanvas(300, 300)
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
}
function preload() {
    classifier = ml5.imageClassifier('DoodleNet');
    
}
function draw() {
    strokewieght=(8);
    stroke(0);
    if(mouseIsPressed) {
    line(p-mouseX, p-mouseY, mouseX, mouseY);
    }
}

function clearCanvas() {
    background("white");
}

function classifyCanvas(){
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results){
    if(error) {
        console.error(error);

    }
    console.log(results);
    document.getElementById('label').innerHTML = "Label: " + results[0].label;
   document.getElementById('confidence').innerHTML = "Confidence:" +Math.round(resuts[0].confidence * 100) + "%";
   
   utterThis = new SpeechSynthesisUtterance(results[0].label);
   synth.speak(utterThis);
}