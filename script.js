// 1. Výběr prvků z HTML
const vstup = document.getElementById("userInput");
const tlacitko = document.getElementById("testButton");
const vystup = document.getElementById("result");

// 2. Funkce, která se spustí po kliknutí
tlacitko.addEventListener("click", function() {
    const tema = vstup.value.trim();

    if (tema === "") {
        vystup.innerHTML = "<p style='color:red'>Chyba: Zadej téma!</p>";
    } else {
        // Zavoláme naši novou funkci pro vytvoření kvízu
        generujKviz(tema);
    }
});

// 3. Nová funkce, která vytvoří obsah kvízu
function generujKviz(nazevTemy) {
    // Připravíme si text s nadpisem a prvními otázkami
    // Používáme zpětné uvozovky ` (vedle klávesy Enter), abychom mohli psát na více řádků
    let htmlObsah = `
        <h3>Kvíz na téma: ${nazevTemy}</h3>
        <p>1. Co je podle tebe nejdůležitější u tématu ${nazevTemy}?</p>
        <input type="text" placeholder="Tvoje odpověď...">
        
        <p>2. Jak dlouho se tématu ${nazevTemy} věnuješ?</p>
        <input type="radio" name="q2"> Krátce 
        <input type="radio" name="q2"> Dlouho
        
        <br><br>
        <button onclick="alert('Kvíz odeslán!')">Odeslat kvíz</button>
    `;

    // Vložíme vytvořený kód do připraveného místa na stránce
    vystup.innerHTML = htmlObsah;
    vystup.style.color = "black";
}
