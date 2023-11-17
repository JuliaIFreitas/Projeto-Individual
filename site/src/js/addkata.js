function addkata() {
    var sabeKata = input_qtdSabeKata.value; 
    var kataEscolhido = kataEscolhido.value;

    var heianShodan = 21;
    var sabeHShodan = (heianShodan * sabeKata) / 100;
    // nidan: 26
    // sandan 20
    // yodan 27
    // godan 23
    // tekki shodan 29
    // tekki nidan 24
    // tekki sandan 36
    // bassai dai 42
    // kanku dai 65
    // jitte 24
    // hangetsu 41
    // empi 37
    // gankaku 42
    // jion 47
    // bassai sho 27
    // kanku sho 47
    // chinte 33
    // unsu 24
    // sochin 37
    // nijushiho 34
    // gojushiho dai 54
    // gojushiho sho 65
    // meykio 33
    // jiin 34
    // wankan 16 

    div_kata.innerHTML = `
    Selecione o kata:
    <select name="katasopcoes" id="kataEscolhido">
        <option value="">Heian Shodan</option>
        <option value="">Heian Nida</option>
        <option value="">Heian Sandan</option>
        <option value="">Heian Yodan</option>
        <option value="">Heian Godan</option>
        <option value="">Tekki Shodan</option>
        <option value="">Tekki Nidan</option>
        <option value="">Tekki Sandan</option>
        <option value="">Bassai Dai</option>
        <option value="">Kanku Dai</option>
        <option value="">Empi</option>
        <option value="">Jion</option>
        <option value="">Jitte</option>
        <option value="">Hangetsu</option>
        <option value="">Gankaku</option>
        <option value="">Bassai Sho</option>
        <option value="">Kanku Sho</option>
        <option value="">Chinte</option>
        <option value="">Unsu</option>
        <option value="">Sochin</option>
        <option value="">Nijushiho</option>
        <option value="">Gojushiro Dai</option>
        <option value="">Gojushiro Sho</option>
        <option value="">Meikyo</option>
        <option value="">Jiin</option>
        <option value="">Wankan</option>
    </select>
    Digite o quanto você sabe (%): 
    <input id="input_qtdSabeKata">
    `;

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

//     heian shodan: 21
// nidan: 26
// sandan 20
// yodan 27
// godan 23
// tekki shodan 29
// tekki nidan 24
// tekki sandan 36
// bassai dai 42
// kanku dai 65
// jitte 24
// hangetsu 41
// empi 37
// gankaku 42
// jion 47
// bassai sho 27
// kanku sho 47
// chinte 33
// unsu 24
// sochin 37
// nijushiho 34
// gojushiho dai 54
// gojushiho sho 65
// meykio 33
// jiin 34
// wankan 16 
}