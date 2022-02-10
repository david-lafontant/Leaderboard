


const displayLeader = async () => {
  const newLeader = document.querySelector('.table_item');

  while (newLeader.hasChildNodes()) {
    newLeader.removeChild(newLeader.lastChild);
  }

  const leaders = JSON.parse(localStorage.getItem('leaders'));

  leaders.forEach((book) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
              <td>${book.name}</td>
              <td>: ${book.score}</td>
          `;
    newLeader.appendChild(newRow);
  });
};

export default displayLeader;