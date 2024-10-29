// import React from "react";

// const Alert = ({ message, type }) => {
//   return (
//     <div
//       className={`alert ${
//         type === "success" ? "alert-success" : "alert-danger"
//       }
//         text-center p-2 rounded-md mb-4`}
//     >
//       {message}
//     </div>
//   );
// };

// export default Alert;
// import React from "react";

// const Alert = ({ message, type }) => {
//   // Define background color based on alert type
//   const backgroundColor = type === "success" ? "bg-green-500" : "bg-red-500";

//   return (
//     <div
//       className={`${backgroundColor} text-white text-center p-3 rounded-md mb-4`}
//     >
//       {message}
//     </div>
//   );
// };

// export default Alert;

import React from "react";

interface AlertProps {
  message: string;
  type: "success" | "danger";
}

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  // Use dynamic class names based on alert type
  const alertClass = type === "success" ? "alert-success" : "alert-danger";

  return <div className={`alert ${alertClass}`}>{message}</div>;
};

export default Alert;
