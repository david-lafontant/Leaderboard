const addLeader = (url) => {
  const leaderName = document.querySelector('#leaderName').value;
  const leaderScore = document.querySelector('#leaderScore').value;

  const leaderObj = {
    name: leaderName,
    score: leaderScore
  };
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(leaderObj),
  });
};

export default addLeader;