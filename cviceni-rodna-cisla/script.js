console.log('funguju!');

const rodneCisloOdUzivatele = prompt('Zadejte rodné číslo bez lomítka');
const digits = ['0','1','2','3','4','5','6','7','8','9'];

const isDigit = (cislo) =>{
    if(digits.includes(cislo)){
        return true
    }else{
        return false
    }
}





const rodneCisloOdUzivatelePole = rodneCisloOdUzivatele.split("");
const logInvalidCharacter = (rodneCisloOdUzivatelePole)=>{
    rodneCisloOdUzivatelePole.forEach( znak=> {
        if(isDigit(znak)){
        }else{
            console.log(znak);
        }
    });
}
console.log(logInvalidCharacter(rodneCisloOdUzivatelePole));

const validateCharacters =(rodneCisloOdUzivatelePole)=>{
    const result =[];
    

    rodneCisloOdUzivatelePole.forEach( znak=> {
        let jeCislo = isDigit(znak);
        let novyObjekt = `{ char: '${znak}', digit: '${jeCislo}' }` 
     
         result.push(novyObjekt)
    });
    console.log(result)
}
console.log(validateCharacters(rodneCisloOdUzivatelePole));

const formElm = document.querySelector('#kontrolaRodnehoCisla');
formElm.addEventListener('submit', (event)=>{
     event.preventDefault();

     const kontrolaZnaku = document.querySelector('#vypisRodnehoCisla');
     kontrolaZnaku.innerHTML = '';

     const rodneCislo = document.querySelector('#rodneCislo').value;
     const vyhodnoceni = document.querySelector('#vyhodnoceni');
      
     if(checkBirthID(rodneCislo)==='ok'){
        vyhodnoceni.innerHTML= 'V pořádku'
     }else{
        vyhodnoceni.innerHTML= 'V rodném číslu je chyba'
     };    

     const rodneCisloZFormulare = rodneCislo.split("");     

     rodneCisloZFormulare.forEach( znak=> {
         if(isDigit(znak)){
            //kontrolaZnaku.innerHTML+=`<div>${znak}</div>`;            
            //kontrolaZnaku.classList.add('platnaCislice')
            kontrolaZnaku.innerHTML+=`<span class="platnaCislice">${znak}</span>`;
         }else{
            //kontrolaZnaku.innerHTML+=`<div>${znak}</div>`;  
            //kontrolaZnaku.classList.add('neplatnaCislice')  
            kontrolaZnaku.innerHTML+=`<span class="neplatnaCislice">${znak}</span>`; 
         }
     
    });    
})





const checkBirthID =(rodneCisloOdUzivatele)=>{
    const delka = rodneCisloOdUzivatele.length;
    if(delka===10){
        console.log('Zadané rodné číslo má přesně deset znaků.');
    }else{
        console.log('Uživatel zadal rodné číslo neplatné délky');
        return 'invalidLength';
    }

    const jeCislo =  Number.isInteger(Number(rodneCisloOdUzivatele));
    if(jeCislo===true){
        console.log('Rodné číslo je celé číslo');
    }else{
        console.log('Rodné číslo obsahuje nepovolené znaky');
        return 'notANumber';
    }

    if(Number(rodneCisloOdUzivatele)%11===0 ){
        console.log('Rodné číslo je dělitelné 11');
    }else{
        console.log('Rodné číslo není dělitelné 11');
        return 'failedChecksum';
    }

    if(delka===10 && Number(rodneCisloOdUzivatele)%11===0 && jeCislo===true){
        console.log('Zadané rodné číslo je platné');
        return 'ok'
    }else{
        console.log('Uživatelem zadané rodné číslo není platné');
    }
}
// 

