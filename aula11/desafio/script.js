function clicar(){
    var naci = document.getElementById('txt')
    var res = document.getElementById('res')
    var txt1 = String(naci.value)
    res.innerHTML = `<p>O país que você mora e o ${txt1}</p>`
    if (txt1 == 'Brasil'){
        res.innerHTML += '<p>Você é Brasileiro!</p>'
    }else{
        res.innerHTML += '<p>Você é Estrangeiro!</p>'
    }
}