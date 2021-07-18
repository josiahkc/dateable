const axios = require('axios').default;

axios(config)
// Send a POST request
axios({
  method: 'post',
  url: 'https://api.monkeylearn.com/v3/extractors/ex_LPxHGwJT/extract/',
  data: {
    firstName: 'Josiah',
    lastName: 'Collins'
  }
});

axios.post("https://api.monkeylearn.com/v3/extractors/ex_LPxHGwJT/extract/", {data, baseDate}, config);



parseText = function(word){
    let date = word.selectionText;
    //chrome.tabs.create({url: "text you copied: " + date});
    
 };

chrome.contextMenus.create({
 title: "Create Event In Calendar",
 contexts:["selection"],  // ContextType
 onclick: parseText // A callback function
});