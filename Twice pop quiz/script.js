//var questions = [
//  "When was Myoui Mina born?",
//  "What year did Twice debut?",
//  "Who is fake amongst the listed name below?",
//  "one member of Twice is called BLACK SWAN and PENGUIN. which member?",
//  "What does Twice call their fandom?",
//  "FAKE CHECK!",
//  "Choose the real once",
//  "This member of Twice is an only child",
//  "Who is the leader of Twice?"
//];
//var answers = [
//  ["03/24/1997", "03/24/1996", "04/23/1997", "04/23/1998"],
//  ["2000", "2014", "2015", "2010"],
//  ["lance", "jake", "lloyd", "kent"],
//  ["Dahyun", "Obama", "Mina", "Momo"],
//  ["Twisirist", "once", "Trice", "twicefan"],
//  ["lance", "jake", "jake", "random people"],
//  ["lance", "lance", "jake", "lance"],
//  ["Mina", "jeongyeon", "Chaeyoung", "Sana"],
//  ["JYP", "Nayeon", "jihyo", "jennie"]
// ];

var questions = [
  {
    ques: "When was Myoui Mina born?",
    ans: ["03/24/1997", "03/24/1996", "04/23/1997", "04/23/1998"],
    cor: "03/24/1997",
  },
  {
    ques: "What year did Twice debut?",
    ans: ["2000", "2014", "2015", "2010"],
    cor: "2015",
  },
  {
    ques: "Who is fake amongst the listed name below?",
    ans: ["lance", "jake", "lloyd", "kent"],
    cor: "lance",
  },
  {
    ques: "one member of Twice is called BLACK SWAN and PENGUIN. which member?",
    ans: ["Dahyun", "Obama", "Mina", "Momo"],
    cor: "Mina",
  },
  {
    ques: "What does Twice call their fandom?",
    ans: ["Twisirist", "once", "Trice", "twicefan"],
    cor: "once",
  },
  {
    ques: "FAKE CHECK!",
    ans: ["lance", "jake", "jake", "random people"],
    cor: "lance",
  },
  {
    ques: "Choose the real once",
    ans: ["lance", "lance", "jake", "lance"],
    cor: "jake",
  },
  {
    ques: "This member of Twice is an only child",
    ans: ["Mina", "jeongyeon", "Chaeyoung", "Sana"],
    cor: "Sana",
  },
  {
    ques: "Who is the leader of Twice?",
    ans: ["JYP", "Nayeon", "jihyo", "jennie"],
    cor: "jihyo",
  },
];
questions.ans.sort(() => Math.random() - 0.5);
console.log(questions.ans);


function generate(event) {
  document.getElementById("ansques").style.visibility = "visible";
  document.getElementById("five").style.visibility = "hidden";
  document.getElementById(event).style.visibility = "hidden";

  var n = Math.floor(Math.random() * questions.length);

  console.log(n);


  document.getElementById("una").innerHTML = questions[n].ans[0];
  document.getElementById("duwa").innerHTML = questions[n].ans[1];
  document.getElementById("tulo").innerHTML = questions[n].ans[2];
  document.getElementById("upat").innerHTML = questions[n].ans[3];

  document.getElementById("quen").innerHTML = questions[n].ques;

};
