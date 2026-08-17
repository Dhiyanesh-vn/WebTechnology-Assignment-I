// Q4: Grade calculator
function calculateGrade(average, marks) {

  // A student must score at least 40 in every subject to pass.
  const passed = marks.every(mark => mark >= 40);

  if (!passed) return 'F';

  if (average >= 90) return 'A+';

  if (average >= 80) return 'A';

  if (average >= 70) return 'B';

  if (average >= 60) return 'C';

  return 'D';


}

function calculateResult() {

  const marks = Array.from(document.querySelectorAll('.mark')).map(input => Number(input.value));

  const total = marks.reduce((sum, mark) => sum + mark, 0);

  const average = total / marks.length;

  const grade = calculateGrade(average, marks);

  const status = grade === 'F' ? 'FAIL' : 'PASS';

  document.getElementById('total').textContent = total.toFixed(0);

  document.getElementById('average').textContent = average.toFixed(2);

  document.getElementById('grade').textContent = grade;

  document.getElementById('status').textContent = status;


}

if (document.getElementById('gradeForm')) {

  document.getElementById('gradeForm').addEventListener('submit', event => {
 event.preventDefault();
 calculateResult();
 
}
);

  calculateResult();


}


// Q5: Supermarket billing
function generateBill() {

  let subtotal = 0;

  for (let i = 1;
 i <= 3;
 i++) {

    const quantity = Number(document.getElementById('q' + i).value);

    const price = Number(document.getElementById('p' + i).value);

    const amount = quantity * price;

    document.getElementById('a' + i).textContent = amount.toFixed(2);

    subtotal += amount;

  
}

  // Apply a 10% discount only when the subtotal exceeds ₹2000.
  const discount = subtotal > 2000 ? subtotal * 0.10 : 0;

  const finalAmount = subtotal - discount;

  document.getElementById('subtotal').textContent = subtotal.toFixed(2);

  document.getElementById('discount').textContent = discount.toFixed(2);

  document.getElementById('finalAmount').textContent = finalAmount.toFixed(2);


}

if (document.getElementById('billBtn')) {

  document.getElementById('billBtn').addEventListener('click', generateBill);

  generateBill();


}

