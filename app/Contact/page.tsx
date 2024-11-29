"use client";

import PageWrapper from "../page-wrapper";

const ContactPage = () => {
  return (
    <PageWrapper>
      <div className="px-6">
        <h1 className="text-3xl font-extrabold text-center text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text mb-10">
          Contact Me
        </h1>
        <div className="lg:bg-white dark:bg-zinc-800 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6  dark:text-zinc-200">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="text-xl font-semibold">📱 Cell:</span>
              <span className="text-lg text-blue-600 dark:text-zinc-200">093-378-8230</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xl font-semibold dark:text-zinc-100">📧 Email:</span>
              <a
                href="mailto:anurak.milo.engineer@gmail.com"
                className="text-lg text-blue-600 dark:text-blue-500 hover:underline"
              >
                anurak.milo.engineer@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xl text-gray-700 dark:text-zinc-100 font-semibold">🔗 LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/anurak-kiwphukiaw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-600 hover:underline"
              >
                anurak-kiwphukiaw
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ContactPage;
