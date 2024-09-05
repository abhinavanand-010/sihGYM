  import Header from "./Header";
  // import ToolAndTechStackForm from "../components/ToolAndTechStackForm";
  // import DeveloperCard from "../components/DeveloperCard";
  import FitQuestContainer from "./FitQuestContainer";
  import { Link } from "react-router-dom";
  import rightar from "../Assets/materialsymbolsarrowrightalt.png";
  import mfigure from "../Assets/figure.png";
  
  
  const HomePage = () => {
    return (
      <>
      <Header />
      <div className="relative bg-white w-screen h-[1384px] text-center text-[14.34px] text-black font-leading-tight-text-sm-font-normal">
        <div className="absolute top-[5px] left-[calc(50%_-_608.5px)] h-[1284px] flex flex-col items-center justify-center gap-[34.42px]">
          <div className="rounded-[71.7px] overflow-hidden flex flex-row py-[7.170467853546143px] px-[14.340935707092285px] items-start justify-start border-[0.7px] border-solid border-white">
            <div className="relative leading-[150%] uppercase">
              Catalysing Change
            </div>
          </div>
          <div className="relative w-[1208px] h-[252px] text-[114.73px]">
            <div className="movingBg" /> 
            <div className="absolute top-[0px] left-[0px] tracking-[-0.02em] leading-[110%] inline-block w-[1208px] z-10">
            <span className="font-extralight">
              Your Path to be
              </span>
              <b>  {`Healthier, Stronger `}</b>
              
            </div>
          </div>
          <div className="relative text-[25.22px] leading-[150%] inline-block w-[1037.1px] higherZIndex">
            FitCoach is an fitness solution that provides personalized
            training regimes
          </div>
          <div className="rounded-[143.41px] bg-white flex flex-row py-[17.209121704101562px] px-[28.68187141418457px] items-center justify-center gap-[11.47px] text-left text-[22.95px] text-black">
            <img
              className="relative w-[28.68px] h-[28.68px] overflow-hidden shrink-0 hidden"
              alt=""
              src="../Assests/fire.svg"
            />
            <div className="relative leading-[150%] font-medium higherZIndex">
              <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                Let’s Explore
              </Link>
            </div>
            <img
              className="relative w-[28.68px] h-[28.68px] overflow-hidden shrink-0 hidden"
              alt=""
              src="../Assets/fire1.svg"
            />
            <img
              className="relative w-[44.46px] h-[34.42px] overflow-hidden shrink-0"
              alt=""
              src={rightar}
            />
          </div>
          <div className="h-[552px] flex flex-col items-center justify-center">
            <img
              className="relative rounded-[16.49px] w-[874.5px] h-[491.61px] object-fit"
              alt=""
              src={mfigure}
            />
          </div>
          <div className="text-4xl font-bold ">
            Want the perfect diet for you 
              <a href="/diet" style={{textDecoration: 'none', color: 'black'}}>➡️</a>
          </div>
          
        </div> 
        <div>        
        </div> 
      </div>
      <FitQuestContainer />
      </>
      
    );
  };

  export default HomePage;
