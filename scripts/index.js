document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dataForm').addEventListener('submit', function(e) {
        
        let newPatient = {
            fullName: document.getElementById('fullName').value,
            birthdate: document.getElementById('birthdate').value,
            gender: document.getElementById('gender').value,
            idNumber: document.getElementById('idNumber').value,
            address:document.getElementById('address').value,
            phoneNumber: document.getElementById('phoneNumber').value,
            email: document.getElementById('email').value,
            bloodType: document.getElementById('bloodType').value,
            alergies: document.getElementById('alergies').value,
            medications: document.getElementById('medications').value,
            emName: document.getElementById('emName').value,
            emRelation: document.getElementById('emRelation').value,
            emPhone: document.getElementById('emPhone').value,
        }
        savePatient(newPatient);
        console.log(newPatient)
        alert('Se han guardado los datos con éxito');

    } );
})

function savePatient(patient) {
    if (localStorage.getItem('patientList')) {
        var patientList = JSON.parse(localStorage.getItem('patientList'))
        patientList.push(patient)
        localStorage.setItem('patientList', JSON.stringify(patientList));
    }
    else {
        localStorage.setItem('patientList', JSON.stringify([patient]));
    }
    console.log(patientList)
    
}
