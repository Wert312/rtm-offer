// Get the canvas element by its ID
const ctx = document.getElementById('donutChart').getContext('2d');

const gradientIncome = ctx.createLinearGradient(0, 0, 0, 200);
gradientIncome.addColorStop(0, '#B276FF'); // Start color
gradientIncome.addColorStop(1, '#FEAB00AB'); // End color

const gradientCosts = ctx.createLinearGradient(0, 0, 0, 200);
gradientCosts.addColorStop(0, '#0082FA'); // Start color
gradientCosts.addColorStop(1, '#4E7D5C'); // End color
// Data for the donut chart
const data = {
    labels: ['income', 'electricity costs'],
    datasets: [
        {
            data: [37, 63],
            backgroundColor: [gradientIncome, gradientCosts ],
        },
    ],
};

// Configuration options for the donut chart
const options = {
    cutoutPercentage: 50, // Adjust to control the size of the hole in the donut
    legend: {
        display: true,
        position: 'right',
    }
};

// Create the donut chart
const myDonutChart = new Chart(donutChart, {
    type: 'doughnut',
    data,
    options,
});
