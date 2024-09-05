import { useState } from "react";
import Header from "./Header";
import FitQuestContainer from "./FitQuestContainer";
import bmiindex from '../Assets/bmi index.jpg';

const Calculator = () => {
  return (
    <>
      <Header />
      <div>
        <First />
        <Second />
      </div>
      <FitQuestContainer />
    </>
  );
};

const First = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat h-[30px] flex items-center justify-center mt-20">
      <h1 className="text-5xl font-bold text-black">BMI Calculator</h1>
    </div>
  );
};

const Second = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [bmiCategory, setBmiCategory] = useState("");
  const [formError, setFormError] = useState("");

  const calculateBMI = (weight, height) => {
    if (!weight || !height) return null;
    const heightInMeters = height / 100; // height in meters
    const bmiValue = weight / (heightInMeters * heightInMeters);
    return bmiValue;
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 24.9) return "Normal weight";
    if (bmi < 29.9) return "Overweight";
    return "Obesity";
  };

  const formHandler = (e) => {
    e.preventDefault();

    if (!height || !weight) {
      setFormError("Fill All Fields");
    } else {
      setFormError("");
      const calculatedBmi = calculateBMI(parseFloat(weight), parseFloat(height));
      if (calculatedBmi) {
        setBmi(calculatedBmi.toFixed(2));
        setBmiCategory(getBMICategory(calculatedBmi));
      } else {
        setBmi("");
        setBmiCategory("");
      }
      setHeight("");
      setWeight("");
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 w-full max-w-screen-xl mx-auto mt-20">
      <div className="flex-1">
        <p className="text-gray-600 mb-2">Fill Details</p>
        <h2 className="text-2xl mb-4">Your BMI</h2>
        <p className="text-gray-400 mb-4">
          Body Mass Index (BMI) is a simple calculation using a person's height and weight. It is used to estimate if an individual is underweight, normal weight, overweight, or obese. BMI is calculated by dividing a person's weight in kilograms by the square of their height in meters. This value helps in assessing potential health risks related to weight, though it does not directly measure body fat or health status. Consult with a healthcare provider for a comprehensive assessment of your health.
        </p>
        <form onSubmit={formHandler} className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <input
              type="number"
              placeholder="Height / cm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border border-gray-300 p-2 w-full"
            />
            <input
              type="number"
              placeholder="Weight / kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-800 text-white p-2 rounded hover:bg-gray-600"
          >
            Submit
          </button>
          {formError && <p className="text-red-500 mt-2">{formError}</p>}
        </form>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl mb-4">BMI Chart</h2>
        <div className="space-y-4">
          <div className="flex justify-between bg-gray-800 text-white p-2">
            <div>BMI</div>
            <div>Weight status</div>
          </div>
          <div className="flex justify-between bg-gray-300 p-2">
            <div>{bmi}</div>
            <div className={getBMIClass(bmiCategory)}>{bmiCategory || "N/A"}</div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <img
            src={bmiindex} // Replace with your image path
            alt="BMI Chart"
            className="max-w-full h-[275px]" // Adjust styling as needed
          />
        </div>
      </div>
    </div>
  );
};

// Helper function to get the appropriate class for BMI category
const getBMIClass = (category) => {
  switch (category) {
    case "Underweight":
      return "text-yellow-500";
    case "Normal weight":
      return "text-green-500";
    case "Overweight":
      return "text-orange-500";
    case "Obesity":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
};

export default Calculator;
