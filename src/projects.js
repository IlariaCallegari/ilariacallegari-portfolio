const projects = [
  {
    projectId: 1,
    project: "peace-and-love-within",
    projectName: "Peace and Love Within",
    link: "https://peaceandlovewithin.com",
    shortDescription:
      "This project was developed for a client. It's an e-commerce website, created with WordPress. It integrates an event calendar, a Stripe gateway payment, and a booking system.",
    projectBackground:
      "This was the first project I created for a client. I really enjoyed the briefing experience, getting to know what my client was looking for, and the subsequent creative stage. My client main interest was being able to showcase events on the website, as well as having a booking and payment system in place, to allow customers to book a session directly online and proceed with the payment. We agreed to use wordpress to make it easier for my client to change the website later if needed. as it was also my first time integrating a payment system, using wordpress allowed me to feel more confident in building the website, as I could rely on stable third-parties plugins.",
    keyLessons: `<ul><li>This was my first time using WordPress. I spent a good amount of time understanding its basics - setting up  a WAMP server and running different instances of WordPress locally, the basics of themes, how to create child themes, a bit of PHP, WordPress files structure, best practices on how to tweak WP main files and tweaking plugins files. </li><li> Full-dive into AdobeXD, which was absolutely fun - I 💕 AdobeXD. </li><li> How to fully integrate a booking and payment system. Even though the booking system we used integrated a payment system, I still had to run tests to make sure everything was working properly before going live. </li><li> The most challenging part was migrating the website from localhost to the server - there were a few incompatibilities with the core PHP version in use on the server. To resolve the issue I had  to dive into forums, docs and ask the hosting support. It was definitely a hard but good way to learn core concepts regarding .htaccess file, PHP versions etc. </li><li> I also had to think about security issues.</li></ul>`,
    stack: [
      "Wordpress",
      "Stripe Payment Gateway",
      "Amelia WP Booking Plugin",
      "The Event Calendar",
    ],
    images: {
      desktopPortfolioImg:
        "src/assets/desktop/Project-1-PortfolioPage-MainImg.png",
      desktopSingleProjectMainImg:
        "src/assets/desktop/Project-1-SingleProject-MainImg.png",
      desktopSingleProjectMobileDiplay:
        "src/assets/desktop/Project-1-SingleProject-MobileDisplay.png",
    },
  },
  {
    projectId: 2,
    project: "github-dev-app",
    projectName: "GitHub Dev App",
    link: "https://dev-job-app.vercel.app/",
    code: "https://github.com/IlariaCallegari/dev-job-app",
    shortDescription:
    "Responsive Single Page Application created with ReactJS, JSS, React-Router-DOM and costum elements from Material-UI.",
    projectBackground:
      "This was the first project I created for a client. I really enjoyed the briefing experience, getting to know what my client was looking for, and the subsequent creative stage. My client main interest was being able to showcase events on the website, as well as having a booking and payment system in place, to allow customers to book a session directly online and proceed with the payment. We agreed to use wordpress to make it easier for my client to change the website later if needed. as it was also my first time integrating a payment system, using wordpress allowed me to feel more confident in building the website, as I could rely on stable third-parties plugins.",
    keyLessons:`<p>This project was quite a challenge! I struggled a fair bit and took me a few weeks to get to the end of it- I am sure, there are probably more polished and orthodox ways of tackling some of the obstacles I encountered, but nonetheless I am proud of this app.</p> 
   <ul><li> I had to deploy the project in Vercel a few times, because of errors happening at building time. This gave me the opportunity to understand better how development and production differs.</li>
    <ul><li>I faced some more troubles in fetching the data from the GitHub Job API because of restrictive cross-origin specifications. This gave me the opportunity to learn more about CORS and what can be done to overcome these restrictive policies.</li>
    <li>I had to learn how to polish and use the data that were returning from the API, and I’ve created a few helper functions for this.</li></ul>`,
    stack: [
      "Grid and Flexbox",
      "Desktop First Workflow",
      "React-Router-DOM",
      "Reactjs",
      "CSS-in-JS",
      "Custom elements from Material UI",
    ],
    images: {
      desktopPortfolioImg:
        "src/assets/desktop/Project-2-PortfolioPage-MainImg.png",
      desktopSingleProjectMainImg:
        "/assets/desktop/Project-2-SingleProject-MainImg.png",
      desktopSingleProjectMobileDiplay:
        "src/assets/desktop/Project-2-SingleProject-MobileDisplay.png",
    },
  },
];

export default projects;
