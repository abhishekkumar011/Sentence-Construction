export interface IQuestion {
  questionId: string;
  question: string;
  questionType: string;
  answerType: string;
  options: string[];
  correctAnswer: string[];
}

export interface IQuizResult {
  questionId: string;
  question: string;
  userAnswer: string[];
  correctAnswer: string[];
  isCorrect: boolean;
}
