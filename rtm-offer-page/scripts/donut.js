var filled1 = 67;
var filled2 = 37;
var config = {
    type: 'doughnut',
    data: {
        labels: [
            "income",
            "electricity costs"
        ],
        datasets: [{
            data: [filled1 > 0 && filled1 < 3 ? 3 : filled1, filled2],
            backgroundColor: ["#53A5ED", "white"],
            borderColor: ["transparent", "#ADADAD"],
            hoverBackgroundColor: ["#53A5ED", "#F2F2F2"],
            hoverBorderColor: ["transparent", "#ADADAD"],
            borderWidth: 1,
            hoverBorderWidth: 1,
            hoverOuterGlowWidth: [20, 0],
            hoverOuterGlowColor: ['rgba(38, 38, 38, 0.3)', 'transparent']
        }]
    },
    options: {
        aspectRatio: 1,
        layout: {
            padding: {
                left: 24,
                right: 24,
                top: 24,
                bottom: 24,
            }
        },
        responsive: true,
        legend: {
            display: true,
            position: 'bottom',
        },
        cutoutPercentage: 70,
        tooltips: {
            callbacks: {
                title: function(tooltipItem, data) {
                    return data['labels'][tooltipItem[0]['index']];
                },
                label: function(tooltipItem, data) {
                    if (tooltipItem['index'] === 0 && filled < 3) {
                        return "$" + filled + ".00"
                    } else {
                        return "$" + data['datasets'][0]['data'][tooltipItem['index']] + ".00";
                    }
                },
            },
            enabled: true,
            backgroundColor: "#004785",
            displayColors: false,
            titleFontSize: 14.45,
            titleFontStyle: 'normal',
            titleMarginBottom: 8,
            bodyFontSize: 14.45,
            xPadding: 12,
            yPadding: 12,
            tooltipCaretSize: 0,
            zIndex: 99999,
            titleColor: "white",
            bodyColor: "white"
        },
        elements: {
            arc: {
                roundedCornersFor: 1
            },
            center: {
                maxText: '100%',
                text: '67%',
                fontColor: '#FF6684',
                fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                fontStyle: 'normal',
                minFontSize: 1,
                maxFontSize: 256,
            }
        }
    }
};


var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, config);
ctx.setLineDash([2.5]);