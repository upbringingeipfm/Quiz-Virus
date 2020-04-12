function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Which of the following disinfectant is effective against viruses?", ["Hydrogen peroxide", "Hypochlorite","Formaldehyde", "All of these"], "All of these	"),

    new Question("Viruses largely lack metabolic machinery of their own to generate energy or to synthesize", [" protein", "carbohydrate","alcohol", "all of these"], "protein"),


    new Question("Viruses require __________ for growth.", ["bacteria", "plants","animals", "living cells"], "living cells"),


    new Question("Reverse transcriptase is a useful enzyme to have when", ["an RNA virus converts its RNA to DNA", "there are no host cells present","spikes are forming in the new virus", "nutrients are scarce"], "an RNA virus converts its RNA to DNA"),

  new Question("The sequence of nucleic acid in a variety of viruses and viral host, will find more similarities", ["among different viruses than between viruses and their hosts", "among different viral hosts than among different viruses","among different viral hosts than between viruses and their hosts", "between viruses and their hosts than among different viruses"], "between viruses and their hosts than among different viruses"),
    new Question("When a virus enters a cell but does not replicate immediately, the situation is called", ["lysogeny", "fermentation","symbiosis", "synergism"], "lysogeny"),
      new Question("Usually viruses are separated into several large groups based primarily on", ["nature of the host", "nucleic acid characteristics","capsid symmetry", "diameter of the viroin or nucleocapsid"], "nature of the host"),
        new Question("The first step in infection of a host bacterial cells by a phage is", ["adsorption", "absorption","penetration", "replication"], "adsorption"),
          new Question("Which of the following viruses has not been associated with human cancer?", ["Hepatitis C virus", "Hepatitis B virus","Varicella-Zoster virus", "Herpes simplex virus type 2"], "Varicella-Zoster virus"),
            new Question("The viral nucleocapsid is the combination of", ["genome and capsid", "capsid and spikes","envelope and capsid", "capsomere and genome"], "genome and capsid	"),
];


var quiz = new Quiz(questions);


populate();
