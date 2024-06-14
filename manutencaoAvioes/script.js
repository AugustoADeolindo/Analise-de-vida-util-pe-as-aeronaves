function infosBack() {
    return JSON.parse(localStorage.getItem("servicos")) || []
}

function enviar() {
    let infos = infosBack()

    if (infosBack() !== null) {
        infos
    } else {
        infos = []
    }

    var check = ""

    let modelo = document.getElementById('modelo').value
    let fuselagem = parseFloat(document.getElementById('fuselagem').value)
    let empenagem = parseFloat(document.getElementById('empenagem').value)
    let grupoMotor = parseFloat(document.getElementById('grupoMotor').value)
    let tremDePouso = parseFloat(document.getElementById('tremDePouso').value)
    let asas = parseFloat(document.getElementById('asas').value)
    let horasTotais = parseFloat(document.getElementById('horasTotais').value)
    let ciclosTotais = parseInt(document.getElementById('ciclosTotais').value)

    if (horasTotais >= 400 && horasTotais <= 600 || ciclosTotais >= 200 && horasTotais <= 300) {
        check = "A"
    } else if (horasTotais >= 4380 && horasTotais <= 5840) {
        check = "B"
    } else if (horasTotais >= 14600 && horasTotais <= 17520) {
        check = "C"
    } else if (horasTotais >= 26280 && horasTotais <= 35040) {
        check = "D"
    } else {
        check = "Limpeza interna, Pneus, Rodas, Motor, Óleo lubrificante, Freios, Fuselagem, Asas, Turbinas, Para-brisa"
    }

    console.log(check)

    let servico = {
        modelo: modelo,
        fuselagem: fuselagem,
        empenagem: empenagem,
        grupoMotor: grupoMotor,
        tremDePouso: tremDePouso,
        asas: asas,
        horasTotais: horasTotais,
        ciclosTotais: ciclosTotais,
        check: check
    }

    infos.push(servico)

    localStorage.setItem("servicos", JSON.stringify(infos))
    console.log(infos)
    alert("Aeronave cadastrada com Sucesso!")

}
function carregar() {
    let local = document.getElementById("geral")
    let infos = infosBack()
    for (let i = 0; i < infosBack().length; i++) {
        local.innerHTML += `<div class="area">
        <p class="texto"><b>Modelo: ${infos[i].modelo}</b></p>
        <ul>Manutenções para ser feitas:
            <li>
                Check: ${infos[i].check}
            </li>
        </ul>
        </div>`
    }

}
carregar()
