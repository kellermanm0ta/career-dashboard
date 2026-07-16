// Popula os KPIs
document.getElementById('kpi-exp').innerText = kpis.totalExperience;
document.getElementById('kpi-tech').innerText = kpis.topTechnologies;
document.getElementById('kpi-cert').innerText = kpis.certifications;

// Configurações comuns
const tooltip = d3.select("#tooltip");
const margin = { top: 40, right: 30, bottom: 40, left: 200 };

function drawTimeline() {
    const container = d3.select("#timeline-chart").node();
    const minWidth = 600;
    const containerWidth = container.getBoundingClientRect().width;
    const svgWidth = Math.max(containerWidth, minWidth);
    const width = svgWidth - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Limpa svg existente
    d3.select("#timeline-chart").selectAll("*").remove();

    const svg = d3.select("#timeline-chart")
        .append("svg")
        .attr("width", svgWidth)
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
    const minWidth = 600;
    const containerWidth = container.getBoundingClientRect().width;
    const svgWidth = Math.max(containerWidth, minWidth);
    const width = svgWidth - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    // Limpa svg
    d3.select("#tech-bar-chart").selectAll("*").remove();

    const svg = d3.select("#tech-bar-chart")
        .append("svg")
        .attr("width", svgWidth)
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
        .attr("class", "axis axis-y")
        .call(d3.axisLeft(y).tickPadding(30));

    // Add icons to the y axis ticks
    svg.selectAll(".axis-y .tick")
        .each(function(d) {
            const tech = techData.find(t => t.name === d);
            if (tech && tech.iconClass) {
                d3.select(this)
                    .append("foreignObject")
                    .attr("x", -26) // offset to place between tick text and axis line
                    .attr("y", -10) // vertically center relative to the text
                    .attr("width", 20)
                    .attr("height", 20)
                    .append("xhtml:i")
                    .attr("class", tech.iconClass)
                    .style("font-size", "20px")
                    .style("color", tech.iconClass.includes('colored') ? null : "var(--text-primary)");
            }
        });

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

function drawTechRadarChart() {
    const container = d3.select("#tech-radar-chart").node();
    const minWidth = 600;
    const containerWidth = container.getBoundingClientRect().width;
    const svgWidth = Math.max(containerWidth, minWidth);
    const height = 600;
    const margin = 80;
    const radius = Math.min(svgWidth / 2, height / 2) - margin;

    // Limpa svg
    d3.select("#tech-radar-chart").selectAll("*").remove();

    const svg = d3.select("#tech-radar-chart")
        .append("svg")
        .attr("width", svgWidth)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${svgWidth / 2},${height / 2})`);

    const features = techData.map(d => d.name);
    const maxYears = Math.max(15, d3.max(techData, d => d.years)); 
    const angleSlice = (Math.PI * 2) / features.length;

    // Scale
    const rScale = d3.scaleLinear()
        .range([0, radius])
        .domain([0, maxYears]);

    // Grid circles
    const levels = 5;
    svg.selectAll(".grid-circle")
        .data(d3.range(1, levels + 1).reverse())
        .enter()
        .append("circle")
        .attr("class", "grid-circle")
        .attr("r", d => radius / levels * d)
        .style("fill", "rgba(255,255,255,0.02)")
        .style("stroke", "var(--border-color)")
        .style("stroke-dasharray", "4,4");

    // Grid Labels
    svg.selectAll(".grid-label")
        .data(d3.range(1, levels + 1).reverse())
        .enter()
        .append("text")
        .attr("y", d => -radius / levels * d - 4)
        .attr("x", 4)
        .style("fill", "var(--text-secondary)")
        .style("font-size", "10px")
        .text(d => Math.round(maxYears * d / levels));

    // Axes
    const axes = svg.selectAll(".axis")
        .data(features)
        .enter()
        .append("g")
        .attr("class", "axis");

    axes.append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", (d, i) => rScale(maxYears) * Math.cos(angleSlice * i - Math.PI / 2))
        .attr("y2", (d, i) => rScale(maxYears) * Math.sin(angleSlice * i - Math.PI / 2))
        .style("stroke", "var(--border-color)")
        .style("stroke-width", "1px");

    // Axis Labels and Icons
    axes.each(function(d, i) {
        const tech = techData.find(t => t.name === d);
        const g = d3.select(this);
        
        // Text position
        const xText = rScale(maxYears * 1.10) * Math.cos(angleSlice * i - Math.PI / 2);
        const yText = rScale(maxYears * 1.10) * Math.sin(angleSlice * i - Math.PI / 2);

        g.append("text")
            .attr("class", "legend")
            .style("font-size", "11px")
            .style("fill", "var(--text-primary)")
            .attr("text-anchor", "middle")
            .attr("dy", "0.35em")
            .attr("x", xText)
            .attr("y", yText)
            .text(d);

        // Icon position slightly further out radially
        if (tech && tech.iconClass) {
            const xIcon = rScale(maxYears * 1.25) * Math.cos(angleSlice * i - Math.PI / 2);
            const yIcon = rScale(maxYears * 1.25) * Math.sin(angleSlice * i - Math.PI / 2);
            
            g.append("foreignObject")
                .attr("x", xIcon - 10) // shift by half of width to center
                .attr("y", yIcon - 10) // shift by half of height to center
                .attr("width", 20)
                .attr("height", 20)
                .append("xhtml:i")
                .attr("class", tech.iconClass)
                .style("font-size", "20px")
                .style("color", tech.iconClass.includes('colored') ? null : "var(--text-primary)");
        }
    });

    // Radar Area
    const radarLine = d3.lineRadial()
        .angle((d, i) => i * angleSlice)
        .radius(d => rScale(d.years))
        .curve(d3.curveLinearClosed);

    svg.append("path")
        .datum(techData)
        .attr("class", "radar-area")
        .attr("d", radarLine)
        .style("fill", "var(--accent-blue)")
        .style("fill-opacity", 0.2)
        .style("stroke", "var(--accent-blue)")
        .style("stroke-width", 2)
        .on("mouseover", function() {
            d3.select(this).transition().duration(200).style("fill-opacity", 0.4);
        })
        .on("mouseout", function() {
            d3.select(this).transition().duration(200).style("fill-opacity", 0.2);
        });

    // Radar Points
    const colorScale = d3.scaleOrdinal()
        .domain(["Expert", "Advanced", "Intermediate", "Basic"])
        .range(["var(--expert-color)", "var(--advanced-color)", "var(--intermediate-color)", "var(--basic-color)"]);

    svg.selectAll(".radar-point")
        .data(techData)
        .enter()
        .append("circle")
        .attr("class", "radar-point")
        .attr("r", 5)
        .attr("cx", (d, i) => rScale(d.years) * Math.cos(angleSlice * i - Math.PI / 2))
        .attr("cy", (d, i) => rScale(d.years) * Math.sin(angleSlice * i - Math.PI / 2))
        .style("fill", d => colorScale(d.level))
        .style("stroke", "#fff")
        .style("stroke-width", 1)
        .on("mouseover", (event, d) => {
            d3.select(event.currentTarget).attr("r", 8);
            tooltip.transition().duration(200).style("opacity", .9);
            tooltip.html(`
                <strong>${d.name}</strong><br/>
                Nível: ${d.level}<br/>
                Exposição: ${d.years} anos
            `)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", (event) => {
            d3.select(event.currentTarget).attr("r", 5);
            tooltip.transition().duration(500).style("opacity", 0);
        });

    // Animation
    svg.select(".radar-area")
        .attr("transform", "scale(0)")
        .transition()
        .duration(1000)
        .attr("transform", "scale(1)");
        
    svg.selectAll(".radar-point")
        .attr("transform", "scale(0)")
        .transition()
        .delay(500)
        .duration(800)
        .attr("transform", "scale(1)");
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
    drawTechRadarChart();
    populateCertifications();
}

init();

window.addEventListener("resize", () => {
    // Debounce resize
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(init, 250);
});
