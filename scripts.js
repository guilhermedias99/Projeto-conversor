
    const convertButton = document.querySelector('.convert-button')
    const currencySelect = document.querySelector('.currency-select')

function convertValues(){
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert') // valor em rel
    const currencyValueConverted = document.querySelector('.currency-value') // outras moedas

    console.log(currencySelect.value)
    const dolarToday = 5.17
    const euroToday = 5.51
    const libraToday = 6.38

    
    if(currencySelect.value == 'dolar'){ // se o select estiver selecionando o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', { 
            style: 'currency',
            currency: 'USD',
        }).format(inputCurrencyValue / dolarToday) 
    }

    if (currencySelect.value == 'euro'){ // se o select estiver selecionando o valor de euro, entre aqui
         currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', { 
            style: 'currency',
            currency: 'EUR', 
        }).format(inputCurrencyValue/euroToday)  
}    

    if (currencySelect.value == 'libra') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-NZ', { 
            style: 'currency',
            currency: 'GBP', 
        }).format(inputCurrencyValue/libraToday) 

    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style:'currency',
            currency: 'BRL',
        }).format(inputCurrencyValue)

    }

    function changeCurrency (){
        const currencyName = document.getElementById('currency-name')
        const currencyImage = document.querySelector('.currency-img')
        
        if ( currencySelect.value == 'dolar') {
              currencyName.innerHTML = 'Dólar americano'
              currencyImage.src = './assets/dolar.png'
        }

        if ( currencySelect.value == 'euro') {
            currencyName.innerHTML = 'Euro'
            currencyImage.src = './assets/euro.png'
            }

            if ( currencySelect.value == 'libra') {
                currencyName.innerHTML = 'Libra'
                currencyImage.src = './assets/libra 1.png'
                }
            
            convertValues()
    }



currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)   