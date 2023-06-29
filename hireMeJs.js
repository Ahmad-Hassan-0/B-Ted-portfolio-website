const scriptURL = 'https://script.google.com/macros/s/AKfycbyRJtlAImuMUTKcev3D8jZ-0y9rka44Sde4yv-JCLn7fuVQ2eRCsvfETbOMmP6vViUzoA/exec'
const form = document.forms['myForm']

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
    $("#myForm")[0].reset();    
}
