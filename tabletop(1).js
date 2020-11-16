
  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1287Au7dsptWJN-qCI12zZE1sxI6vK_muFtES3j0uSHA/edit?usp=sharing';

  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }

function showInfo(data, tabletop) {
data.forEach(function(data) {
    tweet.innerHTML = data.tweet;
    brooklyn.innerHTML = data.brooklyn;
    seattle.innerHTML = data.seattle;
    tokyo.innerHTML = data.tokyo;
 });
}
  window.addEventListener('DOMContentLoaded', init)
