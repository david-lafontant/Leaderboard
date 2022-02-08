const addLeader = () => {
    let leaders;
    let leaderName = document.querySelector('#leaderName').value;
    let leaderScore = document.querySelector('#leaderScore').value;
    if (localStorage.getItem('leaders') === null) {
      leaders = [];
    } else {
      leaders = JSON.parse(localStorage.getItem('leaders'));
    }
    const bookObj = {
      name: leaderName,
      score: leaderScore
    }
    leaders.push(bookObj);
  
    localStorage.setItem('leaders', JSON.stringify(leaders));
  
    return;
  }

export default addLeader;