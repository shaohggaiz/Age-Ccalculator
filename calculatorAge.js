const inputValue = document.querySelector('#date-value');
const btnAge = document.querySelector('.btn-age');
const resutl = document.querySelector('.resutl');

inputValue.max = new Date().toISOString().split("T")[0];

resutl.innerHTML = `Your age is 21 years old`;

console.log(inputValue)



btnAge.addEventListener('click', function() {

    

    if(inputValue.value === '') {
        alert('Please enter date of birth');
        
    } else {
        const dob = new Date(inputValue.value);
        const dob_year = dob.getFullYear();
        //current
        const today = new Date();
        const new_year = today.getFullYear()

        const age = new_year - dob_year;
        resutl.innerHTML = `Your age is ${age} Years old`;
        
        if (dob > today) {
            document.querySelector('.age-error').textContent = 'Error: You cannot enter a future date.';
            age = '0'
            return ;
        } else {            
            document.querySelector('.age-error').textContent = '';
        }
    }
})