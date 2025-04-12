export interface IQuestion {
  questionId: string;
  question: string;
  questionType: string;
  answerType: string;
  options: string[];
  correctAnswer: string[];
}
