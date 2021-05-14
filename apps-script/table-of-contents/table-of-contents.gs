function createToolbar() {  // Create toolbar from html file, pass contents as an attribute, and publish sidebar
  var html = HtmlService.createTemplateFromFile('Contents');
  html.contents = getWorkbookContents();
  html = html.evaluate();
  html.setTitle("Contents");
  SpreadsheetApp.getUi().showSidebar(html);
}

function mac() { //Macro to launch with keyboard shortcut (CTRL + ALT + SHIFT + 1)
  createToolbar();
};

function getWorkbookContents() {  //Returns an array of sheet names
  //Collect sheets and IDs
  let sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  let urls = [];
  sheets.forEach(sheet => {
    sheets[sheets.indexOf(sheet)] = {name: sheet.getName()/*, url:sheet.getRange(14,1).getValue()*/}; // My specific implementation also used a background image. Commented out for general-purpose use
  });
  return sheets;
}

function navigate(name) {
  SpreadsheetApp.setActiveSheet(SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name));
}