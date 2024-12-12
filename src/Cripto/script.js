const historicalData = [
    {
      name: 'Bitcoin',
      data: [
        { x: '2023-01-01', y: 16000 },
        { x: '2023-02-01', y: 18000 },
        { x: '2023-03-01', y: 20000 },
      ]
    },
    {
      name: 'Ethereum',
      data: [
        { x: '2023-01-01', y: 1200 },
        { x: '2023-02-01', y: 1500 },
        { x: '2023-03-01', y: 1800 },
      ]
    }
  ];
  
  function initChart(data) {
    const ctx = document.getElementById('cryptoChart').getContext('2d');
    if (chart) {
      chart.destroy();
    }
  
    const labels = data.map(coin => coin.name);
    const datasets = [{
      label: 'Preço Atual',
      data: data.map(coin => coin.current_price),
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }];
  
    chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Preço Atual das Criptomoedas'
          }
        }
      }
    });
  }