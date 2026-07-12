// Popula os KPIs
document.getElementById('kpi-exp').innerText = kpis.totalExperience;
document.getElementById('kpi-tech').innerText = kpis.topTechnologies;
document.getElementById('kpi-cert').innerText = kpis.certifications;

// Configurações comuns
const tooltip = d3.select("#tooltip");
const margin = { top: 40, right: 30, bottom: 40, left: 200 };

function drawTimeline() {
    const container = d3.select("#timeline-chart").node();
    const width = container.getBoundingClientRect().width - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Limpa svg existente
    d3.select("#timeline-chart").selectAll("*").remove();

    const svg = d3.select("#timeline-chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Escalas
    const x = d3.scaleLinear()
        .domain([2004, 2027])
        .range([0, width]);

    const y = d3.scaleBand()
        .domain(timelineData.map(d => d.name))
        .range([0, height])
        .padding(0.3);

    // Grid em X
    svg.append("g")
        .attr("class", "grid")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x)
            .tickSize(-height)
            .tickFormat("")
        );

    // Eixos
    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .attr("class", "axis")
        .call(d3.axisBottom(x).tickFormat(d3.format("d")));

    svg.append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(y));

    // Cores
    const colorScale = d3.scaleOrdinal()
        .domain(["Experiência", "Acadêmico"])
        .range(["var(--exp-color)", "var(--academic-color)"]);

    // Barras
    svg.selectAll(".bar-bg")
        .data(timelineData)
        .enter()
        .append("rect")
        .attr("class", "bar-bg")
        .attr("x", 0)
        .attr("y", d => y(d.name))
        .attr("width", width)
        .attr("height", y.bandwidth())
        .attr("fill", "rgba(255,255,255,0.02)")
        .attr("rx", 4);

    svg.selectAll(".bar")
        .data(timelineData)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.startYear))
        .attr("y", d => y(d.name))
        .attr("width", d => Math.max(x(d.endYear) - x(d.startYear), 5))
        .attr("height", y.bandwidth())
        .attr("fill", d => colorScale(d.category))
        .attr("rx", 6)
        .on("mouseover", (event, d) => {
            tooltip.transition().duration(200).style("opacity", .9);
            tooltip.html(`
                <strong>${d.name}</strong><br/>
                <em>${d.category}</em><br/>
                Período: ${d.label}
            `)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", () => {
            tooltip.transition().duration(500).style("opacity", 0);
        });

    // Labels dentro das barras (opcional)
    svg.selectAll(".label")
        .data(timelineData)
        .enter()
        .append("text")
        .attr("x", d => x(d.startYear) + 10)
        .attr("y", d => y(d.name) + y.bandwidth() / 2 + 4)
        .attr("fill", "#fff")
        .attr("font-size", "12px")
        .text(d => d.label)
        .style("pointer-events", "none");
}

function drawTechBarChart() {
    const container = d3.select("#tech-bar-chart").node();
    const width = container.getBoundingClientRect().width - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    // Limpa svg
    d3.select("#tech-bar-chart").selectAll("*").remove();

    const svg = d3.select("#tech-bar-chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLinear()
        .domain([0, d3.max(techData, d => d.years) + 2])
        .range([0, width]);

    const y = d3.scaleBand()
        .domain(techData.map(d => d.name))
        .range([0, height])
        .padding(0.2);

    // Grid
    svg.append("g")
        .attr("class", "grid")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).tickSize(-height).tickFormat(""));

    // Eixos
    svg.append("g")
        .attr("class", "axis")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).ticks(5).tickFormat(d => d + " anos"));

    svg.append("g")
        .attr("class", "axis")
        .call(d3.axisLeft(y));

    // Cores baseadas no nível
    const colorScale = d3.scaleOrdinal()
        .domain(["Expert", "Advanced", "Intermediate", "Basic"])
        .range(["var(--expert-color)", "var(--advanced-color)", "var(--intermediate-color)", "var(--basic-color)"]);

    // Barras
    svg.selectAll(".bar")
        .data(techData)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", 0)
        .attr("y", d => y(d.name))
        .attr("width", d => x(d.years))
        .attr("height", y.bandwidth())
        .attr("fill", d => colorScale(d.level))
        .attr("rx", 4)
        .on("mouseover", (event, d) => {
            tooltip.transition().duration(200).style("opacity", .9);
            tooltip.html(`
                <strong>${d.name}</strong><br/>
                Nível: ${d.level}<br/>
                Exposição: ${d.years} anos
            `)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", () => {
            tooltip.transition().duration(500).style("opacity", 0);
        });

    // Animação de entrada
    svg.selectAll("rect.bar")
        .attr("width", 0)
        .transition()
        .duration(800)
        .attr("width", d => x(d.years));

    // Text labels nas barras
    svg.selectAll(".label")
        .data(techData)
        .enter()
        .append("text")
        .attr("x", d => x(d.years) + 5)
        .attr("y", d => y(d.name) + y.bandwidth() / 2 + 4)
        .attr("fill", "var(--text-secondary)")
        .attr("font-size", "12px")
        .text(d => d.level)
        .style("opacity", 0)
        .transition()
        .delay(800)
        .duration(500)
        .style("opacity", 1);
}

// Popular tabela de certificações
function populateCertifications() {
    const tbody = d3.select("#cert-tbody");
    tbody.selectAll("*").remove();

    const rows = tbody.selectAll("tr")
        .data(certificationsData)
        .enter()
        .append("tr");

    rows.append("td").text(d => d.name);
    rows.append("td").text(d => d.year);
}

// Inicialização e Resize
function init() {
    drawTimeline();
    drawTechBarChart();
    populateCertifications();
}

init();

window.addEventListener("resize", () => {
    // Debounce resize
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(init, 250);
});
