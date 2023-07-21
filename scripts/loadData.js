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

for (let i = 0; i < datos.length; i++) {

  let plantillaActual = plantilla.replace('{{fullName}}', datos[i].fullName)
                                 .replace('{{birthdate}}', datos[i].birthdate)
                                 .replace('{{gender}}', datos[i].gender)
                                 .replace('{{bloodType}}', datos[i].bloodType)
                                 .replace('{{idNumber}}', datos[i].idNumber)
                                 .replace('{{phoneNumber}}', datos[i].phoneNumber);


  container.innerHTML += plantillaActual;
}






  