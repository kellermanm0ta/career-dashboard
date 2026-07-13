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
        label: "Abr/2009 - Jan/2018"
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
        startYear: 2018.0, // Estimate
        endYear: 2020.0,
        label: "2018 - 2020"
    },
    {
        category: "Acadêmico",
        name: "Tecnólogo em análise e desenvolvimento de sistemas",
        startYear: 2012.0, // Estimate
        endYear: 2014.0,
        label: "2012 - 2014"
    }
];

const certificationsData = [
    { name: "Generative AI for Java Developers - Udemy", year: "08/2025" },
    { name: "Clean Code - Udemy", year: "06/2024" },
    { name: "Angular 15 Crash Course - Udemy", year: "02/2024" },
    { name: "Data Privacy / Google Cloud Fundamentals - Coursera", year: "12/2023" },
    { name: "Container & Kubernetes Essentials V2 - Coursera", year: "10/2023" }
];

const techData = [
    { name: "Java", years: 13, level: "Expert" },
    { name: "Spring Boot", years: 8, level: "Advanced" },
    { name: "Angular", years: 8, level: "Advanced" },
    { name: "Node.js", years: 8, level: "Advanced" },
    { name: "DB2", years: 6, level: "Advanced" },
    { name: "WebSphere", years: 6, level: "Advanced" },
    { name: "Docker", years: 4, level: "Intermediate" },
    { name: "Kafka", years: 1, level: "Basic" },
    { name: "Hibernate", years: 8, level: "Advanced" },
    { name: "PrimeFaces", years: 3, level: "Intermediate" },
    { name: "SQL (MySQL/Oracle/PostgreSQL)", years: 13, level: "Expert" },
    { name: "TypeScript/JavaScript", years: 8, level: "Advanced" },
    { name: "C# / .NET", years: 2, level: "Intermediate" },
    { name: "Suporte ao Cliente e Treinamento", years: 2, level: "Intermediate" },
];

// Sort descending by years
techData.sort((a, b) => b.years - a.years);

const kpis = {
    totalExperience: "13+ Anos",
    topTechnologies: 16,
    certifications: 6
};
