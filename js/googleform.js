const scriptURL = 'https://script.google.com/macros/s/AKfycbxOpi-5Bv1xjN1BP2E5GvtAEvBqYW2SqFC8813CzeIRaQ9u0QDa29EbX5h0utDnQCd_/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg=document.getElementById("msg")
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML="Message sent successfully"
            setTimeout(function(){
                msg.innerHTML=""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })