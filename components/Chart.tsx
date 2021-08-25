import { Line } from "react-chartjs-2";

export interface IChart {
  data: {
    prices: [];
  };
}

const Chart: React.FC<IChart> = ({ data }: IChart) => {
  const daysOptions = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  const chartOptions = {
    labels: daysOptions.map((day) => day),
    datasets: [
      {
        label: "Price",
        data:
          data &&
          data?.prices?.slice(10).map((price: any) => price[1].toFixed(2)),
        backgroundColor: [
          "#EE6855",
          "#EE6855",
          "#EE6855",
          "#EE6855",
          "#EE6855",
        ],
      },
    ],
  };
  return (
    <>
      <Line
        data={chartOptions}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Prices",
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
        }}
      />
    </>
  );
};

export default Chart;
