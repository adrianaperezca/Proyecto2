function getInfoPer(){
    fetch("/getInfoPer")
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            document.getElementById('infoNombre').innerHTML = data['Nombre'];
            document.getElementById('correo').innerHTML = data['correo'];
            document.getElementById('cel').innerHTML = data['cel'];
            document.getElementById('Nat').innerHTML = data['nacionalidad'];
            document.getElementById('String').innerHTML = data['frase'];
        })
}
function getSkills(){
    fetch("/partOne")
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            document.getElementById('NAME').innerHTML = data['name'];
            document.getElementById('P1').innerHTML = data['Parte1'];
            document.getElementById('FL1').innerHTML = data['Spanish'];
            document.getElementById('FL2').innerHTML = data['English'];
            document.getElementById('FL3').innerHTML = data['French'];
            document.getElementById('FL4').innerHTML = data['Mandarin'];

            document.getElementById('P2').innerHTML = data['Parte2'];
            document.getElementById('PL1').innerHTML = data['c'];
            document.getElementById('PL2').innerHTML = data['a'];
            document.getElementById('PL3').innerHTML = data['v'];
            document.getElementById('PL4').innerHTML = data['l'];

            document.getElementById('P3').innerHTML = data['Parte3'];
            document.getElementById('Pro1').innerHTML = data['s'];
            document.getElementById('Pro2').innerHTML = data['m'];
            document.getElementById('Pro3').innerHTML = data['x'];
            document.getElementById('Pro4').innerHTML = data['l'];
        })
}

function getEdu(){
    fetch("/edu")
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            document.getElementById('F1').innerHTML = data['Fecha1'];
            document.getElementById('F2').innerHTML = data['Fecha2'];
            document.getElementById('E1').innerHTML = data['Escuela1'];
            document.getElementById('E2').innerHTML = data['Escuela2'];
            document.getElementById('D1').innerHTML = data['Descript1'];
            document.getElementById('D2').innerHTML = data['Descript2'];
        })
}

function getAct(){
    fetch("/act")
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            document.getElementById('ACT').innerHTML = data['name'];
            document.getElementById('online').innerHTML = data['WEB'];
            document.getElementById('Fecha1').innerHTML = data['F1'];
            document.getElementById('Fecha2').innerHTML = data['F2'];
            document.getElementById('Fecha3').innerHTML = data['F3'];
            document.getElementById('Fecha4').innerHTML = data['F4'];
            document.getElementById('Fecha5').innerHTML = data['F5'];
            document.getElementById('des1').innerHTML = data['Des1'];
            document.getElementById('des2').innerHTML = data['Des2'];
            document.getElementById('des3').innerHTML = data['Des3'];
            document.getElementById('des4').innerHTML = data['Des4'];
            document.getElementById('des5').innerHTML = data['Des5'];
            
        })
}