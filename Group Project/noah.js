
//Game Config setup with  the story arch.
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
        choice: "Cry out to Zeus!",
        prompt: "Zeus hears your cries! He doesn't care though he has bigger things to deal with. The lightning strikes you and immobilizes you.",
        options: ["Declare Defeat", "Ask for mercy"]
    },
    {
        choice: "Fortnite dance to express victorious joy",
        prompt: "You have gotten too cocky, during your dance the wizard resorted back to his old ways and smites you.",
        options: ["Run", "Fight"]
    },
    {
        choice: "Render Aid",
        prompt: "You perform first aid on the wizard and he grants you mercy.",
        options: ["Run", "Fight"]
    },
];
//Declare Variables for the prompt, run btn, and drop down
const prompt = document.querySelector(".prompt");
const chooser = document.querySelector(".chooser");
const actBtn = document.querySelector(".act-btn");
//Function for endgame with death scenario
function deathEnd(){

    document.getElementById("act-btn").disabled = true; //disables run btn
    document.getElementById("chooser").innerHTML = "";  //gets rid  of dropdown options
    document.getElementById("wdyd").innerHTML = "You have lost!"; 
}
//function for endgame  with live scenario
function liveEnd(){
    document.getElementById("act-btn").disabled = true; //disables run btn
    document.getElementById("chooser").innerHTML = ""; //gets rid  of dropdown options
    document.getElementById("wdyd").innerHTML = "You have won!";
}
/* Explain How this works!!!!!!!!*/
function act(choice) { /*starting function named act with paramaters choice */
   prompt.textContent = gameConfig.filter(
        config => config.choice === choice
    )[0].prompt; /* Changes prompt based on choice */
    chooser.innerHTML = gameConfig /*  Changes dropdown options based on choice */
        .filter(config => config.choice === choice)[0]
        .options.map(option => `<option value="${option}">${option}</option>`)
        .join(""); 
        //if-statements for different game ending scenario outcomes
    if(choice == "Defend your honor" ){
        deathEnd()
    }
    if(choice == "Declare Defeat" ){
        deathEnd()
    }
    if(choice == "Ask for mercy" ){
        liveEnd()
    }
    if(choice == "Fortnite dance to express victorious joy" ){
        deathEnd()
    }
    if(choice == "Render Aid" ){
        liveEnd()
    }
}
//Restart game function
function restartGame(){
    prompt.textContent = gameConfig.filter(
        config => config.choice === "Start" //sets connfig option as Start  (beginning of game)
    )[0].prompt;
    chooser.innerHTML = gameConfig //sets the chooser values to the choices (always start choices in this instance)
    .filter(config => config.choice === "Start")[0]
    .options.map(option => `<option value="${option}">${option}</option>`) //sets option values based on config choice (for this function "start")
    .join(""); 
    document.getElementById("act-btn").disabled = false; //enables run button after restart button is pressed
}


actBtn.addEventListener("click", () => act(chooser.value)); //on click of run button chooses the dropdown  value that is selected

act("Start");