let langOption = document.querySelectorAll('select');
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