const data = [];

const renderData = () => {
    const tbody = document.getElementById("data-tbody");
    tbody.innerHTML = "";

    data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.time.toLocaleDateString()}</td>
            <td>${item.time.toLocaleTimeString()}</td>
            <td>${item.players}</td>
            <td>${item.maxplayers}</td>
        `;
        tbody.appendChild(row);
    });
};

const fetchData = async () => {
    const response = await fetch("https://api.mcsrvstat.us/3/mc-central.net");
    const result = await response.json();

    const newData = {
        time: new Date(),
        players: result.players.online,
        maxplayers: result.players.max
    };

    data.unshift(newData);
};

const fetchAndRenderData = async () => {
    await fetchData();
    renderData();
};

setInterval(fetchAndRenderData, 5000);
fetchAndRenderData();