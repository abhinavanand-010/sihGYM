import React from "react";
//import { Link } from "react-router-dom";
import dummb from "../Assets/vector6.jpg"
const FitQuestContainer = () => {
  return (
    <div className="relative top-[200px] left bg-black w-screen h-[305px] overflow-hidden text-left text-5xl text-white font-leading-tight-text-sm-font-normal">
      <div className="absolute top-[72px] left-[calc(50%_-_600px)] w-[1200px] flex flex-row items-start justify-between">
        <div className="w-[200px] flex flex-col items-start justify-start gap-[16px]">
          <img
            className="relative w-[52px] h-[36.4px]"
            alt=""
            src={dummb}
          />
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <div className="relative tracking-[-0.04em] leading-[150%] font-semibold">
              
            FitFest
            </div>
            <div className="relative text-base leading-[150%] inline-block w-[497.08px]">
              FitQuest is a fitness website that provide to help
              users achieve their fitness goals.
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[72px] text-sm">
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="relative tracking-[0.08em] uppercase font-semibold">
              Company
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px] text-base text-gray1-300">
              <div className="relative">Blog</div>
              <div className="relative">Careers</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="relative tracking-[0.08em] uppercase font-semibold">
              Services
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px] text-base text-gray1-300">
              <div className="relative">Development</div>
              <div className="relative">Marketing</div>
              <div className="relative">Tokenization</div>
              <div className="relative">{`Consulting & Advisory`}</div>
              <div className="relative">Community Management</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="relative tracking-[0.08em] uppercase font-semibold">
              Legal
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px] text-base text-gray1-300">
              <div className="relative">Terms of Service</div>
              <div className="relative">Privacy Policy</div>
              <div className="relative">Cookies Policy</div>
              <div className="relative">Data Processing</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[308.5px] left-[calc(50%_-_600.5px)] box-border w-[1201px] h-px border-t-[1px] border-solid border-snow-300" />
      <div className="absolute top-[341px] left-[calc(50%_-_600px)] w-[1200px] flex flex-row items-center justify-between text-sm text-gray1-300">
        <div className="relative inline-block w-[297px] shrink-0">
          © 2023 FitFest Inc. All rights reserved.
        </div>
       
      </div>
    </div>
  );
};

export default FitQuestContainer;
