function clicar(){
    let estado = document.getElementById('txt1')
    let est = String(estado.value)
    let cor = document.getElementById('cor')
    if (est == 'São Paulo'){
       cor.style.background = 'red'
       cor.innerHTML = `Sua entrega ira para São Paulo na linha Vermelha!`
    }

    else if (est == 'Rio de Janeiro'){
        cor.style.background = 'blue'
        cor.innerHTML += `Sua intrega ira para o Rio de Janeiro na linha Azul!`
    }

    else if (est == 'Minas Gerais'){
        cor.style.background = 'green'
        cor.innerHTML += `Sua entrega ira para Minas Gerais na linha Verde`
    }
}
