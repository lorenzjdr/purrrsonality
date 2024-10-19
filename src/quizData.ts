export interface Option {
   text: string;
   value: string;
 }
 
 export interface Question {
   question: string;
   options: Option[];
 }
 
 export const quizData: Question[] = [
   {
     question: "What would you do on a day off?",
     options: [
       { text: "read", value: "british short hair" },
       { text: "work out", value: "calico" },
       { text: "hang with friends", value: "bombay" },
       { text: "nap", value: "maine coon" },
     ],
   },
   {
    question: "Meow?",
    options: [
      { text: "meow", value: "british short hair" },
      { text: "MEOW", value: "calico" },
      { text: "meoooow", value: "bombay" },
      { text: "mew", value: "maine coon" },
    ],
  },
  {
    question: "You have a big test coming up how do you prepare?",
    options: [
      { text: "create a study plan", value: "british short hair" },
      { text: "cram the night before", value: "calico" },
      { text: "study with friends", value: "bombay" },
      { text: "study a bit then nap", value: "maine coon" },
    ],
  },
  {
    question: "You're at a party what do you do?",
    options: [
      { text: "stay for a bit to be polite then leave", value: "british short hair" },
      { text: "PARTY!", value: "calico" },
      { text: "dance with friends", value: "bombay" },
      { text: "not going im in bed by 8", value: "maine coon" },
    ],
  },
  {
    question: "pick one",
    options: [
      { text: "₍˄·͈༝·͈˄₎◞ ̑̑", value: "british short hair" },
      { text: "≽ܫ≼", value: "calico" },
      { text: "₊˚⊹♡ ᓚ₍ ^. .^₎", value: "bombay" },
      { text: "ᓚᘏᗢ", value: "maine coon" },
    ],
  }
 ];
 