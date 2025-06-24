document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo({
        top: 0,
        behavior: 'instant'
    });
    const titleWord3 = document.querySelectorAll('.title-word-3');
    gsap.to(titleWord3, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
    });
// Preloader animation - Versión corregida
if (window.innerWidth < 992 && window.innerWidth > 768) {
    const preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
    animateHero();
} else {
    const preloader = document.querySelector('.preloader');
    const preloaderText = document.querySelectorAll('.preloader-text-word');
    const heroTitleAlbecas = document.querySelector('.title-word-3');

    // Bloquear scroll inmediatamente
    document.documentElement.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    // Animación inicial: letras apareciendo una por una
    preloaderText.forEach((word, index) => {
        gsap.from(word, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            delay: index * 0.1,
            ease: "power2.out"
        });
    });

setTimeout(() => {
    // Forzar reset de scroll y layout
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.documentElement.getBoundingClientRect(); // Forzar reflow

    requestAnimationFrame(() => {
        // Obtener posición absoluta del título objetivo
        const targetRect = heroTitleAlbecas.getBoundingClientRect();
        const targetX = targetRect.left + window.scrollX;
        const targetY = targetRect.top + window.scrollY;
        
        // Calcular posición base (primera letra)
        const firstLetterRect = preloaderText[0].getBoundingClientRect();
        const baseX = firstLetterRect.left + window.scrollX;
        const baseY = firstLetterRect.top + window.scrollY;

        // Determinar si es móvil
        const isMobile = window.innerWidth < 768;
        
        // Ajustes diferentes para móvil y desktop
        const xAdjustment = isMobile ? 24 : 55;

        preloaderText.forEach((letter, index) => {
            const letterRect = letter.getBoundingClientRect();
            const letterX = letterRect.left + window.scrollX;
            const letterY = letterRect.top + window.scrollY;
            
            // Calcular posición relativa al grupo de letras
            const relativeX = letterX - baseX;
            const relativeY = letterY - baseY;

            gsap.to(letter, {
                x: targetX - baseX + relativeX - (index * xAdjustment), // Ajuste diferente para móvil
                y: targetY - baseY + relativeY,
                color: "#a200ff",
                duration: 1,
                ease: "power2.inOut",
                delay: index * 0.05,
                onComplete: () => {
                    if (index === preloaderText.length - 1) {
                        gsap.to(preloader, {
                            opacity: 0,
                            duration: 0.5,
                            onComplete: () => {
                                preloader.style.display = 'none';
                                document.documentElement.style.overflow = '';
                                gsap.to(heroTitleAlbecas, { 
                                    opacity: 1, 
                                    duration: 0 
                                });
                                animateHero();
                            }
                        });
                        gsap.to(preloaderText, {
                            opacity: 1,
                            duration: 0,
                        });
                    }
                }
            });
        });
    });
}, 2000);
}


    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Hero animation
    function animateHero() {
        const titleWords = document.querySelectorAll('.title-word');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroSubtitle2 = document.querySelector('.hero-subtitle2');
        const heroScroll = document.querySelector('.hero-scroll');
        
        gsap.to(titleWords, {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out'
        });
        
        gsap.to(heroSubtitle, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.6,
            ease: 'power3.out'
        });

        gsap.to(heroSubtitle2, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.6,
            ease: 'power3.out'
        });
        
        gsap.to(heroScroll, {
            opacity: 1,
            duration: 1,
            delay: 1.2,
            ease: 'power3.out'
        });
    }
    
    // Projects data
    const projectsData = [
        {
            title: "FolioX",
            description: "My very own business",
            tags: ["HTML", "CSS", "JavaScript", "React"],
            image: "img/foliox.png",
            downloadUrl: "https://abecas10.github.io/foliox/",
            sourceCodeUrl: "https://abecas10.github.io/foliox/"
        },
        {
            title: "Image converter",
            description: "Tired of constantly searching Google to change your photo formats? Well, this script brings you the solution! Simply run the program, select an image, choose the format you want to convert it to, and voila! You have your photo in a new format.",
            tags: ["Python"],
            image: "img/image_converter.png",
            downloadUrl: "https://www.mediafire.com/file/2jguil4igxckgn3/convertor.exe/file",
            sourceCodeUrl: "https://www.mediafire.com/file/4l5vz103wln2wxu/convertor.py/file"
        },
        {
            title: "QR Code Generator",
            description: "This is another one of the handy practical programs that you never will regret having in your arsenal. With this program, you can easily generate QR codes for your favorite websites, social media profiles, or even your email address. It's a simple yet effective way to share information with others.",
            tags: ["Python"],
            image: "img/qr_code_generator.png",
            downloadUrl: "https://www.mediafire.com/file/oek2ckujrss6s6b/qr_code_generate.exe/file",
            sourceCodeUrl: "https://www.mediafire.com/file/55npf3bkqtku1w1/qr_code_generate.py/file"
        },
        {
            title: "Auto Clicker",
            description: "This is a simple auto clicker that can be used to automate repetitive tasks on your computer. It simulates mouse clicks at a specified interval, making it useful for tasks like gaming or testing.",
            tags: ["Python"],
            image: "img/auto_clicker.png",
            downloadUrl: "https://www.mediafire.com/file/hq8tlbozmodc1m8/auto_clicker.exe/file",
            sourceCodeUrl: "https://www.mediafire.com/file/tkol6zzfgkopzc0/auto_clicker.py/file"
        },
        {
            title: "Finance Tracker",
            description:"This is a simple yet powerful Finance Tracker. You can monitor all your income and expenses, with all data automatically saved to your browser's LocalStorage. This means your financial records remain intact even if you close and reopen the app - everything will be right where you left it.",
            tags: ["HTML", "CSS", "JavaScript"],
            image: "img/finance_tracker.png",
            downloadUrl: "https://abecas10.github.io/financialtracker/",
            sourceCodeUrl: "https://github.com/abecas10/financialtracker"
        },
        {
            title: "Website for themed dinners",
            description: "The idea behind this website was to partner with restaurants so you could organize dinners for groups of, say, 10 people with a common interest, bringing them together at a restaurant for a dinner. This is a prototype of a frontend website.",
            tags: ["HTML", "CSS", "JavaScript"],
            image: "img/cenastematicas.png",
            downloadUrl: "https://abecas10.github.io/cenastematicas/",
            sourceCodeUrl: "https://github.com/abecas10/cenastematicas"
        },
        {
            title: "Study Tracker",
            description: "This is a simple study tracker that can be used to keep track of your time spended in studying. It automatically saves your data to your browser's LocalStorage, so you can access it even after closing and reopening the app.",
            tags: ["HTML", "CSS", "JavaScript"],
            image: "img/study_tracker.png",
            downloadUrl: "https://abecas10.github.io/studytracker/",
            sourceCodeUrl: "https://github.com/abecas10/studytracker"
        }
    ];
    
    // Skills data
    const skillsData = [
    ];
    
    // Render projects
const projectsGrid = document.querySelector('.projects-grid');

    projectsData.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    <div class="project-links">
                        <a href="#" class="project-link" title="View Project"><i class="fas fa-eye"></i></a>
                        <a href="${project.sourceCodeUrl || '#'}" class="project-link" target="_blank" title="Code Repository"><i class="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <!-- Añadimos los botones aquí -->
                <div class="project-buttons">
                    <a href="${project.downloadUrl || '#'}" class="btn btn-download" target="_blank">
                        <i class="fas fa-play"></i> Try it
                    </a>
                    <a href="${project.sourceCodeUrl || '#'}" class="btn btn-source" target="_blank">
                        <i class="fab fa-github"></i> Source Code
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
        
        // Animate project cards with ScrollTrigger
        gsap.from(projectCard, {
            scrollTrigger: {
                trigger: projectCard,
                start: "top 50%",
                toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1
        });
    });
    
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Hero canvas animation
    const canvas = document.getElementById('hero-canvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const ctx = canvas.getContext('2d');
        const particles = [];
        const particleCount = window.innerWidth < 768 ? 30 : 50;
        
        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
            
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }
        // Resize handler
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
    
    // ScrollTrigger animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 60%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 1.5
        });
    });
    
    // Floating animation for elements
    const floatElements = document.querySelectorAll('.project-card, .skill-item, .btn');
    
    floatElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(el, {
                y: -5,
                duration: 0.3,
                ease: 'power1.out'
            });
        });
        
        el.addEventListener('mouseleave', () => {
            gsap.to(el, {
                y: 5,
                duration: 0.3,
                ease: 'power1.out'
            });
        });
    });
});



const birthDate = new Date(2010, 3, 3);

function calculateExactAge() {
    const now = new Date();
    const diff = now - birthDate;
    
    const age = diff / (1000 * 60 * 60 * 24 * 365.242199); // Año tropical promedio
    
    return age;
}

function formatAge(age) {
    return age.toFixed(8);
}

function updateAgeDisplay() {
    const ageValueElement = document.querySelector('.age-value');
    const age = calculateExactAge();
    ageValueElement.innerHTML = `Hi, my name is <b>Alex Castella</b> and I'm <b>${formatAge(age)}</b> years old. I specialize as a full-stack developer with a focus on delivering effective software solutions. I tackle comprehensive development, encompassing dynamic web applications—from interactive user experiences to powerful server-side logic—and the construction of versatile applications for varied requirements. My process involves systematically translating complex challenges into precise, functional code. I consistently expand my technical knowledge and integrate new tools; this adaptability enables me to confidently address a wide range of development tasks and consistently deliver well-engineered outcomes.`;
    requestAnimationFrame(updateAgeDisplay);
}


updateAgeDisplay();



gsap.utils.toArray(".skill-badge").forEach((badge, index) => {
    gsap.to(badge, {
        scrollTrigger: {
            trigger: ".skills",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: index * 0.1,
        ease: "power2.out"
    });
});


document.querySelectorAll('.skill-badge').forEach(badge => {
    badge.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank');
        }
    });
    
    // Efecto visual al hacer clic
    badge.addEventListener('mousedown', function() {
        gsap.to(this, { 
            scale: 0.95, 
            duration: 0.1 
        });
    });
    
    badge.addEventListener('mouseup', function() {
        gsap.to(this, { 
            scale: 1, 
            duration: 0.1 
        });
    });
});

// Configuración de partículas
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('particles-bg');
    const ctx = canvas.getContext('2d');
    
    // Ajustar tamaño del canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Crear partículas
    const particles = [];
    const particleCount = window.innerWidth < 768 ? 30 : 80;
    
    class Particle {
        constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
  
    // Inicializar partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  
    // Animación
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Conectar partículas cercanas
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(108, 92, 231, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    }
    
    animate();
  });
