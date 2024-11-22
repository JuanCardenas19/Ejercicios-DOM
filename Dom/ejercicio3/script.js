
const searchButton = document.getElementById('searchButton');
const searchTermInput = document.getElementById('searchTerm');
const resultCount = document.getElementById('resultCount');
const dictionaryTable = document.getElementById('dictionaryTable');
const tableRows = dictionaryTable.getElementsByTagName('tr');


function searchInTable() {
    const searchTerm = searchTermInput.value.trim().toLowerCase();
    let matchCount = 0;

    
    resultCount.textContent = '';

    
    for (let i = 1; i < tableRows.length; i++) {
        const cells = tableRows[i].getElementsByTagName('td');
        let found = false;

        
        for (let j = 0; j < cells.length; j++) {
            const cellText = cells[j].textContent.toLowerCase();
            if (cellText.includes(searchTerm)) {
                found = true;
                break;
            }
        }

        
        if (found) {
            tableRows[i].style.display = '';
            matchCount++;
        } else {
            tableRows[i].style.display = 'none';
        }
    }

    
    resultCount.textContent = `${matchCount} coincidencia(s) encontrada(s).`;
}


searchButton.addEventListener('click', searchInTable);


searchTermInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchInTable();
    }
});
