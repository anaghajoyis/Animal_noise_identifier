function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/5-FbO3OUv/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if (error){
        console.error(error);
    }else{
    console.log(results);
    var r = Math.floor((Math.random()*255)+1);
    var g = Math.floor((Math.random()*255)+1);
    var b = Math.floor((Math.random()*255)+1);
    document.getElementById("rec_sound").innerHTML=results[0].label;
    document.getElementById("rec_accuracy").innerHTML=((results[0].confidence*100).toFixed(2))+"%";
    document.getElementById("rec_sound").style.color="rgb("+r+","+g+","+b+")";
    document.getElementById("rec_accuracy").style.color="rgb("+r+","+g+","+b+")";
    var img=document.getElementById("ear1");
    if (results[0].label=="Mewing"){
        img.src="IMG-20220207-WA0004.jpg";
    } else if(results[0].label=="Barking"){
        img.src="https://wallpaperaccess.com/full/1101027.jpg";
    }else if(results[0].label=="Roaring"){
        img.src="https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg";
    }else if(results[0].label=="Mooing"){
        img.src="https://img-9gag-fun.9cache.com/photo/a07g14L_460s.jpg";
    }else{
        img.src="2022_02_22_0w4_Kleki.png";
    }
    }
}