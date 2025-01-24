// Translations object
const translations = {
  en: {
    title: "Clarisse Paiva Portfolio",
    projects: "PROJECTS",
    about: "ABOUT ME",
    cv: "CV",
    contact: "CONTACT",
    "hero-title": "CREATING PURPOSEFUL AND ELEGANT <span>DIGITAL</span> JOURNEYS",
    "intro-1":
      "Clarisse Paiva is a digital product designer with an MBA in Interaction Design, specializing in creating exceptional experiences through UI/UX design and seamless website and app development.",
    "intro-2":
      "Passionate about connecting people and brands, her journey includes freelance projects and working at an American company, where she developed creative and functional solutions for various clients.",
    "intro-3":
      "By combining strategic design, attention to detail, and a constant focus on the user, Clarisse transforms ideas into impactful experiences that blend creativity and functionality. For more details about her projects, check out the highlights in the section below.",
    "projects-title": "FEATURED <span>PROJECTS</span>",
    "project-1-title": "Design for an Unforgettable Festival",
    "project-1-description": "UI/UX Design",
    "project-2-title": "Transforming Skills into Visual Experiences",
    "project-2-description": "UI/UX Design",
    "project-3-title": "Design System: Consistency and Efficiency",
    "project-3-description": "UI/UX Design",
    "project-4-title": "Ads that Connect Businesses and Clients",
    "project-4-description": "Ads",
    "project-5-title": "Practicality and Health at Your Fingertips",
    "project-5-description": "UI/UX Design",
    "project-6-title": "Versatile Design Templates for Modern Websites",
    "project-6-description": "UI/UX Design",
    "project-7-title": "Empowering Small Entrepreneurs",
    "project-7-description": "UI/UX Design",
    "cv-header": "CURRICULUM",
    "cv-title": "My Professional Journey: Experience, Skills, and Dedication to Design",
    "cv-description":
      "Explore my professional journey, highlighting enriching experiences, technical and creative skills, and my dedication to turning ideas into impactful visual solutions in the UI/UX design universe.",
    "cta-title": "READY TO TURN IDEAS INTO REALITY?",
    "cta-description":
      "Talk about your project and discover how we can transform your ideas into memorable experiences.",
    "cta-contact": "GET IN TOUCH",
    "footer-name": "CLARISSE PAIVA",
    "footer-description":
      "A qualified UX/UI Designer passionate about creating user-centered experiences that connect design, technology, and strategy.",
    "footer-contact": "GET IN TOUCH",
  },
  pt: {
    title: "Clarisse Paiva Portfolio",
    projects: "PROJETOS",
    about: "SOBRE MIM",
    cv: "CV",
    contact: "CONTATO",
    "hero-title": "CRIANDO JORNADAS <span>DIGITAIS</span> COM PROPÓSITO E ELEGÂNCIA",
    "intro-1":
      "Clarisse Paiva é uma designer de produtos digitais com MBA em Design de Interação, especializada em criar experiências excepcionais por meio do UI/UX design e do desenvolvimento fluido de sites e aplicativos.",
    "intro-2":
      "Apaixonada por conectar pessoas e marcas, sua trajetória inclui projetos como freelancer e a experiência de trabalhar em uma empresa americana, onde desenvolveu soluções criativas e funcionais para clientes variados.",
    "intro-3": "Combinando design estratégico, atenção aos detalhes e um foco constante no usuário, Clarisse transforma ideias em experiências impactantes que aliam criatividade e funcionalidade. Para maiores detalhes sobre os projetos realizados, confira os destaques na seção abaixo.",
    "projects-title": "<span>Projetos</span> em Destaque",
    "project-1-title": "Design para um Festival Inesquecível",
    "project-1-description": "UI/UX Design",
    "project-2-title": "Transformando Habilidades em Experiências Visuais",
    "project-2-description": "UI/UX Design",
    "project-3-title": "Design System: Consistência e Eficiência",
    "project-3-description": "UI/UX Design",
    "project-4-title": "Anúncios que Conectam Negócios e Clientes",
    "project-4-description": "Anúncios",
    "project-5-title": "Praticidade e Saúde na Palma da Sua Mão",
    "project-5-description": "UI/UX Design",
    "project-6-title": "Templates Design Versátil para Websites Modernos",
    "project-6-description": "UI/UX Design",
    "project-7-title": "Empoderando Pequenos Empresários",
    "project-7-description": "UI/UX Design",
    "cv-header": "CURRICULUM",
    "cv-title": "Minha Jornada Profissional: Experiência, Habilidades e dedicação pelo Design",
    "cv-description":
      "Explore minha trajetória profissional, destacando experiências enriquecedoras, habilidades técnicas e criativas, e minha dedicação em transformar ideias em soluções visuais impactantes no universo do design UI/UX.",
    "cta-title": "PRONTO PARA TRANSFORMAR IDEIAS EM REALIDADE?",
    "cta-description":
      "Converse sobre seu projeto e descubra como podemos transformar suas ideias em experiências memoráveis.",
    "cta-contact": "ENTRE EM CONTATO",
    "footer-name": "CLARISSE PAIVA",
    "footer-description":
      "Uma UX/UI Designer qualificada, apaixonada por criar experiências centradas no usuário que conectam design, tecnologia e estratégia.",
    "footer-contact": "ENTRE EM CONTATO",
  },
};


// Function to switch languages
function switchLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-lang");
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
}

// Add event listeners to buttons
document.getElementById("pt-button").addEventListener("click", () => {
  switchLanguage("pt");
  console.log("Teste")
});

document.getElementById("en-button").addEventListener("click", () => {
  switchLanguage("en");
});


function downloadPDF() {
  const link = document.createElement("a");
  link.href = "pdf/CV Clarisse Paiva UX UI Designer.pdf"; // Path to your PDF file
  link.download = "CV Clarisse Paiva UX UI Designer.pdf"; // The name for the downloaded file
  link.click(); // Programmatically click the link to trigger the download
}