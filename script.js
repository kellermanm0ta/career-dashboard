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
    // New level mapping
    const levelMap = { "Basic": 1, "Intermediate": 2, "Advanced": 3, "Expert": 4 };
    const levelNames = ["", "Básico", "Intermediário", "Avançado", "Expert"];
    const maxLevel = 4;
    const angleSlice = (Math.PI * 2) / features.length;

    // Scale based on level (1 to 4) instead of years
    const rScale = d3.scaleLinear()
        .range([0, radius])
        .domain([0, maxLevel]);

    // Grid circles (4 levels)
    const levels = 4;
    svg.selectAll(".grid-circle")
        .data(d3.range(1, levels + 1).reverse())
        .enter()
        .append("circle")
        .attr("class", "grid-circle")
        .attr("r", d => radius / levels * d)
        .style("fill", "rgba(255,255,255,0.02)")
        .style("stroke", "var(--border-color)")
        .style("stroke-dasharray", "4,4");

    // Grid Labels (text categories instead of numbers)
    svg.selectAll(".grid-label")
        .data(d3.range(1, levels + 1).reverse())
        .enter()
        .append("text")
        .attr("y", d => -radius / levels * d - 4)
        .attr("x", 4)
        .style("fill", "var(--text-secondary)")
        .style("font-size", "10px")
        .text(d => levelNames[d]);

    // Axes
    const axes = svg.selectAll(".axis")
        .data(features)
        .enter()
        .append("g")
        .attr("class", "axis");

    axes.append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", (d, i) => rScale(maxLevel) * Math.cos(angleSlice * i - Math.PI / 2))
        .attr("y2", (d, i) => rScale(maxLevel) * Math.sin(angleSlice * i - Math.PI / 2))
        .style("stroke", "var(--border-color)")
        .style("stroke-width", "1px");

    // Axis Labels and Icons
    axes.each(function(d, i) {
        const tech = techData.find(t => t.name === d);
        const g = d3.select(this);
        
        // Text position
        const xText = rScale(maxLevel * 1.10) * Math.cos(angleSlice * i - Math.PI / 2);
        const yText = rScale(maxLevel * 1.10) * Math.sin(angleSlice * i - Math.PI / 2);

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
            const xIcon = rScale(maxLevel * 1.25) * Math.cos(angleSlice * i - Math.PI / 2);
            const yIcon = rScale(maxLevel * 1.25) * Math.sin(angleSlice * i - Math.PI / 2);
            
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
        .radius(d => rScale(levelMap[d.level] || 1))
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
        .attr("cx", (d, i) => rScale(levelMap[d.level] || 1) * Math.cos(angleSlice * i - Math.PI / 2))
        .attr("cy", (d, i) => rScale(levelMap[d.level] || 1) * Math.sin(angleSlice * i - Math.PI / 2))
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

function drawDonutChart() {
    const container = d3.select("#donut-chart").node();
    if (!container) return;

    d3.select("#donut-chart").selectAll("*").remove();
    d3.select("#donut-legend").html("");

    // Usa as mesmas CSS vars do restante da página
    const tipoColors = {
        "Pós-Graduação": "var(--academic-color)",   // #8b5cf6 roxo
        "Graduação":     "var(--accent-blue)",       // #3b82f6 azul
        "Técnico":       "var(--expert-color)",      // #10b981 verde
        "Complementar":  "var(--intermediate-color)" // #f59e0b âmbar
    };
    // Hex equivalentes para cálculos de opacidade no tooltip e legenda
    const tipoHex = {
        "Pós-Graduação": "#8b5cf6",
        "Graduação":     "#3b82f6",
        "Técnico":       "#10b981",
        "Complementar":  "#f59e0b"
    };

    // Agrega duração total (meses) por tipo
    const tipoMeses = {};
    certificationsData.forEach(d => {
        tipoMeses[d.tipo] = (tipoMeses[d.tipo] || 0) + (d.duracaoMeses || 0);
    });
    const data = Object.entries(tipoMeses).map(([tipo, meses]) => ({ tipo, meses }));
    const totalMeses = data.reduce((sum, d) => sum + d.meses, 0);
    const totalAnos  = (totalMeses / 12).toFixed(1);

    const size = 300;
    const radius      = size / 2 - 20;
    const innerRadius = radius * 0.55;

    const svg = d3.select("#donut-chart")
        .append("svg")
        .attr("width", size)
        .attr("height", size)
        .append("g")
        .attr("transform", `translate(${size / 2},${size / 2})`);

    const pie = d3.pie()
        .value(d => d.meses)
        .sort(null)
        .padAngle(0.025);

    const arc     = d3.arc().innerRadius(innerRadius).outerRadius(radius);
    const arcOver = d3.arc().innerRadius(innerRadius).outerRadius(radius + 10);

    const arcs = svg.selectAll(".arc")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "arc");

    arcs.append("path")
        .attr("fill", d => tipoColors[d.data.tipo] || "var(--text-secondary)")
        .attr("fill-opacity", 0.85)
        .attr("stroke", "var(--bg-dark)")
        .attr("stroke-width", 2)
        .style("cursor", "pointer")
        .on("mouseover", function(event, d) {
            d3.select(this).transition().duration(180).attr("d", arcOver).attr("fill-opacity", 1);
            tooltip.transition().duration(200).style("opacity", .9);
            const pct = Math.round(d.data.meses / totalMeses * 100);
            const anos = (d.data.meses / 12).toFixed(1);
            tooltip.html(`
                <strong>${d.data.tipo}</strong><br/>
                ${d.data.meses} meses (${anos} anos)<br/>
                ${pct}% do tempo total
            `)
            .style("left", (event.pageX + 10) + "px")
            .style("top",  (event.pageY - 28) + "px");
        })
        .on("mouseout", function() {
            d3.select(this).transition().duration(180).attr("d", arc).attr("fill-opacity", 0.85);
            tooltip.transition().duration(500).style("opacity", 0);
        })
        .each(function(d) { this._current = { startAngle: 0, endAngle: 0 }; })
        .transition()
        .duration(900)
        .ease(d3.easeCubicOut)
        .attrTween("d", function(d) {
            const interp = d3.interpolate(this._current, d);
            this._current = interp(1);
            return t => arc(interp(t));
        });

    // Anel externo decorativo (igual ao estilo das grid-circles do radar)
    svg.append("circle")
        .attr("r", radius + 4)
        .attr("fill", "none")
        .attr("stroke", "var(--border-color)")
        .attr("stroke-dasharray", "4,4");

    // Texto central: total em anos
    svg.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "-0.25em")
        .attr("font-family", "Inter, sans-serif")
        .attr("font-size", "2rem")
        .attr("font-weight", "700")
        .attr("fill", "var(--text-primary)")
        .style("opacity", 0)
        .text(`${totalAnos}`)
        .transition().delay(750).duration(400)
        .style("opacity", 1);

    svg.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", "1.3em")
        .attr("font-family", "Inter, sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "var(--text-secondary)")
        .attr("letter-spacing", "0.08em")
        .style("opacity", 0)
        .text("ANOS DE ESTUDO")
        .transition().delay(750).duration(400)
        .style("opacity", 1);

    // Legenda em HTML — mesmo padrão visual do restante da página
    const legend = d3.select("#donut-legend");
    data.forEach(d => {
        const pct  = Math.round(d.meses / totalMeses * 100);
        const anos = (d.meses / 12).toFixed(1);
        const hex  = tipoHex[d.tipo] || "#94a3b8";

        const item = legend.append("div").attr("class", "donut-legend-item");
        item.append("div")
            .attr("class", "donut-legend-swatch")
            .style("background", hex)
            .style("opacity", "0.85");
        const text = item.append("div").style("flex", "1");
        text.append("span").attr("class", "donut-legend-label").text(d.tipo);
        text.append("span")
            .attr("class", "donut-legend-pct")
            .style("display", "block")
            .style("font-size", "11px")
            .style("margin-top", "1px")
            .text(`${d.meses} meses · ${anos} anos`);
        item.append("span")
            .attr("class", "donut-legend-count")
            .text(`${pct}%`);
    });
}

// Popular tabela de cursos
function populateCertifications() {
    const tbody = d3.select("#cert-tbody");
    tbody.selectAll("*").remove();

    const tipoColors = {
        "Pós-Graduação": { bg: "rgba(168, 85, 247, 0.2)", border: "rgba(168, 85, 247, 0.6)", color: "#c084fc" },
        "Graduação":     { bg: "rgba(59, 130, 246, 0.2)", border: "rgba(59, 130, 246, 0.6)", color: "#60a5fa" },
        "Técnico":       { bg: "rgba(16, 185, 129, 0.2)", border: "rgba(16, 185, 129, 0.6)", color: "#34d399" },
        "Complementar":  { bg: "rgba(251, 191, 36, 0.15)", border: "rgba(251, 191, 36, 0.5)", color: "#fbbf24" }
    };

    const rows = tbody.selectAll("tr")
        .data(certificationsData)
        .enter()
        .append("tr");

    // Coluna Descrição: link clicável + plataforma se disponíveis
    const nameTd = rows.append("td");

    nameTd.each(function(d) {
        const cell = d3.select(this);
        const wrapper = cell.append("div").style("display", "flex").style("flex-direction", "column").style("gap", "3px");

        if (d.link) {
            wrapper.append("a")
                .attr("href", d.link)
                .attr("target", "_blank")
                .attr("rel", "noopener noreferrer")
                .style("color", "var(--accent-blue)")
                .style("text-decoration", "none")
                .style("font-weight", "500")
                .style("transition", "opacity 0.2s")
                .on("mouseover", function() { d3.select(this).style("opacity", "0.75").style("text-decoration", "underline"); })
                .on("mouseout",  function() { d3.select(this).style("opacity", "1").style("text-decoration", "none"); })
                .text(d.name);
        } else {
            wrapper.append("span").style("font-weight", "500").text(d.name);
        }

        if (d.plataforma) {
            wrapper.append("span")
                .style("font-size", "11px")
                .style("color", "var(--text-secondary)")
                .text(d.plataforma);
        }
    });

    rows.append("td").append("span")
        .style("padding", "3px 10px")
        .style("border-radius", "20px")
        .style("font-size", "11px")
        .style("font-weight", "600")
        .style("letter-spacing", "0.5px")
        .style("white-space", "nowrap")
        .style("background", d => (tipoColors[d.tipo] || tipoColors["Complementar"]).bg)
        .style("border", d => `1px solid ${(tipoColors[d.tipo] || tipoColors["Complementar"]).border}`)
        .style("color", d => (tipoColors[d.tipo] || tipoColors["Complementar"]).color)
        .text(d => d.tipo);

    rows.append("td").text(d => d.periodo);
}

// Inicialização e Resize
function init() {
    drawTimeline();
    drawTechBarChart();
    drawTechRadarChart();
    drawDonutChart();
    populateCertifications();
}

init();

window.addEventListener("resize", () => {
    // Debounce resize
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(init, 250);
});
