var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// calculating the rate on the basis of per hour 
function calculateRate() {
    var number = document.getElementById("rateInput").value;  //getting number of hours from user
    const rate = document.querySelector('.rate');  
    rate.classList.add('rateIt');
    var actualAmount = document.querySelector('#amount');
    var totRate = number * 600;
    actualAmount.innerHTML = totRate;
}