"use client";

import { useEffect } from "react";
import PageWrapper from "../page-wrapper";
import Image from "next/image";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../utils/firebase";
import ProfileImage from '../../asset/image/profile_photo.jpg'
const url = ProfileImage;

const HomePage = () => {
  useEffect(() => {
    const logVisit = async () => {
      const ip = await getClientIP(); // Get the client's IP
      const visitsRef = collection(db, "visits");
      const q = query(visitsRef, where("ip", "==", ip));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        // If IP does not exist in the database
        await setDoc(doc(visitsRef), {
          ip,
          visitCount: 1,
          lastVisit: new Date(),
        });
      } else {
        // If IP already exists in the database, update visitCount
        querySnapshot.forEach(async (docSnapshot) => {
          const docRef = doc(db, "visits", docSnapshot.id); // Get reference to the specific document
          await setDoc(docRef, {
            ip,
            visitCount: docSnapshot.data().visitCount + 1,
            lastVisit: new Date(),
          });
        });
      }
    };

    logVisit();
  }, []);

  const getClientIP = async () => {
    // Use a public API or similar to get the client's IP
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  };

  return (
    <PageWrapper>
      <div className="flex flex-col lg:flex-row justify-between py-16 px-2">
        <div className="w-full lg:w-3/4 flex items-center">
          <div className="max-w-2xl mx-auto">
            <h2
              className="
              text-4xl 
              font-extrabold 
              text-transparent 
              bg-gradient-to-r 
              from-red-400 
              via-red-500 
              to-red-500 
              bg-clip-text 
              hover:animate-none 
              tracking-widest 
              sm:text-6xl 
              mb-4"
            >
              Hello, welcome
            </h2>
            <p
              className="
              font-extrabold 
              text-transparent 
              bg-gradient-to-r 
              from-gray-300 
              via-gray-400 
              to-gray-500 
              bg-clip-text 
              hover:animate-none 
              tracking-widest 
              mb-4
              pr-4  
              text-base 
              sm:text-lg 
              text-600 
              leading-relaxed 
              mb-6"
            >
              {`I'm Motivated creative thinker with high intention to apply broad
              knowledge and passion in designing developing and implementing
              application to create spectacular outcomes to the world of modern
              technology. Fast learner and willing to learn new skill stack
              Developer for further improvement.`}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-2/4 lg:pl-8 mb-8 lg:mb-0">
          <Image
            src={url}
            width={300}
            height={300}
            alt="Milo Anurak"
            priority
            className="w-full h-auto rounded-full shadow-lg border-4 border-transparent hover:gradient-border-animation"
          />
        </div>
      </div>
    </PageWrapper>
  );
};
export default HomePage;
