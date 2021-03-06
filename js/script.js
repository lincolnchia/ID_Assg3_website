window.onload = function(){
    $('#back-to-top-btn').hide();
    $("#create-user-content").hide();
    if (sessionStorage.getItem("signedIn") == "false"){
        $("#sign-out").hide();
        $("#sign-in").show();
        $("#baguette-card").hide();
    }
    else{
        sessionStorage.setItem("signedIn",true)
        $("#sign-out").show();
        $("#sign-in").hide();
        if (sessionStorage.getItem("age")>=18){$("#baguette-card").show();}
        else {$("#baguette-card").hide()}
    }
};

// function to open and show the correct api 
// mostly is to hide and show the correct buttons and append correct divs to the model
function openAPI(buttonId){
    $("#api-control-cards").hide();
    $("#api-control-nasa").hide();
    $("#api-control-dog").hide();
    $("#api-control-trivia").hide();
    $("#api-control-advice").hide();
    $("#api-control-baguette").hide();
    var triviaData = null;
    console.log(buttonId)
    if (buttonId == "api-cards"){
        $("#ModalLabel").html("Deck of Cards API")
        $("#api-content").empty();
        $("#api-content").append('<lottie-player src="https://assets4.lottiefiles.com/packages/lf20_9ngjlC.json" id="winner" background="transparent" speed="1"  style="width: 300px; height: 300px; margin: auto;"  loop  autoplay></lottie-player>');
        $("#winner").hide();
        $("#api-content").append('<lottie-player src="https://assets6.lottiefiles.com/packages/lf20_YVvJHa.json" id="loser" background="transparent"  speed="1"  style="width: 300px; height: 300px; margin: auto;"  loop  autoplay></lottie-player>');
        $("#loser").hide();
        $("#api-content").append('<lottie-player src="https://assets6.lottiefiles.com/packages/lf20_yriifcob.json" id="tie" background="transparent"  speed="1"  style="width: 300px; height: 300px; margin: auto;"  loop  autoplay></lottie-player>');
        $("#tie").hide();
        $("#api-content").append('<lottie-player src="https://assets6.lottiefiles.com/packages/lf20_ho8hW5.json" id="error" background="transparent"  speed="1"  style="width: 300px; height: 300px; margin: auto;"  loop  autoplay></lottie-player>');
        $("#error").hide();
        $("#api-content").append('<lottie-player src="https://assets5.lottiefiles.com/private_files/lf30_klsv8ygt.json" id="startdeck" background="transparent"  speed="2"  style="width: 300px; height: 300px; margin: auto;"  loop  autoplay></lottie-player>')
        $("#draw").hide();
        $("#skip").hide();
        $("#deckbtn").show();
        $("#api-content").append('<div id="playerHand"></div>');  
        $("#api-content").append('<div id="botHand"></div>');
        $("#api-control-cards").show();
        
        
    }
    if (buttonId == "api-nasa"){
        $("#ModalLabel").html("Nasa API")
        $('#api-content').empty();
        $("#api-control-nasa").show();
        $("#api-content").append('<lottie-player src="https://assets9.lottiefiles.com/packages/lf20_0VBFAg.json"  background="transparent"  speed="2"  style="width: 300px; height: 300px; margin: auto;"  loop  autoplay></lottie-player>')
    }        

    if (buttonId == "api-dog"){
        $("#ModalLabel").html("Dog API") 
        $("#api-content").empty();
        
        $("#idoggo").show();
        $("#next").hide();
        $("#prev").hide();
        $("#api-control-dog").show();
        $("#api-content").append('<lottie-player src="https://assets5.lottiefiles.com/datafiles/qPXWoBoTK5HTARv/data.json" id="start" background="transparent"  speed="1"  style="width: 300px; height: 300px; margin: auto;"  loop  autoplay></lottie-player>')

    }
    if (buttonId == "api-trivia"){
        $("#ModalLabel").html("Extremely Difficult Trivias");
        $("#api-content").empty();
        $("#api-control-trivia").show();
        $("#api-content").append('<lottie-player src="https://assets5.lottiefiles.com/temp/lf20_9gY9Yf.json" background="transparent"  speed="1"  style="width: 300px; height: 300px; margin: auto;"  loop  autoplay></lottie-player>')
    }
    if (buttonId == "api-baguette"){
        $("#ModalLabel").html("Cute Anime Girls with Baguette");
        $("#api-content").empty();
        $("#api-control-baguette").show();
        $("#api-content").append('<lottie-player src="https://assets2.lottiefiles.com/packages/lf20_klQ5nz.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px; margin: auto;"  loop  autoplay></lottie-player>')

    }
    if (buttonId == "api-advice"){
        $("#ModalLabel").html("Advice & Affirmation API")
        $('#api-content').empty();
        $("#api-control-advice").show();
        $("#api-content").append('<div id="advDiv"></div>');
        $("#api-content").append('<lottie-player src="https://assets2.lottiefiles.com/packages/lf20_gljfhpo3.json" id="start" background="transparent"  speed="1"  style="width: 300px; height: 300px; margin: auto;"  loop  autoplay></lottie-player>')
        $("#api-content").append('<lottie-player src="https://assets5.lottiefiles.com/packages/lf20_4bHeKl.json" id="load" background="transparent"  speed="1"  style="width: 300px; height: 300px; margin: auto;"  loop  autoplay></lottie-player>')
        $("#load").hide();
    }
    

}

// SIGN IN DATA
var userData = null;
let userDataAPIsettings = {
    "async": true,
    "crossDomain": true,
    "url": "https://interactivedev-34c7.restdb.io/rest/aita-user",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "601f96113f9eb665a1689212",
      "cache-control": "no-cache"
    }
  }
  
  $.ajax(userDataAPIsettings).done(function (response) {
    console.log(response);
    userData = response
  });

//   ON CLICK SIGN IN

function signIn(){
    
    if (document.getElementById("sign-in-email").value == "" || document.getElementById("sign-in-password").value == ""){
        alert("Please complete the fields before signing in.");
    }
    else{
        let emailFound = false;
        for (i = 0; i < userData.length; i++){
            if (userData[i].email == document.getElementById("sign-in-email").value){
                emailFound = true;
            }
            if(userData[i].email == document.getElementById("sign-in-email").value && userData[i].password == document.getElementById("sign-in-password").value){
            $("#sign-out").hide();
            sessionStorage.setItem("signedIn",true);
            $("#sign-in").hide();
            $("#sign-out").show();
            $("#confirm-sign-in-btn").hide()
            $("#sign-in-content form").hide();
            $("#sign-in-content h3").hide();
            sessionStorage.setItem("age",userData[i].age)
            if(userData[i].age >= 18){$("#baguette-card").show();}else{$("#baguette-card").hide();}
            $("#signInError").append("<lottie-player src='https://assets8.lottiefiles.com/private_files/lf30_x0qiw13f.json'  background='transparent'  speed='1.5'  style='width: 150px; height: 150px; margin: auto;'   autoplay></lottie-player>");
            $("#signInError").append("<p style='text-align:center;'>Sign in sucessful.</p>")
            setTimeout(function(){
                $("#sign-in-out").click();
                $("#signInError").empty();
                $("#confirm-sign-in-btn").show()
                $("#sign-in-content form").show();
                $("#sign-in-content h3").show();
            },3000);
            return;
            }
        }
        if (emailFound == false){
            $("#signInError").append("<lottie-player src='https://assets8.lottiefiles.com/packages/lf20_slGFhN.json'  background='transparent'  speed='1.75'  style='width: 100px; height: 100px; margin: auto;'   autoplay></lottie-player>");
            $("#signInError").append("<p style='text-align:center;'>Invalid account, email does not exist.</p>")
            $("#confirm-sign-in-btn").hide()
            // alert("Invalid account, user does not exist.")
            $("#sign-in-content form").hide();
            $("#sign-in-content h3").hide();
            setTimeout(function(){
                $("#signInError").empty();
                $("#confirm-sign-in-btn").show()
                $("#sign-in-content form").show();
                $("#sign-in-content h3").show();
            },3000)
            return;
        }
        else {
            $("#signInError").append("<lottie-player src='https://assets8.lottiefiles.com/packages/lf20_slGFhN.json'  background='transparent'  speed='1.75'  style='width: 100px; height: 100px; margin: auto;'   autoplay></lottie-player>");
            $("#signInError").append("<p style='text-align:center;'>Incorrect password, try again.</p>")
            $("#confirm-sign-in-btn").hide()
            $("#sign-in-content form").hide();
            $("#sign-in-content h3").hide();
            setTimeout(function(){
                $("#sign-in-content form").show();
                $("#sign-in-content h3").show();
                $("#signInError").empty();
                $("#confirm-sign-in-btn").show()
            },3000)
            // alert("Incorrect password, try again.")
            return;
        }
    }
}

// ON CLICK SIGN OUT
function signOut(){
    sessionStorage.removeItem("age");
    sessionStorage.setItem("signedIn",false);
    $("#sign-in").show();
    $("#sign-out").hide();
    $("#sign-in-out").click();
    $("#baguette-card").hide();
}

// CREATE USER
function updateAgeDisplay(val) {
    document.getElementById('age-display').value=val; 
}

function updateAgeSlider(val){
    document.getElementById('age-slider').value=val; 
}

function createUser(){
    $("#sign-in-content").hide();
    $("#create-user-content").show();
}

function submitCreateUser(){
    if (
        document.getElementById("create-firstname").value == "" ||
        document.getElementById("create-lastname").value == "" ||
        document.getElementById("age-display").value == "" ||
        document.getElementById("create-email").value == "" ||
        document.getElementById("create-password").value == ""
    ){
        $("#createError").append("<lottie-player src='https://assets8.lottiefiles.com/packages/lf20_slGFhN.json'  background='transparent'  speed='1.75'  style='width: 100px; height: 100px; margin: auto;'   autoplay></lottie-player>");
        $("#createError").append("<p style='text-align:center;'>Please make sure all input fields are filled.</p>")
        $("#create-user-content form").hide();
        $("#create-user-content h3").hide();
        setTimeout(function(){
            $("#createError").empty();
            $("#create-user-content form").show();
            $("#create-user-content h3").show();

        },3000)
        return;
    }
    $("#create-user-content form").hide();
    $("#create-user-content h3").hide();
    $("#createError").append('<lottie-player src="https://assets5.lottiefiles.com/packages/lf20_Q2FX6B.json"  background="transparent"  speed="1"  style="margin:auto;width: 300px; height: 300px;"  loop  autoplay></lottie-player>');
    let jsondata = {
        "first_name": document.getElementById("create-firstname").value,
        "last_name": document.getElementById("create-lastname").value,
        "age":document.getElementById("age-display").value,
        "email":document.getElementById("create-email").value,
        "password":document.getElementById("create-password").value
    }
    let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://interactivedev-34c7.restdb.io/rest/aita-user",
    "method": "POST",
    "headers": {
        "content-type": "application/json",
        "x-apikey": "601f96113f9eb665a1689212",
        "cache-control": "no-cache"
    },
    "processData": false,
    "data": JSON.stringify(jsondata)
    }

    $.ajax(settings).done(function (response) {
    console.log(response);
    $("#createError").empty();
    $("#createError").append("<lottie-player src='https://assets8.lottiefiles.com/private_files/lf30_x0qiw13f.json'  background='transparent'  speed='1.75'  style='width: 100px; height: 100px; margin: auto;'   autoplay></lottie-player>");
    $("#createError").append("<p style='text-align:center;'>Account Sucessfully Created.</p>")
    $("#create-user-content form").hide();
    $("#create-user-content h3").hide();
    setTimeout(function(){
        $("#create-user-content form").show();
        $("#create-user-content h3").show();
        cancelCreateUser();
    },3000)
    });

}

function cancelCreateUser(){
    $("#sign-in-content").show();
    $("#create-user-content").hide();
    document.getElementById("create-firstname").value = "";
    document.getElementById("create-lastname").value = "";
    document.getElementById("age-display").value = "";
    document.getElementById("create-email").value = "";
    document.getElementById("create-password").value = "";
}

// Back To Top Btn

$(window).scroll(function() {
  if ($(window).scrollTop() > 250) {
    $('#back-to-top-btn').show();
  } else {
    $('#back-to-top-btn').hide();
  }
});

$('#back-to-top-btn').on('click', function(e) {
  scrollTo("");
});



