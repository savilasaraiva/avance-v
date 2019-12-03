var stepper

document.addEventListener('DOMContentLoaded', function () {
    stepper = new Stepper(document.querySelector('#stepper'), {
        linear: false,
        animation: true
    })
    

    var btnNextList = [].slice.call(document.querySelectorAll('.btn-next-form'))

    btnNextList.forEach(function (btn) {
        btn.addEventListener('click', function () {
            stepperForm.next()
        })
    })
})
