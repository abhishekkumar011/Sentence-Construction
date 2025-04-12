import axios from "axios";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { IQuestion } from "@/types/QuizData";

const Quiz = () => {
  const [questionData, setQuestionData] = useState<IQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get("http://localhost:3000/data");
        setQuestionData(response.data?.questions);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching question: ", error);
      }
    };
    fetchQuestion();
  }, []);

  if (loading || !questionData) {
    return <div className="text-center p-4">Loading...</div>;
  }

  const totalQuestion = questionData.length;
  const currentQuestion = questionData[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestion - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      //Go to feedback page or show score
      console.log("Quiz Finished");
    }
  };

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
          {currentQuestion.question}
        </h2>
      </div>

      <div className="flex justify-center gap-4 flex-wrap">
        {currentQuestion.options.map((option, index) => (
          <Button variant={"outline"} key={index} className="cursor-pointer">
            {option}
          </Button>
        ))}
      </div>

      <div className="flex justify-end w-full">
        <Button
          variant="outline"
          size="lg"
          className="cursor-pointer"
          onClick={handleNext}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default Quiz;
