document.addEventListener('DOMContentLoaded', () => {

  // --- 1. DICIONÁRIO DE TRADUÇÕES ---
  const translations = {
    'pt': {
      // Meta
      pageTitle: "Home",
      flagAltText: "Mudar para Inglês",
      // Menu
      searchPlaceholder: "Buscar",
      menuHome: "INÍCIO",
      menuExploreThemes: "EXPLORAR POR TEMAS",
      themeFundamentos: "Fundamentos Teóricos e Conceituais",
      themeEletromecanica: "A Era Eletromecânica",
      themeFinsEspecificos: "Computação para Fins Específicos",
      themeRevolucao: "A Revolução Eletrônica: Válvulas",
      themeSoftware: "O Nascimento do Software Moderno",
      themeTecnologias: "Tecnologias, Pessoas e Comunidade",
      menuExploreEras: "EXPLORAR POR ERAS",
      eraIdeias: "As Primeiras Ideias (1936–1939)",
      eraComputadores: "Os Primeiros Computadores (1940–1946)",
      eraExpansao: "A Era da Expansão (1947–1950)",
      menuQuiz: "QUIZ",
      menuAbout: "SOBRE NÓS",
      // Hero
      heroImageAlt: "A Jornada dos Primeiros Computadores",
      heroTitle: "A JORNADA DOS PRIMEIROS <br> COMPUTADORES", // Mantém o <br>
      heroSubtitle: "De 1936 a 1950, uma revolução silenciosa começou a transformar o mundo: <br>da Máquina de Turing ao ENIAC, da teoria à prática, da ideia à inovação.",
      heroButton: "INICIE A JORNADA",
      // Seção Eras
      erasTitle: "Eras",
      erasSubtitle: "Navegue pelos momentos que definiram a computação moderna.",
      // Seção Cenário
      scenarioTitle: "O Cenário de uma Revolução",
      scenarioSubtitle: "Explore os eventos mundiais que não foram apenas um pano de fundo, mas a força motriz da revolução tecnológica.",
      scenarioEve: "Vésperas da Tempestade",
      scenarioWar: "A Guerra como Aceleradora",
      scenarioNewStart: "Um Novo Começo",
      scenarioIronCurtain: "A Cortina de Ferro",
      scenarioTheory: "O Nascimento da Teoria",
      // Biografias
      turingName: "ALAN TURING",
      turingBio: "A mente brilhante que lançou os fundamentos da nossa era tecnológica. De seu trabalho que ajudou a encurtar uma guerra à sua exploração sobre a inteligência artificial, seu impacto continua a moldar o nosso mundo.",
      shannonName: "CLAUDE SHANNON",
      shannonBio: "Claude Shannon foi um matemático e engenheiro americano considerado o pai da Teoria da Informação. Ele desenvolveu os fundamentos da comunicação digital moderna, introduzindo o conceito de bits. Seu trabalho revolucionou áreas como computação, criptografia e telecomunicações.",
      seeMoreButton: "Veja Mais",
     themesTitle: "Temas",
themesSubtitle: "Navegue pelos capítulos fundamentais que construíram a era digital.",

// Cards do carrossel
cardFundamentosAlt: "Fundamentos Teóricos e Conceituais",
cardFundamentosTitle: "Fundamentos Teóricos e Conceituais",
cardFundamentosText: "Antes do primeiro chip ou circuito, existia a ideia. Explore os modelos teóricos e os conceitos matemáticos que formam o DNA de toda a computação moderna...",

cardEletromecanicaAlt: "A Era Eletromecânica: Relés e Engrenagens",
cardEletromecanicaTitle: "A Era Eletromecânica: Relés e Engrenagens",
cardEletromecanicaText: "Com o som de relés e engrenagens, nasceram as primeiras máquinas de calcular programáveis. Conheça os gigantes eletromecânicos...",

cardFinsEspecificosAlt: "Computação para Fins Específicos",
cardFinsEspecificosTitle: "Computação para Fins Específicos: Guerra e Ciência",
cardFinsEspecificosText: "A necessidade impulsionou a inovação. Descubra como a Segunda Guerra Mundial acelerou a criação de máquinas como o Colossus e o ENIAC...",

cardRevolucaoAlt: "A Revolução Eletrônica: A Era das Válvulas",
cardRevolucaoTitle: "A Revolução Eletrônica: A Era das Válvulas",
cardRevolucaoText: "Os relés deram lugar às válvulas eletrônicas, permitindo cálculos em velocidades nunca antes imaginadas. Conheça o ENIAC, EDVAC e o UNIVAC I...",

cardSoftwareAlt: "O Nascimento do Software e do Computador Moderno",
cardSoftwareTitle: "O Nascimento do Software e do Computador Moderno",
cardSoftwareText: "Com o hardware estabelecido, a próxima fronteira era o software. Explore a arquitetura de von Neumann, o conceito de programa armazenado...",

cardTecnologiasAlt: "Tecnologias, Pessoas e Comunidade",
cardTecnologiasTitle: "Tecnologias, Pessoas e Comunidade",
cardTecnologiasText: "A computação não foi feita apenas de máquinas, mas de pessoas. Conheça as mentes brilhantes, as colaborações e as comunidades...",
    // Página específica da Era da Expansão
    pageTitleExpansao: "A Era da Expansão",
    bannerExpansaoAlt: "A Era da Expansão",
    bannerExpansaoTitle: "A Era da <br> Expansão",
    bannerExpansaoSubtitle: "Quando a computação passa de experiências <br> isoladas para ciência organizada e máquinas <br> mais potentes.",
    
    // Cards
    cardTransistorAlt: "Transistor",
    cardTransistorTitle: "Transistor",
    cardTransistorText: "Inventado por John Bardeen, William Shockley e Walter Brattain, o transistor substituiu as válvulas eletrônicas.",
    
    cardZ4Alt: "Z4 de Konrad Zuse",
    cardZ4Title: "Z4 de Konrad Zuse",
    cardZ4Text: "O Z4 foi a evolução direta do Z3, desenvolvido por Zuse. Tornou-se um dos primeiros computadores disponíveis comercialmente.",
    
    cardEdsacAlt: "EDSAC",
    cardEdsacTitle: "EDSAC",
    cardEdsacText: "O EDSAC foi o primeiro computador prático de programa armazenado.",
    
    cardPilotAceAlt: "Pilot ACE",
    cardPilotAceTitle: "Pilot ACE",
    cardPilotAceText: "Baseado nos projetos de Alan Turing, o Pilot ACE foi construído no Reino Unido e tornou-se um dos primeiros computadores de programa armazenado do país.",
    
    cardAcmAlt: "ACM",
    cardAcmTitle: "ACM",
    cardAcmText: "Fundada em 1947 nos Estados Unidos, a ACM é uma organização global sem fins lucrativos que conecta acadêmicos, pesquisadores, educadores e profissionais da indústria para dialogar, compartilhar recursos e abordar os desafios do campo.",
    
    cardIbmSsecAlt: "IBM SSEC",
    cardIbmSsecTitle: "IBM SSEC",
    cardIbmSsecText: "Foi uma máquina de computação histórica construída pela IBM e inaugurada em 1948, representando um marco importante na transição da computação eletromecânica para a eletrônica.",
    
    cardManchesterAlt: "MADM ou Manchester Mark I",
    cardManchesterTitle: "MADM ou Manchester Mark I",
    cardManchesterText: "O Manchester Mark I, evolução do 'Baby', foi um dos primeiros computadores de programa armazenado usados em larga escala.",
    
    cardBabyAlt: "Manchester SSEM (Baby)",
    cardBabyTitle: "Manchester SSEM <br> (Baby)",
    cardBabyText: "Conhecido como 'Baby', o Manchester Small-Scale Experimental Machine foi o primeiro computador a executar um programa armazenado na memória. Esse feito marcou o nascimento do modelo de computação moderna.",
    
    cardVonNeumannAlt: "Von Neumann",
    cardVonNeumannTitle: "VON <br> NEUMANN",
    cardVonNeumannText: "John von Neumann foi um matemático húngaro-americano com uma mente prodigiosa, cujas contribuições abrangem a matemática, a física quântica, a economia e, crucialmente, a Ciência da Computação."
    },
    'en': {
      // Meta
      pageTitle: "Home",
      flagAltText: "Switch to Portuguese",
      // Menu
      searchPlaceholder: "Search",
      menuHome: "HOME",
      menuExploreThemes: "EXPLORE BY THEMES",
      themeFundamentos: "Theoretical and Conceptual Foundations",
      themeEletromecanica: "The Electromechanical Era",
      themeFinsEspecificos: "Computing for Specific Purposes",
      themeRevolucao: "The Electronic Revolution: Valves",
      themeSoftware: "The Birth of Modern Software",
      themeTecnologias: "Technologies, People and Community",
      menuExploreEras: "EXPLORE BY ERAS",
      eraIdeias: "The First Ideas (1936–1939)",
      eraComputadores: "The First Computers (1940–1946)",
      eraExpansao: "The Age of Expansion (1947–1950)",
      menuQuiz: "QUIZ",
      menuAbout: "ABOUT US",
      // Hero
      heroImageAlt: "The Journey of the First Computers",
      heroTitle: "THE JOURNEY OF THE FIRST <br> COMPUTERS",
      heroSubtitle: "From 1936 to 1950, a quiet revolution began to transform the world: <br>from the Turing Machine to ENIAC, from theory to practice, from idea to innovation.",
      heroButton: "START THE JOURNEY",
      // Seção Eras
      erasTitle: "Eras",
      erasSubtitle: "Navigate through the moments that defined modern computing.",
      // Seção Cenário
      scenarioTitle: "The Scene of a Revolution",
      scenarioSubtitle: "Explore the world events that were not just a backdrop, but the driving force of the technological revolution.",
      scenarioEve: "Eve of the Storm",
      scenarioWar: "War as an Accelerator",
      scenarioNewStart: "A New Beginning",
      scenarioIronCurtain: "The Iron Curtain",
      scenarioTheory: "The Birth of Theory",
      // Biografias
      turingName: "ALAN TURING",
      turingBio: "The brilliant mind who laid the foundations of our technological age. From his work that helped shorten a war to his exploration of artificial intelligence, his impact continues to shape our world.",
      shannonName: "CLAUDE SHANNON",
      shannonBio: "Claude Shannon was an American mathematician and engineer considered the father of Information Theory. He developed the foundations of modern digital communication, introducing the concept of bits. His work revolutionized areas like computing, cryptography, and telecommunications.",
      seeMoreButton: "See More",
      themesTitle: "Themes",
themesSubtitle: "Navigate through the fundamental chapters that built the digital age.",

// Cards do carrossel em inglês
cardFundamentosAlt: "Theoretical and Conceptual Foundations",
cardFundamentosTitle: "Theoretical and Conceptual Foundations",
cardFundamentosText: "Before the first chip or circuit, there was the idea. Explore the theoretical models and mathematical concepts that form the DNA of all modern computing...",

cardEletromecanicaAlt: "The Electromechanical Era: Relays and Gears",
cardEletromecanicaTitle: "The Electromechanical Era: Relays and Gears",
cardEletromecanicaText: "With the sound of relays and gears, the first programmable calculating machines were born. Meet the electromechanical giants...",

cardFinsEspecificosAlt: "Computing for Specific Purposes",
cardFinsEspecificosTitle: "Computing for Specific Purposes: War and Science",
cardFinsEspecificosText: "Necessity drove innovation. Discover how World War II accelerated the creation of machines like Colossus and ENIAC...",

cardRevolucaoAlt: "The Electronic Revolution: The Vacuum Tube Era",
cardRevolucaoTitle: "The Electronic Revolution: The Vacuum Tube Era",
cardRevolucaoText: "Relays gave way to electronic vacuum tubes, allowing calculations at speeds never before imagined. Meet ENIAC, EDVAC and UNIVAC I...",

cardSoftwareAlt: "The Birth of Software and the Modern Computer",
cardSoftwareTitle: "The Birth of Software and the Modern Computer",
cardSoftwareText: "With the hardware established, the next frontier was software. Explore von Neumann's architecture, the stored program concept...",

cardTecnologiasAlt: "Technologies, People and Community",
cardTecnologiasTitle: "Technologies, People and Community",
cardTecnologiasText: "Computing was not made only of machines, but of people. Meet the brilliant minds, collaborations and communities...",
  // Footer
     footerLogoAlt: "Logo Aurora da Computação",
    footerDesc: "Um projeto dedicado a iluminar os marcos e mentes que fundaram a era digital, da primeira engrenagem ao primeiro byte.",
    footerExploreThemesTitle: "Explorar por Temas",
    footerThemeLink1: "Fundamentos Teóricos e Conceituais",
    footerThemeLink2: "A Era Eletromecânica: Relês e Engrenagens",
    footerThemeLink3: "Computação para Fins Específicos: Guerra e Ciência",
    footerThemeLink4: "A Revolução Eletrônica: A Era das Válvulas",
    footerThemeLink5: "O nascimento do Software e do Computador",
    footerThemeLink6: "Tecnologias, Pessoas e Comunidade",
    footerExploreErasTitle: "Explorar por Eras",
    footerEraLink1: "A Era da Expansão",
    footerEraLink2: "As Primeiras Ideias",
    footerEraLink3: "Os Primeiros Computadores",
    footerResourcesTitle: "Recursos",
    footerResourceLink1: "Início",
    footerResourceLink2: "Sobre o Projeto",
    footerResourceLink3: "Glossário",
    footerResourceLink4: "Biografias",
    footerCopyright: "© 2025 Aurora da Computação. Todos os direitos reservados.",
    // Página específica da Era da Expansão
    pageTitleExpansao: "The Age of Expansion",
    bannerExpansaoAlt: "The Age of Expansion",
    bannerExpansaoTitle: "The Age of <br> Expansion",
    bannerExpansaoSubtitle: "When computing moved from isolated <br> experiments to organized science and more <br> powerful machines.",
    
    // Cards
    cardTransistorAlt: "Transistor",
    cardTransistorTitle: "Transistor",
    cardTransistorText: "Invented by John Bardeen, William Shockley and Walter Brattain, the transistor replaced electronic vacuum tubes.",
    
    cardZ4Alt: "Z4 by Konrad Zuse",
    cardZ4Title: "Z4 by Konrad Zuse",
    cardZ4Text: "The Z4 was the direct evolution of the Z3, developed by Zuse. It became one of the first commercially available computers.",
    
    cardEdsacAlt: "EDSAC",
    cardEdsacTitle: "EDSAC",
    cardEdsacText: "EDSAC was the first practical stored-program computer.",
    
    cardPilotAceAlt: "Pilot ACE",
    cardPilotAceTitle: "Pilot ACE",
    cardPilotAceText: "Based on Alan Turing's designs, the Pilot ACE was built in the UK and became one of the country's first stored-program computers.",
    
    cardAcmAlt: "ACM",
    cardAcmTitle: "ACM",
    cardAcmText: "Founded in 1947 in the United States, ACM is a global non-profit organization that connects academics, researchers, educators, and industry professionals to dialogue, share resources, and address field challenges.",
    
    cardIbmSsecAlt: "IBM SSEC",
    cardIbmSsecTitle: "IBM SSEC",
    cardIbmSsecText: "It was a historic computing machine built by IBM and inaugurated in 1948, representing an important milestone in the transition from electromechanical to electronic computing.",
    
    cardManchesterAlt: "MADM or Manchester Mark I",
    cardManchesterTitle: "MADM or Manchester Mark I",
    cardManchesterText: "The Manchester Mark I, evolution of the 'Baby', was one of the first stored-program computers used on a large scale.",
    
    cardBabyAlt: "Manchester SSEM (Baby)",
    cardBabyTitle: "Manchester SSEM <br> (Baby)",
    cardBabyText: "Known as 'Baby', the Manchester Small-Scale Experimental Machine was the first computer to execute a program stored in memory. This achievement marked the birth of the modern computing model.",
    
    cardVonNeumannAlt: "Von Neumann",
    cardVonNeumannTitle: "VON <br> NEUMANN",
    cardVonNeumannText: "John von Neumann was a Hungarian-American mathematician with a prodigious mind, whose contributions span mathematics, quantum physics, economics, and crucially, Computer Science."
    }
  };

  // --- 2. CONFIGURAÇÃO DAS BANDEIRAS ---
  const flagPaths = {
    'pt': '../assets/img/brazil- 1.svg',
    'en': '../assets/img/UK.png'
  };

  // --- 3. LÓGICA DE TRADUÇÃO (FINAL E SEGURA) ---

  let currentLang = 'pt';
  const flagButton = document.getElementById('language-toggle');

  // Função principal que traduz a página
  function translatePage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    // 1. Define o atributo 'lang' da tag <html>
    document.documentElement.lang = lang === 'pt' ? 'pt-br' : 'en';

    // 2. Traduz o <title> da página
    const titleElement = document.querySelector('title'); // Não precisa do data-i18n-key no title, ele sempre é traduzido
    if (titleElement) {
       document.title = dict.pageTitle || document.title;
    }


    // 3. Traduz todos os textos com [data-i18n-key]
    document.querySelectorAll('[data-i18n-key]').forEach(element => {
      const key = element.dataset.i18nKey;
      const translation = dict[key];
      if (!translation) return;

      // ******* O SEGREDOR ESTÁ AQUI *******
      // 
      // Se a tradução contém HTML (como <br>), usamos innerHTML.
      // Caso contrário, usamos textContent (ou innerText) para evitar sobrescrever filhos.
      //
      // No seu caso, como estamos usando <span> dentro de <a> para os links,
      // NUNCA DEVEMOS USAR textContent diretamente no <a>.
      //
      // Opção A: O elemento TEM apenas texto, ou é o <span> que contem o texto:
      if (element.children.length === 0 || element.tagName === 'SPAN') {
          // Ex: <span>...texto...</span>
          // Ex: <p>...texto...</p>
          const isHtmlContent = /<[a-z][\s\S]*>/i.test(translation);
          if (isHtmlContent) {
              element.innerHTML = translation; // Para HeroTitle e Subtitle
          } else {
              element.textContent = translation; // Para a maioria dos textos simples
          }
      } 
      // Opção B: O elemento PAI contém filhos (como a tag <a> que tem <span> e SVG)
      // O TEXTO JÁ ESTÁ NO SPAN, então não fazemos nada no PAI para não quebrar.
      // (Isso é garantido pela sua estrutura HTML usando <span>).
      //
      // Se você colocou data-i18n-key em um <span> que é filho de um <a> com SVG,
      // A primeira condição (element.tagName === 'SPAN') já resolve.
    });


    // 4. Traduz todos os placeholders com [data-i18n-placeholder]
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.dataset.i18nPlaceholder;
      if (dict[key]) {
        element.placeholder = dict[key];
      }
    });

    // 5. Traduz todos os textos 'alt' com [data-i18n-alt]
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
      const key = element.dataset.i18nAlt;
      if (dict[key]) {
        element.alt = dict[key];
      }
    });
  }

  // Função para atualizar o ícone da bandeira
  function updateFlag(lang) {
    if (flagButton) {
      // Se o idioma atual é 'pt', o botão deve mostrar a bandeira 'en'
      const nextLang = lang === 'pt' ? 'en' : 'pt';
      flagButton.src = flagPaths[nextLang];
      
      // Atualiza o 'alt' text da bandeira
      flagButton.alt = translations[lang].flagAltText;
    }
  }

  // --- 4. EVENT LISTENER E INICIALIZAÇÃO ---
  if (flagButton) {
    flagButton.addEventListener('click', () => {
      currentLang = (currentLang === 'pt') ? 'en' : 'pt';
      translatePage(currentLang);
      updateFlag(currentLang);
    });
  }

  // Inicializa a tradução no idioma padrão e a bandeira correta
  translatePage(currentLang);
  updateFlag(currentLang);
});
function applyTranslation(lang) {
    // 1. Itera sobre todos os elementos que têm uma chave de tradução
    document.querySelectorAll('[data-i18n-key]').forEach(element => {
        const key = element.getAttribute('data-i18n-key');
        const translation = translations[lang][key];

        if (translation) {
            // Verifica a tag do elemento para decidir se usa innerHTML ou textContent
            // Se for H2 ou P, que provavelmente contém <br>, usamos innerHTML
            if (element.tagName === 'H2' || element.tagName === 'P') {
                element.innerHTML = translation; // Permite <br> e outros HTML
            } else {
                element.textContent = translation; // Para botões e texto puro
            }
        }
    });

    // 2. Lógica para traduzir o atributo 'alt' de imagens, se você usa a chave data-i18n-alt
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        const translation = translations[lang][key];
        if (translation) {
            element.setAttribute('alt', translation);
        }
    });
}

// 3. Garanta que a função seja chamada ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    // Tenta carregar o idioma salvo ou usa o padrão 'pt-br'
    const savedLang = localStorage.getItem('language') || 'pt-br';
    applyTranslation(savedLang);
});