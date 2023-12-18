import Image from "next/image";
import homePageVector from "@/public/assets/hero.svg";
import { IoSpeedometerOutline } from "react-icons/io5";
import Button from "@/components/Button";
import TransitionEffect from "@/components/TransitionEffect";
const HomePage = () => {
  return (
    <div className="w-full lg:h-[70vh] p-3">
      <TransitionEffect />
      <div className="container mx-auto w-full h-full">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full gap-16 lg:gap-28 bg-primary rounded-tr-[4rem] rounded-tl-[4rem] lg:rounded-[8rem] px-10">
          <div className="flex flex-col items-center lg:items-start gap-5 lg:gap-10">
            <h2 className="text-background text-center lg:text-start  lg:leading-[4rem] mt-5 lg:mt-0">
              Helping with mental health and family issues
            </h2>

            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="flex flex-col items-center gap-2">
                <IoSpeedometerOutline size={40} className="text-background" />
                <p className="font-bold">Physical Counselling</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <IoSpeedometerOutline size={40} className="text-background" />
                <p className="font-bold">Strong community</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <IoSpeedometerOutline size={40} className="text-background" />
                <p className="font-bold">Studying Modules</p>
              </div>
            </div>

            <Button className="lg:w-[15rem] bg-secondary hover:bg-primary border border-secondary hover:text-secondary">Join Our Community</Button>
          </div>

          <div>
            <Image
              src={homePageVector}
              alt="homePageVector"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
