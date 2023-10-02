// import React from "react";
// import Chart from "@/app/client-libs";


// export const data = [
//   ["Location", "Number of Children"],
//   ["Masimba", 25],
//   ["Kayole1", 20],
//   ["Kayole", 10],
// ];

// export const options = {
//   chart: {
//     title: "Children Registration",
//   },
//   colors: ["#F48547"],
// };
// export default function RegistrationData() {
//   return (
//     <Chart
//       chartType="Bar"
//       width="90%"
//       height="400px"
//       data={data}
//       options={options}
//     />
//   );
// }
import React from "react";
import Chart from "@/app/client-libs";
import useGetChildren from "@/app/hooks/useGetChildren";

export default function RegistrationData() {
  const { childrenChart } = useGetChildren();


  const data = [["Location", "Number of Children"], ...childrenChart.map((child) => [child.location, child.number_of_children])];

  const options = {
    chart: {
      title: "Children Registration"
    },
    colors: ["#F48547"]
  };

  return (
    <Chart
      chartType="Bar"
      // width="70%"
      height="400px"
      data={data}
      options={options}
    />
  );
}





















