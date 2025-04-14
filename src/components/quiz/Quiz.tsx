import axios from "axios";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { IQuizResult } from "@/types/QuizData";
import { useNavigate } from "react-router-dom";

interface IQuestion {
  questionId: string;
  question: string;
  questionType: string;
  answerType: string;
  options: string[];
  correctAnswer: string[];
}

const Quiz = () => {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([
    "",
    "",
    "",
    "",
  ]);
  const [timer, setTimer] = useState(30);
  const [quizResults, setQuizResults] = useState<IQuizResult[]>([]);

  const navigate = useNavigate();

  //function to fetch questions
  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_QUIZ_URL);
        setQuestions(response.data?.questions);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching question: ", error);
      }
    };
    fetchQuestion();
  }, []);

  //Reset Function
  useEffect(() => {
    setSelectedAnswers(["", "", "", ""]);
    setTimer(30);
  }, [currentIndex]);

  useEffect(() => {
    if (timer === 0) {
      handleNext();
      return;
    }

    const countdown = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    //Clear countdown
    return () => clearInterval(countdown);
  }, [timer]);

  if (loading || questions.length === 0) {
    return <div className="text-center p-4">Loading...</div>;
  }

  const totalQuestion = questions.length;
  const currentQues = questions[currentIndex];

  const handleNext = () => {
    //current question ka result
    const result: IQuizResult = {
      questionId: currentQues.questionId,
      question: currentQues.question,
      userAnswer: selectedAnswers,
      correctAnswer: currentQues.correctAnswer,
      isCorrect:
        JSON.stringify(selectedAnswers) ===
        JSON.stringify(currentQues.correctAnswer),
    };

    const updatedResults = [...quizResults, result];

    if (currentIndex < totalQuestion - 1) {
      setQuizResults(updatedResults);
      setCurrentIndex((prev) => prev + 1);
    } else {
      //Kitna answer correct hai
      const correctAnswers = updatedResults.filter(
        (res) => res.isCorrect
      ).length;
      const score = Math.round((correctAnswers / totalQuestion) * 100);

      navigate("/result", {
        state: {
          results: updatedResults,
          score,
        },
      });
    }
  };

  //Ye function option ko select kr ke question mai fill kr rha hai
  const handleSelect = (option: string) => {
    setSelectedAnswers((prev) => {
      const newAnswers = [...prev];
      const alreadyChosen = newAnswers.indexOf(option);

      if (alreadyChosen !== -1) {
        newAnswers[alreadyChosen] = "";
      } else {
        const emptyBlank = newAnswers.indexOf("");
        if (emptyBlank !== -1) {
          newAnswers[emptyBlank] = option;
        }
      }

      return newAnswers;
    });
  };

  const displayQuestion = () => {
    const parts = currentQues.question.split("_____________");
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
  const allSelected = !selectedAnswers.includes("");

  return (
    <div className="px-5 md:mx-30 md:px-15 py-5 bg-white border border-gray-300 rounded-lg flex flex-col gap-14">
      <div className="flex justify-between">
        <h3 className="text-2xl font-semibold text-red-600">⏱ {timer}s</h3>
        <div className="text-xl textg-gray-700">
          {currentIndex + 1} of {totalQuestion}
        </div>
        <Button
          variant={"outline"}
          className="text-lg cursor-pointer"
          onClick={() => navigate("/")}
        >
          Quit
        </Button>
      </div>

      <h3 className="text-xl text-gray-700 text-center">
        Select the missing words in the correct order
      </h3>

      <div>
        <h2 className="px-5 text-2xl text-gray-900 md:px-15 leading-14">
          {displayQuestion()}
        </h2>
      </div>

      <div className="flex justify-center gap-4 flex-wrap">
        {currentQues.options.map((option, index) => (
          <Button
            variant={isAnswerSelected(option) ? "default" : "outline"}
            key={index}
            className={`cursor-pointer ${
              isAnswerSelected(option) ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleSelect(option)}
          >
            {option}
          </Button>
        ))}
      </div>

      <div className="flex justify-end w-full">
        <Button
          variant="outline"
          size="lg"
          className={`cursor-pointer ${
            allSelected ? "bg-primary text-white" : ""
          }`}
          onClick={handleNext}
          disabled={!allSelected}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default Quiz;
