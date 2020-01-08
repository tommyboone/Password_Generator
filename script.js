var howLong = prompt("How long do you want you password to be? (8-128 characters)");
    console.log(howLong);



var wantUpper = confirm("Do you want to use uppercase letters?");
    console.log(wantUpper);


var wantLower = confirm("Do you want to use lowercase letters?");
    console.log(wantLower);

var wantNum = confirm("Do you want to use numbers?");
    console.log(wantNum);

var wantSpec = confirm("Do you want to use special characters (;/,#%^& etc..)?");
    console.log(wantSpec);

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

function copyPass(){


}




copyPass()