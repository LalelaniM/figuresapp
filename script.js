
async function loadExcelFile(fileName) {

  const response = await fetch(fileName);

  const arrayBuffer = await response.arrayBuffer();

  const workbook = XLSX.read(arrayBuffer, { type: 'array' });

  const sheetName = workbook.SheetNames[0];

  const worksheet = workbook.Sheets[sheetName];

  return XLSX.utils.sheet_to_json(worksheet);
}

async function searchInventory() {

  const inventoryType = document.getElementById('inventoryType').value;

  const searchText = document
    .getElementById('searchInput')
    .value
    .toLowerCase()
    .trim();

  const resultsDiv = document.getElementById('results');

  if (searchText === '') {
    resultsDiv.innerHTML = '<p>Please enter a shoe code.</p>';
    return;
  }

  const inventoryData = await loadExcelFile(inventoryType);

  const filteredResults = inventoryData.filter(row => {

    return Object.values(row).some(value => {

      return String(value)
        .toLowerCase()
        .includes(searchText);

    });

  });

  if (filteredResults.length === 0) {
    resultsDiv.innerHTML = '<p>No matching shoe codes found.</p>';
    return;
  }

  let table = '<table><thead><tr>';

  Object.keys(filteredResults[0]).forEach(key => {
    table += `<th>${key}</th>`;
  });

  table += '</tr></thead><tbody>';

  filteredResults.forEach(row => {

    table += '<tr>';

    Object.values(row).forEach(value => {
      table += `<td>${value}</td>`;
    });

    table += '</tr>';

  });

  table += '</tbody></table>';

  resultsDiv.innerHTML = table;
}
