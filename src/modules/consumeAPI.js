import displayLeader from './displayLeader';

const postData = async (url, dataObj) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(dataObj);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(url, requestOptions)

}

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  displayLeader(data)
   
}



export {postData, getData};