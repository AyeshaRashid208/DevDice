
function onSubmitListner(e)
{
   const name = document.getElementById("name");
   const email = document.getElementById("email");
   const phone = document.getElementById("phone");
   const password = document.getElementById("password");
   const confirmPassword = document.getElementById("confirmPassword");
   const input_arr = [name,email,phone,password,confirmPassword];
   const errors = ["name_err","email_err","number_err","password_err","confirm_password_err"];
   for (let index = 0; index < errors.length; index++) {
      const element = errors[index];
      document.getElementById(element).innerHTML = "";
   }
   if(!checkRequired(input_arr,errors,true)) return false;
   if(!checkPassword(password,confirmPassword,true)) return false;
   if(!checkLenght(input_arr,errors,true)) return false;
   if(!checkEmail(email,true)) return false;
   document.getElementById('success').innerHTML="SUCCESS";
}

function checkRequired(inputs,errors,submit)
{
   for (let index = 0; index < inputs.length; index++) {
      const element = inputs[index];
      if(element.value.length <= 0)
      {
         document.getElementById(errors[index]).innerHTML += "Required\n";
         submit = false;
      }
   }
   return submit
}

function checkLength(inputs,errors,submit)
{
   for (let index = 0; index < inputs.length; index++) {
      const element = inputs[index];
      if(element.value.length >= 25)
      {
            document.getElementById(errors[index]).innerHTML += "Max length can not exceed 25\n";
            submit = false;
      }
   }
   for (let index = 0; index < inputs.length; index++) {
      const element = inputs[index];
      if(element.value.length < 5)
      {
         document.getElementById(errors[index]).innerHTML += "Min length must be 5 characters long.\n";
         submit = false;
      }
   }
   return submit
}

function checkPassword(password,confirmPassword,submit)
{
   if(password.value != confirmPassword.value &&
      password.value.length>=5 && confirmPassword.value.length>=5)
   {
      document.getElementById("password_err").innerHTML+="Confirm Password must match password.";
      submit = false;
   }
   return submit
}


function checkEmail(email,submit)
{
   const pattren = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
console.log(pattren.test(email.value))
console.log(email.value)
   if (!pattren.test(email.value))
   {
      document.getElementById("email_err").innerHTML+="Invalid email address.";
      submit = false;
   }
   return submit
}

