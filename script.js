// 1. Najdeme si HTML prvky podle jejich ID a uložíme je do proměnných
const vstup = document.getElementById("userInput");
const tlacitko = document.getElementById("testButton");
const vystup = document.getElementById("result");

// 2. Přidáme "posluchač události" – kód uvnitř se spustí po kliknutí na tlačítko
tlacitko.addEventListener("click", function() {
    
    // Získáme text, který uživatel napsal, a odstraníme zbytečné mezery na krajích
    const tema = vstup.value.trim();

    // 3. Podmínka: Kontrola, zda uživatel něco zadal
    if (tema === "") {
        // Pokud je pole prázdné, vypíšeme chybu (červeně nebo prostým textem)
        vystup.textContent = "Chyba: Prosím, zadej téma kvízu!";
        vystup.style.color = "red";
    } else {
        // Pokud je vše v pořádku, zobrazíme potvrzení
        vystup.textContent = "Skvělé! Připravuji kvíz na téma: " + tema;
        vystup.style.color = "green";
        
        // Tady by v budoucnu následoval kód pro generování otázek
        console.log("Generuji kvíz pro: " + tema);
    }
});
