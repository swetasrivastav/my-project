import React from "react";
import bg from "../public/bg.svg";

const Hero = () => {
  return (
    <div
      className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover "
      style={{ backgroundImage: bg.svg }}
    >
      {/* OVERLAY */}
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2]  mt-[-10rem] ">
        <h2 className="text-5xl font-bold">myCaptur</h2>
        <p className="py-5 text-xl">Keeping Memories Alive through my lens.</p>
        <button class="px-8 py-2 border ">Button</button>
      </div>
    </div>
  );
};

export default React.memo(Hero);
