const miDiv = document.getElementById('cardContainer');


// Crear un nuevo MutationObserver
const observer = new MutationObserver(function (mutationsList) {
    // Aquí se ejecutará la función cuando se detecten cambios en el div
    console.log('El contenido del div ha cambiado');
    loadFile()

});

// Configurar el MutationObserver para observar cambios en el contenido del div
const config = { childList: true, subtree: true };
observer.observe(miDiv, config);
function loadFile() {

    document.querySelectorAll('.cards').forEach(div => {
        div.addEventListener('click', function () {
            const label = div.querySelector('#bigCardData');
            const idNumber = label.textContent.replace('Número de identificación: ', '');

            window.location.href = `bigCards.html?idNumber=${idNumber}`;
        });
    });
}

document.querySelectorAll('.cards').forEach(div => {
    div.addEventListener('click', function () {
        const label = div.querySelector('#bigCardData');
        const idNumber = label.textContent.replace('Número de identificación: ', '');

        window.location.href = `bigCards.html?idNumber=${idNumber}`;
    });
});

document.getElementById('searchbar').addEventListener('keyup', function (e) {

    searchPatient(document.getElementById('searchbar').value);

});

document.getElementById('searchbar-container').addEventListener('click', function () {
    document.getElementById('searchbar').focus();
});



document.getElementById('searchbar').addEventListener('input', function (event) {
    if (event.target.value === '') {
        const container = document.getElementById('cardContainer');

        const datos = JSON.parse(localStorage.getItem('patientList'))

        const plantilla = `
    <div class="cards">
        <div class="cardContent">
            <label><b>Nombre completa</b>: {{fullName}}</label>
            <label><b>Fecha de nacimiento</b>: {{birthdate}}</label>
            <label><b>Género</b>: {{gender}}</label>
            <label><b>Tipo de sangre</b>: {{bloodType}}</label>
            <label id="bigCardData"><b>Número de identificación</b>: {{idNumber}}</label>
            <label><b>Número de teléfono</b>: {{phoneNumber}} </label>
        </div>
    </div>
`;
        container.innerHTML = '';
        for (let i = 0; i < datos.length; i++) {

            let plantillaActual = plantilla.replace('{{fullName}}', datos[i].fullName)
                .replace('{{birthdate}}', datos[i].birthdate)
                .replace('{{gender}}', datos[i].gender)
                .replace('{{bloodType}}', datos[i].bloodType)
                .replace('{{idNumber}}', datos[i].idNumber)
                .replace('{{phoneNumber}}', datos[i].phoneNumber);


            container.innerHTML += plantillaActual;
        }
    }
});

function searchPatient(val) {
    const patientList = JSON.parse(localStorage.getItem('patientList'));
    var searchResult = [];

    for (let patient in patientList) {

        const actualPatient = patientList[patient]
        if (actualPatient.fullName.toLowerCase().includes(val) || actualPatient.idNumber.toLowerCase().includes(val)) {
            searchResult.push(patientList[patient])
        }
        console.log(val)
    }

    const cardContainer = document.getElementById('cardContainer');
    const plantilla = `
    <div class="cards">
        <div class="cardContent">
            <label><b>Nombre completa</b>: {{fullName}}</label>
            <label><b>Fecha de nacimiento</b>: {{birthdate}}</label>
            <label><b>Género</b>: {{gender}}</label>
            <label><b>Tipo de sangre</b>: {{bloodType}}</label>
            <label id="bigCardData"><b>Número de identificación</b>: {{idNumber}}</label>
            <label><b>Número de teléfono</b>: {{phoneNumber}} </label>
        </div>
    </div>
    `;
    cardContainer.innerHTML = '';
    for (let i = 0; i < searchResult.length; i++) {
        let plantillaActual = plantilla.replace('{{fullName}}', searchResult[i].fullName)
            .replace('{{birthdate}}', searchResult[i].birthdate)
            .replace('{{gender}}', searchResult[i].gender)
            .replace('{{bloodType}}', searchResult[i].bloodType)
            .replace('{{idNumber}}', searchResult[i].idNumber)
            .replace('{{phoneNumber}}', searchResult[i].phoneNumber);

        cardContainer.innerHTML += plantillaActual;
    }



}