const containers = document.querySelectorAll('.container');
// const registeration = document.querySelector('#register');
// const loginForm =document.querySelector('#login');
const signup = document.querySelector('.signup');
const signin = document.querySelector('.signin');
const labels = document.querySelectorAll('label');
// const Btn = document.querySelector('.btn');
// const input = document.querySelectorAll('input');
// let position = 0;

//link click
//for registration form
const register = () => {
        const current = document.querySelector('.current');
        current.classList.remove('current');
        if (containers[1]) {
                containers[1].classList.add('current');
        }
      };
      
      //for login form
      const login = () => {
        const current = document.querySelector('.current');
        current.classList.remove('current');
        if (containers[0]) {
                containers[0].classList.add('current');
        }
      };

//  Button events
//to open registration form
signup.addEventListener('click', e => {
  register();
});

//to open login form
signin.addEventListener('click', e => {
  login();
});

// Btn.addEventListener('click',validate);

//for label transform
labels.forEach(label =>{
       label.innerHTML =label.innerText
       .split('')
       .map((letter, index) =>
        `<span style="transition-delay: ${index*75}ms">${letter}</span>`)
        .join('');
})

// function validate(){
// for (let position = 0; position < input.length; position++) {
//         if(input[position]<input.length){
//                 const data = input[position].value;
//         } else{
//                 containers.className = 'close';
//                 success();
//         }
        
// }
// }
// function success() {
//         const h1 = document.createElement('h1');
//         h1.classList.add('end');
//         h1.style.textAlign = 'center';
//         h1.style.color = '#5cd7ea';
//         h1.style.display = 'block';
//         let i =0;
//         if (contaiers[i]) {
//                 h1.appendChild(document.createTextNode('Login Successful....'));
//         } else {
//         h1.appendChild(document.createTextNode(`Thanks '${input[0].answer} ${questions[1].answer}' You are registered and will get an email shortly.`));
//         }
//         setTimeout(() => {
//                formBox.parentElement.appendChild(h1);
//                setTimeout(() => (h1.style.opacity = 1), 50);
//         }, 1000);
//  }