//Prompt and confirm messages on page load.
var howLong = prompt("How long do you want you password to be? (8-128 characters)");
    console.log(howLong);
   if (howLong === ""){
        alert("You must select a password length!");    
    }

var wantUpper = confirm("Do you want to use uppercase letters?");
    console.log(wantUpper);


var wantLower = confirm("Do you want to use lowercase letters?");
    console.log(wantLower);

var wantNum = confirm("Do you want to use numbers?");
    console.log(wantNum);

var wantSpec = confirm("Do you want to use special characters (;/,#%^& etc..)?");
    console.log(wantSpec);


//Generate Password Function
function genPass(){
    var all = '';
    var num = "0123456789";
    var lowerCase= "abcdefghijklmnopqrstuvqxyz";
    var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var specChar= '!#$%"&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

   

    if (wantUpper === true){
        all +=  upperCase;
    }

    if (wantLower === true){
        all += lowerCase;
    }
    if (wantNum === true){
        all += num;
    }
    
    if (wantSpec === true){
        all += specChar;
    }
    
    if(wantUpper === false && wantLower === false && wantNum === false && wantSpec === false){
        alert("You must select at least one type of character!");
        return null;
    }
   

    var password = ''
    
        for(var i = 0; i < parseInt(howLong); i++){
        
            var randomPick = all[Math.floor(Math.random() * all.length)]
            
            password += randomPick;
        }
        console.log('This is your password', password);
             var blankInput = document.querySelector("#passBox");
             blankInput.value = password;
    
  

}
genPass()

//Copy Password to Clipboard function

var copyButton = document.querySelector("#copyButton");


function copyToClipBoard(event){
    copyButton.addEventListener("click",function(){
        alert("Password copied to clipboard!");
        console.log("clicked it!");
        
    var textArea = document.querySelector(".textarea");
    textArea.select();
    document.execCommand("copy");


    })
    


}


copyToClipBoard()