function soundclassfication(){
    navigator.mediaDevices.getUserMedia({audio:true , video:false});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ez7bX-1vX/model.json' , {probabilityThreshold:0.7} , modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
    
}

var dog = 0
var cat = 0

function gotResults(error , results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_label").innerHTML = 'The detected voice is of ' + results[0].label;
        document.getElementById("result_count").innerHTML = 'The detected voice count is ' + results[0].confidence;
    }
    

    


}