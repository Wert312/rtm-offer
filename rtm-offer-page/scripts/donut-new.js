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
            data: [63, 37],
            backgroundColor: [gradientIncome, gradientCosts ],
        },
    ],
};

// Configuration options for the donut chart
const options = {
    datasets: {
        doughnut: {
            cutout:'65%'
        }
    },
    plugins: {
        legend: {
            display: false,
            position: 'bottom', // Change the legend position to 'top', 'left', 'bottom', or 'right'
        },
    },
    responsive: false,
    maintainAspectRatio: false,
    layout: {
        padding: {
            left: 0,
            right: 0,
            top: 12,
            bottom: 0,
        },
    },
    borderRadius: {
        innerStart: 1,
        outerStart: 1,
        innerEnd: 1,
        outerEnd: 1,
    },
    borderWidth: 0,
    rotation: 85,
    spacing: 3,
    borderAlign: 'center',
};

// Create the donut chart
const myDonutChart = new Chart(donutChart, {
    type: 'doughnut',
    data,
    options,
});
