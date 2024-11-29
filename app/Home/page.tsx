"use client"

import { useEffect } from "react";
import PageWrapper from "../page-wrapper";
import Image from "next/image";
import { collection, getDocs, doc, setDoc, query, where } from 'firebase/firestore';
import { db } from '../../utils/firebase';

const url = 'https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.6435-9/78604558_3260307624010612_5993925842831409152_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=0SlrduM78kkQ7kNvgEIIWdr&_nc_zt=23&_nc_ht=scontent.fbkk13-2.fna&_nc_gid=ADtxzeW-BVzMgsyi5Y21c0-&oh=00_AYALnU6yRQ8w0M9K7H2CiYj_GxpvzrUvrJQT3Sb6WSfrpA&oe=676FB49D';

const HomePage = () => {

  useEffect(() => {
    const logVisit = async () => {
      const ip = await getClientIP(); // Get the client's IP
      const visitsRef = collection(db, 'visits');
      const q = query(visitsRef, where('ip', '==', ip));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        // If IP does not exist in the database
        await setDoc(doc(visitsRef), {
          ip,
          visitCount: 1
        });
      } else {
        // If IP already exists in the database, update visitCount
        querySnapshot.forEach(async (docSnapshot) => {
          const docRef = doc(db, 'visits', docSnapshot.id); // Get reference to the specific document
          await setDoc(docRef, {
            ip,
            visitCount: docSnapshot.data().visitCount + 1 // Access visitCount data correctly
          });
        });
      }
    };

    logVisit();
  }, []);

  const getClientIP = async () => {
    // Use a public API or similar to get the client's IP
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  };

  return (
    <PageWrapper>
      <div className="flex flex-col lg:flex-row py-16 px-8">
        {/* ด้านซ้าย - รูปภาพ */}
        <div className="w-full lg:w-2/5 mb-8 lg:mb-0">
          <Image
            src={url}
            width={500}
            height={500}
            alt="Milo Anurak"
            priority
            className="w-full h-auto rounded-3xl shadow-lg border-4 border-transparent hover:gradient-border-animation"
          />
        </div>

        {/* ด้านขวา - ข้อความ */}
        <div className="w-full lg:w-3/5 lg:pl-8 flex items-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-800 mb-4 lg:text-cyan-700 dark:text-cyan-400">
              CHARACTER INFO
            </h2>
            <p className="lg:text-gray-600 dark:text-gray-300 text-base sm:text-lg text-600 leading-relaxed mb-6">
              Motivated creative thinker with high intention to apply broad
              knowledge and passion in designing developing and implementing
              application to create spectacular outcomes to the world of modern
              technology. Fast learner and willing to learn new skill stack
              Developer for further improvement.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
export default HomePage;
