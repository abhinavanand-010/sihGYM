import dietImg from "../../src/Assets/diet.jpg";

const dietPlans = [
  {
    id: 1,
    title: "Weight Gain Diet Plan",
    description: "Increase your muscle mass and overall body weight with a diet designed to fuel growth. Focus on high-calorie, nutrient-dense foods including lean proteins, complex carbs, and healthy fats. Incorporate frequent, balanced meals and snacks to support your training goals.",
    image: dietImg,
  },
  {
    id: 2,
    title: "Weight Loss Diet Plan",
    description: "Achieve your weight loss goals with a diet that promotes a calorie deficit while ensuring proper nutrition. Focus on whole foods, high fiber, and lean proteins. Include plenty of vegetables and fruits, and stay hydrated to support your weight loss journey.",
    image: dietImg,
  },
  {
    id: 3,
    title: "Fat Loss Diet Plan",
    description: "Burn fat effectively with a diet that combines calorie control with nutrient-rich foods. Prioritize protein intake, moderate healthy fats, and low-glycemic carbohydrates. Balanced meals and snacks will help maintain muscle mass while targeting fat loss.",
    image: dietImg,
  },
  {
    id: 4,
    title: "Balanced Diet Plan",
    description: "Maintain overall health and wellness with a balanced diet that includes a variety of nutrients. Focus on equal portions of lean proteins, whole grains, healthy fats, and a wide range of fruits and vegetables. Proper hydration and regular meals will support sustained energy and vitality.",
    image: dietImg,
  },
];

const randomDietPlans = dietPlans.slice(0).sort(() => Math.random() - 0.5).slice(0, 3);

export { dietPlans, randomDietPlans };
