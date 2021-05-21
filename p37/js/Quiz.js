class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    
    question.hide();
    background(36, 237, 243);
    fill(0);
    textSize(30);
    text("Result of the Quiz",340,50)
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){

      debugger;
      var displayAns = 230;
      fill(0);
      textSize(20)
      text("NOTE: Contestant who answerd correctly are highlited in green",130,230);

      for (var p in allContestants){

        debugger;
        var correctAns  = "2";

        if(correctAns === allContestants[p].answer){

          fill(15, 135, 1);

        }
        else{

          fill(255, 71, 0);

        }

        displayAns = displayAns + 30;
        textSize(20);
        text(allContestants[p].name + ":" + allContestants[p].answer,250,displayAns)

      }

    }

  }

}
