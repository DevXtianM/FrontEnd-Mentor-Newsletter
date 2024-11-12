const form = document.getElementById('sign-up-form');

function handleSubmit(e){
    e.preventDefault();
    console.log('This is form sample')

    const userEmail = document.getElementById('user-email');
    const errorMessage = document.getElementsByClassName('invalid-label');
    const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    

    

    if(regExEmail.test(userEmail.value)){
        for (let i=0;i<errorMessage.length;i+=1){
            errorMessage[i].style.display = 'none';
            userEmail.classList.remove("invalid-email");
            window.location.assign('success.html');
            console.log("Valid Email")
        }
        
        const submittedEmail = userEmail.value;
        localStorage.setItem('Email', submittedEmail);
    }
    else{
        for (let i=0;i<errorMessage.length;i+=1){
            errorMessage[i].style.display = 'block';
            console.log(errorMessage[i]);
            userEmail.classList.add("invalid-email");
            console.log("Invalid Email")
        }
        
    }
    

}

form.addEventListener('submit', handleSubmit);

//Success Page 

function successCard(){
    const user_email = localStorage.getItem('Email');
    const emailDisplay = document.querySelector('.user-email');
    emailDisplay.textContent = user_email;

}

document.addEventListener('DOMContentLoaded', successCard);

function returnHome(){
    window.location.assign('index.html');
    localStorage.removeItem('Email');
}