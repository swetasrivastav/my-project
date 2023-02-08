import React from "react";
import Image from "next/image";
const PortFolio = () => {
  return (
    <div className="max-w-[70%] mx-auto py-16 text-center">
      <h1 className="font-bold text-2xl p-4"> Travel Photos</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 md:gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image
            src="https://images.unsplash.com/photo-1414542563971-94513793d046?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="serene"
            layout="responsive"
            width="677"
            height="451"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1420802498636-9d647b43d2eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
            alt="serene"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1581700904289-4035b68a5e02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
            alt="serene"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1633110067105-7d5bc9ee4c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
            alt="serene"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1619262335898-62af51887dc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
            alt="serene"
          />
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
