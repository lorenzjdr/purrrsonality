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
       { text: "read", value: "bsh" },
       { text: "work out", value: "calico" },
       { text: "hang with friends", value: "bombay" },
       { text: "nap", value: "ragdoll" },
     ],
   },
   {
    question: "Meow?",
    options: [
      { text: "meow", value: "bsh" },
      { text: "MEOW", value: "calico" },
      { text: "meoooow", value: "bombay" },
      { text: "mew", value: "ragdoll" },
    ],
  },
  {
    question: "You have a big test coming up how do you prepare?",
    options: [
      { text: "create a study plan", value: "bsh" },
      { text: "cram the night before", value: "calico" },
      { text: "study with friends", value: "bombay" },
      { text: "study a bit then nap", value: "ragdoll" },
    ],
  },
  {
    question: "You're at a party what do you do?",
    options: [
      { text: "stay for a bit to be polite then leave", value: "bsh" },
      { text: "PARTY!", value: "calico" },
      { text: "dance with friends", value: "bombay" },
      { text: "not going im in bed by 8", value: "ragdoll" },
    ],
  },
  {
    question: "pick one",
    options: [
      { text: "₍˄·͈༝·͈˄₎◞ ̑̑", value: "bsh" },
      { text: "≽ܫ≼", value: "calico" },
      { text: "₊˚⊹♡ ᓚ₍ ^. .^₎", value: "bombay" },
      { text: "ᓚᘏᗢ", value: "ragdoll" },
    ],
  }
 ];
 