const greetings = ["Hello!",
                   "Hi", 
                   "How are you?", 
                   "Welcome to this page!", 
                   "Greetings!", 
                   "Enjoy your stay!",
                   "Hola!"];

const insults = ["You are ugly",
                 "I've met dogs smarter than you!",
                 "Yo mama's so fat, when she fell I didn't laugh, but the sidewalk cracked up.",
                 "Your a bonehead!",
                 "Someday you’ll go far. And I really hope you stay there.",
                 "You’re the reason God created the middle finger.",
                 "You’re a gray sprinkle on a rainbow cupcake.",
                 "If your brain was dynamite, there wouldn’t be enough to blow your hat off."];
            
const byes = ["Bye!",
              "Adios!",
              "See you later!",
              "Nice meeting you!",
              "Have a great day!",
              "Godspeed",
              "Bye-bye",
              "Goodbye!",
              "Farewell!",
              "Come back soon!"];

function greetMe() {
    alert(greetings[Math.floor(Math.random() * (greetings.length - 1))]);
}

function insultMe() {
    alert(insults[Math.floor(Math.random() * (insults.length - 1))]);
}

function sayBye() {
    alert(byes[Math.floor(Math.random() * (byes.length - 1))]);
}

function alertDate() {
    alert(Date());
}

function alertMath() {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    var solution;
    
    switch (Math.floor(Math.random() * 2)) {
        case 0:
            solution = (num1 + num2);
            alert(num1 + " + " + num2 + " = " + solution);

            break;
        case 1:
            solution = (num1 * num2);
            alert(num1 + " * " + num2 + " = " + solution);

            break;
        case 2:
            solution = (num1 / num2);
            alert(num1 + " / " + num2 + " = " + solution);

            break;
    }
}