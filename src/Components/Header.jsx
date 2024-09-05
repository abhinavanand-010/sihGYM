//import ButtonSecondary from "./ButtonSecondary";
import logo from '../Assets/logo.png';
//import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="relative top-[0px] left-[calc(50%_-_599.5px)] box-border w-[1200px] h-[95px] flex flex-col py-4 px-0 items-start justify-start text-left text-sm text-black font-leading-tight-text-sm-font-normal border-b-[1px] border-solid border-black rounded-md">
      <div className="relative self-stretch flex flex-row items-center justify-between z-[99] text-5xl text-snow-100">
        <div className="flex flex-row items-center justify-start">
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <img
              className="relative w-[35px] h-[35px] overflow-hidden shrink-0"
              alt="Dumbbell"
              src={logo}
            />
            <div className="relative tracking-[-0.04em] leading-[150%] font-semibold">
              <a href="/" style={{textDecoration: 'none', color: 'black'}}>FitFest</a>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center  text-center text-sm text-black">
          <div className="flex flex-col items-start justify-center">
            <div className="relative leading-[150%]">
              <a href="/bodybuilding" style={{textDecoration: 'none', color: 'black', fontSize: 18, margin:21}}>BodyBulding</a>
              
            </div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="relative leading-[150%]">
              <a href="/Fitness" style={{textDecoration: 'none', color: 'black', fontSize: 18, margin:21}}>Yoga</a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="relative leading-[150%]">
              <a href="/Education" style={{textDecoration: 'none', color: 'black', fontSize: 18, margin:21}}>Educational Blog</a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="relative leading-[150%]">
              <a href="/calculator" style={{textDecoration: 'none', color: 'black', fontSize: 18, margin:21}}>BMI Calculator</a>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Header;
