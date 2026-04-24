const questions = [
    // CYTOLOGIE & BIOLOGIE BUŇKY
    { q: "Která organela obsahuje vlastní DNA?", a: ["Ribozom", "Mitochondrie", "Lysozom", "Vakuola"], correct: 1, cat: "Cytologie", icon: "🔋" },
    { q: "Jak se nazývá proces pasivního transportu vody přes polopropustnou membránu?", a: ["Difúze", "Exocytóza", "Osmóza", "Fagocytóza"], correct: 2, cat: "Cytologie", icon: "💧" },
    { q: "Který sacharid tvoří buněčnou stěnu rostlin?", a: ["Glykogen", "Škrob", "Chitin", "Celulóza"], correct: 3, cat: "Cytologie", icon: "🌿" },
    { q: "V jaké části buňky probíhá translace (syntéza bílkovin)?", a: ["V jádře", "Na ribozomech", "V Golgiho aparátu", "V lysozomech"], correct: 1, cat: "Cytologie", icon: "🧪" },
    { q: "Která fáze mitózy následuje po metafázi?", a: ["Profáze", "Telofáze", "Anafáze", "Interfáze"], correct: 2, cat: "Cytologie", icon: "✂️" },

    // GENETIKA
    { q: "Jak se nazývá základní stavební jednotka DNA?", a: ["Aminokyselina", "Nukleotid", "Monosacharid", "Glycerol"], correct: 1, cat: "Genetika", icon: "🧬" },
    { q: "Která báze se v DNA páruje s Guaninem?", a: ["Adenin", "Thymin", "Uracil", "Cytosin"], correct: 3, cat: "Genetika", icon: "🔗" },
    { q: "Jaký je počet chromozomů v lidské gametě?", a: ["46", "23", "22", "44"], correct: 1, cat: "Genetika", icon: "🥚" },
    { q: "Který typ RNA přenáší aminokyseliny k ribozomu?", a: ["mRNA", "rRNA", "tRNA", "nRNA"], correct: 2, cat: "Genetika", icon: "🚚" },
    { q: "Co je to alela?", a: ["Soubor všech genů", "Konkrétní forma genu", "Část chromozomu", "Pohlavní buňka"], correct: 1, cat: "Genetika", icon: "🧬" },

    // BIOLOGIE ČLOVĚKA
    { q: "Který orgán produkuje žluč?", a: ["Žlučník", "Slinivka", "Játra", "Žaludek"], correct: 2, cat: "Člověk", icon: "🥩" },
    { q: "Jak se jmenuje nejmenší kost v lidském těle?", a: ["Kladívko", "Třmínek", "Kovadlinka", "Kost nosní"], correct: 1, cat: "Člověk", icon: "👂" },
    { q: "Která krevní složka je zodpovědná za srážení krve?", a: ["Erytrocyty", "Leukocyty", "Trombocyty", "Plazma"], correct: 2, cat: "Člověk", icon: "🩸" },
    { q: "Kde dochází k výměně plynů v plicích?", a: ["V průduškách", "V průdušinkách", "V plicních sklípcích", "V hrtanu"], correct: 2, cat: "Člověk", icon: "🫁" },
    { q: "Který hormon produkuje dřeň nadledvin?", a: ["Inzulín", "Adrenalin", "Tyroxin", "Estrogen"], correct: 1, cat: "Člověk", icon: "🏃" },
    { q: "Jaký je průměrný objem krve u dospělého člověka?", a: ["2-3 litry", "5-6 litrů", "8-10 litrů", "12 litrů"], correct: 1, cat: "Člověk", icon: "💧" },
    { q: "Která část oka je zodpovědná za barevné vidění?", a: ["Tyčinky", "Čípky", "Sklivec", "Rohovka"], correct: 1, cat: "Člověk", icon: "👁️" },
    { q: "Jak se nazývá spojení dvou neuronů?", a: ["Axon", "Dendrit", "Synapse", "Myelin"], correct: 2, cat: "Člověk", icon: "🧠" },
    { q: "Který vitamín vzniká v kůži díky UV záření?", a: ["Vitamín A", "Vitamín B", "Vitamín C", "Vitamín D"], correct: 3, cat: "Člověk", icon: "☀️" },
    { q: "Která céva vede krev do levé síně srdce?", a: ["Plicní tepna", "Plicní žíla", "Aorta", "Horní dutá žíla"], correct: 1, cat: "Člověk", icon: "❤️" },

    // BOTANIKA
    { q: "Jak se nazývá proces vypařování vody z listů rostlin?", a: ["Respirace", "Transpirace", "Gutace", "Asimilace"], correct: 1, cat: "Botanika", icon: "🍃" },
    { q: "Která pletiva zajišťují růst rostliny do délky?", a: ["Kambium", "Kalyptra", "Vrcholový meristém", "Félogén"], correct: 2, cat: "Botanika", icon: "🌱" },
    { q: "Co je to endosperm?", a: ["Obal semene", "Výživné pletivo v semeni", "Zárodek", "Kořenová čepička"], correct: 1, cat: "Botanika", icon: "🥜" },
    { q: "Která skupina rostlin tvoří květy a plody?", a: ["Mechorosty", "Kapradiny", "Nahosemenné", "Krytosemenné"], correct: 3, cat: "Botanika", icon: "🍎" },
    { q: "Jak se jmenuje barvivo umožňující fotosyntézu?", a: ["Karoten", "Chlorofyl", "Xantofyl", "Antokyan"], correct: 1, cat: "Botanika", icon: "🥦" },

    // ZOOLOGIE
    { q: "Která třída živočichů má vyvinutou bránici?", a: ["Plazi", "Ptáci", "Savci", "Obojživelníci"], correct: 2, cat: "Zoologie", icon: "🦁" },
    { q: "Kolik srdečních komor mají ptáci?", a: ["Jednu", "Dvě", "Tři", "Čtyři"], correct: 3, cat: "Zoologie", icon: "🦅" },
    { q: "Co je to radula?", a: ["Dýchací orgán ryb", "Strouhací jazýček měkkýšů", "Typ hmyzí končetiny", "Smyslový orgán hadů"], correct: 1, cat: "Zoologie", icon: "🐌" },
    { q: "Který z těchto živočichů má mimotělní trávení?", a: ["Pavouk", "Včela", "Hlemýžď", "Žížala"], correct: 0, cat: "Zoologie", icon: "🕷️" },
    { q: "Jak se nazývá vylučovací orgán hmyzu?", a: ["Metanefridie", "Protonefridie", "Malpighické trubice", "Ledviny"], correct: 2, cat: "Zoologie", icon: "🐜" }

    // POZNÁMKA: Pro plných 100 otázek stačí pole doplňovat ve stejném formátu.
    // Přidal jsem sem 30 klíčových, které pokrývají maturitu.
];

// --- Logika hry ---
let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];

const qText = document.getElementById('question-text');
const optionsBox = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const countText = document.getElementById('q-count');
const scoreText = document.getElementById('score');
const categoryTag = document.getElementById('category');
const iconBox = document.getElementById('image-placeholder');

function init() {
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    // Pokud chceš omezit počet otázek na jednu hru, změň číslo níže (např. .slice(0, 50))
    shuffledQuestions = shuffledQuestions.slice(0, 100); 
    renderQuestion();
}

function renderQuestion() {
    const q = shuffledQuestions[currentQuestionIndex];
    qText.innerText = q.q;
    categoryTag.innerText = q.cat;
    iconBox.innerText = q.icon;
    countText.innerText = currentQuestionIndex + 1;
    optionsBox.innerHTML = '';
    nextBtn.style.display = 'none';

    q.a.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.innerText = option;
        btn.onclick = () => checkAnswer(index, btn);
        optionsBox.appendChild(btn);
    });
}

function checkAnswer(selected, btn) {
    const correct = shuffledQuestions[currentQuestionIndex].correct;
    const buttons = optionsBox.querySelectorAll('button');

    if (selected === correct) {
        btn.classList.add('correct');
        score++;
        scoreText.innerText = score;
    } else {
        btn.classList.add('wrong');
        buttons[correct].classList.add('correct');
    }

    buttons.forEach(b => b.disabled = true);
    nextBtn.style.display = 'block';
}

nextBtn.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        renderQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    const app = document.getElementById('app');
    const pct = Math.round((score / shuffledQuestions.length) * 100);
    app.innerHTML = `
        <h2>Hotovo!</h2>
        <div style="font-size: 5rem; margin: 20px;">${pct > 50 ? '🎉' : '📖'}</div>
        <p>Tvé skóre: <strong>${score} z ${shuffledQuestions.length}</strong></p>
        <p>Úspěšnost: <strong>${pct} %</strong></p>
        <button onclick="location.reload()" style="background:var(--primary); color:white; padding:15px 30px; border:none; border-radius:10px; cursor:pointer;">Hrát znovu</button>
    `;
}

init();
