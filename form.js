
  //SIGNUP //
  const signUp =e =>{

    let fname = document.getElementById('fname').value,
     lname = document.getElementById('lname').value,
     email = document.getElementById('email').value,
     pwd = document.getElementById('pwd').value;

     let formData = JSON.parse(localStorage.getItem('formData')) || [];

     let exist = formData.length &&
     JSON.parse(localStorage.getItem('formData')).some(data =>
     data.fname.toLowerCase()== fname.toLowerCase() &&
     data.lname.toLowerCase() == lname.toLowerCase()
      );
     
      if(!exist){
        formData.push({ fname, lname, email, pwd});
        localStorage.setItem('formData',JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Account created.\n\n please sign in using the link below ");
      }
     else{
      alert("ooopsssss... Duplicate Found!!!\n you have already signed up");
     }
     e.preventDefault();
  }

//SIGNIN//
const signIn = e=>{
   let email = document.getElementById('email').value, pwd=document.getElementById('pwd').value;
   let formData = JSON.parse(localStorage.getItem('formData')) || [];
   let exist = formData.length &&
   JSON.parse(localStorage.getItem ('formData')).some(data =>
     data.email.toLowerCase()== email.toLowerCase() &&
      data.pwd.toLowerCase()==pwd.toLowerCase()
      );
   if(!exist)
   {
  
       alert("Incorrect login Credentials First SignUp");
   }
   else{
    window.location.href="brand.html";
   }
   e.preventDefault();
}

//show password
// function myFunction() {
//   var x = document.getElementById("myInput");
//   if (x.type === "password") {
//     x.type = "text";
//   } else {
//     x.type = "password";
//   }
// }
