import fitnessImg from "../Assets/fitnessimage.jpg";

const blogs = [
  {
    id: 1,
    title: "The Ultimate Guide to Building a Home Gym",
    description: "Transform any space into your personal fitness haven with this comprehensive guide. From essential equipment to space-saving solutions, learn how to create a home gym that meets all your workout needs and helps you stay motivated.",
    image: fitnessImg,
  },
  {
    id: 2,
    title: "The Science Behind Effective Workouts: What You Need to Know",
    description: "Understand the science behind effective exercise routines. This blog breaks down how different types of workouts impact your body, how to optimize your training for better results, and the importance of recovery and nutrition.",
    image: fitnessImg,
  },
  {
    id: 3,
    title: "How to Create a Balanced Workout Routine",
    description: "Learn how to design a workout routine that balances cardio, strength training, and flexibility exercises. Discover tips for setting realistic fitness goals, tracking progress, and adjusting your routine to prevent plateaus and injuries.",
    image: fitnessImg,
  },
  {
    id: 4,
    title: "Top 10 Fitness Myths Debunked",
    description: "Separate fact from fiction with this blog that debunks common fitness myths. From misconceptions about muscle building to myths about fat loss, get the truth behind popular fitness advice and learn what really works.",
    image: fitnessImg,
  },
  {
    id: 5,
    title: "Nutritional Tips for Peak Performance",
    description: "Optimize your fitness results with the right nutrition. Explore dietary strategies to fuel your workouts, enhance recovery, and support overall health. Learn about the role of macronutrients, hydration, and supplements.",
    image: fitnessImg,
  },
  {
    id: 6,
    title: "Mindfulness and Fitness: The Connection You Need to Know",
    description: "Discover how mindfulness can enhance your fitness journey. Learn about the benefits of incorporating mindfulness practices into your workout routine and how mental focus can improve performance and recovery.",
    image: fitnessImg,
  },
  {
    id: 7,
    title: "Effective Home Workouts for Busy Schedules",
    description: "Maximize your fitness results even with a tight schedule. This blog offers efficient home workout routines that require minimal equipment and can be done in a short amount of time, perfect for busy individuals.",
    image: fitnessImg,
  },
  {
    id: 8,
    title: "Fitness Trends to Watch in 2024",
    description: "Stay ahead of the curve with the latest fitness trends for the coming year. Explore emerging workout styles, innovative fitness technologies, and new approaches to health and wellness that are shaping the future of fitness.",
    image: fitnessImg,
  },
  {
    id: 9,
    title: "How to Stay Motivated and Achieve Your Fitness Goals",
    description: "Find strategies to stay motivated and committed to your fitness goals. This blog offers practical tips for overcoming common obstacles, setting achievable targets, and maintaining a positive mindset throughout your fitness journey.",
    image: fitnessImg,
  },
];

const randomFitnessBlogs = blogs.slice(4).sort(() => Math.random() - 0.5).slice(0, 3);

export { blogs, randomFitnessBlogs };
