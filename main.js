


const SCREEN = document.querySelector('.nav');


function Display(text){
    const SREENCONTENT = SCREEN.value
    SCREEN.value = SREENCONTENT.length === 1 && SREENCONTENT ==='0' ?text:SREENCONTENT + text     
}

function equal(){
    // SCREEN.value = eval(SCREEN.value)
    const tab =  SCREEN.value.split("");
    for(let i = 0; i < tab.length; i++){
        // console.log(tab[i]=== '√')
        if(tab[i]=== '√'){
            const rest = chechnumber(i,tab)
            tab.splice(i,i + rest[1],` Math.sqrt(${rest[1]})`)
        }
    }
    console.log(tab.join(''))
    SCREEN.value = eval(tab.join(''))
}

function reset(){
    SCREEN.value ='0'
}


function keyboard(e){
    const letters = ['1','2','3','4','5','6','7','8','9','0','+','-','*','/'];
    const letter = String.fromCharCode(e.keyCode);
    console.log(letter)
    if(letters.includes(letter)){
        Display(letter)
    }else if(letter === '='){
        equal()
    }else if(letter === 'c'){
        reset()
    }
}

function suprimer(){
    const tableau = SCREEN.value.split("");
    tableau.pop();
    tableau.length === 0 ? reset() : SCREEN.value = tableau.join("")
}

let caseOff = document.querySelector('.case-off');
let caseOne = document.querySelector('.case-one');

caseOff.addEventListener('click',eteindre)
caseOne.addEventListener('click',allumer);

function eteindre(){
    SCREEN.style.backgroundColor = "#000";
    SCREEN.style.color = "#000";
}


function allumer(){
    SCREEN.style.backgroundColor = "#fdffb6";
    SCREEN.style.color = "#000";
}




function chechnumber(number,table){
    let letters = ''
    let currentIndex = 0
    let tableauSymbole =['+','-','*','/']
    for( let i = number; i < table.length;i++){
        if(!isNaN(table[i])){
            letters += table[i];
            currentIndex = i
        }else if(tableauSymbole.includes(i)){
            break
        }
        console.log(letters)
        console.log(currentIndex)
        return [letters , currentIndex]
    }
}
