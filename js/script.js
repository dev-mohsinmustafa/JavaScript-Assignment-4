//Note:Function kay pachy onclick lakny ki zaroorat ni kwe kay onclick hum nay pachy day diya hai.
var originalText = "I love my country Pakistan. <br> I like my city Faisalabad.<br> I love my Homeland."
// Original Statement Waly box may aya ay ye
document.getElementById("originalTextBox").innerHTML = originalText;
//Output kay lay hai.Note: saab bouuton kay click hony par output isy may show ho gi Hum nay parameter pass karna hai is => (output ) may.  
function showoutput(output){
    document.getElementById("output").innerHTML =output;
}
//LowerCase waly Button par ye function work ho ga.  
function lowerCase(){
    let lowerCaseText = originalText.toLowerCase();
    //document.getElementById("output").innerHTML =lowerCaseText; //ye code Hum ko bar bar use na karna pary is lay hum is ko parameter pass kar laky gy jo kay nachy laka hai
    showoutput(lowerCaseText)
}
//UpperCase waly Button par ye function work ho ga. 
function upperCase(){
    let upperCaseText = originalText.toUpperCase();
    showoutput(upperCaseText)
}
//Capitalize waly Button par ye function work ho da.
function capitalize(){
    let capitalizeText = '<span style = "text-transform:capitalize;">' + originalText + '</span>'
    showoutput(capitalizeText)
}
//Better Formatting waly Button par ye function work ho ga.
function betterFormatting(){
    let text = document.getElementById("inputText").value;   
    text = text.toLowerCase();
    if(!text){                // !text means kay agar user text na lakhy                  
        toastifyError("Please type your text.")
        return;
    }
    document.getElementById('output').style.textTransform = 'capitalize' ;
    showoutput(text);
}
//Print All Cities waly Button par ye function work ho ga.
var cities =["Faisalabad", "Lahore" , "Karachi" , "Islamabad" , "Burewala" , "Sheikhpura", "Kashmir" ]
function printAllCities(){
    document.getElementById("output").innerHTML = "";
    for( let i = 0; i < cities.length; i++){
        let num = i+1; // cities kay sath counting lakny kay lay
        document.getElementById("output").innerHTML += num + ')' +cities[i] + "<br>"
    }
}
//Add Your City in List waly Button par ye function work ho ga.
function addCity(){
    let city = document.getElementById("inputText").value;
    if(!city){
        toastifyError("Please type your city name.")
        return;   
    }
    cityFirstLetter = city.charAt(0).toUpperCase();
    cityAllLetters = city.slice(1).toLowerCase();
    
    cityWordInCapitalize = cityFirstLetter + cityAllLetters;
    
    let cityFound = false;
    for(let i = 0; i < cities.length; i++){
        if(cities[i] === cityWordInCapitalize){
            
            cityFound = true;
            let html = '<span style="color:red; font-size: 20px;">"' + cityWordInCapitalize + '"</span> is already in list. '
            showoutput(html)
        }
    }
    if(cityFound == false){
        
        cities.push(cityWordInCapitalize)
        let html = '<span style="color:green; font-size:20px;">"' + cityWordInCapitalize + '"</span> has been succesfully added in list '
        showoutput(html)
    }
    
}
//Check Your City in List waly Button par ye function work ho ga.
function checkCity(){
    let city = document.getElementById("inputText").value;
    if(!city){
        toastifyError("Please type your city name.")
        return;   
    }
    cityFirstLetter = city.charAt(0).toUpperCase();
    cityAllLetters = city.slice(1).toLowerCase();
    
    cityWordInCapitalize = cityFirstLetter + cityAllLetters;
    
    let cityFound = false;
    for(let i = 0; i < cities.length; i++){
        if(cities[i] === cityWordInCapitalize){
            
            cityFound = true;
            let html = '<span style="color:green; font-size: 20px;">"' + cityWordInCapitalize + '"</span> found in list. &#128151;';
            showoutput(html)
        }
    }
    if(cityFound == false){
        let html = 'Sorry &#128524; We could not find your city <span style="color:red; font-size:20px;">"' + cityWordInCapitalize + '"</span> Click add you city'
        showoutput(html)
    }
    
    
    
    
}
//Find This Word  waly Button par ye function work ho ga.
function findWord(){                            //is ki working kya hai:is ki working ye hai kay jo hamara original string hai hum nay os may sy kwe bi word find karana hai to hum type here text kay laky gy jasy hum (love) lakty hai or wo os ka index 2 baty ga isy tarha sy or baki bi.agar hum kwe or word tye karty hai to wo hum ko Does not exit in string output ma show karwa dy ga. 
    let newOriginalText = originalText.toLowerCase();
    let word = document.getElementById("inputText").value;
    if(!word){
        toastifyError("Please type a word for find.");
        return;
    }
    word = word.toLowerCase();
    let findword = newOriginalText.indexOf(word);
    if(findword !== -1){
        let html ='your word <span style="color:green; font-size:18px;">"' + word + '"</span> found at index: '+ findword;
        showoutput(html)
    }else{
        let html ='your word <span style="color:green; font-size:18px;">"' + word + '"</span> does not exist in the original string ';
        showoutput(html)
        
    }
}

//Relpace word waly Button par ye function work ho ga.
function replaceWord(){
    
    let newOriginalText = originalText.toLowerCase();
    let word = document.getElementById("inputText").value;
    if(!word){
        toastifyError("Please type a word for find.");
        return;
    }
    let replaceword = prompt("Enter a word that you want to replace with");
    if(!replaceword){
        alert("please type a word to replace it with" + word + ".");
        return;
    }
    word = word.toLowerCase();
    
    word = new RegExp(word,'g');
    
    replaceword = replaceword.toLowerCase();
    
    let replacewith =newOriginalText.replace(word, replaceword);
    showoutput(replaceword)
    
    
}
document.getElementById("clearOutputButton").onclick=function(){
    document.getElementById("output").innerHTML = " ";
    toastifySuccess("output / Result box has been clerad.")
}
function clearInput() {
    inputText.value = " ";
    toastifySuccess("Input box has been clerad.")
}


//Toastify Error
const toastifySuccess = (msg) =>{
    Toastify({
        text:msg,
        duration:3000,
        close:true,
        gravity:"bottom",
        position:"left",
        stopOnFocus:true,
        style:{
            background:"linear-gradient(to right,#1D976C,#93F9B9)",
        },
        
        
    }).showToast();
    
    
}

const toastifyError = (msg) =>{
    Toastify({
        text:msg,
        duration:3000,
        close:true,
        gravity:"bottom",
        position:"left",
        stopOnFocus:true,
        style:{
            background:"linear-gradient(to right,#93291e,#ed213a)",
        },
        
    }).showToast();
    
    
}



// clear output 
document.getElementById("clearOutputButton").onclick =function(){
    
    document.getElementById("output").innerHTML=" ";
    toastifySuccess("The output has been cleared")
    
    audio.play();  
    
    
}