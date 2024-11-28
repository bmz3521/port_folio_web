const ContentLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row py-16 px-8">
      {/* ด้านซ้าย - รูปภาพ */}
      <div className="w-full lg:w-2/5 mb-8 lg:mb-0">
        <img
          src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.6435-9/78604558_3260307624010612_5993925842831409152_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=0SlrduM78kkQ7kNvgEIIWdr&_nc_zt=23&_nc_ht=scontent.fbkk13-2.fna&_nc_gid=ADtxzeW-BVzMgsyi5Y21c0-&oh=00_AYALnU6yRQ8w0M9K7H2CiYj_GxpvzrUvrJQT3Sb6WSfrpA&oe=676FB49D"
          alt="Image Description"
          className="w-full h-auto rounded-3xl shadow-lg border-4 border-transparent hover:gradient-border-animation"
        />
      </div>

      {/* ด้านขวา - ข้อความ */}
      <div className="w-full lg:w-3/5 lg:pl-8 flex items-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-800 mb-4">
            CHARACTER INFO
          </h2>
          <p className="text-base sm:text-lg text-600 leading-relaxed mb-6">
            Motivated creative thinker with high intention to apply
            broad knowledge and passion in designing developing and implementing
            application to create spectacular outcomes to the world of modern
            technology. Fast learner and willing to learn new skill stack Developer
            for further improvement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentLayout;
