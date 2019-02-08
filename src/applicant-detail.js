let applicants = [];
const name = document.getElementById('name');
const location = document.getElementById('location');
const codingStrength = document.getElementById('coding-strength');
const timeAvailability = document.getElementById('time-availability');

const jsonObject = window.localStorage.getItem('applicants');
if(jsonObject) {
    applicants = JSON.parse(jsonObject);
} else {
    window.location = './apply.html';
}

// taking the applicant array and getting out the most recent applicant
// const applicant = applicants[applicants.length - 1]; 
const searchParams = new URLSearchParams(window.location.search);
const nameToFind = searchParams.get('name');
let currentApplicant = {};

for(let i = 0; i < applicants.length; i++) {
    currentApplicant = applicants[i];
    if(nameToFind === currentApplicant.name) {
        break;
    }
}

name.textContent = currentApplicant.name;
location.textContent = currentApplicant.location;
codingStrength.textContent = currentApplicant.strength;
timeAvailability.textContent = currentApplicant.timeAvailable;
