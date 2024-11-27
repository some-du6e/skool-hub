function httpGet(theUrl, nocors) {
  var xmlHttp = new XMLHttpRequest();
  if (nocors) {
    var realurl = theUrl;
  } else {
    var realurl = "https://uncors.vercel.app?url=" + theUrl;
  }
  xmlHttp.open("GET", realurl, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

var islocal = httpGet("http://127.0.0.1:5555/uuid.html" , true).replace(`changed`).includes("f1ab1012-82c0-4b0b-b916-5c00a0b23f46")
if (islocal) {
  
}
