let jsonData = []; 

window.onload = async function() {
    const url = `sluzby.json`;
    try {
        const response = await fetch(url);
        jsonData = await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('results').innerHTML = '<p>Error fetching data</p>';
    }
};

function searchData() {
    const inputText = document.getElementById('searchInput').value;
    const resultsDiv = document.getElementById('results');

    if (inputText.trim() === '') {
        resultsDiv.innerHTML = '';
        return;
    }

    const filteredResults = jsonData.filter(item => {
        return item.name.toLowerCase().includes(inputText.toLowerCase());
    });

    if (filteredResults.length > 0) {
        filteredResults.forEach(item => {
            resultsDiv.innerHTML += `<div class="col-2 p-3 h-100"><div class="bg-frostedglass p-4 text-center"><p>${item.name}</p></div></div>`; // Change 'name' to the appropriate key
        });
    } else {
        resultsDiv.innerHTML = '<div class="col-2 p-3 h-100"><div class="bg-frostedglass p-4 text-center"><p>Nic jsme nenašli 😔</p></div></div>';
    }
}