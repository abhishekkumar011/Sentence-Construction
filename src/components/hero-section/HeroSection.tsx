import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="">
      {/* Navbar */}
      <div className="shadow-md h-[64px] flex justify-between items-center px-20">
        <div className=""></div>
        <h1 className="text-xl font-medium">Sentence Construction</h1>
        <div>
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.5 25.625C30.5 25.3283 30.588 25.0383 30.7528 24.7916C30.9176 24.545 31.1519 24.3527 31.426 24.2392C31.7001 24.1256 32.0017 24.0959 32.2926 24.1538C32.5836 24.2117 32.8509 24.3546 33.0607 24.5643C33.2704 24.7741 33.4133 25.0414 33.4712 25.3324C33.5291 25.6233 33.4994 25.9249 33.3858 26.199C33.2723 26.4731 33.08 26.7074 32.8334 26.8722C32.5867 27.037 32.2967 27.125 32 27.125C31.6022 27.125 31.2206 26.967 30.9393 26.6857C30.658 26.4044 30.5 26.0228 30.5 25.625ZM32 30.5C31.7033 30.5 31.4133 30.588 31.1666 30.7528C30.92 30.9176 30.7277 31.1519 30.6142 31.426C30.5006 31.7001 30.4709 32.0017 30.5288 32.2926C30.5867 32.5836 30.7296 32.8509 30.9393 33.0607C31.1491 33.2704 31.4164 33.4133 31.7074 33.4712C31.9983 33.5291 32.2999 33.4994 32.574 33.3858C32.8481 33.2723 33.0824 33.08 33.2472 32.8334C33.412 32.5867 33.5 32.2967 33.5 32C33.5 31.6022 33.342 31.2206 33.0607 30.9393C32.7794 30.658 32.3978 30.5 32 30.5ZM32 36.875C31.7033 36.875 31.4133 36.963 31.1666 37.1278C30.92 37.2926 30.7277 37.5269 30.6142 37.801C30.5006 38.0751 30.4709 38.3767 30.5288 38.6676C30.5867 38.9586 30.7296 39.2259 30.9393 39.4357C31.1491 39.6454 31.4164 39.7883 31.7074 39.8462C31.9983 39.9041 32.2999 39.8744 32.574 39.7608C32.8481 39.6473 33.0824 39.455 33.2472 39.2084C33.412 38.9617 33.5 38.6717 33.5 38.375C33.5 37.9772 33.342 37.5956 33.0607 37.3143C32.7794 37.033 32.3978 36.875 32 36.875Z"
              fill="#2A2D2D"
            />
          </svg>
        </div>
      </div>

      {/* Center Part */}
      <div className="flex items-center justify-center h-[calc(100vh-64px)]">
        <div className="w-lg text-center items-center flex flex-col gap-16">
          <div className="flex flex-col gap-8 items-center">
            <svg
              width="55"
              height="45"
              viewBox="0 0 55 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 12H33.5V18H0.5V12ZM0.5 6H33.5V0H0.5V6ZM0.5 30H21.5V24H0.5V30ZM45.53 20.61L47.66 18.48C48.83 17.31 50.72 17.31 51.89 18.48L54.02 20.61C55.19 21.78 55.19 23.67 54.02 24.84L51.89 26.97L45.53 20.61ZM43.4 22.74L27.5 38.64V45H33.86L49.76 29.1L43.4 22.74Z"
                fill="#7C8181"
              />
            </svg>

            <div className="flex flex-col gap-3">
              <h1 className="text-4xl">Sentence Construction</h1>
              <p className="text-gray-700">
                Select the correct words to complete the sentence by arranging
                the provided options in the right order.
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-8 w-full">
            <div className="border-r-2 border-gray-200 pr-10 flex flex-col gap-4">
              <h4 className="text-lg">Time Per Question</h4>
              <p>30 Sec</p>
            </div>

            <div className="border-r-2 border-gray-200 pr-10 flex flex-col gap-4"> 
              <h4 className="text-lg">Total Question</h4>
              <p>10</p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-lg">Coins</h4>
              <p>🪙 0</p>
            </div>
          </div>

          {/* buttons */}
          <div className="flex gap-4">
            <Button variant={"outline"} className="border-2 border-primary text-primary px-10 py-2.5 cursor-pointer">Back</Button>
            <Button className="border-2 text-white px-10 py-2.5 cursor-pointer">Start</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
