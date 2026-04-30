document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap === 'undefined') {
        return;
    }

    // --- SELETORES GLOBAIS ---
    const headerWrapper = document.querySelector("#main-header-wrapper");
    const logoAURORA = document.querySelector(".logo-aurora");
    const logoAOA = document.querySelector(".logo-aoa");
    const menuToggle = document.querySelector("#menu-toggle");
    const closeMenuButton = document.querySelector(".close-menu");
    const sideMenu = document.querySelector("#side-menu");
    const body = document.body;
    const menuOverlay = document.querySelector("#menu-overlay");

    const mql = window.matchMedia('(min-width: 768px)'); 

    if (!menuToggle || !sideMenu || !menuOverlay || !closeMenuButton) {
        return;
    }

    const bar1 = menuToggle.querySelector("#bar1");
    const bar2 = menuToggle.querySelector("#bar2");
    const bar3 = menuToggle.querySelector("#bar3");
    const bar4 = menuToggle.querySelector("#bar4");

    let hoverTimeline = null;
    let lastScrollY = window.scrollY;

    // --- Variáveis de animação ---
    let a1, a2, u, r1, r2;
    const offset_desktop = 20;
    const a1_orig_x = 12.4;
    const a2_orig_x = 213.2;
    const o_aurora_x = 134.5;
    const u_orig_x = 53;
    const r1_orig_x = 93;
    const r2_orig_x = 176;

    // Posições "comprimidas" no centro (para desktop)
    const a1_squished_x_center = (o_aurora_x - 21.2) - a1_orig_x;
    const a2_squished_x_center = (o_aurora_x + 21.2) - a2_orig_x;
    const u_hidden_x_center = o_aurora_x - u_orig_x;
    const r1_hidden_x_center = o_aurora_x - r1_orig_x;
    const r2_hidden_x_center = o_aurora_x - r2_orig_x;


    /**
     * (MODIFICADO) Esta função define a POSIÇÃO INICIAL da logo (gsap.set)
     * com base no tamanho atual da janela, diferenciando desktop e mobile.
     */
    function setupLogoInitialState() {
        if (!logoAOA || !logoAURORA || !a1 || !a2 || !u || !r1 || !r2) {
            return; 
        }

        let initial_AOA_x, initial_a1_x, initial_a2_x, initial_u_x, initial_r1_x, initial_r2_x;

        if (mql.matches) {
            // --- Desktop: Animação CENTRALIZADA (como era originalmente) ---
            initial_AOA_x = offset_desktop; 
            initial_a1_x = a1_squished_x_center;
            initial_a2_x = a2_squished_x_center;
            initial_u_x = u_hidden_x_center;
            initial_r1_x = r1_hidden_x_center;
            initial_r2_x = r2_hidden_x_center;
        } else {
            // --- Mobile: Animação da Direita para Esquerda ---
            const right_squish_point_x = 195.5; 
            initial_AOA_x = 81; // Posição X do AOA (alinhado à direita)
            
            // Posições X das letras "AURORA" (comprimidas à direita)
            initial_a1_x = (right_squish_point_x - 21.2) - a1_orig_x;
            initial_a2_x = (right_squish_point_x + 21.2) - a2_orig_x;
            initial_u_x = right_squish_point_x - u_orig_x;
            initial_r1_x = right_squish_point_x - r1_orig_x;
            initial_r2_x = right_squish_point_x - r2_orig_x;
        }

        // Configuração Inicial do GSAP
        gsap.set(a1, { x: initial_a1_x });
        gsap.set(a2, { x: initial_a2_x });
        gsap.set([u, r1, r2], { opacity: 0, scale: 0.3, transformOrigin: "center" });
        gsap.set(u, { x: initial_u_x });
        gsap.set(r1, { x: initial_r1_x });
        gsap.set(r2, { x: initial_r2_x });
        gsap.set(logoAOA, { opacity: 1, x: initial_AOA_x });
        gsap.set(logoAURORA, { opacity: 0 });
        
        if(hoverTimeline) {
            hoverTimeline.reverse(0); // Reverte para o início sem animar
        }
    }


    // #################################################
    // # 1. LÓGICA DO LOGO E ANIMAÇÃO GSAP (MODIFICADO) #
    // #################################################

    if (logoAURORA && logoAOA) {
        // Seleciona os elementos UMA VEZ
        a1 = logoAURORA.querySelector(".a1");
        a2 = logoAURORA.querySelector(".a2");
        u = logoAURORA.querySelector(".u");
        r1 = logoAURORA.querySelector(".r1");
        r2 = logoAURORA.querySelector(".r2");

        if (a1 && a2 && u && r1 && r2) {
            
            // Cria a Timeline UMA VEZ
            hoverTimeline = gsap.timeline({ paused: true });
            hoverTimeline
                .to(logoAOA, { opacity: 0, duration: 0.2, ease: "power1.in" })
                .to(logoAURORA, { opacity: 1, duration: 0.2, ease: "power1.out" }, "<")
                // Destino final X:0 (centro) está correto para a animação
                .to([a1, a2], { x: 0, duration: 0.7, ease: "power3.out" }, "-=0.1")
                .to([u, r1, r2], {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: "back.out(1.4)",
                    stagger: 0.1
                }, "-=0.6");
            
            // CHAMA A FUNÇÃO DE SETUP PELA PRIMEIRA VEZ
            setupLogoInitialState();

            // (NOVO) Adiciona o Listener de MQL (Media Query)
            mql.addEventListener("change", setupLogoInitialState);
        }
    }

    // #################################################
    // # 2. LÓGICA DO MENU LATERAL (Inalterado) #
    // #################################################
    const menuIconTimeline = gsap.timeline({ paused: true })
        .to([bar1, bar4], { opacity: 0, duration: 0.15 }, 0)
        .to(bar2, { y: 8, rotation: 45, duration: 0.3, ease: "power2.inOut" }, 0)
        .to(bar3, { y: -8, rotation: -45, duration: 0.3, ease: "power2.inOut" }, 0);
    function toggleMenu(open) {
        const action = open ? 'add' : 'remove';
        sideMenu.classList[action]('is-open');
        menuOverlay.classList[action]('is-open');
        body.classList[action]('menu-open');
        if (open) {
            menuIconTimeline.play();
        } else {
            menuIconTimeline.reverse();
            document.querySelectorAll('.submenu.is-open').forEach(openSubmenu => {
                openSubmenu.classList.remove('is-open');
                const parentLink = openSubmenu.closest('li').querySelector('.menu-link.has-dropdown');
                if (parentLink) {
                    parentLink.querySelector('.arrow-svg').classList.remove('rotated');
                }
            });
        }
    }
    menuToggle.addEventListener('click', () => {
        const isMenuOpen = sideMenu.classList.contains('is-open');
        toggleMenu(!isMenuOpen);
    });
    closeMenuButton.addEventListener('click', () => toggleMenu(false));
    menuOverlay.addEventListener('click', () => toggleMenu(false));
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sideMenu.classList.contains("is-open")) {
            toggleMenu(false);
        }
    });

    // #################################################
    // # 3. LÓGICA DOS DROPDOWNS (Inalterado) #
    // #################################################
    const dropdownLinks = document.querySelectorAll('.menu-link.has-dropdown');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdownId = link.getAttribute('data-dropdown');
            const submenu = document.getElementById(`dropdown-${dropdownId}`);
            const arrowSvg = link.querySelector('.arrow-svg');
            if (!submenu || !arrowSvg) return;
            const isSubmenuOpen = submenu.classList.contains('is-open');
            document.querySelectorAll('.submenu.is-open').forEach(openSubmenu => {
                if (openSubmenu !== submenu) {
                    openSubmenu.classList.remove('is-open');
                    const parentLink = openSubmenu.closest('li').querySelector('.menu-link.has-dropdown');
                    if (parentLink) {
                        parentLink.querySelector('.arrow-svg').classList.remove('rotated');
                    }
                }
            });
            submenu.classList.toggle('is-open', !isSubmenuOpen);
            arrowSvg.classList.toggle('rotated', !isSubmenuOpen);
        });
    });

    // #################################################
    // # 4. LÓGICA DO HEADER (Inalterado) #
    // #################################################
    
    const scrollThreshold = 100;

    if (headerWrapper) {
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY <= scrollThreshold) {
                headerWrapper.classList.remove('header-hidden');
                headerWrapper.classList.remove('scrolled');
                headerWrapper.style.pointerEvents = 'auto'; 
                if (hoverTimeline) {
                    hoverTimeline.reverse(); 
                }
            } 
            else if (currentScrollY > lastScrollY) {
                headerWrapper.classList.add('header-hidden');
                headerWrapper.style.pointerEvents = 'none'; 
                if (hoverTimeline) {
                    hoverTimeline.reverse(); 
                }
            } 
            else if (currentScrollY < lastScrollY) {
                headerWrapper.classList.remove('header-hidden');
                headerWrapper.classList.add('scrolled'); 
                headerWrapper.style.pointerEvents = 'auto'; 
                if (hoverTimeline) {
                    hoverTimeline.play();
                }
            }
            lastScrollY = currentScrollY;
        });
    }
});