import { Badge } from "../ui/badge";

const AnswerCard = () => {
  return (
    <div className="w-2xl border rounded-lg shadow-md">
      {/* upper Div  */}
      <div className="flex flex-col gap-3 p-4">
        <div className="flex justify-between">
          <Badge className="bg-[#F0F0F0] text-gray-600 text-sm">Prompt</Badge>
          <p>1/10</p>
        </div>

        <p className="text-gray-700">
          The cat chased the mouse across the yard, leaping over obstacles along
          the way.
        </p>
      </div>

      {/* Lower Div  */}
      <div className="bg-[#F6F9F9] flex flex-col gap-3 p-4">
        <div className="flex gap-5">
          <p className="text-gray-600">Your Response</p>
          <Badge className="bg-green-100 text-green-500 text-sm">Correct</Badge>
        </div>

        <p className="text-gray-700">
          The cat chased the mouse across the yard, leaping over obstacles along
          the way.
        </p>
      </div>
    </div>
  );
};

export default AnswerCard;
