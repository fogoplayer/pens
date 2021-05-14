function onEdit(e) {
  const sprintOne = ["Chapter 20","Chapter 23","Chapter 26"];
  const sprintTwo = ["Chapter 29","TKM Chapter 29","Chapter 30", "Chapter 35"];

  var range = e.range;
  //If in the header
  if(range.getRow() <= 10){
    //Get the recently inputted value
    const val = e.value; 

    //Determine which sprint it's in
    if (sprintOne.includes(SpreadsheetApp.getActiveSheet().getName())){
      var currentSprint =  sprintOne;
    }else if (sprintTwo.includes(SpreadsheetApp.getActiveSheet().getName())){
      var currentSprint = sprintTwo;
    }

    //For each sheet in the current sprint, find the identical coordinates and paste in the value
    currentSprint.forEach(function (sheetName) {
      const sheetBeingUpdated = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
      const rangeBeingUpdated = sheetBeingUpdated.getRange(range.getRow(), range.getColumn());
      rangeBeingUpdated.setValue(e.value);
    })
  }
};