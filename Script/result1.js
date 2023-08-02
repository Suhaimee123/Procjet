
function generateCaesarTable() {
  const offset = parseInt(document.getElementById('shiftInput').value);
  const caesarTable = document.getElementById('caesar-table');
  const originalRow = caesarTable.querySelector('thead tr');
  const shiftedRow = caesarTable.querySelector('tbody tr');
  originalRow.innerHTML = 'Basic ';

  shiftedRow.innerHTML = 'Shifted' ;
  for (let i = 0; i < 26; i++) {
    const originalChar = String.fromCharCode(65 + i);
    const shiftedChar = String.fromCharCode(65 + (i + offset) % 26);
    const originalCell = document.createElement('th');
    originalCell.classList.add('caesar-cell');
    originalCell.innerText = originalChar;
    originalRow.appendChild(originalCell);
    const shiftedCell = document.createElement('td');
    shiftedCell.style.backgroundColor = "#FAC921";
    shiftedCell.classList.add('caesar-cell');
    shiftedCell.innerText = shiftedChar;
    shiftedRow.appendChild(shiftedCell);
  }
  document.getElementById('offset-value').innerText = offset;
}

// Declare the variable displayDecodedResults outside the function to make it accessible to both functions.

function displayDecodedResult(message = '') {
  const inputElement = document.getElementById('monitorInput');
  const decodedMessage = inputElement.value;
  const offset = parseInt(document.getElementById('shiftInput').value);
  let decodedResult = '';

  for (let i = 0; i < decodedMessage.length; i++) {
    const charCode = decodedMessage.charCodeAt(i);
    let decodedChar;

    if (charCode >= 65 && charCode <= 90) {
      decodedChar = String.fromCharCode(65 + ((charCode - 65 - offset + 26) % 26));
    } else if (charCode >= 97 && charCode <= 122) {
      decodedChar = String.fromCharCode(97 + ((charCode - 97 - offset + 26) % 26));
    } else {
      decodedChar = decodedMessage.charAt(i);
    }

    decodedResult += decodedChar;
  }

  if (decodedMessage === '') {
    alert('Please enter an Decoded message before clicking the "Show Decoded Result" button.');
    return;
  }

  // Move this line outside the loop to avoid adding the same message multiple times.
  displayDecodedResults.push(decodedResult);

  const result2Div = document.querySelector('.result2');
  result2Div.innerText = decodedResult; // Change decodedResult to encryptedMessage.

  // Call the checkEncryptedMessage() function after decoding the message.
  checkDecryptedMessage();


  Todolist();

  showQuestion2();
}




function Todolist() {
  const taskInput = document.querySelector(".result2").innerText; // Get the value from the element with class "result2"


    document.querySelector('#tasks').innerHTML += `
    <div class="task">
        <span id="taskname"></span>
          <p>${taskInput} </p>
        

        <button class="delete">
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
  <path d="M5.5 1H8.5C8.77614 1 9 1.22386 9 1.5V2.5H5V1.5C5 1.22386 5.22386 1 5.5 1ZM10 2.5V1.5C10 0.671573 9.32843 0 8.5 0H5.5C4.67157 0 4 0.671573 4 1.5V2.5H1.50566C1.50226 2.49997 1.49885 2.49997 1.49544 2.5H0.5C0.223858 2.5 0 2.72386 0 3C0 3.27614 0.223858 3.5 0.5 3.5H1.0384L1.89116 14.1595C1.97431 15.1989 2.84207 16 3.88479 16H10.1152C11.1579 16 12.0257 15.1989 12.1088 14.1595L12.9616 3.5H13.5C13.7761 3.5 14 3.27614 14 3C14 2.72386 13.7761 2.5 13.5 2.5H12.5046C12.5011 2.49997 12.4977 2.49997 12.4943 2.5H10ZM11.9584 3.5L11.112 14.0797C11.0704 14.5994 10.6366 15 10.1152 15H3.88479C3.36343 15 2.92955 14.5994 2.88798 14.0797L2.0416 3.5H11.9584ZM4.47064 4.50086C4.74631 4.48465 4.98292 4.69497 4.99914 4.97064L5.49914 13.4706C5.51535 13.7463 5.30503 13.9829 5.02936 13.9991C4.7537 14.0154 4.51708 13.805 4.50086 13.5294L4.00086 5.02936C3.98465 4.7537 4.19497 4.51708 4.47064 4.50086ZM9.52936 4.50086C9.80503 4.51708 10.0154 4.7537 9.99914 5.02936L9.49914 13.5294C9.48292 13.805 9.2463 14.0154 8.97064 13.9991C8.69497 13.9829 8.48465 13.7463 8.50086 13.4706L9.00086 4.97064C9.01708 4.69497 9.2537 4.48465 9.52936 4.50086ZM7 4.5C7.27614 4.5 7.5 4.72386 7.5 5V13.5C7.5 13.7761 7.27614 14 7 14C6.72386 14 6.5 13.7761 6.5 13.5V5C6.5 4.72386 6.72386 4.5 7 4.5Z" fill="black"/>
</svg>        </button>
     
        </div>
    `;
    

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function() {
        this.parentNode.remove();
      };
    }
  }

 const Message1 = ['Hitler', 'Boeingraptor', 'Littleboy', 'Fatman', 'Overlord'];

const displayDecodedResults = []; // Declare the array to store decoded messages.

function displayDecodedResult(message = '') {
  const inputElement = document.getElementById('monitorInput');
  const decodedMessage = inputElement.value;
  const offset = parseInt(document.getElementById('shiftInput').value);
  let decodedResult = '';

  for (let i = 0; i < decodedMessage.length; i++) {
    const charCode = decodedMessage.charCodeAt(i);
    let decodedChar;

    if (charCode >= 65 && charCode <= 90) {
      decodedChar = String.fromCharCode(65 + ((charCode - 65 - offset + 26) % 26));
    } else if (charCode >= 97 && charCode <= 122) {
      decodedChar = String.fromCharCode(97 + ((charCode - 97 - offset + 26) % 26));
    } else {
      decodedChar = decodedMessage.charAt(i);
    }

    decodedResult += decodedChar;
  }

  if (decodedMessage === '') {
    alert('Please enter a Decoded message before clicking the "Show Decoded Result" button.');
    return;
  }

  // Move this line outside the loop to avoid adding the same message multiple times.
  displayDecodedResults.push(decodedResult);

  const result2Div = document.querySelector('.result2');
  result2Div.innerText = decodedResult; // Change decodedResult to encryptedMessage.

  // Call the checkEncryptedMessage() function after decoding the message.
  checkDecryptedMessage();

  Todolist();

  showQuestion2();
}

function Todolist() {
  const taskInput = document.querySelector(".result2").innerText; // Get the value from the element with class "result2"

  document.querySelector('#tasks').innerHTML += `
    <div class="task">
        <span id="taskname"></span>
        <p>${taskInput} </p>

        <button class="delete">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
            <path d="M5.5 1H8.5C8.77614 1 9 1.22386 9 1.5V2.5H5V1.5C5 1.22386 5.22386 1 5.5 1ZM10 2.5V1.5C10 0.671573 9.32843 0 8.5 0H5.5C4.67157 0 4 0.671573 4 1.5V2.5H1.50566C1.50226 2.49997 1.49885 2.49997 1.49544 2.5H0.5C0.223858 2.5 0 2.72386 0 3C0 3.27614 0.223858 3.5 0.5 3.5H1.0384L1.89116 14.1595C1.97431 15.1989 2.84207 16 3.88479 16H10.1152C11.1579 16 12.0257 15.1989 12.1088 14.1595L12.9616 3.5H13.5C13.7761 3.5 14 3.27614 14 3C14 2.72386 13.7761 2.5 13.5 2.5H12.5046C12.5011 2.49997 12.4977 2.49997 12.4943 2.5H10ZM11.9584 3.5L11.112 14.0797C11.0704 14.5994 10.6366 15 10.1152 15H3.88479C3.36343 15 2.92955 14.5994 2.88798 14.0797L2.0416 3.5H11.9584ZM4.47064 4.50086C4.74631 4.48465 4.98292 4.69497 4.99914 4.97064L5.49914 13.4706C5.51535 13.7463 5.30503 13.9829 5.02936 13.9991C4.7537 14.0154 4.51708 13.805 4.50086 13.5294L4.00086 5.02936C3.98465 4.7537 4.19497 4.51708 4.47064 4.50086ZM9.52936 4.50086C9.80503 4.51708 10.0154 4.7537 9.99914 5.02936L9.49914 13.5294C9.48292 13.805 9.2463 14.0154 8.97064 13.9991C8.69497 13.9829 8.48465 13.7463 8.50086 13.4706L9.00086 4.97064C9.01708 4.69497 9.2537 4.48465 9.52936 4.50086ZM7 4.5C7.27614 4.5 7.5 4.72386 7.5 5V13.5C7.5 13.7761 7.27614 14 7 14C6.72386 14 6.5 13.7761 6.5 13.5V5C6.5 4.72386 6.72386 4.5 7 4.5Z" fill="black"/>
          </svg>
        </button>
    </div>
  `;

  var current_tasks = document.querySelectorAll(".delete");
  for (var i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function() {
      this.parentNode.remove();
    };
  }
}
let lives = 5;
function checkDecryptedMessage() {
  const result2Div = document.querySelector('.result2').innerText;
  const resultElement = document.querySelector('.result2');

  // Check if the decoded message is in any of the arrays
  if (Message1.includes(result2Div)) {
    // If it matches, change the text color to green
    resultElement.style.color = 'green';
    resultElement.style.border = '2px solid green';
    resultElement.style.width = '300px';
    resultElement.style.position = 'relative';
    resultElement.style.paddingLeft = '20px'; // Adjust the padding as needed
    resultElement.innerHTML = `<span style="font-size: 25px; color: green; position: absolute; top: 50%; left: 0; right: 50; transform: translateY(-50%);">✅</span>${result2Div}`;
    
    // Additional action based on matched message
    const userAnswerLower = result2Div;
    alert('The input matches one of the encrypted messages.');

    if (userAnswerLower === Message1[0]) {
      document.querySelector('#result1').innerHTML += `
        <div class="task1">
          <span id="taskname"></span>
          <p>เครื่องบินโจมตีสกัดกั้นที่มีสมรรถนะเหนือกว่าอากาศยานรบทุกแบบในปัจจุบัน <br> (Xpress 10+12 KilogrAms EJect CloNe WiLl PumpKiN.)</p>  
        </div> 
      `;
    } else if (userAnswerLower === Message1[1]) {
      document.querySelector('#result1').innerHTML += `
        <div class="task1">
          <span id="taskname"></span>
          <p>ระเบิดนิวเคลียร์ลูกแรกของโลกที่ถูกใช้ <br>( RadiO [VI] Zero Zone RaKe Half blUE.) </p>  
        </div> 
      `;
    } else if (userAnswerLower === Message1[2]) {
      document.querySelector('#result1').innerHTML += `
        <div class="task1">
          <span id="taskname"></span>
          <p>เมืองนางาซากิประเทศญี่ปุ่นโดนสหรัฐอเมริกาทิ้งระเบิดที่มีชื่อว่า <br> (HistoriC ViOlent [TO] ConsPicuous.) </p>  
        </div> 
      `;
    } else if (userAnswerLower === Message1[3]) {
      document.querySelector('#result1').innerHTML += `
        <div class="task1">
          <span id="taskname"></span>
          <p>ชื่อเรียกการร่วมมือกันระหว่างกองทัพเรือ กองทัพบก และกองทัพอากาศที่ใหญ่ที่สุดของเหตุการณ์ยกพลขึ้นบกที่หาดนอร์มังดี <br> (WorlD war[TWO] like MaZe TWist that [SICK] ZeaLot.)</p>  
        </div> 
      `;
    } else if (userAnswerLower === Message1[4]) {
      document.querySelector('#result1').innerHTML += `
        <div class="task1">
          <span id="taskname"></span>
          <p> จบเกมส์<br> (EndGame)  </p>  
        </div> 
      `;
    }

  } else {
    alert('The input does not match any of the encrypted messages.');

    // If it doesn't match, change the text color to red
    resultElement.style.color = 'red';
    resultElement.style.border = '2px solid red';
    resultElement.style.width = '300px';
    
    resultElement.style.position = 'relative';
    resultElement.style.paddingLeft = '20px'; // Adjust the padding as needed
    resultElement.innerHTML = `<span style="font-size: 20px; color: red; position: absolute; top: 50%; left: 0; right: 50; transform: translateY(-50%);">❌</span>${result2Div}`;
    
    lives--;
    document.getElementById('lives-value').innerText = lives;

    if (lives <= 0) {
      // Game Over: Alert the user and provide an option to restart the game
      alert('Game Over: Your lives are depleted. Click OK to restart the game.');
      restartWebsite(); // Call the function to restart the game
    } else {
      document.getElementById('lives-value').innerText = lives;
      document.getElementById('monitorInput').value = '';
      document.getElementById('result2').innerText = '';
      document.getElementById('caesar-table').querySelector('thead tr').innerHTML = 'Basic ';
      document.getElementById('caesar-table').querySelector('tbody tr').innerHTML = 'Shifted ';
      document.getElementById('decodeButton').disabled = false;
      document.getElementById('tasks').innerHTML = '';
    }
  }
  const totalQuestions = 5; // Assuming there are 5 questions in Message1 array
  const correctAnswers = Message1.filter((msg) => displayDecodedResults.includes(msg)).length;
  if (correctAnswers === totalQuestions) {
    // All questions are correctly answered: Show congratulations alert
    alert('Congratulations! You answered all questions correctly!');
  }
}


function restartWebsite() {
  window.location.reload();
}

let a=0;document.getElementsByTagName("i")[0].addEventListener("click",function(){
  if(a==0){
  document.getElementsByTagName("audio")[0].play();a++;document.querySelector("i").style.opacity="1";
  }else{
  document.querySelector("audio").pause();a--;document.querySelector("i").style.opacity=".5";
  }
  });