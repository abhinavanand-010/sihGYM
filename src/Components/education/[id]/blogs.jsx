import fitnessImg from "../../../Assets/fitnessimage.jpg"; // Update to the appropriate image for fitness

const blogs = [
  {
    id: 1,
    title: "The Ultimate Guide to Strength Training",
    description: "Strength training is a cornerstone of physical fitness that helps build muscle, increase metabolism, and enhance overall health. This comprehensive guide provides in-depth insights into various strength training exercises, including free weights, machines, and bodyweight exercises. You’ll find expert tips on how to structure your workouts, avoid common mistakes, and progress effectively. Whether you’re a beginner or an advanced lifter, this guide will help you maximize your gains and achieve your fitness goals.",
    image: fitnessImg,
  },
  {
    id: 2,
    title: "Nutrition for Athletes: Fueling Your Workout",
    description: "Nutrition plays a pivotal role in athletic performance and recovery. This blog explores the best dietary practices for athletes, including pre- and post-workout nutrition, meal timing, and macronutrient balance. Learn about the types of foods that enhance energy levels, improve endurance, and aid in muscle repair. We also provide practical advice on how to create a balanced meal plan that supports your training regimen and helps you stay at the top of your game.",
    image: fitnessImg,
  },
  {
    id: 3,
    title: "Cardio Workouts: Benefits and Best Practices",
    description: "Cardiovascular workouts are essential for improving heart health, boosting endurance, and burning calories. In this blog, we cover the benefits of various cardio exercises such as running, cycling, swimming, and high-intensity interval training (HIIT). Discover how to effectively integrate cardio into your fitness routine, how to vary your workouts to avoid plateaus, and tips for staying motivated. Learn how cardio can complement your strength training and overall fitness strategy.",
    image: fitnessImg,
  },
  {
    id: 4,
    title: "The Importance of Flexibility and Stretching",
    description: "Flexibility and stretching are crucial components of a well-rounded fitness routine. This blog delves into the benefits of stretching, including improved range of motion, reduced risk of injury, and better muscle recovery. We explore different types of stretches—static, dynamic, and proprioceptive neuromuscular facilitation (PNF)—and provide a variety of stretching routines that you can incorporate into your daily practice. Whether you’re an athlete or just looking to stay limber, these tips will enhance your flexibility and overall fitness.",
    image: fitnessImg,
  },
  {
    id: 5,
    title: "Home Workouts: Effective Exercises Without Equipment",
    description: "Working out at home can be just as effective as going to the gym, especially when you know which exercises to include. This blog offers a range of bodyweight exercises that require no equipment, perfect for those who prefer to exercise at home. From bodyweight squats and push-ups to planks and burpees, we provide detailed instructions and variations to keep your workouts challenging and engaging. Additionally, we share tips on how to create a home workout space and stay motivated without a gym membership.",
    image: fitnessImg,
  },
  {
    id: 6,
    title: "Understanding Macronutrients: Carbs, Proteins, and Fats",
    description: "Macronutrients are the building blocks of a balanced diet and play a vital role in your fitness and health. This blog explains the functions of carbohydrates, proteins, and fats, and how they contribute to your energy levels, muscle growth, and overall well-being. We break down the different types of each macronutrient, provide examples of healthy food sources, and offer guidance on how to balance them in your diet. Whether you’re looking to lose weight, build muscle, or maintain your current fitness level, understanding macronutrients is key to achieving your goals.",
    image: fitnessImg,
  },
  {
    id: 7,
    title: "Recovery Strategies: How to Bounce Back After a Workout",
    description: "Effective recovery is essential for maximizing the benefits of your workouts and preventing injuries. In this blog, we explore various recovery strategies, including proper hydration, nutrition, rest, and active recovery techniques. Learn about the importance of sleep, how to use foam rollers and massage tools, and the role of stretching and relaxation exercises. We also provide tips for creating a personalized recovery plan to ensure that you bounce back quickly and perform at your best in every workout.",
    image: fitnessImg,
  },
  {
    id: 8,
    title: "Fitness Myths Debunked: What You Need to Know",
    description: "There are many myths and misconceptions surrounding fitness that can derail your progress. This blog aims to debunk common fitness myths and provide evidence-based information to help you make informed decisions. We address misconceptions about weight loss, muscle gain, exercise routines, and nutrition, and offer factual advice to guide you on your fitness journey. By clearing up these myths, you’ll be better equipped to achieve your fitness goals and improve your overall health.",
    image: fitnessImg,
  },
  {
    id: 9,
    title: "The Role of Mental Health in Fitness",
    description: "Mental health is a crucial aspect of overall fitness and well-being. This blog explores the connection between mental health and physical fitness, highlighting how exercise can positively impact mood, reduce stress, and enhance cognitive function. We discuss strategies for maintaining a positive mindset, managing anxiety and depression, and setting realistic fitness goals. Learn how incorporating mindfulness practices and mental health awareness into your fitness routine can lead to a more balanced and fulfilling life.",
    image: fitnessImg,
  },
];

const randomBlogs = blogs.slice(4).sort(() => Math.random() - 0.5).slice(0, 3);

export { blogs, randomBlogs };
