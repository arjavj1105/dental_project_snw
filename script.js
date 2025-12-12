
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        document.querySelector('.book-btn').addEventListener('click', function() {
            alert('Redirecting to booking system...');
        });

        document.querySelectorAll('.btn-primary').forEach(btn => {
            btn.addEventListener('click', function() {
                alert('Opening Smart Appointment System...');
            });
        });

        document.querySelector('.btn-secondary').addEventListener('click', function() {
            alert('Loading team information...');
        });

        document.querySelector('.login-btn').addEventListener('click', function() {
            alert('Redirecting to login page...');
        });

        document.querySelector('.phone-icon').addEventListener('click', function() {
            alert('Calling clinic support... Phone: +1-800-SMILE-NOW');
        });

        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! Your message has been sent. We will get back to you soon!');
            this.reset();
        });

        let lastScrollTop = 0;
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 50) {
                document.querySelector('header').style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            } else {
                document.querySelector('header').style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
            }
            lastScrollTop = scrollTop;
        });


