import axios from "axios";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { IQuestion } from "@/types/QuizData";

const Quiz = () => {
  const [questionData, setQuestionData] = useState<IQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(["","","","",]);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_QUIZ_URL);
        setQuestionData(response.data?.questions);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching question: ", error);
      }
    };
    fetchQuestion();
  }, []);

  useEffect(() => {
    // Reset selected answers when moving to next question
    setSelectedAnswers(["", "", "", ""]);
  }, [currentQuestionIndex]);

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

  const handleOptionClick = (option: string) => {
    setSelectedAnswers((prev) => {
      const newAnswers = [...prev];
      const existingIndex = newAnswers.indexOf(option);

      if (existingIndex !== -1) {
        // If option is already selected, remove it from that position
        newAnswers[existingIndex] = "";
      } else {
        // Find the first empty (null) position and place the option there
        const firstEmptyIndex = newAnswers.indexOf("");
        if (firstEmptyIndex !== -1) {
          newAnswers[firstEmptyIndex] = option;
        }
      }

      return newAnswers;
    });
  };

  const renderQuestionWithBlanks = () => {
    const parts = currentQuestion.question.split("_____________");
    return parts.map((part, index) => (
      <span key={index}>
        {part}
        {index < parts.length - 1 && (
          <span className="mx-2 px-4 py-1 bg-gray-100 rounded">
            {selectedAnswers[index] || "_____________"}
          </span>
        )}
      </span>
    ));
  };

  const isAnswerSelected = (option: string) => selectedAnswers.includes(option);
  const isAllAnswersSelected = selectedAnswers.every((answer) => answer !== "");

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
          {renderQuestionWithBlanks()}
        </h2>
      </div>

      <div className="flex justify-center gap-4 flex-wrap">
        {currentQuestion.options.map((option, index) => (
          <Button
            variant={isAnswerSelected(option) ? "default" : "outline"}
            key={index}
            className={`cursor-pointer ${
              isAnswerSelected(option) ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleOptionClick(option)}
          >
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
          disabled={!isAllAnswersSelected}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default Quiz;
