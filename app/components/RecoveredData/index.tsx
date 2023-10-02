import React from "react";
import Chart from "@/app/client-libs";
import useGetChildren from "@/app/hooks/useGetChildren";

export default function RecoveredData() {
  const { childrenChart } = useGetChildren();


  const data = [["Location", "Eligibility"], ...childrenChart.map((child) => [child.location, child.is_eligible.toString()])];

  const options = {
    chart: {
      title: "Children Recovery"
    },
    colors: ["#F48547"]
  };

  return (
    <Chart
      chartType="Bar"
      // width="200%"
      height="400px"
      data={data}
      options={options}
    />
  );
}