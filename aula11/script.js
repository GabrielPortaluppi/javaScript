function clicar() {
    var vel = document.getElementById('vel')
    var res = document.getElementById('res')
    var txtv = Number(vel.value)
    res.innerHTML = `<p>A sua velocidade e de ${txtv}Km/h</p>`
    if (txtv > 80){
        res.innerHTML += '<p>Multado. Você Ultrapassou o limite permitido</p>'
    }else{
        res.innerHTML += '<p>Você esta dentro do limite de velocidade. Dirija com cuidado.</p>'
    }
} 