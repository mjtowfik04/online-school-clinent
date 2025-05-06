const Features = () => {
  const features = [
    {
      icon: "/icons/elementor.png",
      title: "Elementor Page",
      subtitle: "Builder",
    },
    {
      icon: "/icons/wpml.png",
      title: "Support ",
      subtitle: "24 Hour",
    },
    {
      icon: "/icons/video-doc.png",
      title: "Video",
      subtitle: "Documentation",
    },
    {
      icon: "/icons/colors.png",
      title: "Help Desk",
      subtitle: "Option",
    },
    {
      icon: "/icons/support.png",
      title: "Best Support Team",
      subtitle: "",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white hover:bg-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex items-center mb-8">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 w-full">
            Exclusive Features
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full p-8 shadow-lg w-32 h-32 flex items-center justify-center mb-4 transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:rotate-6">
                <img
                  src={feature.icon || "/placeholder.svg"}
                  alt={feature.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-800">{feature.title}</p>
                <p className="text-sm text-gray-600">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
