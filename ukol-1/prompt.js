const sirka = 62;
const vyska = 70;
const hloubka = 80;

let sirkaPracky = prompt('Zadej šířku pračky v centimetrech');
let vyskaPracky = prompt('Zadej výšku pračky v centimetrech');
let hloubkaPracky = prompt('Zadej hloubku pračky v centimetrech');

pomerPracku()


function pomerPracku() {
    if(sirka > sirkaPracky && vyska > vyskaPracky && hloubka > hloubkaPracky) {
        alert("Vejde se ti tam, neboj.");
        
    }
    else if (sirka === sirkaPracky || vyska === vyskaPracky || hloubka === hloubkaPracky) {
        alert("Vleze se, ale těsně.");
        
    }
    else {
        alert("Vopravdu se nevleze.");
    }
    
  
}

