// Hero slider functionality

class HeroSlider {
    constructor() {
        this.slides = [
            {
                image: 'image/summer sale.jpg',
                title: 'Summer Sale 2024',
                description: 'Get up to 50% off on summer collections',
                buttonText: 'Shop Now',
                buttonLink: '#products'
            },
            {
                image: 'image/new arrivals.jpg',
                title: 'New Arrivals',
                description: 'Check out our latest fashion trends',
                buttonText: 'Explore',
                buttonLink: '#products'
            },
            {
                image: 'image/pexels-tim-douglas-6567356.jpg',
                title: 'Accessories Collection',
                description: 'Complete your look with our accessories',
                buttonText: 'Shop Accessories',
                buttonLink: '#products'
            }
        ];

        this.currentSlide = 0;
        this.interval = null;
        this.sliderContainer = null;
    }

    init() {
        const slider = document.querySelector('.hero-slider');
        if (!slider) return;

        // Create slider structure
        slider.innerHTML = `
            <div class="slider-container"></div>
            <button class="slider-btn prev-btn">❮</button>
            <button class="slider-btn next-btn">❯</button>
            <div class="slider-dots"></div>
        `;

        this.sliderContainer = slider.querySelector('.slider-container');
        const prevBtn = slider.querySelector('.prev-btn');
        const nextBtn = slider.querySelector('.next-btn');
        const dotsContainer = slider.querySelector('.slider-dots');

        // Create slides
        this.slides.forEach((slide, index) => {
            const slideDiv = document.createElement('div');
            slideDiv.className = 'slide';
            slideDiv.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${slide.image}')`;
            slideDiv.innerHTML = `
                <div class="slide-content">
                    <h2>${slide.title}</h2>
                    <p>${slide.description}</p>
                    <a href="${slide.buttonLink}" class="shop-now-btn">${slide.buttonText}</a>
                </div>
            `;
            this.sliderContainer.appendChild(slideDiv);

            // Create dot
            const dot = document.createElement('span');
            dot.className = 'dot';
            dot.addEventListener('click', () => this.goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        // Add event listeners
        prevBtn.addEventListener('click', () => this.prevSlide());
        nextBtn.addEventListener('click', () => this.nextSlide());

        // Start auto-slide
        this.startAutoSlide();
    }

    prevSlide() {
        this.goToSlide(this.currentSlide - 1);
    }

    nextSlide() {
        this.goToSlide(this.currentSlide + 1);
    }

    goToSlide(index) {
        // Handle wrap around
        if (index < 0) {
            index = this.slides.length - 1;
        } else if (index >= this.slides.length) {
            index = 0;
        }

        // Update slides
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');

        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        dots[index].classList.add('active');

        this.currentSlide = index;
    }

    startAutoSlide() {
        this.interval = setInterval(() => this.nextSlide(), 3000);
    }

    stopAutoSlide() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.hero-slider')) {
        const slider = new HeroSlider();
        slider.init();
    }
});
