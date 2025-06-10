// 1. Variables and Functions
const name = "John";
const age = 18;
function greet(user, age) {
  return `Hello, ${user}! You are ${age} years old.`;
}
document.getElementById("greeting").textContent = greet(name, age);

// 2. Arrays and Objects
const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 85 },
  { name: "Charlie", grade: 92 },
];
let studentInfo = students.map(s => `${s.name}: ${s.grade}`).join(" | ");
document.getElementById("student-list").textContent = studentInfo;

// 3. DOM Manipulation Function
function changeText() {
  const target = document.getElementById("dom-target");
  target.textContent = "The text has been changed!";
  target.style.color = "blue";
}
window.changeText = changeText; 

// 4. Event Handling
document.getElementById("showNameBtn").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value;
  document.getElementById("displayName").textContent = `Your name is ${name}`;
});
