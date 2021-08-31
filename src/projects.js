const projects = [
  {
    projectId: 1,
    projectName: "Peace and Love Within",
    link: "https://peaceandlovewithin.com",
    shortDescription:
      "This project was developed for a client. It's an e-commerce website, created with WordPress. It integrates an event calendar, a Stripe gateway payment, and a booking system.",
    projectBackground:
      "This was the first project I created for a client. I really enjoyed the briefing experience, getting to know what my client was looking for, and the subsequent creative stage. My client main interest was being able to showcase events on the website, as well as having a booking and payment system in place, to allow customers to book a session directly online and proceed with the payment. We agreed to use wordpress to make it easier for my client to change the website later if needed. as it was also my first time integrating a payment system, using wordpress allowed me to feel more confident in building the website, as I could rely on stable third-parties plugins.",
    keyLessons:
      "This was my first time using WordPress. I spent a good amount of time understanding its basics - setting up  a WAMP server and running different instances of WordPress locally, the basics of themes, how to create child themes, a bit of PHP, WordPress files structure, best practices on how to tweak WP main files and tweaking plugins files. </br> Full-dive into AdobeXD, which was absolutely fun - I 💕 AdobeXD. </br> How to fully integrate a booking and payment system. Even though the booking system we used integrated a payment system, I still had to run tests to make sure everything was working properly before going live. </br> The most challenging part was migrating the website from localhost to the server - there were a few incompatibilities with the core PHP version in use on the server. To resolve the issue I had  to dive into forums, docs and ask the hosting support. It was definitely a hard but good way to learn core concepts regarding .htaccess file, PHP versions etc. </br> I also had to think about security issues",
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
];

export default projects;
