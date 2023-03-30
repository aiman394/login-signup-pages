
  //SIGNUP //
  const signUp =e =>{

    let fname = document.getElementById('fname').value,
     email = document.getElementById('email').value,
     pwd = document.getElementById('pwd').value;

     let formData = JSON.parse(localStorage.getItem('formData')) || [];

     let exist = formData.length &&
     JSON.parse(localStorage.getItem('formData')).some(data =>
     data.fname.toLowerCase()== fname.toLowerCase() 
      );
     
      if(!exist){
        formData.push({ fname,email, pwd});
        localStorage.setItem('formData',JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("اکاؤنٹ بنایا گیا۔ براہ کرم نیچے دیئے گئے لنک کا استعمال کرتے ہوئے سائن ان کریں۔ ");
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

