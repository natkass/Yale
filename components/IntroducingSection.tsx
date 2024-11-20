// *********************
// Role of the component: IntroducingSection with the text "Introducing Singitronic"
// Name of the component: IntroducingSection.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <IntroducingSection />
// Input parameters: no input parameters
// Output: Section with the text "Introducing Singitronic" and button
// *********************

import Link from "next/link";
import React from "react";

const IntroducingSection = () => {
  return (
    <div className="py-20 pt-24 bg-gradient-to-l from-white to-zinc-900">
      <div className="text-center flex flex-col gap-y-5 items-center">
        <h2 className="text-neutral-200 text-8xl font-extrabold text-center mb-2 max-md:text-6xl max-[480px]:text-4xl">
          INTRODUCING <br /> <span className="text-black">YA</span><span className="text-orange-600">LE</span>
        </h2>
        <div>
          <p className="text-stone-200 text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
            Buy the latest machinery.
          </p>
          <p className="text-stone-200 text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
            The best machinery for construction entusiast.
          </p>
          <Link href="/shop" className="block text-stone-200 bg-slate-500 font-bold px-12 py-3 text-xl hover:bg-gray-100 w-96 mt-2  max-md:text-lg max-md:w-72 max-[480px]:w-60 mx-auto">
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroducingSection;
