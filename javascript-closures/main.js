function graduate(credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
}

const medicalScool = graduate('M.D.');
const lawSchool = graduate('Esq.');

const doctor = medicalScool('Adnan Abid');
const lawyer = lawSchool('Adnan Abid');

console.log(doctor);
console.log(lawyer);
