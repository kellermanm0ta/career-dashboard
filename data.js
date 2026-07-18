const experienceDetails = {
    "Sicoob Confederação": {
        role: "Senior Software Engineer",
        period: "Outubro/2021 – Atual",
        summary: "Atuação no desenvolvimento e evolução de sistemas corporativos estratégicos utilizados por cooperativas de crédito em todo o Brasil.",
        contributions: [
            "Referência técnica em decisões arquiteturais e implementação de funcionalidades críticas.",
            "Desenvolvimento de APIs REST e integrações entre sistemas corporativos.",
            "Revisão de código e apoio técnico à equipe.",
            "Investigação e resolução de incidentes em ambientes produtivos.",
            "Aplicação de práticas de qualidade como TDD, CI/CD e Code Review.",
            "Participação ativa em refinamentos técnicos e definição de soluções."
        ],
        projects: [
            {
                name: "Portal Centro de Serviços Compartilhados (CSC)",
                description: "Plataforma corporativa responsável pela centralização, execução, acompanhamento e contabilização dos serviços prestados pela Confederação às cooperativas do Sistema Sicoob. O sistema promove padronização operacional, rastreabilidade dos processos e integração entre diferentes áreas de negócio."
            },
            {
                name: "Sistema de Gestão Empresarial (SGE)",
                description: "ERP corporativo utilizado pelas cooperativas do ecossistema Sicoob para gestão administrativa e operacional. Atuação na evolução de funcionalidades críticas, integrações e sustentação da plataforma, contribuindo para a confiabilidade e escalabilidade da solução."
            }
        ],
        techs: ["Java EE", "Angular", "Node.js", "DB2", "WebSphere", "Docker", "Jenkins", "GitLab", "SonarQube"]
    },
    "Mirante Tecnologia": {
        role: "Software Engineer (Projeto Sicoob)",
        period: "Julho/2020 – Outubro/2021",
        summary: "Atuação na sustentação e evolução do Sistema de Gestão Empresarial (SGE), ERP corporativo do Sicoob.",
        contributions: [
            "Desenvolvimento de funcionalidades evolutivas.",
            "Correção de problemas críticos em produção.",
            "Participação em análises técnicas e refinamentos.",
            "Implementação de testes automatizados.",
            "Apoio às práticas de integração contínua e DevOps."
        ],
        projects: [],
        techs: ["Java EE", "EJB", "DB2", "WebSphere", "Jenkins", "GitLab", "SonarQube"]
    },
    "ITSS Tecnologia": {
        role: "Full Stack Software Engineer",
        period: "Fevereiro/2018 – Julho/2020",
        summary: "Atuação em fábrica de software desenvolvendo soluções para clientes dos segmentos farmacêutico, agronegócio e educação.",
        contributions: [
            "Plataformas de vendas e distribuição para o Grupo SC (Santa Cruz e Panpharma).",
            "Soluções de apoio à cadeia produtiva para o Grupo Cereal.",
            "Migração e modernização de sistemas acadêmicos da UNIALFA.",
            "Desenvolvimento de integrações, aplicações web, mobile e processos ETL."
        ],
        projects: [],
        techs: ["Java", "Spring Boot", "Angular", "Ionic", "Kafka", "Docker", "Oracle", "PostgreSQL", "Hadoop", "WildFly"]
    },
    "Arriel Automação": {
        role: "Software Engineer / Technical Lead",
        period: "Janeiro/2009 – Outubro/2018",
        summary: "Participação na criação e evolução de um ERP comercial voltado para pequenas e médias empresas.",
        contributions: [
            "Desenvolvimento de módulos de vendas, estoque, financeiro e compras.",
            "Levantamento e análise de requisitos junto aos clientes.",
            "Modelagem de banco de dados e regras de negócio.",
            "Definição e evolução da arquitetura da solução.",
            "Liderança técnica de equipe de desenvolvimento.",
            "Implantação, treinamento e suporte a clientes."
        ],
        projects: [],
        techs: ["Java", "Hibernate", "PrimeFaces", "Tomcat", "MySQL", ".NET"]
    },
    "Unimed Goiânia": {
        role: "Full Stack Software Engineer",
        period: "2015 – Fevereiro/2018",
        summary: "Atuação como Desenvolvedor Full Stack na evolução dos canais digitais e sistemas corporativos da Unimed Goiânia, desenvolvendo soluções voltadas para beneficiários, cooperados e áreas internas da cooperativa.",
        contributions: [
            "Desenvolvimento e manutenção de aplicações web corporativas.",
            "Implementação de novas funcionalidades e melhorias evolutivas.",
            "Desenvolvimento de APIs REST para integração com aplicativos móveis e sistemas internos.",
            "Evolução do Guia Médico e demais serviços digitais da cooperativa.",
            "Implementação do Portal de Informações do Beneficiário da Saúde Suplementar (PINSS).",
            "Desenvolvimento de soluções utilizando IBM WebSphere Portal.",
            "Correção de incidentes e suporte a sistemas em produção.",
            "Participação em iniciativas de modernização de sistemas legados."
        ],
        projects: [
            {
                name: "PINSS – Portal de Informações do Beneficiário da Saúde Suplementar",
                description: "Implementação do portal que centraliza informações e serviços digitais para beneficiários do plano de saúde, ampliando o acesso dos usuários aos serviços da cooperativa."
            },
            {
                name: "Guia Médico & Serviços Digitais",
                description: "Evolução do Guia Médico online e implementação de funcionalidades estratégicas como emissão de segunda via de boletos, contribuindo para a digitalização de processos e melhoria da experiência dos usuários."
            }
        ],
        techs: ["Java", "Spring Framework", "Hibernate", "Angular", "jQuery", "IBM WebSphere Portal", "JasperReports", "APIs REST", "TDD", "DDD"]
    }
};

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
    { name: "C# / .NET", years: 2, level: "Basic", iconClass: "devicon-csharp-plain colored" },
    { name: "Linux", years: 5, level: "Intermediate", iconClass: "devicon-linux-plain" },
    { name: "MongoDB", years: 2, level: "Basic", iconClass: "devicon-mongodb-plain colored" },
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
