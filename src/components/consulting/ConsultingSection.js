import React from "react";

const ConsultingSection = () => {
  const services = [
    { id: 1, title: "Idea", subtitle: "Generate", clipClass: "clip-path-[polygon(0%_10%,100%_0%,100%_100%,0%_100%)]" },
    { id: 2, title: "System", subtitle: "Design", clipClass: "clip-path-[polygon(0%_0%,100%_10%,100%_100%,0%_100%)]" },
    { id: 3, title: "24/7", subtitle: "Support", clipClass: "" },
    { id: 4, title: "Sales", subtitle: "Generate", clipClass: "" },
  ];

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-cover bg-no-repeat py-12 px-4" style={{backgroundImage: "url('/static/media/service-bg.png')", backgroundSize: "120%", backgroundPosition: "-200px 0"}}>
      <div className="w-full md:w-4/5">
        <section className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`bg-white p-5 flex flex-col justify-center items-center h-48 text-center rounded-xl shadow-lg transition-transform hover:scale-105 ${
                  index === 0 ? 'md:clip-path-[polygon(0%_10%,100%_0%,100%_100%,0%_100%)]' :
                  index === 1 ? 'md:clip-path-[polygon(0%_0%,100%_10%,100%_100%,0%_100%)]' : ''
                }`}
              >
                <div
                  className="text-white text-lg font-bold w-14 h-12 flex justify-center items-center bg-cover bg-center"
                  style={{backgroundImage: "url('/static/media/process.png')"}}
                >
                  {service.id}
                </div>
                <h3 className="text-lg mt-3">
                  <span className="text-custom-red font-bold">{service.title}</span>{" "}
                  {service.subtitle}
                </h3>
                <p className="text-sm text-gray-600 mt-2">Appropriately enhance data centered innovation</p>
              </div>
            ))}
          </div>

          <div className="max-w-lg flex flex-col gap-5 text-white">
            <h2 className="text-2xl md:text-3xl font-bold">
              The <span className="font-bold">Fastest</span> Way To Achieve
              Technology <span className="text-custom-red font-bold">Consulting</span>
            </h2>
            <p className="text-base md:text-lg">
              For Choose <span className="text-custom-red font-bold">SW DEV</span> Before
              know who we are?
            </p>
            <p className="my-3">
              Monotonectally brand worldwide value before in seamless process
              data...
            </p>
            <button className="bg-custom-red text-white px-5 py-2 border-none rounded-full cursor-pointer font-bold flex items-center gap-2 hover:opacity-90 transition w-fit">
              More About <span className="text-xl">+</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConsultingSection;
