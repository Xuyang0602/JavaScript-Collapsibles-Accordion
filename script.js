(function() {
    let acc = document.getElementsByClassName('accordion');
    for (let i = 0; i < acc.length; i++) {
        // acc[i].onclick = function() {
        //     this.classList.toggle("active");
        //     this.nextElementSibling.classList.toggle("show");
        // };
        acc[i].addEventListener('click', function(e) {
            e.target.classList.toggle("active");
            e.target.nextElementSibling.classList.toggle("show");
        })
    }
})();