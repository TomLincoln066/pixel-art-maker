// Grid making function
function makeGrid() {

  // Storing grid height value
  const gridHeight = document.getElementById('inputHeight').value;
  // Storing grid width value
  const gridWidth = document.getElementById('inputWidth').value;
  // Storing table canvas
  const canvas = document.getElementById('pixelCanvas');
  // Delete rows to start
  canvas.innerHTML = '';
  // Loop to insert rows
  for (let i = 0; i < gridHeight; i++) {
    let row = canvas.insertRow(i);
    // Loop to insert cells
    for (let j = 0; j < gridWidth; j++) {
      let cell = row.insertCell(j);
      // Add click event to cells
      cell.addEventListener('click', function(event) {
        // When cell is clicked, the background color changes to user selected color
        event.target.style.backgroundColor = document.getElementById('colorPicker').value;
      });
    }
  }
}
// Add click event to submit input
document.getElementById('sizePicker').addEventListener('submit', function(event) {
  event.preventDefault();
  // When data is submitted, the grid making function is called
  makeGrid();
});
