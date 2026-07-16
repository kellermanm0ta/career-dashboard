const timelineData = [
    {
        category: "Experiência",
        name: "Sicoob Confederação",
        startYear: 2021.8, // Oct 2021
        endYear: 2026.6, // Present (Jul 2026)
        label: "Oct/2021 - Present"
    },
    {
        category: "Experiência",
        name: "Mirante Tecnologia",
        startYear: 2020.5, // Jul 2020
        endYear: 2021.8, // Oct 2021
        label: "Jul/2020 - Oct/2021"
    },
    {
        category: "Experiência",
        name: "ITSS Tecnologia",
        startYear: 2018.1, // Feb 2018
        endYear: 2020.5, // Jul 2020
        label: "Feb/2018 - Jul/2020"
    },
    {
        category: "Experiência",
        name: "Arriel Automação",
        startYear: 2009.0, // Jan 2009
        endYear: 2018.8, // Oct 2018
        label: "Jan/2009 - Oct/2018"
    },
    {
        category: "Experiência",
        name: "Unimed Goiânia",
        startYear: 2015.4,
        endYear: 2018.1,
        label: "Abr/2015 - Jan/2018"
    },
    {
        category: "Acadêmico",
        name: "Pós: Agentes Inteligentes (UFG)",
        startYear: 2024.0, // Estimate
        endYear: 2026.6,
        label: "2024 - 2026"
    },
    {
        category: "Acadêmico",
        name: "Pós: Ciência de Dados e Big Data",
        startYear: 2017.0, // Estimate
        endYear: 2019.0,
        label: "2017 - 2019"
    },
    {
        category: "Acadêmico",
        name: "Tecnólogo em ADS",
        startYear: 2012.0, // Estimate
        endYear: 2014.0,
        label: "2012 - 2014"
    },
    {
        category: "Acadêmico",
        name: "Técnico em Rede de Dados",
        startYear: 2011.0, // Estimate
        endYear: 2012.0,
        label: "2011-2012"
    }
];

const certificationsData = [
    // Pós-Graduação
    { name: "Pós-Graduação em Agentes Inteligentes", plataforma: "Universidade Federal de Goiás", tipo: "Pós-Graduação", periodo: "Em Andamento", duracaoMeses: 6 },
    { name: "Pós-Graduação em Ciência de Dados e Big Data", plataforma: "Estácio", tipo: "Pós-Graduação", periodo: "2017 - 2019", duracaoMeses: 24 },
    // Graduação
    { name: "Tecnólogo em Análise e Desenvolvimento de Sistemas", plataforma: "SENAI - FATESG", tipo: "Graduação", periodo: "2012 - 2014", duracaoMeses: 24 },
    // Técnico
    { name: "Técnico em Redes de Dados", plataforma: "SENAI - FATESG", tipo: "Técnico", periodo: "2011 - 2012", duracaoMeses: 12 },
    // Complementares (duração estimada em meses)
    { name: "Generative AI for Java Developers with Google AI", plataforma: "Udemy", tipo: "Complementar", periodo: "Ago/2025", duracaoMeses: 1, link: "https://www.udemy.com/certificate/UC-66210e18-d7f7-457b-a8cb-d2f8f5f5f960/" },
    { name: "Clean Code", plataforma: "Udemy", tipo: "Complementar", periodo: "Jun/2024", duracaoMeses: 1, link: "https://www.udemy.com/certificate/UC-57ebd3ac-8dba-4bfd-9429-3d3cae94bcf6/" },
    { name: "New Angular 15 Crash Course by Angular Engineering Founder", plataforma: "Udemy", tipo: "Complementar", periodo: "Fev/2024", duracaoMeses: 1, link: "https://www.udemy.com/certificate/UC-123a529f-3649-4c8f-b2bd-ce1205b5bb6c/" },
    { name: "Laboratório de Programação Orientada a Objetos - Parte 1 (IME-USP)", plataforma: "Coursera", tipo: "Complementar", periodo: "Dez/2023", duracaoMeses: 2, link: "https://www.coursera.org/account/accomplishments/verify/JDV8DJH5WZ53" },
    { name: "Data Privacy Fundamentals", plataforma: "Coursera", tipo: "Complementar", periodo: "Dez/2023", duracaoMeses: 1, link: "https://www.coursera.org/account/accomplishments/verify/942XLQB8ABNZ" },
    { name: "Google Cloud Fundamentals: Core Infrastructure", plataforma: "Coursera", tipo: "Complementar", periodo: "Dez/2023", duracaoMeses: 1, link: "https://www.coursera.org/account/accomplishments/verify/9RAP5AUR3EU3" },
    { name: "Container & Kubernetes Essentials V2", plataforma: "Coursera", tipo: "Complementar", periodo: "Ago/2023", duracaoMeses: 1, link: "https://www.credly.com/badges/5456498e-fd39-40ea-b20f-89e071cb3b25/linked_in_profile" }
];

const techData = [
    { name: "Java", years: 13, level: "Expert", iconClass: "devicon-java-plain" },
    { name: "Spring Boot", years: 8, level: "Advanced", iconClass: "devicon-spring-original colored" },
    { name: "Angular", years: 8, level: "Advanced", iconClass: "devicon-angular-plain colored" },
    { name: "Node.js", years: 8, level: "Advanced", iconClass: "devicon-nodejs-plain-wordmark colored" },
    { name: "WebSphere", years: 6, level: "Advanced", iconClass: "fa-solid fa-server" }, // Generic Server icon for App Server
    { name: "Docker", years: 4, level: "Intermediate", iconClass: "devicon-docker-plain colored" },
    { name: "Kafka", years: 1, level: "Basic", iconClass: "devicon-apachekafka-original" },
    { name: "Hibernate", years: 8, level: "Advanced", iconClass: "devicon-hibernate-plain colored" },
    { name: "JSF", years: 3, level: "Intermediate", iconClass: "devicon-java-plain colored" }, // JSF is a Java spec, so Java icon works best as fallback
    { name: "JQuery", years: 3, level: "Intermediate", iconClass: "devicon-jquery-plain-wordmark" },
    { name: "SQL", years: 13, level: "Expert", iconClass: "devicon-azuresqldatabase-plain" },
    { name: "TypeScript/JavaScript", years: 8, level: "Advanced", iconClass: "devicon-typescript-plain colored" },
    { name: "C# / .NET", years: 2, level: "Intermediate", iconClass: "devicon-csharp-plain colored" },
    { name: "Linux", years: 5, level: "Intermediate", iconClass: "devicon-linux-plain" },
];

const projectsData = [
    {
        name: "Medicina Popular do Cerrado",
        description: `Aplicativo mobile desenvolvido por mim como artefato de entrega para a pesquisa da aluna Victória Leão, na disciplina de Educação Ambiental do Mestrado em Ambiente e Sociedade (UEG/Morrinhos).
O objetivo do projeto é difundir os conhecimentos tradicionais associados ao patrimônio genético do Cerrado. A aplicação foi construída utilizando Ionic e Apache Cordova.`,
        techs: ["Apache Cordova", "Angular/Ionic", "Node.js", "TypeScript"],
        link: "https://github.com/kellerman-mota/med-pop-cerrado",
        linkLabel: "Ver no GitHub",
        icon: "fa-solid fa-seedling",
        accentColor: "var(--expert-color)"
    },
    {
        name: "Arrielstore – Sistema ERP para Micro e Pequenas Empresas",
        description: `O Arrielstore é uma solução ERP completa voltada para a gestão de micro e pequenas empresas, abrangendo os módulos de Cadastro, Estoque, Vendas, Financeiro e Fiscal.
Atuei em todo o ciclo de vida do software, participando ativamente das etapas de levantamento de requisitos, modelagem de dados, desenvolvimento e entrega do produto final.`,
        techs: ["JSF", "Primefaces", "Hibernate", "Java", "Docker", "MySql"],
        link: "https://www.arrielautomacao.com.br/",
        linkLabel: "Ver Projeto",
        icon: "fa-solid fa-store",
        accentColor: "var(--accent-blue)"
    }
];

// Sort descending by years
techData.sort((a, b) => b.years - a.years);

const kpis = {
    totalExperience: "13+ Anos",
    topTechnologies: techData.length,
    certifications: certificationsData.length,
    projects: projectsData.length
};
