// scroll-reveal-left-right-fast.js
// Scroll Reveal universal com efeito da esquerda para direita - MAIS RÁPIDO

class ScrollRevealLeftRightFast {
    constructor() {
        this.observer = null;
        this.animatedElements = new Set();
        this.init();
    }

    init() {
        // Configurações do Intersection Observer
        const options = {
            root: null,
            rootMargin: '0px 0px -30px 0px', // Menos margem para animar mais cedo
            threshold: 0.05 // Threshold menor para animar mais cedo
        };

        this.observer = new IntersectionObserver(this.handleIntersect.bind(this), options);
        
        // Iniciar observação
        setTimeout(() => {
            this.observeElements();
        }, 50); // Delay menor para iniciar mais rápido
    }

    // Detecta elementos para animar
    observeElements() {
        const selectors = [
            // Títulos
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            
            // Parágrafos e textos
            'p', '.texto', '.descricao', '.subtitle', '.lead',
            
            // Cards e containers
            '.card', '.box', '.container', '.section', '.grid-item',
            
            // Botões
            'button', '.btn', '.botao', '.cta',
            
            // Listas
            'ul', 'ol', 'li',
            
            // Elementos específicos
            '.carousel-slide', '.rounded-2xl', '.bg-\\[#252525\\]',
            '.feature', '.service', '.product'
        ];

        selectors.forEach(selector => {
            try {
                const elements = document.querySelectorAll(selector);
                elements.forEach(element => {
                    if (this.shouldAnimateElement(element)) {
                        this.setupElement(element);
                        this.observer.observe(element);
                    }
                });
            } catch (e) {
                console.warn(`Seletor ${selector} não encontrado:`, e);
            }
        });
    }

    // Determina se o elemento deve ser animado
    shouldAnimateElement(element) {
        // Não animar elementos muito pequenos ou já animados
        if (element.offsetHeight < 10 || this.animatedElements.has(element)) {
            return false;
        }

        // Não animar elementos no header/footer principal
        const forbiddenParents = ['header', 'footer', 'nav'];
        let parent = element.parentElement;
        
        while (parent) {
            if (forbiddenParents.includes(parent.tagName.toLowerCase())) {
                return false;
            }
            parent = parent.parentElement;
        }

        return true;
    }

    // Configura o elemento com animação da esquerda para direita
    setupElement(element) {
        const tagName = element.tagName.toLowerCase();
        const classes = element.className.toString();
        
        // Determina a configuração baseada no tipo de elemento
        const animationConfig = this.getElementAnimationConfig(element, tagName, classes);
        
        // Aplica estilos iniciais (começa da esquerda)
        element.style.opacity = '0';
        element.style.transform = `translateX(${animationConfig.distance}px)`;
        element.style.transition = `all ${animationConfig.duration}ms ease-out ${animationConfig.delay}ms`; // ease-out para ser mais rápido
        
        // Armazena a configuração
        element._revealConfig = animationConfig;
        this.animatedElements.add(element);
    }

    // Determina a configuração de animação (MAIS RÁPIDO)
    getElementAnimationConfig(element, tagName, classes) {
        const isLarge = element.offsetWidth > 300 || element.offsetHeight > 200;
        const isText = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'].includes(tagName);
        const isCard = classes.includes('card') || classes.includes('box') || classes.includes('container');
        
        // Configurações MAIS RÁPIDAS baseadas no tipo de elemento
        if (tagName === 'h1' || classes.includes('hero')) {
            return {
                distance: -60, // Menos distância
                duration: 600, // Mais rápido (era 900ms)
                delay: 50      // Menos delay
            };
        }
        
        if (tagName === 'h2' || (isText && isLarge)) {
            return {
                distance: -50,
                duration: 500, // Mais rápido (era 800ms)
                delay: 80
            };
        }
        
        if (tagName === 'h3' || tagName === 'h4') {
            return {
                distance: -40,
                duration: 450, // Mais rápido (era 700ms)
                delay: 120
            };
        }
        
        if (isCard) {
            return {
                distance: -35,
                duration: 400, // Mais rápido (era 750ms)
                delay: 80
            };
        }
        
        if (tagName === 'p' || isText) {
            return {
                distance: -30,
                duration: 350, // Mais rápido (era 600ms)
                delay: 150
            };
        }
        
        if (tagName === 'button' || classes.includes('btn')) {
            return {
                distance: -25,
                duration: 300, // Mais rápido (era 500ms)
                delay: 200
            };
        }
        
        // Configuração padrão MAIS RÁPIDA
        return {
            distance: -30,
            duration: 400, // Mais rápido (era 600ms)
            delay: 100
        };
    }

    // Manipula a interseção dos elementos
    handleIntersect(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.animateIn(entry.target);
                this.observer.unobserve(entry.target);
            }
        });
    }

    // Animação de entrada (move para posição original)
    animateIn(element) {
        // Sem timeout adicional para ser mais imediato
        element.style.opacity = '1';
        element.style.transform = 'translateX(0)';
    }

    // Método para forçar animação de elementos específicos
    forceAnimate(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            if (!this.animatedElements.has(element)) {
                this.setupElement(element);
                this.animateIn(element);
            }
        });
    }

    // Método para recarregar e observar novos elementos
    refresh() {
        this.animatedElements.clear();
        this.observeElements();
    }

    // Destruir instância
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
        this.animatedElements.clear();
    }
}

// Inicialização automática MAIS RÁPIDA
document.addEventListener('DOMContentLoaded', function() {
    window.scrollReveal = new ScrollRevealLeftRightFast();
    
    // Observar elementos carregados dinamicamente
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length > 0) {
                // Timeout menor para atualização mais rápida
                setTimeout(() => {
                    if (window.scrollReveal) {
                        window.scrollReveal.refresh();
                    }
                }, 200); // Mais rápido (era 500ms)
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// Export para uso com módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScrollRevealLeftRightFast;
}