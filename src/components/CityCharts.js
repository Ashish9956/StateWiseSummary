import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";
// const CityCharts = ({ cities }) => {
//   return (
//     <div className="city-charts">
//       <Bar
//         data={{
//           labels: cities.map(city => city.name),
//           datasets: [
//             {
//               label: 'Income',
//               data: cities.map(city => city.income),
//               backgroundColor: 'rgba(75,192,192,0.7)',
//             },
//           ],
//         }}
//       />
//       <Pie
//         data={{
//           labels: cities.map(city => city.name),
//           datasets: [
//             {
//               data: cities.map(city => city.population),
//               backgroundColor: ['rgba(255,99,132,0.7)', 'rgba(54,162,235,0.7)', 'rgba(255,206,86,0.7)'],
//             },
//           ],
//         }}
//       />
//     </div>
//   );
// };

// export default CityCharts;
const CityCharts = ({ cities }) => {
    return (
      <div className="city-charts">
        <div className="chart">
          <h4>Income Chart</h4>
          <Bar
            data={{
              labels: cities.map(city => city.name),
              datasets: [
                {
                  label: 'Income',
                  data: cities.map(city => city.income),
                  backgroundColor: 'rgba(75,192,192,0.7)',
                },
              ],
            }}
          />
        </div>
        <div className="chart">
          <h4>Population Chart</h4>
          <Pie
            data={{
              labels: cities.map(city => city.name),
              datasets: [
                {
                  data: cities.map(city => city.population),
                  backgroundColor: ['rgba(255,99,132,0.7)', 'rgba(54,162,235,0.7)', 'rgba(255,206,86,0.7)'],
                },
              ],
            }}
          />
        </div>
      </div>
    );
  };
  
  export default CityCharts;