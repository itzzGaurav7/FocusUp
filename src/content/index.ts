const url = "https://www.youtube.com/shorts";

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url?.startsWith(url)) {
    console.log("Wrong page");
  }
});
