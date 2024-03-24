let gameAnswer = "Клоун".toLowerCase();

let guessField = document.querySelector(".guessField");
let guessSubmit = document.querySelector(".guessSubmit");

let currentStatus = document.querySelector(".currentStatus");
let gameTries = document.querySelector(".gameTries");
let lowOrHi = document.querySelector(".lowOrHi");
let secretGame = document.querySelector(".secretGame");

let gameCount = 1;
let resetButton;

let gameStatus = document.querySelector("#gameStatus");

function checkGuess() {
    let userGuess = (guessField.value);
    if (gameCount === 1) {
        gameTries.textContent = "Предыдущие попытки: ";
    }

    if (userGuess.localeCompare(gameAnswer, undefined, {sensitivity: 'base'}) === 0){
        currentStatus.textContent = "Ты, чёрт возьми, прав!";
        currentStatus.style.background = "green";
        lowOrHi.textContent = "";
        secretGame.textContent = "Ведьма Иллюзий - не та, за кого себя принимает... почти.";
        setGameOver();
    }
        else if (userGuess.localeCompare("Политика", undefined, {sensitivity: 'base'}) === 0){
        currentStatus.textContent = "Ты отгадал первое секретное слово.";
        currentStatus.style.background = "#264f12";
        lowOrHi.textContent = "";
        gameCount -= 1;
        secretGame.textContent = '—"В моём мире Ведьм называли Мастерами... Какое странное чувство".';
        }
        else if (userGuess.localeCompare("Деньги", undefined, {sensitivity: 'base'}) === 0){
        currentStatus.textContent = "Ты отгадал второе секретное слово.";
        currentStatus.style.background = "#264f12";
        lowOrHi.textContent = "";
        gameCount -= 1;
        secretGame.textContent = '—"Ведьма Подчинения, Ведьма Пустоты... Получается, что в этом мире должна быть и здешняя Ведьма Иллюзий..?"';
    }
        else if (userGuess.localeCompare("Вечность", undefined, {sensitivity: 'base'}) === 0){
        currentStatus.textContent = "Ты отгадал третье секретное слово.";
        currentStatus.style.background = "#264f12";
        lowOrHi.textContent = "";
        gameCount -= 1;
        secretGame.textContent = '—"Ты действительно хочешь знать? А, ладно. Я умерла не самой спокойной смертью. При той жизни я убила не только многих плохих, но и хороших людей. Сожаления и ненависть преследовали меня до самой смерти. Весь остаток своей ничтожной жизни я могла думать лишь об одном: вот бы вернуться и убить саму себя, чтобы не допустить смерти всего континента. Чтобы не допустить многочисленных смертей хороших людей..."';
    }
        else if (userGuess.localeCompare("Финал", undefined, {sensitivity: 'base'}) === 0){
        currentStatus.textContent = "Ты отгадал первое секретное слово.";
        currentStatus.style.background = "#264f12";
        lowOrHi.textContent = "";
        gameCount -= 1;
        secretGame.innerHTML = 'Ведьма Иллюзий вошла в портал. Пространство исказилось, и она исчезла без следа.<br>' +
            'Спустя время Ведьма Иллюзий почувствала, что снова стоит на твердой поверхости. Открыв глаза, она увидела до боли знакомые места. Осмотрев также себя, она сказала:<br>' +
            '—"Наконец-то... вернулся".<br>' +
            'Это была уже не Ведьма Иллюзий. ОН вернулся.<br>' +
            'Посмотрев на высокую башню города вдали, он подумал:<br>' +
            '—"Судя по остановленному времени, я вернулся в нужный момент. Славно".<br>' +
            'Прошло какое-то время, он зашёл в башню города и пришёл в нужное ему место. Увидев раздирающую его душу сцену, его окутывали сомнения.<br>' +
            '—"Быть может, хватит с меня убийств? Быть может, можно всё исправить без радикальных методов..?"<br>' +
            'Он прикоснулся к чёрному шару в центре застывшей битвы и позволил ему себя всецело поглотить. Пришло время финала истории человека, имя которого в ином мире было известно как Ведьма Иллюзий.';
    }
        else if (userGuess.localeCompare("Чехия", undefined, {sensitivity: 'base'}) === 0){
        currentStatus.textContent = "Ты отгадал третье секретное слово.";
        currentStatus.style.background = "#264f12";
        lowOrHi.textContent = "";
        gameCount -= 1;
        secretGame.textContent = '—"Э? Серьезно, я должна выступить на сцене, чтобы присоединиться к составу этих Ведьм? Так ещё и уникальное что-то придумать. Господи, что за дети. Но ничего не поделаешь..."';
    }
        else if (gameCount === 10){
        currentStatus.textContent = "Увы, ты проиграл";
        currentStatus.style.background = "red";
        lowOrHi.textContent = "";
        setGameOver();
        }
            else {
            currentStatus.textContent = "Ты не угадал. Повтори попытку";
            currentStatus.style.background = "red";
            }
                if (gameCount === 5){
                    lowOrHi.textContent = "А кем ещё Засос может являться? Ответ на поверхности";
                }
                else if (gameCount === 9){
                    lowOrHi.textContent = "Чел, у тебя последняя попытка, знал? Соберись давай. Кем является админ канала 'Рифмы и Панчи?'";
                }
                else {
                    lowOrHi.textContent = "";
                }
                    if (guessField.value.trim() === "") {
                        guessField.style.outline = "solid 3px red";
                        guessField.value = "";
                        gameTries.textContent += userGuess + "";
                        currentStatus.textContent = "";
                        currentStatus.style.background = "none";
                        return false;
                    }
                    else {
                        gameTries.textContent += userGuess + "; ";
                        guessField.style.outline = "";
                    }
    gameCount++;
    guessField.value = "";
    guessField.focus();
    gameStatus.style.background = "rgba(33,33,33,0.7)";
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    gameStatus.appendChild(resetButton);
    resetButton.textContent = "Откатить время...";
    resetButton.addEventListener("click", resetGame);
}

function resetGame(){
    gameCount = 1;

    let resetGameStatus = document.querySelectorAll(".gameStatus p");
    for (let i = 0; i < resetGameStatus.length; i++){
        resetGameStatus[i].textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    currentStatus.style.background = "none";
    gameStatus.style.background = "none";
}