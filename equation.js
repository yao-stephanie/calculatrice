// function equation(a,b,c){
//     let discrim = (b * b) - (4*a*c)
//     console.log(discrim)
//     if(discrim === 0){
//         console.log(`l'equation admet un resultat`, -b/(2*a))
//     }else if( discrim >0){
//         console.log(`l'equation admet deux resultat`, -b + Math.sqrt(discrim)/(2*a) , -b - Math.sqrt(discrim)/(2*a ))
//     }else{
//         console.log('pas de solution')
//     }
// }

// equation(4,16,1);

function nombrePremier(n){
    while(n>=0 && n<=100){
        if(n/n === 1 && n/1 === n){
            console.log('le nombre est premier')
        }else{
            console.log('le nombre est pas premier')
        }
        n++
    }
}

nombrePremier(16)