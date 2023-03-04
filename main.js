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

var islocal = httpGet("http://127.0.0.1:5555/uuid.html" , true).replace(`I Like Watching Videos Of Black Men Shaking Their Booty Cheeks...
I don't know why, but when I click on a video and see a black man shaking his cheeks, it just makes my mouth drool and I start dancing with the black man as well. Sometimes when I look at myself in the mirror, I sometimes hallucinate and see black men twerking on my couch, it.. brings a smile to my face. I wish I could become one with the black men twerking aggressively.
Please understand what I'm going through and support me on my journey!`).includes("f1ab1012-82c0-4b0b-b916-5c00a0b23f46")
if (islocal) {
  
}
