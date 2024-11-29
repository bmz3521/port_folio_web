"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PageWrapper from "../page-wrapper";

const techStack = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
      { name: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" },
      { name: "HTML5", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" },
      { name: "CSS", logo: "https://img.icons8.com/fluent/200/css3.png" },
      { name: "SASS", logo: "https://miro.medium.com/v2/resize:fit:600/1*LKaM6rFUCeB-O0oo0kowoQ.png" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "ReactJS", logo: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" },
      { name: "React Native", logo: "https://www.cdnlogo.com/logos/r/18/react-native.svg" },
      { name: "NextJS", logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png" },
    ],
  },
  {
    category: "State Management",
    items: [
      { name: "Redux", logo: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" },
      { name: "Redux Saga", logo: "https://cdn.worldvectorlogo.com/logos/redux-saga.svg" },
      { name: "Redux Thunk", logo: "https://innostax.com/wp-content/uploads/2024/03/redux_thunklogo.png" },
      { name: "MobX", logo: "https://static-00.iconduck.com/assets.00/mobx-icon-256x256-3fcjj750.png" },
      { name: "Zustand", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHj4UwTW4ANSlNjzQOiiOqfDa6kal9RpF0A&s" },
    ],
  },
];

const StackPage = () => {
  return (
    <PageWrapper>
      <h1 className="text-3xl font-extrabold text-center text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text mb-10">
        My Tech Stack
      </h1>
      {techStack.map((category) => (
        <div key={category.category} className="mb-5">
          <h2 className="text-2xl font-semibold mb-6">
            {category.category}
          </h2>
          <Swiper
            spaceBetween={1} // ลดระยะห่างระหว่างการ์ด
            slidesPerView={5}
            loop={false}
            className="swiper-container"
          >
            {category.items.map((tech) => (
              <SwiperSlide key={tech.name} className="flex justify-center pr-4">
                <div className="mb-4 light:bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-md w-30 h-28 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300 ease-in-out">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="rounded-xl w-14 h-14 mb-2 object-contain"
                  />
                  <h3 className="text-sm font-medium lg:text-gray-700 dark:text-white">
                    {tech.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </PageWrapper>
  );
};

export default StackPage;
