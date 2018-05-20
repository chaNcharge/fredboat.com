function pingApp() {
  // Pings app url, replace with your app's url on line 12. Recommended trigger: every 15 minutes
  var d = new Date();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var currentDate = d.toLocaleDateString();
  var counter = SpreadsheetApp.getActiveSheet().getRange('B1').getValues(); // Make sure to set cell B1 to 1 before running this function!
 
  if (hours >= 9 || hours < 2) { // Keeps pinging app from 9 am to 2 am by default, change this if statement to suit your needs. You may need to change the operators.
    SpreadsheetApp.getActiveSheet().getRange('A' + counter).setValue('Visited at ' + currentDate + " " + hours + ":" + minutes);
    SpreadsheetApp.getActiveSheet().getRange('B1').setValue(Number(counter) + 1);
    var response = UrlFetchApp.fetch("https://YOUR_APP_NAME.herokuapp.com/"); // If this function results in a 401 error, ignore it, that means it worked!
  }
}

function autoclean() {
  // Cleans the spreadsheet, trigger as often as you like
  var ss = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID')
  var sheet = ss.getSheets()[0];
  var start = 1
  var end = ss.getLastRow();
  sheet.deleteRows(start, end);
  SpreadsheetApp.getActiveSheet().getRange('B1').setValue('1');
}
