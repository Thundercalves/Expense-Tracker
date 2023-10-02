
const ctx = document.getElementById('myChart')

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Purple', 'Orange'],
    datasets: [{
      label: '# of votes',
      data: [12, 12, 3, 5, 2, 3],
      borderWidth: 1
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
