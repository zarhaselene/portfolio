// src/data/projects.js

export const projects = [
  {
    title: "FODMAP Recipe App",
    description:
      "A web application designed to help users find and manage low-FODMAP recipes and resources. It features advanced search, filtering options, and detailed food and recipe information to support dietary management.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Context API"],
    liveUrl: "https://fodmap-recipe.netlify.app",
    githubUrl: "https://github.com/zarhaselene/fodmap-recipe",
    slug: "fodmap-recipe-app",
    challenge:
      "Many people with IBS and other digestive disorders follow a low-FODMAP diet, but finding suitable recipes can be challenging. Existing recipe sites don't offer specialized filtering for FODMAP content.",
    solution:
      "Created a dedicated platform that allows users to search and filter recipes specifically designed for low-FODMAP diets. Implemented a user-friendly interface with clear labeling of safe and trigger ingredients.",
    process: [
      "Researched FODMAP dietary restrictions and common user needs",
      "Designed wireframes and user flows to optimize the recipe discovery process",
      "Built a responsive frontend with Next.js and Tailwind CSS",
      "Implemented Context API for efficient state management across the application",
      "Created custom filters for different FODMAP categories and dietary restrictions",
    ],
    results:
      "The application helps users quickly find suitable recipes, save favorites, and manage their dietary needs more effectively.",
    imagePath: "/assets/projects/FODMAP.png",
  },
  {
    title: "Pokédex",
    description:
      "A Pokédex built with Next.js in a collaborative project. I developed the Favorites page, navigation bar, individual Pokémon detail page, and implemented the Context API to manage Pokémon data. The app allows users to explore Pokémon, bookmark favorites, and search by name or ID, featuring a responsive design and type-based browsing.",
    tags: ["Next.js", "Tailwind CSS", "PokeAPI", "Context API"],
    liveUrl: "https://chas-pokemon.netlify.app/",
    githubUrl: "https://github.com/zarhaselene/chas_pokemon",
    slug: "pokedex",
    challenge:
      "Creating an engaging, responsive Pokémon encyclopedia that provides an intuitive browsing experience while handling large amounts of data efficiently.",
    solution:
      "Developed a Next.js application that interfaces with the PokeAPI, implementing efficient data fetching, caching, and state management.",
    process: [
      "Collaborated with team members to define project scope and responsibilities",
      "Designed and implemented the navigation bar and favorites system",
      "Built detailed Pokémon information pages with dynamic routing",
      "Implemented Context API to manage global application state",
      "Created type-based filtering and search functionality",
    ],
    results:
      "Delivered a fully functional Pokédex that allows users to browse, search, and bookmark favorite Pokémon. The application handles data efficiently and provides a smooth user experience across devices.",
    imagePath: "/assets/projects/Pokedex.png",
  },
  {
    title: "Countdown",
    description:
      "A responsive countdown timer that ticks down every second. Includes hover states for interactive elements and a card flip animation for changing numbers.",
    tags: ["HTML5", "JavaScript", "CSS3", "CSS Grid", "Flexbox"],
    liveUrl: "https://zarhaselene-countdown.netlify.app/",
    githubUrl: "https://github.com/zarhaselene/countdown",
    slug: "countdown",
    challenge:
      "Creating an engaging, visually appealing countdown timer with smooth animations and cross-browser compatibility.",
    solution:
      "Built a responsive countdown application with flip card animations that work across different devices and browsers.",
    process: [
      "Designed the visual interface with a focus on readability and aesthetics",
      "Implemented custom CSS animations for the flip effect",
      "Built the JavaScript logic for accurate time calculations",
      "Optimized the layout for both desktop and mobile devices",
    ],
    results:
      "Delivered a polished countdown timer with engaging animations that maintains accurate timing and performs well across different screen sizes and browsers.",
    imagePath: "/assets/projects/Countdown.png",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs() {
  return projects.map((project) => project.slug);
}
