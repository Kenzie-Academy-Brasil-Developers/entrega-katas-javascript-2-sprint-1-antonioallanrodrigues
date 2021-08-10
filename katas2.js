// comece a criar a sua função add na linha abaixo


function add(x, y) {

    let soma = x + y
    return soma

    //     console.log(add(3, 5))
}

//     // descomente a linha seguinte para testar sua função
//     console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');
// }

// comece a criar a sua função multiply na linha abaixo

function multiply(x, y) {
    let multi = 0

    for (let i = 1; i <= x; i) {
        multi = add(multi, y)
        i = add(i, 1)
    }
    return multi

}

// // descomente a linha seguinte para testar sua função
// console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo

function power(x, n) {
    let force = 0
    let x1 = x
    for (let j = 1; j < n; j) {
        force = multiply(x, x1)
        x1 = force
        j = add(j, 1)
    }
    return force
}

// // descomente a linha seguinte para testar sua função
// console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo

function factorial(x) {
    let resultado = 1
    for (let i = 1; i < x; i) {
        resultado = multiply(resultado, add(i, 1))
        i = add(i, 1)
    }
    return resultado
}
/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci

function fibonacci(x) {
    let resultado = [0, 1]

    for (let i = 0; i <= x; i) {
        let a = 0
        a = add(resultado[i], resultado[add(i, 1)])
        resultado.push(a);
        i = add(i, 1)
    }
    let resultadoFinal = resultado[x]
    return resultadoFinal
}

// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');