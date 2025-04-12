import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

const Quiz = () => {
  return (
    <div className="mx-30 px-15 py-5 bg-white border border-gray-300 rounded-lg flex flex-col gap-14">
      {/* UpperPart  */}
      <div className="flex justify-between">
        <h3 className="text-2xl">0:15</h3>
        <Button variant={"outline"} className="text-lg cursor-pointer">
          Quit
        </Button>
      </div>

      <h3 className="text-xl text-gray-700 text-center">
        Select the missing words in the correct order
      </h3>

      <div>
        <h2 className="text-2xl text-gray-900 px-15 leading-14">
          The _____________ implementation of smart city technologies
          _____________ urban efficiency and sustainability, _____________
          quality of life for residents and _____________ a model for future
          urban development.
        </h2>
      </div>

      <div className="flex justify-center gap-4">
        {["Enhancing", "Improved", "Providing", "Widespread"].map(
          (text, index) => (
            <Button variant={"outline"} key={index} className="cursor-pointer">
              {text}
            </Button>
          )
        )}
      </div>

      <div className="flex justify-end w-full">
        <Button variant="outline" size="lg" className="cursor-pointer">
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default Quiz;
