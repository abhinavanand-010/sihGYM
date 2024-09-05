import dietImg from "../../../Assets/diet.jpg";

const dietPlans = [
  {
    id: 1,
    title: "Weight Gain Diet Plan",
    description: `
      To gain weight effectively, focus on consuming calorie-dense and nutrient-rich foods. Here’s a sample plan:
      - **Breakfast:** 3 scrambled eggs with avocado, whole grain toast, and a smoothie with banana, protein powder, and almond milk.
      - **Mid-Morning Snack:** Greek yogurt with honey and granola.
      - **Lunch:** Grilled chicken breast, quinoa, and steamed vegetables with olive oil.
      - **Afternoon Snack:** A handful of nuts and a protein bar.
      - **Dinner:** Salmon fillet with sweet potato and sautéed spinach.
      - **Evening Snack:** Cottage cheese with berries and a sprinkle of chia seeds.
      - **Hydration:** Drink plenty of water throughout the day and consider adding a calorie-rich beverage like a homemade protein shake.
    `,
    image: dietImg,
  },
  {
    id: 2,
    title: "Weight Loss Diet Plan",
    description: `
      For weight loss, aim to create a calorie deficit while ensuring you get essential nutrients. Sample plan:
      - **Breakfast:** Overnight oats with chia seeds, berries, and a dash of almond milk.
      - **Mid-Morning Snack:** An apple with a small handful of almonds.
      - **Lunch:** Grilled turkey breast with a large mixed green salad (use vinegar and olive oil for dressing).
      - **Afternoon Snack:** Carrot sticks with hummus.
      - **Dinner:** Baked cod with steamed broccoli and a side of brown rice.
      - **Evening Snack:** A small bowl of mixed berries or a low-fat yogurt.
      - **Hydration:** Drink plenty of water and herbal teas, and avoid sugary beverages.
    `,
    image: dietImg,
  },
  {
    id: 3,
    title: "Fat Loss Diet Plan",
    description: `
      To focus on fat loss, prioritize protein intake and manage carbohydrate consumption. Here’s a sample plan:
      - **Breakfast:** A smoothie with spinach, protein powder, half a banana, and unsweetened almond milk.
      - **Mid-Morning Snack:** A boiled egg and a few slices of cucumber.
      - **Lunch:** Grilled chicken or tofu salad with mixed greens, cherry tomatoes, and a lemon-tahini dressing.
      - **Afternoon Snack:** A small handful of walnuts and an orange.
      - **Dinner:** Stir-fried shrimp with mixed vegetables and cauliflower rice.
      - **Evening Snack:** A few slices of apple with a small amount of almond butter.
      - **Hydration:** Focus on drinking water and green tea; limit sugary and high-calorie drinks.
    `,
    image: dietImg,
  },
  {
    id: 4,
    title: "Balanced Diet Plan",
    description: `
      A balanced diet maintains overall health and wellness. Sample plan:
      - **Breakfast:** A bowl of oatmeal topped with fresh fruit, nuts, and a drizzle of honey.
      - **Mid-Morning Snack:** A small serving of cottage cheese with pineapple chunks.
      - **Lunch:** A whole grain wrap with lean turkey, avocado, mixed greens, and a side of fruit.
      - **Afternoon Snack:** A handful of mixed nuts and a few baby carrots.
      - **Dinner:** Baked chicken breast with roasted vegetables (bell peppers, zucchini, carrots) and a side of quinoa.
      - **Evening Snack:** A small serving of Greek yogurt with a sprinkle of flax seeds.
      - **Hydration:** Drink plenty of water throughout the day and include herbal teas as desired.
    `,
    image: dietImg,
  },
];

const randomDietPlans = dietPlans.slice(0).sort(() => Math.random() - 0.5).slice(0, 3);

export { dietPlans, randomDietPlans };
