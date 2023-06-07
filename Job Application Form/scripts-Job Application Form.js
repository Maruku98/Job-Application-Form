$(document).ready(function(){
    
    $(".text").change( function() {
        $(this).val($(this).val().toUpperCase());
    });

    $(".block-input")
    .on("invalid", function() {
        $(this).css("border", "3px solid red")
    })
    .change( function() {
        $(this).css("border", "2px solid black")
    });


let passwordField = document.getElementById("password");
let passwordRepeat = document.getElementById("password2");

$("#password").focusout(passwordVerify);
$("#password").change(passwordRepeatVerify);
$("#password2").change(passwordRepeatVerify);

function passwordVerify() {
    let userInputPassword = passwordField.value;
    let passwordRegex = [ /\d/g, /[a-z]/g, /[A-Z]/g ];

    for(let i = 0; i < passwordRegex.length; i++) {
        if (passwordRegex[i].test(userInputPassword) == false) {
            passwordField.style.borderColor = "black";
            passwordField.style.borderWidth = "2px";
            return 0;
        };
    };
    passwordField.style.borderColor = "lightgreen";
    passwordField.style.borderWidth = "3px";
};

function passwordRepeatVerify() {
    if (passwordRepeat.value == passwordField.value) {
        passwordRepeat.style.border = "2px solid lightgreen";
    }
    else {
        passwordRepeat.style.border = "2px solid red";
    };
};
});