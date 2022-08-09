  /* alert date for pages idex.html, privacyPolicy.html, termsOfUse.html. 
  Code from W3schools */
  function dateAndTime(){
        var dateTime = new Date()
        alert (dateTime);
      }

/*      Form
=================================== */
/* Call login function */
/* code from W3schools*/
 function login() {

    var letters = /^[A-Z a-z]+$/;
    /* validate bank Name from form.html, Assign Var and if function for Bank Name */
    var b = document.forms["myForm"]["bankName"].value;
    if(b == ""){
      alert(" Name of Bank is empty");
      return false;
    }
    else if (b.match(letters)) {
    }
    else{
      alert("Name of Bank contains invalid characters(letters and spaces only!)");
      bankName.value="";
      return false;
    }
    /* validate accName from form.html, Assign Var and if function for accName */
    var a = document.forms["myForm"]["accName"].value;
    if(a == ""){
      alert(" accName is empty");
      return false;
    }
    else if (a.match(letters)) {
    }
    else{
      alert("AccName contains invalid characters(letters and spaces only!)");
      accName.value="";
      return false;
    }
    /* validate ibNumber from form.html, Assign Var and if function for ibNumber */
    var i = document.forms["myForm"]["ibNumber"].value;
      if(i == "" || isNaN(i)){
        alert("Iban is empty or details entered is not a number ");
        ibNumber.value="";
        return false;
    }
    /* validate swiftBic from form.html, Assign Var and if function for swifitBic */
    var s = document.forms["myForm"]["swiftBic"].value;
    if(s == "" || isNaN(s)){
      alert("Swift/Bic is empty or details entered is not a number ");
      swiftBic.value="";
      return false;
    }
    /* validate currency from form.html, Assign Var and if function for currency */
    var c = document.forms["myForm"]["currency"].value;
    if(c == ""){
      alert("Currency is empty, please enter currency ");
      return false;
    }
    else if (c.match(letters)) {
    }
    else{
      alert("Currency contains invalid characters(letters and spaces only!)");
      currency.value="";
      return false;
    }
    /* Display Message (Details sent successefully) and hide form from form.html*/
    /* code from Hamilton NCI classes */
    document.getElementById("txtMessage").innerHTML = "Your details were sent successefully ";
    document.getElementById("form").style.display= "none";
    document.getElementById("formH1").style.display= "none";
    document.getElementById("logoutForm").style.display= "block";
    return false;
  }

  /* Return to Form from form.html, hide message and make input empty*/
  /* code from Hamilton NCI classes */

  function logout(){
    document.getElementById("form").style.display= "block";
    document.getElementById("formH1").style.display= "block";
    document.getElementById("logoutForm").style.display= "none";
    document.getElementById("bankName").value= "";
    document.getElementById("accName").value= "";
    document.getElementById("ibNumber").value= "";
    document.getElementById("swiftBic").value= "";
    document.getElementById("currency").value= "";
  }

      /*     Contact form
      =================================== */

      /* Call loginn for contactForm.html function */
      /* code from W3schools*/
    function loginn() {
      var letters = /^[A-Z a-z]+$/;

      /* validate contactName from  contactForm.html, Assign Var and if function for contactName */
      var fName = document.forms["myFormContact"]["contactName"].value;
      if(fName == ""){
        alert(" Name is empty");
        return false;
      }
      else if (fName.match(letters)) {
      }
      else{
        alert("Name contains invalid characters(letters and spaces only)");
        contactName.value="";
        return false;
      }

      /* validate contactLastName from  contactForm.html, Assign Var and if function for contactLastName */
      var lName = document.forms["myFormContact"]["contactLastName"].value;
      if(lName == ""){
        alert(" Last name is empty");
        return false;
      }
      else if (lName.match(letters)) {
      }
      else{
        alert("Last name contains invalid characters(letters and spaces only)");
        contactLastName.value="";
        return false;
      }

      /* validate email from  contactForm.html, Assign Var and if function for email */
      var emailContact = document.forms["myFormContact"]["email"].value;
      if(emailContact == ""){
        alert(" Email is empty");
        return false;
      }

      /* validate phoneNumber from  contactForm.html, Assign Var and if function for phoneNumber */
      var pNumber = document.forms["myFormContact"]["phoneNumber"].value;
      if(pNumber == "" || isNaN(pNumber)){
        alert("Phone Number is empty or details entered is not a number ");
        phoneNumber.value="";
        return false;
      }

      /* Display Message (Details sent successefully) and hide form*/
      /* code from Hamilton NCI classes */
      document.getElementById("txtMsg").innerHTML = "Your details were sent successefully ";
      document.getElementById("formContact").style.display= "none";
      document.getElementById("contacFormH1").style.display= "none";
      document.getElementById("lgtOutForm").style.display= "block"; 
      return false;
  }
      


      
    
    /* Return to Contact Form, hide message and make input empty*/
    /* code from Hamilton NCI classes */
    function lgt(){
      document.getElementById("formContact").style.display= "block";
      document.getElementById("contacFormH1").style.display= "block";
      document.getElementById("lgtOutForm").style.display= "none";
      document.getElementById("contactName").value= "";
      document.getElementById("contactLastName").value= "";
      document.getElementById("email").value= "";
      document.getElementById("phoneNumber").value= "";
    }

    

      /* Cookies bar close function
      =================================== */
      function myFunction() {
        document.getElementById("cookie-bar").style.display = "none";
      }




