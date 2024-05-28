let langOption = document.querySelectorAll('select');
let fromText = document.querySelector('.ftext');
let transText = document.querySelector('.toTranslate');
let fromVoice = document.querySelector('.from');
let toVoice = document.querySelector('.to');
let copy = document.querySelector('.cpy');
let count = document.querySelector('.code_length');
let transfer = document.querySelector('.tfer');


langOption.forEach((get, con) =>{
    for (let countryCode in language){
        let selected;
        if (con==0 && countryCode == "en-GB"){
            selected = "selected";
        }
        else if(con==1 && countryCode == "es-ES"){
            selected = "selected";
        }
        let option = `<option value= "${countryCode}" ${selected}>${language[countryCode]}</option>`;
        get.insertAdjacentHTML('beforeend', option);
    }
})
fromText.addEventListener('input', function(){
    let content = fromText.value;
    fromContent = langOption[0].value;
    transContent = langOption[1].value;

    let transLink = `https://api.mymemory.translated.net/get?q=${content}!&langpair=${fromContent}|${transContent}`;
   
    fetch(transLink).then(translate => translate.json()).then(data => {
       transText.value = data.responseData.translatedText;
    })

})
fromVoice.addEventListener('click', function(){
    let fromTalk;
    fromTalk = new SpeechSynthesisUtterance(fromText.value);
    fromTalk.lang = langOption[0].value;
    speechSynthesis.speak(fromTalk)
})
toVoice.addEventListener('click', function(){
    let transTalk;
    transTalk = new SpeechSynthesisUtterance(transText.value);
    transTalk.lang = langOption[1].value;
    speechSynthesis.speak(transTalk)
})
copy.addEventListener('click', function(){
    navigator.clipboard.writeText(transText.value);
})
fromText.addEventListener('keyup', function(){
    count.innerHTML = `${fromText.value.length}/5000`;

})
transfer.addEventListener('click', function(){
    let temp = fromText.value;
    fromText.value = transText.value;
    transText.value = temp;

    let tempLang = langOption[0].value;
    langOption[0].value = langOption[1].value;
    langOption[1].value = tempLang;

})