// Event listener for the filter form submission
document.querySelector('#filterForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission

    const formData = new FormData(this);  // Gather form data
    const params = new URLSearchParams(formData).toString();  // Convert form data to query parameters

    fetch(`/filter_dashboard/?${params}`)  // Send a GET request with the form data
        .then(response => response.json())  // Parse JSON response
        .then(data => {
            // Handle the filtered data and update the charts
            console.log('Fetched data:', data);  // Check the whole response

            // Extracting the years and corresponding year data
            let years = data.data.map(item => item.year);  // Adjust according to your data structure
            let yearData = data.data.map(item => item.intensity);  // Assuming you want the intensity field as the data

            console.log('Fetched years:', years);  // Log the extracted years
            console.log('Fetched year data:', yearData);  // Log the extracted data

            // Now call the function to update all charts
            updateCharts(data.data);
        })
        .catch(error => console.error('Error fetching data:', error));  // Log any errors
});

// Function to update charts dynamically based on filtered data
function updateCharts(data) {
    const intensityData = data.map(item => item.intensity || 0);
    const likelihoodData = data.map(item => item.likelihood || 0);
    const labels = data.map(item => item.topic || "Unknown");
    const years = data.map(item => item.year || "Unknown Year");
    const yearData = data.map(item => item.intensity || 0); // Example of using 'intensity' for year chart

    // Bubble chart data
    const topicsData = data.map(item => ({
        x: parseInt(item.intensity) || 0,   // Map intensity to x
        y: parseInt(item.relevance) || 0,   // Map relevance to y
        r: parseInt(item.likelihood)
    }));

    // Relevance chart data
    const relevanceLabels = data.map(item => item.topic || "Unknown");
    const relevanceScores = data.map(item => item.relevance_score !== undefined ? item.relevance_score : 5);  // Use 5 as the fixed value
    

    // Country chart data
const countryLabels = data.map(item => item.country || "Unknown Country");
const countryData = data.map(item => {
    // Check if the country_data is missing or invalid and provide a default value
    return (item.country_data && !isNaN(item.country_data)) ? item.country_data : 5; // Default to 0 if missing or invalid
});

// Region chart data
const regionLabels = data.map(item => item.region || "Unknown Region");
const regionData = data.map(item => {
    // Check if the region_data is missing or invalid and provide a default value
    return (item.region_data && !isNaN(item.region_data)) ? item.region_data : 7; // Default to 0 if missing or invalid
});

    



    // Now update each chart with the cleaned data
    IntensityChart.data.labels = labels;
    IntensityChart.data.datasets[0].data = intensityData;
    IntensityChart.update();

    LikelihoodChart.data.labels = labels;
    LikelihoodChart.data.datasets[0].data = likelihoodData;
    LikelihoodChart.update();

    YearChart.data.labels = years;
    YearChart.data.datasets[0].data = yearData;
    YearChart.update();

    TopicsChart.data.datasets[0].data = topicsData;
    TopicsChart.update();

    RelevanceChart.data.labels = relevanceLabels;
    RelevanceChart.data.datasets[0].data = relevanceScores;
    RelevanceChart.update();

    CountryChart.data.labels = countryLabels;
    CountryChart.data.datasets[0].data = countryData;
    CountryChart.update();

    RegionChart.data.labels = regionLabels;
    RegionChart.data.datasets[0].data = regionData;
    RegionChart.update();
}



// Define and initialize the Intensity Chart (Bar)
const IntensityChart = new Chart(document.getElementById('Intensity'), {
    type: 'bar',
    data: {
      labels: [], // Initially empty, will be populated dynamically
      datasets: [{
        label: 'Intensity Level',
        data: [], // Initially empty, will be populated dynamically
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', 
          'rgba(54, 162, 235, 0.6)', 
          'rgba(75, 192, 192, 0.6)', 
          'rgba(255, 205, 86, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)', 
          'rgba(54, 162, 235, 1)', 
          'rgba(75, 192, 192, 1)', 
          'rgba(255, 205, 86, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
  
  // Define and initialize the Likelihood Chart (Line)
  const LikelihoodChart = new Chart(document.getElementById('Likelihood'), {
    type: 'line',
    data: {
      labels: [], // Initially empty, will be populated dynamically
      datasets: [{
        label: 'Likelihood',
        data: [], // Initially empty, will be populated dynamically
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4 // Smoothing for the line
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
  
  // Define and initialize the Year Chart (Line)
  const YearChart = new Chart(document.getElementById('Year'), {
    type: 'line',
    data: {
      labels: [], // Initially empty, will be populated dynamically
      datasets: [{
        label: 'Yearly Data',
        data: [], // Initially empty, will be populated dynamically
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
  
  // Define and initialize the Topics Chart (Bubble)
  const TopicsChart = new Chart(document.getElementById('Topics'), {
    type: 'bubble',
    data: {
      datasets: [{
        label: 'Topics Analysis',
        data: [], // Initially empty, will be populated dynamically
        backgroundColor: 'rgba(75, 192, 192, 0.5)'
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: { beginAtZero: true },
        y: { beginAtZero: true }
      }
    }
  });
  
  // Define and initialize the Relevance Chart (Doughnut)
const RelevanceChart = new Chart(document.getElementById('Relevance'), {
    type: 'doughnut',
    data: {
      labels: [], // Initially empty, will be populated dynamically
      datasets: [{
        label: 'Relevance Score',
        data: [], // Initially empty, will be populated dynamically
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)'
        ]
      }]
    },
    options: {
      responsive: true,
      cutout: '70%'  // Defines the thickness of the doughnut
    }
  });
  
  // Define and initialize the Country Chart (Pie)
  const CountryChart = new Chart(document.getElementById('Country'), {
    type: 'pie',
    data: {
      labels: [], // Initially empty, will be populated dynamically
      datasets: [{
        label: 'Data Distribution',
        data: [], // Initially empty, will be populated dynamically
        backgroundColor: [
          'rgba(255, 159, 64, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 159, 64, 0.6)'
        ]
      }]
    },
    options: {
      responsive: true
    }
  });
  
  // Define and initialize the Region Chart (Doughnut)
  const RegionChart = new Chart(document.getElementById('Region'), {
    type: 'doughnut',
    data: {
      labels: [], // Initially empty, will be populated dynamically
      datasets: [{
        label: 'Region Distribution',
        data: [], // Initially empty, will be populated dynamically
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(153, 102, 255, 0.6)'
        ]
      }]
    },
    options: {
      responsive: true,
      cutout: '70%'  // Defines the thickness of the doughnut
    }
  });