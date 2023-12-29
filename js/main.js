/* inputs decleration of main task and sign in */
var inputName = document.getElementById('inputName');
var inputEmail = document.getElementById('inputEmail');
var inputPassword = document.getElementById('inputPassword');
var checkboxPassword = document.getElementById('checkboxPassword');//to visabile password and hidden
var SignUp = document.getElementById('SignUp');
var indexBody1 = document.getElementById('indexBody1');
var indexBody2 = document.getElementById('indexBody2');
var indexBody3 = document.getElementById('indexBody3');
var SuccessEmail = document.getElementById('SuccessEmail');
var reginputName = /^\w{2,6}\s?\w{2,14}?$/;
var reginputEmail = /^\w{2,6}\s?\w{2,14}?@(gmail|yahoo|mail|icloud|hotmail)\.com$/;
var reginputPassword = /^\w{2,10}$/;
// var userNamePage;
// NEXT PAGE
/* inputs decleration of login to move to the nextPage */
var emailInputeIndex =document.getElementById('emailInputeIndex');
var passwordInputeIndex =document.getElementById('passwordInputeIndex');
var invalidData =document.getElementById('invalidData');//if thers wrong about data for signin
var btnWarning =document.getElementById('btnWarning');//if thers wrong about data for signin (warning)
var loginPage = document.getElementById('loginPage');
// about logout page
var divlogout = document.getElementById('divlogout');
// finall page logout to delete array user name
var logOutPage = document.getElementById('logOutPage');
/* array has all decleration */
var arrayInputs = [];

/* condation to declerate it inside localstorage */
if (localStorage.getItem('userCurrent')) {
    arrayInputs = JSON.parse(localStorage.getItem('userCurrent'))
}
/* 
function global
*/
//=========================================================================================================
function clearData() {
    inputName.value = '';
    inputEmail.value = '';
    inputPassword.value = '';
}
function emailreapet() {
        for (var i = 0; i < arrayInputs.length; i++) {
            if (arrayInputs[i].inputEmail == inputEmail.value) {
                console.log(arrayInputs.length)
                console.log('cant add');
                return true;
            }
        }
}
function pushEmail() {
    if (inputName.value == '' &&inputName.value == '' &&inputName.value == '') {
        alert('please insert your info')
    }
    else
    if (reginputName.test(inputName.value)  == true
                && reginputEmail.test(inputEmail.value) == true
                && reginputPassword.test(inputPassword.value) == true   
        ) {
            var currentUser = {
                userName : inputName.value,
                userEmail : inputEmail.value,
                userPassword : inputPassword.value
            }
            arrayInputs.push(currentUser);
            localStorage.setItem('userCurrent' , JSON.stringify(arrayInputs));
            inputName.classList.add('is-valid')
            inputEmail.classList.add('is-valid')
            inputPassword.classList.add('is-valid')
            inputName.classList.remove('is-invalid')
            inputEmail.classList.remove('is-invalid')
            inputPassword.classList.remove('is-invalid')
            inputEmail.nextElementSibling.classList.add('d-none')
            inputName.nextElementSibling.classList.add('d-none')
            inputPassword.nextElementSibling.classList.add('d-none')
            SignUp.nextElementSibling.classList.add('d-none')
            SuccessEmail.classList.remove('d-none')
        }else{
            console.log("try again");
            inputName.classList.add('is-invalid')
            inputEmail.classList.add('is-invalid')
            inputPassword.classList.add('is-invalid')
            inputName.classList.remove('is-valid')
            inputEmail.classList.remove('is-valid')
            inputPassword.classList.remove('is-valid')
            inputEmail.nextElementSibling.classList.remove('d-none')
            inputName.nextElementSibling.classList.remove('d-none')
            inputPassword.nextElementSibling.classList.remove('d-none')
            SignUp.nextElementSibling.classList.remove('d-none')
            SuccessEmail.classList.add('d-none')
        }
        clearData();
}
function email(e) {
    return e.userEmail == inputEmail.value
}
/* 
end of global function
*/
/* this event for secondepage sign in to insert your inputes her and that with regex check */
if (indexBody1 != null) {
    //for this show passowrd i have two ways to show it
    checkboxPassword.addEventListener('click' , function (eventInfo) {
        if (inputPassword.type == "password") {
            inputPassword.type ="text"
        }else {
            inputPassword.type = "password"
        }
    })
    function email(e) {
        return e.userEmail == inputEmail.value
    }
    SignUp.addEventListener('click' , function () {
        // localStorage.setItem('userCurrent' , JSON.stringify(arrayInputs));
        if (arrayInputs.length == 0) {
            alert('you hav not insert any data please sign up you email and then you can login')
        }
        else
        if (arrayInputs.some(email)){
            console.log('already existing');
        }else{
            pushEmail();
        }
})
}
var userNamePage = [];
if (indexBody2 != null ){
    //for this show passowrd i have two ways to show it
    var checkboxPasswordIndex =document.getElementById('checkboxPasswordIndex');//to visabile password and hidden
//========================================================================================================
checkboxPasswordIndex.addEventListener('click' , function (eventInfo) {
    if(passwordInputeIndex.type == "password"){
        passwordInputeIndex.setAttribute('type' , 'text')
    }else if(passwordInputeIndex.type == "text"){
        passwordInputeIndex.setAttribute('type' , 'password')

    }
})
//========================================================================================================
    btnWarning.addEventListener('click' ,function () {
        invalidData.classList.add('d-none')
    })
    
    loginPage.addEventListener('click' , function (e) {
        if (arrayInputs.length == 0) {
            alert(' you hav not insert any data please sign up you email and then you can login ')
        }
            for (var i = 0; i < arrayInputs.length; i++) {
                if(emailInputeIndex.value == '' || emailInputeIndex.value == ''){
                invalidData.classList.remove('d-none')
                }else if (arrayInputs[i].userEmail != emailInputeIndex.value ) {
                    emailInputeIndex.nextElementSibling.classList.remove('d-none')
                    invalidData.classList.add('d-none')
                } else if (arrayInputs[i].userEmail != emailInputeIndex.value) {
                    emailInputeIndex.nextElementSibling.classList.add('d-none')
                    invalidData.classList.add('d-none')
                }else
                if (arrayInputs[i].userPassword != passwordInputeIndex.value) {
                    passwordInputeIndex.nextElementSibling.classList.remove('d-none')
                    invalidData.classList.add('d-none')
                }else if (arrayInputs[i].userPassword == passwordInputeIndex.value) {
                    passwordInputeIndex.nextElementSibling.classList.remove('d-none')
                    invalidData.classList.add('d-none')
                }
                localStorage.setItem('userCurrent' , JSON.stringify(arrayInputs));
                if(arrayInputs[i].userEmail == emailInputeIndex.value 
                && arrayInputs[i].userPassword == passwordInputeIndex.value) {
                    // console.log('k');
                    emailInputeIndex.nextElementSibling.classList.add('d-none')
                    passwordInputeIndex.nextElementSibling.classList.add('d-none')
                    loginPage.setAttribute('href' , 'logout.html');
                    userNamePage =   localStorage.setItem('userNamee' , JSON.stringify(arrayInputs[i].userName));
                    // console.log(arrayInputs);
                }
        }
        
    })
    /* function inserLog() {
        for (var i = 0; i < arrayInputs.length; i++) {
            localStorage.setItem('userCurrent' , JSON.stringify(arrayInputs));
            if(arrayInputs[i].userEmail == emailInputeIndex.value 
            && arrayInputs[i].userPassword == passwordInputeIndex.value) {
                console.log('k');
                loginPage.setAttribute('href' , 'logout.html');
                userNamePage =   localStorage.setItem('userNamee' , JSON.stringify(arrayInputs[i].userName));
                console.log(arrayInputs);
            }
        }
    }  */
}
if (indexBody3 != null ){
        if (localStorage.getItem('userNamee') != null) {
            userNamePage =   JSON.parse(localStorage.getItem('userNamee'))
        }
        divlogout.innerHTML = (`welcome  ` + userNamePage); 
        logOutPage.addEventListener('click' , function logOutPages(eventInfo) {
            localStorage.removeItem('userNamee');
        })
}