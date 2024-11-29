"use client";

import PageWrapper from "../page-wrapper";

const ContactPage = () => {
  return (
    <PageWrapper>
      <div className="px-4 sm:px-6 lg:px-8 max-w-3xl lg:w-svw py-4">
        <h1 className="text-3xl font-extrabold text-center text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text mb-8 sm:mb-10">
          Contact Me
        </h1>
        <div className="lg:bg-white dark:bg-zinc-800 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 dark:text-zinc-200 text-center">
            Get in Touch
          </h2>
          <div className="space-y-6 ">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-5">
              <span className="text-lg sm:text-xl font-semibold">📱 Cell:</span>
              <span className="text-lg sm:text-xl text-blue-600 dark:text-zinc-200 text-center sm:text-left">
                093-378-8230
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-5">
              <span className="text-lg sm:text-xl font-semibold dark:text-zinc-100">
                📧 Email:
              </span>
              <a
                href="mailto:anurak.milo.engineer@gmail.com"
                className="text-lg sm:text-xl text-blue-600 dark:text-blue-500 hover:underline text-center sm:text-left"
              >
                anurak.milo.engineer@gmail.com
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-5">
              <span className="text-lg sm:text-xl font-semibold dark:text-zinc-100">
                🔗 LinkedIn:
              </span>
              <a
                href="https://www.linkedin.com/in/anurak-kiwphukiaw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl text-blue-600 hover:underline text-center sm:text-left"
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
