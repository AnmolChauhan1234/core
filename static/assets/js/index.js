const IntensityChart = document.getElementById('Intensity');
const LikelihoodChart = document.getElementById('Likelihood');
const YearChart = document.getElementById('Year');
const TopicsChart = document.getElementById('Topics');
const RelevanceChart = document.getElementById('Relevance');
const CountryChart = document.getElementById('Country');
const RegionChart = document.getElementById('Region');

// Intensity Chart (Bar)
new Chart(IntensityChart, {
    type: 'bar',
    data: {
        labels: ['Energy', 'Transport', 'Healthcare', 'Manufacturing'], // Example labels
        datasets: [{
            label: 'Intensity Level',
            data: [6, 9, 3, 5],
            borderWidth: 1,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 205, 86, 0.2)'
            ],
        }]
    },
    options: {
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Likelihood Chart (Line)
new Chart(LikelihoodChart, {
    type: 'line',
    data: {
        labels: ['2017', '2018', '2019', '2020'], // Example years
        datasets: [{
            label: 'Likelihood',
            data: [3, 5, 7, 6],
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false
        }]
    },
    options: {
        scales: {
            y: { beginAtZero: true }
        }
    }
});


// Year Chart (Line)
new Chart(YearChart, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019'], // Example years
        datasets: [{
            label: 'Yearly Data',
            data: [5, 10, 15, 10, 20],
            borderColor: 'rgba(255, 99, 132, 1)',
            fill: false
        }]
    },
    options: {
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Topics Chart (Bubble)
new Chart(TopicsChart, {
    type: 'bubble',
    data: {
        datasets: [{
            label: 'Topics Analysis',
            data: [
                { x: 10, y: 20, r: 15 },
                { x: 15, y: 25, r: 10 },
                { x: 20, y: 30, r: 20 }
            ],
            backgroundColor: 'rgba(75, 192, 192, 0.5)'
        }]
    },
    options: {
        scales: {
            x: { beginAtZero: true },
            y: { beginAtZero: true }
        }
    }
});

// Relevance Chart (Doughnut)
new Chart(RelevanceChart, {
    type: 'doughnut',
    data: {
        labels: ['Topic A', 'Topic B', 'Topic C', 'Topic D','Topic E','Topic F','Topic G','Topic H'],
        datasets: [{
            label: 'Relevance Score',
            data: [15, 20, 30, 35],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ]
        }]
    }
});

// Country Chart (Pie)
new Chart(CountryChart, {
    type: 'pie',
    data: {
        labels: ['USA', 'India', 'China', 'Brazil','Canada','Russia','Bhutan','Korean'], // Example countries
        datasets: [{
            label: 'Data Distribution',
            data: [30, 25, 20, 25],
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ]
        }]
    }
});

// Region Chart (Doughnut)
new Chart(RegionChart, {
    type: 'doughnut',
    data: {
        labels: ['North America', 'Europe', 'Asia', 'Africa'],
        datasets: [{
            label: 'Region Distribution',
            data: [40, 30, 20, 10],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ]
        }]
    }
});