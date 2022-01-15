var chart = document.getElementById('line-chart');

let lineChart = new Chart(chart, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Price for the year 2021',
            fill: true,
            lineTension: 0,
            backgroundColor: 'rgba(75,75,192,0.5)',
            borderColor: '#8b8eaf',
            pointBorderColor: '#8b8eaf',
            pointBackgroundColor: '#8b8eaf',
            pointHoverBorderColor: '#8b8eaf',
            pointHoverBackgroundColor: '#8b8eaf',
            borderWidth: 1,
            data: [34622.37, 46642.61, 58734.48, 53260.3, 35749.66, 35945.79, 41157.15, 47663.02, 41412.61, 61374.28, 57834.36, 47128.47],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
