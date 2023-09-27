var studentHogwarts = (function() {
    var privateScore = 0;
    var name = null;
  
    function changeScoreBy(points) {
      privateScore += points;
    }
  
    function setName(newName) {
      name = newName;
    }
  
    function rewardStudent() {
      changeScoreBy(1);
    }
  
    function penalizeStudent() {
      changeScoreBy(-1);
    }
  
    function getScore() {
      return name + ': ' + privateScore;
    }
  
    return {
      setName: setName,
      rewardStudent: rewardStudent,
      penalizeStudent: penalizeStudent,
      getScore: getScore
    };
  })();