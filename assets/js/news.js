//this is news :D 
//when user types in search field local storage saves it for listing purposes but all display weather snippets. 

//current container variables
var timeEl = document.querySelector('.timeofPublish0');
var creatorValue = document.querySelector('.newsName0');
var articleTitleEl= document.querySelector('.title0');

var timeEl2 = document.querySelector('.timeofPublish1');
var creatorValue2 = document.querySelector('.newsName1');
var articleTitleEl2= document.querySelector('.title1');

var timeEl3 = document.querySelector('.timeofPublish2');
var creatorValue3 = document.querySelector('.newsName2');
var articleTitleEl3= document.querySelector('.title2');

var timeEl4 = document.querySelector('.timeofPublish3');
var creatorValue4 = document.querySelector('.newsName3');
var articleTitleEl4= document.querySelector('.title3');

var timeEl5 = document.querySelector('.timeofPublish4');
var creatorValue5 = document.querySelector('.newsName4');
var articleTitleEl5= document.querySelector('.title4');
//API key inside a var to call on multiple times if required. 
var  APIKey="apikey=pub_3607c98c284f7ae81a7c5cb1e10e5d4eb329";

//fetch from newsdata API, attaching the API var and the parameter for cryptocurrency
fetch('https://newsdata.io/api/1/news?' + APIKey + '&q=cryptocurrency' )
    // fetch('https://cryptopanic.com/api//v1/posts/?auth_token=65359dbd6e66041b361c14cef4b02d200ad629cd&public=true')
    .then(response => response.json())
    // .then(data => console.log (data))
    .then(data => {
        var timeValue = data ['results'][0]['pubDate'];
        var sourceValue = data ['results'][0]['creator'][0];
        var titleValue = data ['results'][0]['title'];

        timeEl.innerHTML=timeValue;
        creatorValue.innerHTML= sourceValue;
        articleTitleEl.innerHTML= titleValue;

        var timeValue2 = data ['results'][1]['pubDate'];
        var sourceValue2 = data ['results'][1]['creator'][0];
        var titleValue2 = data ['results'][1]['title'];

        timeEl2.innerHTML=timeValue2;
        creatorValue2.innerHTML= sourceValue2;
        articleTitleEl2.innerHTML= titleValue2;

        var timeValue3 = data ['results'][2]['pubDate'];
        var sourceValue3 = data ['results'][2]['creator'][0];
        var titleValue3 = data ['results'][2]['title'];

        timeEl3.innerHTML= timeValue3;
        creatorValue3.innerHTML= sourceValue3;
        articleTitleEl3.innerHTML= titleValue3;

        var timeValue4 = data ['results'][3]['pubDate'];
        var sourceValue4 = data ['results'][3]['creator'][0];
        var titleValue4 = data ['results'][3]['title'];

        timeEl4.innerHTML= timeValue4;
        creatorValue4.innerHTML= sourceValue4;
        articleTitleEl4.innerHTML= titleValue4;

        var timeValue5 = data ['results'][4]['pubDate'];
        var sourceValue5 = data ['results'][4]['creator'][0];
        var titleValue5 = data ['results'][4]['title'];

        timeEl5.innerHTML= timeValue5;
        creatorValue5.innerHTML= sourceValue5;
        articleTitleEl5.innerHTML= titleValue5;

})


