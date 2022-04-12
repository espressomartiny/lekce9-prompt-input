const sirka = 62;
const vyska = 70;
const hloubka = 80;

function zadejRozmery() {
  let sirkaPracky = parseFloat(prompt("Zadej šířku pračky v centimetrech"));
  let vyskaPracky = parseFloat(prompt("Zadej výšku pračky v centimetrech"));
  let hloubkaPracky = parseFloat(prompt("Zadej hloubku pračky v centimetrech"));

  pomerPracku();

  function pomerPracku() {
    if (sirka > sirkaPracky && vyska > vyskaPracky && hloubka > hloubkaPracky) {
      document.querySelector(".vysledek").textContent =
        "Vejde se ti tam, neboj.";
    } else if (
      sirka === sirkaPracky ||
      vyska === vyskaPracky ||
      hloubka === hloubkaPracky
    ) {
      document.querySelector(".vysledek").textContent = "Vleze se, ale těsně.";
    } else {
      document.querySelector(".vysledek").textContent = "Vopravdu se nevleze.";
      document.querySelector(".tlacitko").textContent = "Porovnat jinou pračku";
    }
  }
}
