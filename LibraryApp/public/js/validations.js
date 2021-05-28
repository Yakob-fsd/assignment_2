/*LoginForm Validation*/

function validateLogin(){
    p = loginUsername();
     if(p==true)
    q = loginPw();
    if(q==true)
     alert("Login Successful");
  };

function loginUsername(){
    var username = document.getElementById("exampleInputEmail1").value;
    if (username == null || username == "") {
        alert("Please enter the username.");
        return false;
    }
     else if(username == "admin")
       return true ;
     else alert("Invalid username");
};

function loginPw(password){

    var password = document.getElementById("exampleInputPassword1").value;
    if (password == null || password == "") {
      alert("Please enter the password.");
      return false;
  }
  else if(password == 12345)
    return true;
  else alert('Invalid Password');
  };

  /*login valiadtion ends*/

  /*signup validation starts*/

  function validateSignup(){
      p = signupName();
       if(p==true)
      q =  signupEmail();
       if (q==true)
      r = signupUname();
       if(r==true)
      s= signupPw();
       if(s==true)
      t= signupRePw();
       if(t==true)
      u= signupPhone();
       if(u==true)
       alert("Success");

  };

  function signupName(){
      var name = document.getElementById("validationCustom01").value;
      let regexp = /^[a-zA-Z\s]+$/;

      if (name == "" || name == null){
       alert("Name Cannot be empty");
       return false;
      }
      else if(regexp.test(name))
        return true;
       else{
          alert("Username should contain alphabets only");
          return false ;
      } ;
     
  };

  function signupEmail(){
      var email = document.getElementById("validationCustom02").value;
      let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/ ;

      if(email==""||email== null){
       alert("Email Id feild is empty");
       return false;
    }
     else if(regexp.test(email))
      return true;
     else{
         alert("Please provid valid mail Id");
         return false;
     };
      
  };

  function signupUname(){
      var uname = document.getElementById("validationCustomUsername").value;
      let regexp = /^[a-zA-Z\s]+$/;

      if (uname == "" || uname == null){
        alert("Username Cannot be empty");
        return false;
       }
       else if(regexp.test(uname))
         return true;
        else{
           alert("Username should contain alphabets only");
           return false ;
       } ;
  };

  function signupPw(){
      var pw = document.getElementById("validationCustom03").value;
      let regexp = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

      if(pw==""||pw==null){
        alert("Please Set a Password");
        return false;
      }
      else if(regexp.test(pw))
        return true;
      else {
        alert("Please Set a strong password according to the instructions");
        return false;
      }
      };

    function signupRePw(){
      var opw = document.getElementById("validationCustom03").value;
      var rePw = document.getElementById("retypePassword").value;

      if(rePw==""||rePw==null){
        alert("Please re enter the password");
        return false;
      }
      else if(opw==rePw)
        return true;
      else{
        alert("Password re-entry doesnt match");
        return false;
      }
    };

    function signupPhone(){
      var phone = document.getElementById("validatePhone").value;
      var regexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

      if(phone==""||phone==null){
        alert("Please enter the phone number");
        return false;
      }
      else if(regexp.test(phone))
       return true;
      else{
        alert("Invalid phone number");
        return false;
      };
    };

    /*signup validation ends*/

    /*add book validation*/
    function validateAddbook(){
      p=addBookName();
       if(p==true)
      q=addBookAuthor();
       if(q==true)
      r=addBookCat();
       if(r==true)
      s=addBookUrl();
       if(s==true)
      alert("Success");
      };

      function addBookName(){
        var name = document.getElementById("exampleFormControlInput1").value;
        if(name==""||name==null){
         alert("Name cannot be empty");
         return false;
        }
        else 
          return true     
       };

       function addBookAuthor(){
        var author = document.getElementById("authorName").value;
        let regexp=/^[a-zA-Z\s]+$/ ;

        if(author==""||author==null){
          alert("Please enter author name");
          return false;
        }
        else if(regexp.test(author))
          return true;
        else{
          alert("Please enter a valid Author name");
          return false;
        }
       };

       function addBookCat(){
        var category = document.getElementById("categoryName").value;
        let regexp=/^[a-zA-Z\s]+$/ ;

        if(category==""||category==null){
          alert("Please enter Category");
          return false;
        }
        else if(regexp.test(category))
          return true;
        else{
          alert("Please enter a valid category");
          return false;
        }
       };

       function addBookUrl(){
        var url = document.getElementById("urlAddress").value;
        let regexp=/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

        if(url==""||url==null){
          alert("Please enter Url");
          return false;
        }
        else if(regexp.test(url))
          return true;
        else{
          alert("Please enter a valid Url");
          return false;
        }
       };

       /*add book validation ends*/



       /*add author validation*/
       function validateAddAuthor(){
        p=addAuthorName();
         if(p==true)
        q=addAuthorWork();
         if(q==true)
        r=addAuthorCat();
         if(r==true)
        s=addAuthorUrl();
         if(s==true)
        alert("Success");
        };
  
        function addAuthorName(){
          var name = document.getElementById("exampleFormControlInput1").value;
          let regexp=/^[a-zA-Z\s]+$/ ;

          if(name==""||name==null){
           alert("Name cannot be empty");
           return false;
          }
          else if(regexp.test(name))
          return true;
        else{
          alert("Please enter a valid Author name");
          return false;
        }   
         };
  
         function addAuthorWork(){
          var work = document.getElementById("workName").value;
  
          if(work==""||work==null){
            alert("Please enter the Book name");
            return false;
          }
          else
           return true;
         };
  
         function addAuthorCat(){
          var category = document.getElementById("authorCategory").value;
          let regexp=/^[a-zA-Z\s]+$/ ;
  
          if(category==""||category==null){
            alert("Please enter Category");
            return false;
          }
          else if(regexp.test(category))
            return true;
          else{
            alert("Please enter a valid category");
            return false;
          }
         };
  
         function addAuthorUrl(){
          var url = document.getElementById("authorUrl").value;
          let regexp=/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
  
          if(url==""||url==null){
            alert("Please enter Url");
            return false;
          }
          else if(regexp.test(url))
            return true;
          else{
            alert("Please enter a valid Url");
            return false;
          }
         };
       /*add author validation ends*/
