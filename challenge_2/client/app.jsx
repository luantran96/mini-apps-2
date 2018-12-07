import React from 'react';
import axios from 'axios';
import Chart from 'chart.js';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
          data: undefined,
        });

      this.renderChart = this.renderChart.bind(this);
    }
    
    componentDidMount() {
      axios.get('/api/btc', {
        params: {
          start_date: '2013-09-01',
          end_date: '2018-09-01',
        },
      })
      .then((res) => {
        console.log(res.data);
        this.setState({
          data: res.data,
        })
      });
    }

    renderChart() {
      const { data } = this.state;
      if (!data) {
        return;
      }

      console.log(data.bpi);
      let dates = Object.keys(data.bpi);
      let prices = Object.values(data.bpi);

      var ctx = document.getElementById("myChart");
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                fill: false,
                lineTension: 2,
                label: 'Bitcoin prices',
                data: prices,
                borderColor: [
                    'rgba(255,99,132,1)',
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    },
                }]
            },
        },
      });
    }

    render() {
        return (
            <div>
                <canvas id="myChart" width="500" height="500"></canvas>
                {this.renderChart()}
            </div>
        )
    }
}


export default App;

