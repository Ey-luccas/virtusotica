// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#" or empty
        if (href === '#' || href === '') {
            e.preventDefault();
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            // Calculate offset for fixed header
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, observerOptions);

// Observe all cards and form
document.querySelectorAll('.feature-card, .product-card, .service-card, .contact-method, .contact-form').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            subject: document.getElementById('subject').value,
            instagram: document.getElementById('instagram') ? document.getElementById('instagram').value.trim() : '',
            message: document.getElementById('message').value.trim(),
            consent: document.querySelector('input[name="consent"]').checked
        };
        
        // Validate form
        if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
            showMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
            return;
        }
        
        if (!formData.consent) {
            showMessage('Você precisa concordar em compartilhar seus dados.', 'error');
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showMessage('Por favor, insira um e-mail válido.', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual backend endpoint)
        // For now, we'll use a mailto link as fallback
        setTimeout(() => {
            const subject = encodeURIComponent(`Contato - ${formData.subject}`);
            let bodyContent = `Nome: ${formData.name}\n` +
                `E-mail: ${formData.email}\n` +
                `Telefone: ${formData.phone}\n` +
                `Assunto: ${formData.subject}\n`;
            
            if (formData.instagram) {
                bodyContent += `Instagram: ${formData.instagram}\n`;
            }
            
            bodyContent += `\nMensagem:\n${formData.message}`;
            
            const body = encodeURIComponent(bodyContent);
            
            // Option 1: Use mailto (opens email client)
            window.location.href = `mailto:contato@virtusotica.com?subject=${subject}&body=${body}`;
            
            // Option 2: Or send via WhatsApp as backup
            // const whatsappMessage = `Olá! Meu nome é ${formData.name}.\n\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\nAssunto: ${formData.subject}\n\nMensagem:\n${formData.message}`;
            // window.open(`https://wa.me/5586994193761?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
            
            // Reset form
            contactForm.reset();
            
            // Show success message
            showMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }, 1000);
    });
}

function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

