// l
document.getElementById('submitBtn').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const age = document.getElementById('ageInput').value;
    const email= document.getElementById('emailInput').value;
    const club = document.getElementById('clubInput').value;
   
    if (age < 18) {
        alert("You must be at least 18 years old.");
        return;
    }


    document.getElementById('Heading').textContent = `Thank you for choosing Screen247 ${name}. Best of luck to  your  club, ${club} `;

    document.getElementById('formContainer').style.display = 'none';

    const heading = document.getElementById('Heading');
    heading.style.display = 'block';
    heading.style.color = 'white';
    heading.style.textAlign = 'center'; 
    heading.style.fontSize = '5em'; 

    setTimeout(() => {
        heading.style.display = 'none'; 
    }, 1200000);
    
});





