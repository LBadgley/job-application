const formNode = document.getElementById('form-example');
const nameNode = document.getElementById('name');
const locationNode = document.getElementById('location');
const daysAvailableNode = document.getElementById('days-available');
const weekdayAvailabilityNode = document.getElementById('weekday-availability');
const weekendDayAvailabilityNode = document.getElementById('weekend-availability');
const timeAvailabilityNode = document.getElementById('time-availability');
const strengthRangeNode = document.getElementById('coding-strength');
const strengthNumberNode = document.getElementById('strength-number');
const yesWeekendsOnlyNode = document.getElementById('yes-weekend');
const mondayNode = document.getElementById('monday');
const tuesdayNode = document.getElementById('tuesday');
const wednesdayNode = document.getElementById('wednesday');
const thursdayNode = document.getElementById('thursday');
const fridayNode = document.getElementById('friday');
const saturdayNode = document.getElementById('saturday');
const sundayNode = document.getElementById('sunday');
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

    const applicant = {
        name: nameNode.value,
        location: locationNode.value,
        strength: strengthRangeNode.value,
        weekendsOnly: yesWeekendsOnlyNode.checked,
        daysAvailable: daysAvailableNode.value,
        days: {
            monday: mondayNode.checked,
            tuesday: tuesdayNode.checked,
            wednesday: wednesdayNode.checked,
            thursday: thursdayNode.checked,
            friday: fridayNode.checked,
            saturday: saturdayNode.checked,
            sunday: sundayNode.checked,
        },
        timeAvailable: howLongNode.value,
    };
    console.log(applicant);
    const serializedApplicant = JSON.stringify(applicant);
    window.localStorage.setItem('applicantOne', serializedApplicant);
});
