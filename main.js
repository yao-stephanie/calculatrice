const SCREEN = document.querySelector(".nav");

function Display(text) {
  const SCREENCONTENT = SCREEN.value;
  SCREEN.value =
    SCREENCONTENT.length === 1 && SCREENCONTENT === "0"
      ? text
      : SCREENCONTENT + text;
  console.log(SCREENCONTENT);
}

// function equal() {
//   // SCREEN.value = eval(SCREEN.value)
//   const tab = SCREEN.value.split("");
//   for (let i = 0; i < tab.length; i++) {
//     // console.log(tab[i]=== '√')
//     if (tab[i] === "√") {
//       tab.splice(i, i +2, `Math.sqrt(${tab[i+1]})`);
//     }
//   }
//   console.log(tab.join(""));
//   SCREEN.value = eval(tab.join(""));
// }

function equal(){
  let  valeur = SCREEN.value+")";

 
  if(valeur.includes("√")){
    let racine =  valeur.replace("√","Math.sqrt(");
     console.log(racine)
     SCREEN.value = eval(racine);
  }
  else if(valeur.includes("cos")){
    let cosinus = valeur.replace("cos","Math.cos(");
    SCREEN.value = eval(cosinus);
  }
  else if(valeur.includes("sin")){
    let sinus = valeur.replace("sin","Math.sin(");
    SCREEN.value = eval(sinus);
  }
  else{
    let number = SCREEN.value;
    SCREEN.value = eval(number);
  }
 
}

function reset() {
  SCREEN.value = "0";
}

// function racineCarre(){

// }

// function keyboard(e){
//     const letters = ['1','2','3','4','5','6','7','8','9','0','+','-','*','/'];
//     const letter = String.fromCharCode(e.keyCode);
//     console.log(letter)
//     if(letters.includes(letter)){
//         Display(letter)
//     }else if(letter === '='){
//         equal()
//     }else if(letter === 'c'){
//         reset()
//     }
// }

// function suprimer(){
//     const tableau = SCREEN.value.split("");
//     tableau.pop();
//     tableau.length === 0 ? reset() : SCREEN.value = tableau.join("")
// }

// let caseOff = document.querySelector('.case-off');
// let caseOne = document.querySelector('.case-one');

// caseOff.addEventListener('click',eteindre)
// caseOne.addEventListener('click',allumer);

// function eteindre(){
//     SCREEN.style.backgroundColor = "#000";
//     SCREEN.style.color = "#000";
// }

// function allumer(){
//     SCREEN.style.backgroundColor = "#fdffb6";
//     SCREEN.style.color = "#000";
// }

// function chechnumber(number,table){
//     let letters = ''
//     let currentIndex = 0
//     let tableauSymbole =['+','-','*','/','&#x221A;']
//     for( let i = number; i < table.length;i++){
//         if(!isNaN(table[i])){
//             letters += table[i];
//             currentIndex = i
//         }
//         // else if(!isNaN(table[i])=='&#x221A;'){
//         //     letters += table[i];
//         //     currentIndex = i
//         // }
//         else if(tableauSymbole.includes(i)){
//         break
//     }
//         console.log(letters)
//         console.log(currentIndex)
//         return [letters , currentIndex]

//     }
// }
