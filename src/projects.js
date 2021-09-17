const projects = [
  {
    projectId: 1,
    project: "peace-and-love-within",
    projectName: "Peace and Love Within",
    link: "https://peaceandlovewithin.com",
    internalLink: "/portfolio/peace-and-love-within",
    shortDescription:
      "This project was developed for a client. It's an e-commerce website, created with WordPress. It integrates an event calendar, a Stripe gateway payment, and a booking system.",
    projectBackground:
      "This was the first project I created for a client. I really enjoyed the briefing experience, getting to know what my client was looking for, and the subsequent creative stage. My client main interest was being able to showcase events on the website, as well as having a booking and payment system in place, to allow customers to book a session directly online and proceed with the payment. We agreed to use wordpress to make it easier for my client to change the website later if needed. as it was also my first time integrating a payment system, using wordpress allowed me to feel more confident in building the website, as I could rely on stable third-parties plugins.",
    keyLessons: `<ul><li>This was my first time using WordPress. I spent a good amount of time understanding its basics - setting up  a WAMP server and running different instances of WordPress locally, the basics of themes, how to create child themes, a bit of PHP, WordPress files structure, best practices on how to tweak WP main files and tweaking plugins files. </li><li> Full-dive into AdobeXD, which was absolutely fun - I 💕 AdobeXD. </li><li> How to fully integrate a booking and payment system. Even though the booking system we used integrated a payment system, I still had to run tests to make sure everything was working properly before going live. </li><li> The most challenging part was migrating the website from localhost to the server - there were a few incompatibilities with the core PHP version in use on the server. To resolve the issue I had  to dive into forums, docs and ask the hosting support. It was definitely a hard but good way to learn core concepts regarding .htaccess file, PHP versions etc. </li><li> I also had to think about security issues.</li></ul>`,
    stack: [
      "Wordpress",
      "Stripe Payment Gateway",
      "Amelia WP Booking",
      "The Event Calendar",
      "YOAST SEO",
      "Google Analytics",
      "BPS Security",
    ],
  },
  {
    projectId: 2,
    project: "dev-job-app",
    projectName: "Dev Job App",
    internalLink: "/portfolio/dev-job-app",
    link: "https://dev-job-app.vercel.app/",
    code: "https://github.com/IlariaCallegari/dev-job-app",
    shortDescription:
      "Responsive Single Page Application created with ReactJS, JSS, React-Router-DOM and costum elements from Material-UI.",
    projectBackground:
      "This project is the refactored version of the GitHub-Jobs API project. The GitHub Jobs API was deprecated a few months ago, so I had to change the code to make it fetch the data from a JSON file instead. Going through the whole project once more, rethinking its overall structure, and identifying where the code needed changes and how to best implement those changes, was overall a beneficial exercise.",
    keyLessons: `<p>This project was quite a challenge, especially its first implementation - the GitHub-Jobs API! I struggled a fair bit and took me a few weeks to get to the end of it- I am sure, there are probably more polished and orthodox ways of tackling some of the obstacles I encountered, but nonetheless I am proud of this app.</p> 
   <ul><li> I had to deploy the project in Vercel a few times, because of errors happening at building time. This gave me the opportunity to understand better how development and production differs.</li>
    <ul><li>I faced some more troubles in fetching the data from the GitHub Job API because of restrictive cross-origin specifications. This gave me the opportunity to learn more about CORS and what can be done to overcome these restrictive policies.</li>
    <li>I had to learn how to polish and use the data that were returning from the API, and I’ve created a few helper functions for this.</li></ul><br/><p>Second implementation of the code:</p><ul><li>One of the main points of learning has been around the useEffect hook. Whilst refactoring the code, I realised that the application was fetching data from the JSON file in an infinite loop and, it was re-rending the main page, slowing down considerably the app performance. Reading articles and documentation on how best to tackle the issue, has reinforced and deepened my understanding and the various implications of the useEffect hook.</li></ul>`,
    stack: [
      "Grid and Flexbox",
      "Desktop First Workflow",
      "React-Router-DOM",
      "Reactjs",
      "CSS-in-JS",
      "Custom elements from Material UI",
    ],
  },
  {
    projectId: 3,
    project: "planets-app",
    projectName: "Planets Facts App",
    internalLink: "/portfolio/planets-app",
    link: "https://planets-app.vercel.app/",
    code: "https://github.com/IlariaCallegari/planets-app",
    shortDescription:
      "Responsive single page application created with React.js, React Router DOM, and JSS.",
    projectBackground:
      "This was one of my first challenges on Frontend Mentor. It's a simple application, in which the users should be able to toggle between 'Overview', 'Internal Structure' and 'Surface Geology'.",
    keyLessons: `<p>While coding this project, I've noticed I need to focus more on using React's custom hooks more efficiently. I've also concluded that allowing more time to plan the structure of the code - i.e. how to best use the state hook API, how to best compose the HTML/JSX markup - to make the writing process quicker and more efficient would be beneficial.</p>`,
    stack: [
      "Flexbox",
      "Desktop First Workflow",
      "React-Router-DOM",
      "Reactjs",
      "CSS-in-JS",
    ],
  },
  {
    projectId: 4,
    project: "pinsa-romana-uk",
    projectName: "Pinsa Romana UK",
    internalLink: "/portfolio/pinsa-romana-uk",
    link: "https://pinsaromanauk.com/",
    shortDescription:
      "A simple WordPress landing page for an Italian food importing business. It integrates YOAST SEO, Chaty plugin, and Google Analytics. The landing page is fully responsive. I also took care of all design and branding elements.",
    projectBackground:
      "This simple landing page was commissioned by a client who needed a professional online presence for his business. His main concern was appearing in Google Search Result and for potential clients to be easy and intuitive to reach him via the website. I  install the Chaty plugin to allow potential clients to chat with him on WhatsApp straight from the web page and implemented SEO best practices.",
    stack: [
      "WordPress",
      "Desktop First Workflow",
      "Chaty",
      "YOAST SEO",
      "Google Analytics",
    ],
  },
  {
    projectId: 5,
    project: "the-montessori-diary",
    projectName: "The Montessori Diary",
    internalLink: "/portfolio/the-montessori-diary",
    link: "https://themontessoridiary.com/",
    shortDescription:
      "A WordPress blog for a parenting business. The blog includes integrations with Mailchimp newsletter, and the possibility to translate the site from English to Italian. I took care of all design and branding elements. The blog is fully responsive.",
    projectBackground:
      "This blog was commissioned to me by a client who needed a platform where to promote her upcoming book, by publishing book extracts and articles. She also wanted the possibility to quickly switch the language of the website, and the ability to keep her public informed by subscribing to her newsletter. A future version of the blog will also include the possibility to stream her podcast series from the website as also accessing directly her online courses.",
    stack: [
      "WordPress",
      "Polyglot",
      "Mailchimp",
      "YOAST SEO",
      "Google Analytics",
    ],
  },
];

export default projects;
