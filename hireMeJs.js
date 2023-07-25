const scriptURL = 'https://script.google.com/macros/s/AKfycbxE3aTkRIDpfNBQNZxt14Syi6bDc-B-37f3Re75L59Ac_3hQH8sWNZHhkFXLpRsOHd2cA/exec'
const form = document.forms['thisHireMeForm']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>  tick()
    // alert("Thanks for Contacting us..! We Will Contact You Soon...")
    )
    .catch(error => console.error('Error!', error.message))
})


function tick(){
    $(".trigger").toggleClass("drawn");

    if ($(".trigger").hasClass("drawn")) {
        $(".doneTick").css("left", "37vw");
        // event.preventDefault(); // Prevent form submission
                setTimeout(function () {
                    $(".trigger").removeClass("drawn");

                    setTimeout(function () {
                    $(".doneTick").css("left", "0vw");

                }, 2000);
                }, 2000);
    }  
    // Clear form fields
    $("#myHireMeForm")[0].reset();    
}
