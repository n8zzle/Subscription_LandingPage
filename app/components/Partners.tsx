import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <div className="p-10 ">
      <div className="flex gap-8 justify-between">
        <div className="relative">
          <Image
            src="/Partner1.svg"
            className="object-contain w-auto h-auto"
            width={10}
            height={10}
          />
        </div>
        <div className="relative">
          <Image
            src="/Partner2.svg"
            className="object-contain w-auto h-auto"
            width={10}
            height={10}
          />
        </div>
        <div className="relative">
          <Image
            src="/Partner3.svg"
            className="object-contain w-auto h-auto"
            width={10}
            height={10}
          />
        </div>
        <div className="relative">
          <Image
            src="/Partner4.svg"
            className="object-contain w-auto h-auto"
            width={10}
            height={10}
          />
        </div>
        <div className="relative">
          <Image
            src="/Partner5.svg"
            className="object-contain w-auto h-auto"
            width={10}
            height={10}
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
