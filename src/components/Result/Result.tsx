import { useLocation, useNavigate } from "react-router-dom";
import AnswerCard from "../AnswerCard/AnswerCard";
import { Button } from "../ui/button";
import { useEffect } from "react";
import { IQuizResult } from "@/types/QuizData";

const Result = () => {
  //This is used to retrive the data when navigate to result page
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home if there's no quiz result data
    if (!location.state) {
      navigate("/");
    }
  }, [location.state, navigate]);

  // Return loading state while checking for data
  if (!location.state) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  const { results, score } = location.state as {
    results: IQuizResult[];
    score: number;
  };

  return (
    <div>
      {/* Navbar */}
      <div className="shadow-md h-[64px] flex justify-center sm:justify-between items-center px-6 sm:px-10 md:px-16 lg:px-20">
        <div className=""></div>
        <h1 className="text-xl font-medium">Sentence Construction</h1>
        <div className="hidden sm:block">
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

      {/* Upper Part  */}
      <div className="flex items-center justify-center my-20">
        <div className="w-2xl">
          <div className="flex flex-col items-center gap-10">
            <div className="w-40 h-40 rounded-full border-4 border-green-700 flex flex-col justify-center items-center gap-1 text-green-700">
              <h1 className="text-5xl font-semibold">{score}</h1>
              <p className="text-md">Overall Score</p>
            </div>

            <p className="text-center text-lg text-gray-700">
              {score >= 90
                ? "Excellent work! You've demonstrated a strong understanding of sentence construction."
                : score >= 70
                ? "Good job! While you've shown good understanding, there's room for improvement."
                : "Keep practicing! Focus on understanding sentence structure and word placement."}
            </p>
            <Button
              variant={"outline"}
              className="cursor-pointer mt-10 border-2 border-primary text-primary px-15"
              onClick={() => navigate("/")}
            >
              Go to Dashboard
            </Button>
            <div className="text-2xl">⬇️</div>
          </div>
        </div>
      </div>

      {/* AnswerCardPart */}
      <div className="flex flex-col items-center justify-center md:gap-28">
        {results.map((result, index) => (
          <AnswerCard
            key={result.questionId}
            result={result}
            questionNumber={index + 1}
            totalQuestions={results.length}
          />
        ))}
      </div>
    </div>
  );
};

export default Result;
