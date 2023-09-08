function checkAnswer() {
  const selectedAnswer = document.querySelector('input[name="q1"]:checked').value
  const correctAnswer = 'Member'
  
  if (selectedAnswer === correctAnswer) {
    document.getElementById('result').textContent = 'Hi, you are a member!'
  } else {
    document.getElementById('result').textContent = 'Hi, you are an agent!'
  }
}


