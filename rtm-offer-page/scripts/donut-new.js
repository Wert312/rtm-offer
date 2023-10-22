// Get the canvas element by its ID
const donutChart = document.getElementById('donutChart').getContext('2d');

// Data for the donut chart
const data = {
    labels: ['income', 'electricity costs'],
    datasets: [
        {
            data: [30, 40],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(75, 192, 192)', 'rgb(255, 205, 86)'],
        },
    ],
};

// Configuration options for the donut chart
const options = {
    cutoutPercentage: 50, // Adjust to control the size of the hole in the donut
    legend: {
        position: 'bottom'
    }
};

// Create the donut chart
const myDonutChart = new Chart(donutChart, {
    type: 'doughnut',
    data: data,
    options: options,
});
