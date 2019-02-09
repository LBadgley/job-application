const formNode = document.getElementById('form-example');
// const nameNode = document.getElementById('name');
const locationNode = document.getElementById('location');
const daysAvailableNode = document.getElementById('days-available');
const weekdayAvailabilityNode = document.getElementById('weekday-availability');
const weekendDayAvailabilityNode = document.getElementById('weekend-availability');
const timeAvailabilityNode = document.getElementById('time');
const strengthRangeNode = document.getElementById('coding-strength');
const strengthNumberNode = document.getElementById('strength-number');
// const yesWeekendsOnlyNode = document.getElementById('yes-weekend');
// const mondayNode = document.getElementById('monday');
// const tuesdayNode = document.getElementById('tuesday');
// const wednesdayNode = document.getElementById('wednesday');
// const thursdayNode = document.getElementById('thursday');
// const fridayNode = document.getElementById('friday');
// const saturdayNode = document.getElementById('saturday');
// const sundayNode = document.getElementById('sunday');
const howLongNode = document.getElementById('how-long');

strengthRangeNode.addEventListener('change', function() {
    strengthNumberNode.textContent = strengthRangeNode.value;
}); 



daysAvailableNode.addEventListener('change', function() {
    if(daysAvailableNode.value === 'weekdays') {
        weekdayAvailabilityNode.hidden = false;
        weekendDayAvailabilityNode.hidden = true;
        timeAvailabilityNode.hidden = false;
    } else if(daysAvailableNode.value === 'weekends') {
        weekendDayAvailabilityNode.hidden = false;
        weekdayAvailabilityNode.hidden = true;
        timeAvailabilityNode.hidden = false;
    } else if(daysAvailableNode.value === 'both') {
        weekendDayAvailabilityNode.hidden = false;
        weekdayAvailabilityNode.hidden = false;
        timeAvailabilityNode.hidden = false;
    } else {
        weekendDayAvailabilityNode.hidden = true;
        weekdayAvailabilityNode.hidden = true;
        timeAvailabilityNode.hidden = true;
    }
});


formNode.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = formNode.elements.name.value;

    const applicant = {
        name: name,
        location: locationNode.value,
        strength: strengthRangeNode.value,
        timeAvailable: howLongNode.value,
    };
    // console.log(applicant.timeAvailable);
    let applicants = [];
    const jsonString = window.localStorage.getItem('applicants');
    if(jsonString) {
        applicants = JSON.parse(jsonString);
    }
    applicants.push(applicant);

    const serializedApplicants = JSON.stringify(applicants);
    window.localStorage.setItem('applicants', serializedApplicants);
    window.location = '/thank-you.html';
});
