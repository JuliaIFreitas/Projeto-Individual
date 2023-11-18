    // div_kata.innerHTML = `
    // Selecione o kata:
    // <select name="katasopcoes" id="kataEscolhido">
    //     <option value="">Heian Shodan</option>
    //     <option value="">Heian Nida</option>
    //     <option value="">Heian Sandan</option>
    //     <option value="">Heian Yodan</option>
    //     <option value="">Heian Godan</option>
    //     <option value="">Tekki Shodan</option>
    //     <option value="">Tekki Nidan</option>
    //     <option value="">Tekki Sandan</option>
    //     <option value="">Bassai Dai</option>
    //     <option value="">Kanku Dai</option>
    //     <option value="">Empi</option>
    //     <option value="">Jion</option>
    //     <option value="">Jitte</option>
    //     <option value="">Hangetsu</option>
    //     <option value="">Gankaku</option>
    //     <option value="">Bassai Sho</option>
    //     <option value="">Kanku Sho</option>
    //     <option value="">Chinte</option>
    //     <option value="">Unsu</option>
    //     <option value="">Sochin</option>
    //     <option value="">Nijushiho</option>
    //     <option value="">Gojushiro Dai</option>
    //     <option value="">Gojushiro Sho</option>
    //     <option value="">Meikyo</option>
    //     <option value="">Jiin</option>
    //     <option value="">Wankan</option>
    // </select>
    // Digite o quanto você sabe (%): 
    // <input id="input_qtdSabeKata">
    // `;

function addKata() {
    var sabeKata = input_qtdSabeKata.value; 
    // var kataEscolhido = kataEscolhido.value;

    var sabeHShodan = (21 * sabeKata) / 100;
    var sabeHNidan = (26 * sabeKata) / 100;
    var sabeHSandan = (20 * sabeKata) / 100;
    var sabeHYodan = (27 * sabeKata) / 100;
    var sabeHGodan = (23 * sabeKata) / 100;
    var sabeTShodan = (29 * sabeKata) / 100;
    var sabeTNidan = (24 * sabeKata) / 100;
    var sabeTSandan = (36 * sabeKata) / 100;
    var sabeBDai = (42 * sabeKata) / 100;
    var sabeKDai = (65 * sabeKata) / 100;
    var sabeJitte = (24 * sabeKata) / 100;
    var sabeHangetsu = (41 * sabeKata) / 100;
    var sabeEmpi = (37 * sabeKata) / 100;
    var sabeGankaku = (42 * sabeKata) / 100;
    var sabeJion = (47 * sabeKata) / 100;
    var sabeBSho = (27 * sabeKata) / 100;
    var sabeKSho = (47 * sabeKata) / 100;
    var sabeChinte = (33 * sabeKata) / 100;
    var sabeUnsu = (24 * sabeKata) / 100;
    var sabeSochin = (37 * sabeKata) / 100;
    var sabeNijushiho = (34 * sabeKata) / 100;
    var sabeGDai = (54 * sabeKata) / 100;
    var sabeGSho = (65 * sabeKata) / 100;
    var sabeMeykio = (33 * sabeKata) / 100;
    var sabeJiin = (34 * sabeKata) / 100;
    var sabeWankan = (16 * sabeKata) / 100;

    if (kataEscolhido == `Heian Shodan`) {
        if (sabeHShodan <= 25) {
            div_kata.innerHTML += `
            Tá no começo, continue!
            `;
        } else if (sabeHShodan <= 50) {
            div_kata.innerHTML += `
            Metade já foi. 
            `;
        } else if (sabeHShodan <= 75) {
            div_kata.innerHTML += `
            Tá acabando! Não desista
            `;
        } else {
            div_kata.innerHTML += `
            Arrasou! Agora continue treinando para aperfeiçoar.
            `;
        }
    }
}