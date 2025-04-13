import { IAnswerCardProps } from "@/types/QuizData";
import { Badge } from "../ui/badge";

const AnswerCard = ({
  result,
  questionNumber,
  totalQuestions,
}: IAnswerCardProps) => {
  const renderSentenceWithAnswers = (sentence: string, answers: string[]) => {
    const parts = sentence.split("_____________");
    return parts.map((part, index) => (
      <span key={index}>
        {part}
        {index < parts.length - 1 && <span>{answers[index]}</span>}
      </span>
    ));
  };

  return (
    <div className="mx-5 md:mx-0 md:w-2xl border rounded-lg shadow-sm overflow-hidden mb-10">
      {/* upper Div  */}
      <div className="flex flex-col gap-3 p-4">
        <div className="flex justify-between">
          <Badge className="bg-[#F0F0F0] text-gray-600 text-sm">Prompt</Badge>
          <p className="text-sm">
            {questionNumber} / {totalQuestions}
          </p>
        </div>

        <p className="text-gray-700">
          {renderSentenceWithAnswers(result.question, result.correctAnswer)}
        </p>
      </div>

      {/* Lower Div  */}
      <div className="bg-[#F6F9F9] flex flex-col gap-3 p-4">
        <div className="flex gap-5">
          <p className="text-gray-600">Your Response</p>
          <Badge
            className={` text-sm ${
              result.isCorrect
                ? "bg-green-100 text-green-500"
                : "bg-red-100 text-red-500"
            }`}
          >
            {result.isCorrect ? "Correct" : "Incorrect"}
          </Badge>
        </div>

        <p className="text-gray-700">
          {renderSentenceWithAnswers(result.question, result.userAnswer)}
        </p>
      </div>
    </div>
  );
};

export default AnswerCard;
