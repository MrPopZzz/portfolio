// model functionality
        document.addEventListener('DOMContentLoaded', function() {
            const modelButtons = document.querySelectorAll('.view-details');
            const models = document.querySelectorAll('.model');
            const closeButtons = document.querySelectorAll('.close-model, .close-btn');
            
            // Open model
            modelButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const projectId = this.getAttribute('data-project');
                    document.getElementById(`model-${projectId}`).style.display = 'block';
                    document.body.style.overflow = 'hidden'; // Prevent scrolling
                });
            });
            
            // Close model
            closeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    models.forEach(model => {
                        model.style.display = 'none';
                    });
                    document.body.style.overflow = 'auto'; // Enable scrolling
                });
            });
            
            // Close model when clicking outside
            window.addEventListener('click', function(event) {
                models.forEach(model => {
                    if (event.target === model) {
                        model.style.display = 'none';
                        document.body.style.overflow = 'auto'; // Enable scrolling
                    }
                });
            });
            
            // Close model with Escape key
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    models.forEach(model => {
                        model.style.display = 'none';
                    });
                    document.body.style.overflow = 'auto'; // Enable scrolling
                }
            });

            // document.getElementById('more-projects').addEventListener('click', function() {
            //     window.open('https://github.com/MrPopZzz', '_blank');
            // });

            // Mobile navigation toggle
            document.querySelector('.hamburger').addEventListener('click', function() {
                const navLinks = document.querySelector('.nav-links');
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            });

            // Form submission handling
            document.querySelector('.contact-form').addEventListener('submit', function(e) {
                // Let Formspree handle the submission
                // We'll just show a confirmation message after a short delay
                setTimeout(function() {
                    alert('Thank you for your message! I will get back to you soon.');
                    document.querySelector('.contact-form').reset();
                }, 1000);
            });

            // Update navigation on scroll
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 100) {
                    header.style.background = 'rgba(255, 255, 255, 0.98)';
                    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
                } else {
                    header.style.background = 'rgba(255, 255, 255, 0.95)';
                    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                }
            });
        });