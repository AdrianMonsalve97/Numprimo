function generarPrimos(n) {
    if (typeof n === 'number' && Number.isInteger(n)) {
        if (n >= 2) {
            const primos = [];
            const hayPrimo = [];

            for (let i = 1; i <= n + 1; ++i) {
                hayPrimo.push(true);
            }

            for (let i = 2; i <= n; ++i) {
                if (hayPrimo[i]) {
                    primos.push(i);


                    for (let j = 1; j * i <= n; ++j) {
                        hayPrimo[i * j] = false;
                    }
                }
            }



            return primos;
        } else {
            throw Error('El número debe ser mayor o igual a 2.');
        }
    } else {
        throw TypeError('El argumento debe ser un número entero.');
    }
}

try {
    console.log(generarPrimos(5000))
//console.log(generarPrimos(500)); 
} catch (e) {
    console.log(`Error: ${e.message}`);
}

let base = []
base = generarPrimos(5000)

for (let i = 0; i < base.length; i++) {


    base[i] = (base[i] * base[i]) + 2

}
console.log(base)


function Conjetura(base) {
    const primos = [];

    for (let i = 0; i < base.length; i++) {
        let esNumeroPrimo = true;
        for (let j = 2; j < base[i]; j++) {
            if (base[i] % j === 0) {
                esNumeroPrimo = false;

            }
            
        }
        if (esNumeroPrimo) {
            primos.push(base[i])

              }

    }

    return primos

}

console.log("El Resultado da como unicos primos a los siguentes números: ")
console.log(Conjetura(base))











