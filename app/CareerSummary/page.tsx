"use client";

import PageWrapper from "../page-wrapper";

const PortfolioPage = () => {
  const portfolioItems = [
    {
      title: "Fullstack Developer (Contract) - CURRENT",
      company: "Neversitup .Co .Ltd",
      date: "Nov 2023 - Present",
      description: [
        "Developed and maintained the Kingpower brand website using NextJS.",
        "Developed Chanel Content page HTML and uploaded to S3 AWS.",
      ],
      technologies: "ReactJS, NextJS, NodeJS",
    },
    {
      title: "Mobile Developer (Contract 3 months)",
      company: "Alyssa Global .Co .Ltd",
      date: "Aug 2023 - Oct 2023",
      description: [
        "Developed and optimized React Native applications.",
        "Deployed on iOS and Android platforms.",
        "Developed API using NestJS, data migration, and patient info website.",
      ],
      technologies: "React Native, NestJS",
    },
    {
      title: "Mobile Developer (Freelancing)",
      company: "Trinket Inc.",
      date: "May 2023 - Jul 2023",
      description: [
        "Developed social media platform using React Native and Expo.",
        "Integrated Getstream chat.",
        "Deployed apps on iOS App Store and Google Play.",
      ],
      technologies: "React Native, Expo, Getstream, Fastlane",
    },
    {
      title: "Software Engineer",
      company: "Ever Medical Technologies",
      date: "May 2021 - Feb 2023",
      description: [
        "Developed software solutions for telemedicine using Twilio Video Web-RTC.",
        "Created APIs using Loopback.",
        "Integrated Firebase messaging and chat.",
        "Worked with ReactJS and React Native for app and web development.",
      ],
      technologies: "React Native, ReactJS, NodeJS, Twilio, Firebase",
    },
    {
      title: "Software Developer (.NET Core MVC and React)",
      company: "Online Asset Co. Ltd.",
      date: "Jul 2019 - Apr 2021",
      description: [
        "Developed software solutions using .NET Core MVC.",
        "Created and tested various software products.",
        "Assisted in server setup and configurations.",
      ],
      technologies: ".NET Core MVC, ReactJS",
    },
    {
      title: "Graphic Designer and Website Administrator (Intern)",
      company: "Heroleads Thailand",
      date: "Feb 2019 - Apr 2019",
      description: [
        "Designed graphics, videos, and banners.",
        "Maintained corporate website.",
        "Developed API project TSFC using NodeJS.",
      ],
      technologies: "NodeJS",
    },
  ];

  return (
    <PageWrapper>
      <div className="py-10">
        <h1 className="text-3xl font-extrabold text-center text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text mb-10">
          Career summary
        </h1>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="light:bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold lg:text-gray-800 dark:text-white mb-2">
                {item.title}
              </h2>
              <p className="text-lg lg:text-gray-600 dark:text-gray-100 mb-2">
                {item.company} | {item.date}
              </p>
              <div className="lg:text-gray-600 dark:text-gray-300 mb-4">
                <ul className="list-disc pl-6">
                  {item.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
              <p className="font-semibold lg:text-gray-700 dark:text-gray-300">
                Technologies: {item.technologies}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default PortfolioPage;
