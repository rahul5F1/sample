document.addEventListener('DOMContentLoaded', function () {
    // Handle click event on About button
    document.getElementById('aboutButton').addEventListener('click', function() {
        $('#aboutModal').modal('show'); // Show modal on About button click
    });

    // Handle form submission
    document.getElementById('predictForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var fd = new FormData(document.querySelector('form'));
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/predict', true);
        document.getElementById("prediction").innerHTML = "Wait, Predicting Price ...";
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                var response = xhr.responseText.trim();
                if (response.startsWith('<0')) {
                    document.getElementById('prediction').innerHTML = 'Please enter valid requirements!';
                } else {
                    var predictedPrice = parseFloat(response);
                    if (predictedPrice < 0) {
                        document.getElementById('prediction').innerHTML = 'Please enter valid requirements!';
                    } else {
                        document.getElementById('prediction').innerHTML = 'Predicted Price: ₹ ' + predictedPrice.toFixed(2);
                    }
                }
            }
        };
        xhr.send(fd);
    });

    // GitHub logo mouse events
    const githubLogo = document.querySelector('.navbar-brand img');
    githubLogo.addEventListener('mouseenter', function () {
        this.style.opacity = '0.7'; // Reduce opacity on mouse enter
    });
    githubLogo.addEventListener('mouseleave', function () {
        this.style.opacity = '1'; // Restore opacity on mouse leave
    });

    // Navbar toggler mouse events
    const navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.addEventListener('mouseenter', function () {
        this.style.color = 'rgba(255, 255, 255, 0.8)'; // Lighten color on mouse enter
    });
    navbarToggler.addEventListener('mouseleave', function () {
        this.style.color = 'rgba(255, 255, 255, 0.5)'; // Restore color on mouse leave
    });

    // Form input label mouse events
    const formLabels = document.querySelectorAll('.animated-label');
    formLabels.forEach(label => {
        label.addEventListener('mouseenter', function () {
            this.style.color = '#007bff'; // Change label color on mouse enter
        });
        label.addEventListener('mouseleave', function () {
            this.style.color = '#333'; // Restore label color on mouse leave
        });
    });
});
