import _ from 'lodash';
import './index.css';
// import addLeader from './modules/addLeader';
import displayLeader from './modules/displayLeader';

document.querySelector('.btn-submit').addEventListener('click', (e) => {
  e.preventDefault();
  const leaderName = document.querySelector('#leaderName').value;
  const leaderScore = document.querySelector('#leaderScore').value;

  const objLeader = {
    user: leaderName,
    score: leaderScore
  }

  postData(url, objLeader);

  document.querySelector('#leaderName').value = '';
  document.querySelector('#leaderScore').value = '';
});


document.querySelector('.refresh_btn').addEventListener('click', (e) => {
  e.preventDefault();
getData(url);

});