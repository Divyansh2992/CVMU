import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const Result = ({ data }) => {
  if (!data?.locations?.length) {
    return <p className="text-danger">No results found. Try a different startup idea!</p>;
  }

  // Sort locations in descending order based on Growth Index
  const sortedLocations = [...data.locations]
    .sort((a, b) => b["Growth Index"] - a["Growth Index"])
    .slice(0, 10); // Get only top 10

  // Prepare data for Horizontal Bar Chart
  const chartData = {
    labels: sortedLocations.map((loc) => `${loc.City}, ${loc.State}`),
    datasets: [
      {
        label: "Growth Index",
        data: sortedLocations.map((loc) => loc["Growth Index"]),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    indexAxis: "y", // Horizontal bar chart
    responsive: true,
    plugins: {
      legend: { display: false }, // Hide legend
    },
  };

  return (
    <div className="container mt-5">
      <h2 className="text-success">{data.message}</h2>

      {/* Display results in a table */}
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>City</th>
            <th>State</th>
            <th>Growth Index</th>
            <th>Avg Rent</th>
            <th>Foot Traffic</th>
          </tr>
        </thead>
        <tbody>
          {sortedLocations.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.City}</td>
              <td>{item.State}</td>
              <td>{item["Growth Index"]}</td>
              <td>{item["Avg Rent"]}</td>
              <td>{item["Foot Traffic"]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Horizontal Bar Chart */}
      <div className="mt-4">
        <h3 className="text-primary">Top 10 Growth Index Locations</h3>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Result;
