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
     question: "What's your favorite color?",
     options: [
       { text: "Blue", value: "White" },
       { text: "Red", value: "Orange" },
       { text: "Green", value: "Grey" },
       { text: "Purple", value: "Tux" },
     ],
   },
   {
     question: "Meow?",
     options: [
       { text: "mew", value: "White" },
       { text: "MEOW!", value: "Orange" },
       { text: "Meowwww", value: "Grey" },
       { text: "Meow~", value: "Tux" },
     ],
   },
 ];
 