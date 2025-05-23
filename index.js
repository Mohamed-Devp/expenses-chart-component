const bars = document.querySelectorAll('.bar');

function drawGraph(amounts, maxAmount) {
    // Get the current day
    const date = new Date();
    const curDay = date.getDay() - 1;
    
    let delay = 0.05; // Transition delay between each bar pairs

    // Update the bar heights
    bars.forEach((bar, index) => {
        if (bar instanceof HTMLElement) {
            const { amount } = amounts[index];

            bar.style.height = `${amount / maxAmount * 100}%`;
            bar.style.transitionDelay = `${delay}s`;
            
            if (curDay == index) {
                bar.style.backgroundColor = "hsl(186, 34%, 65%)";
            }
            
            delay += 0.05;
        }
    });
}

function updateAmount(bar, amount) {
    if (!(bar instanceof HTMLElement)) {
        return;
    }

    const amountHTML = `<div class="amount">$${amount}</div>`;
    bar.innerHTML += amountHTML;
}

async function onMount() {
    // Fetch the data
    const response = await fetch("./data.json");
    
    if (!response.ok) {
        throw Error(`Error fetching the data: ${response.status}`);
    }

    // Parse the data
    const data = await response.json();
    
    let maxAmount = 0;
    data.forEach((day, index) => {
        maxAmount = Math.max(maxAmount, day.amount);

        updateAmount(bars[index], day.amount);
    });

    // Draw the bar graph
    drawGraph(data, maxAmount);
}

document.addEventListener('DOMContentLoaded', onMount);