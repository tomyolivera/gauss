$("#btn").click(() => {
    
    const buscarEnArray = (aBuscar, arr) => {
        let i = 0, found = false;

        while (i < arr.length && !found) {
            if(aBuscar == arr[i]) found = true;

            i++;
        }

        return found;
    }

    let divisoresX3 = [1];
    let divisoresIND = [1];
    let divisores = [];

    let numero3 = parseInt($("#numero3").val());
    let numero2 = parseInt($("#numero2").val());
    let numero1 = parseInt($("#numero1").val());
    let ind = parseInt($("#IND").val());
    
    for (i = 1; i <= numero3; i++) {
        if (numero3 % i === 0) {
            divisoresX3.push(i);
        }
    }

    for (i = 1; i <= ind; i++) {
        if (ind % i === 0) {
            divisoresIND.push(i);
        }
    }

    for (let i = 0; i < divisoresIND.length; i++) {
        for (let j = 0; j < divisoresX3.length; j++) {
            var divisor = divisoresIND[i] / divisoresX3[j];
            if(!buscarEnArray(divisor, divisores)){
                divisores.push(divisor);
                divisores.push(divisor - (divisor * 2));
            }
        }
    }

    let raices = []
    for (let i = 0; i < divisores.length; i++) {
        let cuenta = numero3 * (divisores[i] * divisores[i] * divisores[i]) + numero2 * (divisores[i] * divisores[i]) + numero1 * divisores[i] + ind;

        if(cuenta == 0){
            raices.push(divisores[i]);
            raices.push(divisores[i] - (divisores[i] * 2));
        }
    }
    
    console.log(raices);
    $("#raices").html(`<p>${raices}</p>`);
});