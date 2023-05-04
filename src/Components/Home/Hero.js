import React from "react";
const Hero = () => {
  return (
    <div>
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
        backgroundPosition: "50%",
        backgroundImage:"url(https://source.unsplash.com/1200x400/?jobs)",
        height: "500px"
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{backgroundColor: "rgba(0, 0, 0, 0.50)"}}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                If Opportunity Doesn't knock<br />
                <span>Build A Door</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
