

const container = document.getElementById('page-content');

const datos = JSON.parse(localStorage.getItem('patientList'))

const params = new URLSearchParams(window.location.search);
const idNumber = params.get('idNumber');

var patient = ''

const plantilla = `
<h1 class="card-title">{{tittle}}</h1>
<div class="big-card">
    <div class="big-card-content">
        <label><b>Nombre completa</b>: {{fullName}}</label>
        <label><b>Fecha de nacimiento</b>: {{birthdate}}</label>
        <label><b>Género</b>: {{gender}}</label>
        <label><b>Tipo de sangre</b>: {{bloodType}}</label>
        <label><b>Alergias</b>: {{alergies}} </label>
        <label><b>Medicamentos</b>: {{medications}} </label>
        <label id="bigCardData"><b>Número de identificación</b>: {{idNumber}}</label>
        <label><b>Número de teléfono</b>: {{phoneNumber}} </label>
        <label><b>Correo electrónico</b>: {{email}} </label>
        <label><b>Dirección</b>: {{address}} </label>
        <br>
        <h2>Información de contacto de emergencia</h2>
      
        <label><b>Nombre completo</b>: {{emName}} </label>
        <label><b>Relación con el paciente</b>: {{emRelation}} </label>
        <label><b>Número de teléfono</b>: {{emPhone}} </label>
    </div>
</div>
`;

for (let i = 0; i < datos.length; i++) {
    if (datos[i].idNumber == idNumber) {
        patient = datos[i]
    }
}
var plantillaActual = plantilla.replace('{{fullName}}', patient.fullName)
                                 .replace('{{birthdate}}', patient.birthdate)
                                 .replace('{{gender}}', patient.gender)
                                 .replace('{{bloodType}}', patient.bloodType)
                                 .replace('{{idNumber}}', patient.idNumber)
                                 .replace('{{phoneNumber}}', patient.phoneNumber)
                                 .replace('{{alergies}}', patient.alergies)
                                 .replace('{{medications}}', patient.medications)
                                 .replace('{{email}}', patient.email)
                                 .replace('{{address}}', patient.address)
                                 .replace('{{emName}}', patient.emName)
                                 .replace('{{emRelation}}', patient.emRelation)
                                 .replace('{{emPhone}}', patient.emPhone)
                                 .replace('{{tittle}}', patient.fullName);



  container.innerHTML += plantillaActual;