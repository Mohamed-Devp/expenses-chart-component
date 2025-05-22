const bars = document.querySelectorAll('.bar');

async function drawGraph() {
    // Fetch the data
    const response = await fetch("./data.json");
    
    if (!response.ok) {
        throw Error(`Error fetching the data: ${response.status}`);
    }

    const data = await response.json();
    
    // Update the graph bars
    let maxAmount = 0;
    for (let day of data) {
        maxAmount = Math.max(maxAmount, day.amount);
    }

    const date = new Date();
    const curDay = date.getDay();

    let delay = 0.05; // Transition delay between each bar pairs
    bars.forEach((bar, index) => {
        if (bar instanceof HTMLElement) {
            const { amount } = data[index];

            bar.style.height = `${amount / maxAmount * 100}%`;
            bar.style.transitionDelay = `${delay}s`;
            
            if (curDay == index) {
                bar.style.backgroundColor = "hsl(186, 34%, 65%)";
            }
            
            delay += 0.05;
        }
    });
}

function onMount() {
    drawGraph()
        .catch(error => {
            console.error(error);
        });
}

document.addEventListener('DOMContentLoaded', onMount);