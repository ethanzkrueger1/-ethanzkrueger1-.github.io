const gameConfig = [
    {
        choice: "Start",
        prompt: "An evil wizard is trying to scrap!",
        options: ["Run", "Fight"]
    },
    {
        choice: "Run",
        prompt: "The Wizard called you a nincompoop on your way out!",
        options: ["Defend your honor", "Break down crying"]
    },
    {
        choice: "Fight",
        prompt: "You hit the wizard with a closed fist! He cast a spell that emits lightning",
        options: ["Put on tinfoil hat", "Cry out to Zeus!"]
    },
    {
        choice: "Defend your honor",
        prompt: "You call the wizard a dumb little magic man! He sends you to the ethereal plane. There is no return",
        options: ["Run", "Fight"]
    },
    {
        choice: "Break down crying",
        prompt: "The wizard thought about his words and now feels bad. He conjures an apple pie and you reconcile over the sweet taste of pie",
        options: ["Thank him!", "Ask him about mortality"]
    },
    {
        choice: "Put on tinfoil hat",
        prompt: "The tinfoil redirects the lightning! The wizard has been hit and immobilized.",
        options: ["Fortnite dance to express victorious joy", "Render Aid"]
    },
    {
        choice: "Cry out to Zeus",
        prompt: "Zeus hears your cries! He doesn't care though he has bigger things to deal with. The lightning strikes you and immobilizes you.",
        options: ["Declare Defeat", "Ask for mercy"]
    },
];

const prompt = document.querySelector(".prompt");
const chooser = document.querySelector(".chooser");
const actBtn = document.querySelector(".act-btn");

function endGame(){
    document.getElementById(".chooser").innerHTML = "";
    document.getElementById(".act-btn").innerHTML = "Restart";
    document.getElementById(".prompt").innerHTML = "you have perished at the hands of a wizard";
}

function act(choice) {
    prompt.textContent = gameConfig.filter(
        config => config.choice === choice
    )[0].prompt;
    chooser.innerHTML = gameConfig
        .filter(config => config.choice === choice)[0]
        .options.map(option => `<option value="${option}">${option}</option>`)
        .join("");
    if(choice == "Defend your honor" ){
        endGame()
    }
}


actBtn.addEventListener("click", () => act(chooser.value));

act("Start");