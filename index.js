const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btn = document.getElementById("btn");
let passOne = document.getElementById("passOne");
let passTwo = document.getElementById("passTwo");



btn.addEventListener("click", function(){
    
    let passOneString = "";
    let passTwoString = "";
    
    for(let i= 0; i < 15; i++){
          passOneString +=  characters[Math.floor(Math.random() * characters.length)];
          passTwoString += characters[Math.floor(Math.random() * characters.length)];
      passOne.textContent = passOneString;
      passTwo.textContent = passTwoString;
         
    }
  
});


