import Image from "next/image";
import oneplatform from "@/public/assets/oneplatform.jpg";
const OnePlatform = () => {
  return (
    <div className="w-full p-3 mt-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h3 className="lg:w-[30rem] text-center text-primary">
            One Platform for all your psycological needs.
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mt-10">
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col items-center lg:items-end">
              <p>Charging Data for the customers</p>
              <p>200 kW - 15 min to 100%</p>
            </div>

            <div className="flex flex-col items-center lg:items-end">
              <p>No. of stations available</p>
              {/* <p>
                2-4 stations currently available at your preferred location.
              </p> */}
            </div>
          </div>

          <div>
            <Image src={oneplatform} alt="vector" />
          </div>

          <div>
            <div className="flex items-center gap-5">
              <div className="flex flex-col items-center lg:items-end">
                <p>Charging Data for the customers</p>
                <p>200 kW - 15 min to 100%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnePlatform;
