//this is news :D 
//when user types in search field local storage saves it for listing purposes but all display weather snippets. 
var button = document.querySelector('.searchBtn');
// var inputValue = document.querySelector('.inputValue');

//current container variables
var timeEl = document.querySelector('.timeofPublish');
var companyName = document.querySelector('.newsName');
var articleTitleEl= document.querySelector('.title');
var description = document.querySelector('.desc');


var  APIKey="apikey=pub_3607c98c284f7ae81a7c5cb1e10e5d4eb329";

// button.addEventListener('click', function(event){ 
//     event.preventDefault()
button.addEventListener('click', function(event){ 
    event.preventDefault()
        
    fetch('https://newsdata.io/api/1/news?' + APIKey + '&q=cryptocurrency' )
    // fetch('https://cryptopanic.com/api//v1/posts/?auth_token=65359dbd6e66041b361c14cef4b02d200ad629cd&public=true')

    .then(response => response.json())
    // .then(data => console.log (data))
    .then(data => {
        var timeValue = data ['results'][0]['pubDate'];
        var companyNameValue = data ['results'][0]['image_url'];
        var titleValue = data ['results'][0]['title'];
        var descriptionValue = data ['results'][0]['description'];

        timeEl.innerHTML=timeValue;
        companyName.innerHTML= companyNameValue;
        articleTitleEl.innerHTML= titleValue;
        description.innerHTML=descriptionValue;
        })

        // .catch(err => alert("City Name undefined"))
})
