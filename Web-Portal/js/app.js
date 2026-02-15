/**
 * VedaGarden - Main Application
 * Connecting seekers with plant wisdom
 */

(function() {
    'use strict';
    
    // State
    let currentFilter = 'all';
    let searchQuery = '';
    let currentPlant = null;
    
    // DOM Elements
    const plantGrid = document.getElementById('plantGrid');
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('plantModal');
    const modalContent = document.getElementById('modalContent');
    const modalClose = document.getElementById('modalClose');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    const contactForm = document.getElementById('contactForm');
    const resultCount = document.getElementById('resultCount');
    const featuredGrid = document.getElementById('featuredGrid');
    
    // Initialize
    document.addEventListener('DOMContentLoaded', init);
    
    function init() {
        renderPlants(plantsData);
        renderFeaturedPlants();
        setupEventListeners();
        setupIntersectionObserver();
    }
    
    function setupEventListeners() {
        // Search
        if (searchInput) {
            searchInput.addEventListener('input', debounce(handleSearch, 300));
        }
        
        // Filters
        filterBtns.forEach(btn => {
            btn.addEventListener('click', handleFilter);
        });
        
        // Modal
        if (modalClose) {
            modalClose.addEventListener('click', closeModal);
        }
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });
        }
        
        // Keyboard
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
                closeModal();
            }
        });
        
        // Mobile menu
        if (mobileMenuToggle && mainNav) {
            mobileMenuToggle.addEventListener('click', () => {
                mainNav.classList.toggle('active');
                mobileMenuToggle.setAttribute('aria-expanded', 
                    mainNav.classList.contains('active'));
            });
        }
        
        // Contact form
        if (contactForm) {
            contactForm.addEventListener('submit', handleContactSubmit);
        }
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', smoothScroll);
        });
    }
    
    // Plant Rendering
    function renderPlants(plants) {
        if (!plantGrid) return;
        
        if (plants.length === 0) {
            plantGrid.innerHTML = `
                <div class="no-results">
                    <p>No plants match your search.</p>
                    <p>Try adjusting your filters or search term.</p>
                </div>
            `;
            updateResultCount(0);
            return;
        }
        
        plantGrid.innerHTML = plants.map(plant => createPlantCard(plant)).join('');
        updateResultCount(plants.length);
        
        // Add click listeners to cards
        plantGrid.querySelectorAll('.plant-card').forEach(card => {
            card.addEventListener('click', () => {
                const plantId = card.dataset.plantId;
                openPlantModal(plantId);
            });
            
            // Keyboard accessibility
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const plantId = card.dataset.plantId;
                    openPlantModal(plantId);
                }
            });
        });
    }
    
    function createPlantCard(plant) {
        const doshaDisplay = getDoshaDisplay(plant.ayurvedicProperties.doshaEffect);
        
        return `
            <article class="plant-card" data-plant-id="${plant.id}" tabindex="0" role="button"
                     aria-label="Learn more about ${plant.name}">
                <div class="plant-card-header">
                    <span class="plant-emoji">${plant.emoji}</span>
                    <span class="plant-sanskrit">${plant.sanskritName}</span>
                </div>
                <div class="plant-card-body">
                    <h3 class="plant-name">${plant.name}</h3>
                    <p class="plant-scientific">${plant.scientificName}</p>
                    <p class="plant-description">${truncateText(plant.description, 120)}</p>
                    <div class="plant-dosha">
                        ${doshaDisplay}
                    </div>
                    <div class="plant-ailments">
                        ${plant.ailmentNames.slice(0, 3).map(a => 
                            `<span class="ailment-tag">${a}</span>`
                        ).join('')}
                    </div>
                </div>
                <div class="plant-card-footer">
                    <span class="learn-more">Explore <span aria-hidden="true">→</span></span>
                </div>
            </article>
        `;
    }
    
    function getDoshaDisplay(doshaEffect) {
        const doshas = [
            { name: 'Vata', effect: doshaEffect.vata, symbol: 'V' },
            { name: 'Pitta', effect: doshaEffect.pitta, symbol: 'P' },
            { name: 'Kapha', effect: doshaEffect.kapha, symbol: 'K' }
        ];
        
        return doshas.map(d => {
            const arrow = d.effect === 'decreases' ? '↓' : 
                         d.effect === 'increases' ? '↑' : '·';
            const cls = d.effect === 'decreases' ? 'decrease' : 
                       d.effect === 'increases' ? 'increase' : 'neutral';
            return `<span class="dosha-indicator ${cls}" title="${d.name}: ${d.effect}">${d.symbol}${arrow}</span>`;
        }).join('');
    }
    
    // Featured Plants
    function renderFeaturedPlants() {
        if (!featuredGrid) return;
        
        const featured = plantsData.slice(0, 3);
        featuredGrid.innerHTML = featured.map(plant => createFeaturedCard(plant)).join('');
        
        featuredGrid.querySelectorAll('.featured-card').forEach(card => {
            card.addEventListener('click', () => {
                const plantId = card.dataset.plantId;
                openPlantModal(plantId);
            });
        });
    }
    
    function createFeaturedCard(plant) {
        return `
            <article class="featured-card" data-plant-id="${plant.id}">
                <div class="featured-emoji">${plant.emoji}</div>
                <h3>${plant.name}</h3>
                <p class="featured-sanskrit">${plant.sanskritName} · ${plant.scientificName}</p>
                <p>${truncateText(plant.description, 150)}</p>
                <button class="btn btn-secondary">Learn More</button>
            </article>
        `;
    }
    
    // Search & Filter
    function handleSearch(e) {
        searchQuery = e.target.value.toLowerCase().trim();
        filterAndRenderPlants();
    }
    
    function handleFilter(e) {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        currentFilter = btn.dataset.filter;
        filterAndRenderPlants();
    }
    
    function filterAndRenderPlants() {
        let filtered = plantsData;
        
        // Apply category filter
        if (currentFilter !== 'all') {
            filtered = filtered.filter(plant => 
                plant.targetAilments.includes(currentFilter)
            );
        }
        
        // Apply search filter
        if (searchQuery) {
            filtered = filtered.filter(plant => {
                const searchableText = [
                    plant.name,
                    plant.scientificName,
                    plant.sanskritName,
                    plant.description,
                    ...plant.commonNames,
                    ...plant.ailmentNames,
                    ...plant.traditionalUses
                ].join(' ').toLowerCase();
                
                return searchableText.includes(searchQuery);
            });
        }
        
        renderPlants(filtered);
    }
    
    function updateResultCount(count) {
        if (!resultCount) return;
        resultCount.textContent = `${count} plant${count !== 1 ? 's' : ''} found`;
    }
    
    // Modal
    function openPlantModal(plantId) {
        currentPlant = getPlantById(plantId);
        if (!currentPlant || !modal || !modalContent) return;
        
        modalContent.innerHTML = createModalContent(currentPlant);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus management
        modalClose.focus();
    }
    
    function closeModal() {
        if (!modal) return;
        modal.classList.remove('active');
        document.body.style.overflow = '';
        currentPlant = null;
    }
    
    function createModalContent(plant) {
        const props = plant.ayurvedicProperties;
        
        return `
            <div class="modal-header">
                <div class="modal-title-row">
                    <span class="modal-emoji">${plant.emoji}</span>
                    <div>
                        <h2>${plant.name}</h2>
                        <p class="modal-subtitle">${plant.sanskritName} · ${plant.scientificName}</p>
                    </div>
                </div>
            </div>
            
            <div class="modal-body">
                <section class="modal-section">
                    <p class="modal-description">${plant.description}</p>
                </section>
                
                <section class="modal-section">
                    <h3>Ayurvedic Properties</h3>
                    <div class="properties-grid">
                        <div class="property">
                            <span class="property-label">Rasa (Taste)</span>
                            <span class="property-value">${props.rasaNames.join(', ')}</span>
                        </div>
                        <div class="property">
                            <span class="property-label">Virya (Energy)</span>
                            <span class="property-value">${props.viryaName}</span>
                        </div>
                        <div class="property">
                            <span class="property-label">Vipaka (Post-digestive)</span>
                            <span class="property-value">${props.vipakaName}</span>
                        </div>
                        <div class="property">
                            <span class="property-label">Guna (Qualities)</span>
                            <span class="property-value">${props.guna.join(', ')}</span>
                        </div>
                    </div>
                    
                    <h4>Dosha Effects</h4>
                    <div class="dosha-effects">
                        ${createDoshaEffectDisplay(props.doshaEffect)}
                    </div>
                </section>
                
                <section class="modal-section">
                    <h3>Traditional Uses</h3>
                    <ul class="uses-list">
                        ${plant.traditionalUses.map(use => `<li>${use}</li>`).join('')}
                    </ul>
                </section>
                
                <section class="modal-section">
                    <h3>Key Phytochemicals</h3>
                    <div class="phytochemicals-list">
                        ${plant.phytochemicals.map(p => `
                            <div class="phytochemical">
                                <strong>${p.name}</strong>
                                <p>${p.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </section>
                
                <section class="modal-section">
                    <h3>Usage & Dosage</h3>
                    <p><strong>Parts used:</strong> ${plant.partUsed.join(', ')}</p>
                    <p><strong>Typical dosage:</strong> ${plant.dosage}</p>
                </section>
                
                <section class="modal-section precautions">
                    <h3>⚠️ Precautions</h3>
                    <ul>
                        ${plant.precautions.map(p => `<li>${p}</li>`).join('')}
                    </ul>
                </section>
                
                <section class="modal-section">
                    <h3>Habitat & Cultivation</h3>
                    <p>${plant.habitat}</p>
                    <p>${plant.cultivation}</p>
                </section>
                
                ${plant.references.length > 0 ? `
                    <section class="modal-section references">
                        <h3>Research & References</h3>
                        <ul>
                            ${plant.references.map(ref => `
                                <li><a href="${ref.url}" target="_blank" rel="noopener">${ref.title}</a></li>
                            `).join('')}
                        </ul>
                    </section>
                ` : ''}
            </div>
            
            <div class="modal-footer">
                <p class="disclaimer">This information is for educational purposes only. Consult a qualified practitioner before using any herbs.</p>
            </div>
        `;
    }
    
    function createDoshaEffectDisplay(doshaEffect) {
        const doshas = [
            { name: 'Vata', key: 'vata', desc: 'Air & Space' },
            { name: 'Pitta', key: 'pitta', desc: 'Fire & Water' },
            { name: 'Kapha', key: 'kapha', desc: 'Earth & Water' }
        ];
        
        return doshas.map(d => {
            const effect = doshaEffect[d.key];
            const cls = effect === 'decreases' ? 'decrease' : 
                       effect === 'increases' ? 'increase' : 'neutral';
            const icon = effect === 'decreases' ? '↓ Pacifies' : 
                        effect === 'increases' ? '↑ Increases' : '· Neutral';
            
            return `
                <div class="dosha-effect ${cls}">
                    <span class="dosha-name">${d.name}</span>
                    <span class="dosha-subtitle">${d.desc}</span>
                    <span class="dosha-effect-text">${icon}</span>
                </div>
            `;
        }).join('');
    }
    
    // Contact Form
    function handleContactSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        
        // In a real app, this would send to a server
        console.log('Contact form submission:', data);
        
        // Show success message
        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Message Sent!';
        btn.disabled = true;
        
        setTimeout(() => {
            contactForm.reset();
            btn.textContent = originalText;
            btn.disabled = false;
        }, 3000);
    }
    
    // Smooth Scroll
    function smoothScroll(e) {
        const href = e.currentTarget.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            if (mainNav && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        }
    }
    
    // Intersection Observer for animations
    function setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        document.querySelectorAll('.concept-card, .featured-card, .plant-card').forEach(el => {
            observer.observe(el);
        });
    }
    
    // Utilities
    function debounce(fn, delay) {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn.apply(this, args), delay);
        };
    }
    
    function truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + '…';
    }
    
})();
