// document.getElementById("search_btn").addEventListener("click",getData);

async function getData(){
    var search = document.getElementById("search_inp").value;
    var data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${search}&key=AIzaSyA22IVI_MsTX-5sjH_i2H7rC5hBA4EfghM`);
    data= await data.json();
    console.log(data.items);
    localStorage.setItem("search",JSON.stringify(data.items));
    window.location.href="Searched.html"
    // displaysearch();
}

async function getpopular(){
    var data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyA22IVI_MsTX-5sjH_i2H7rC5hBA4EfghM`);
    data= await data.json();
    display(data.items);
}

window.addEventListener("load",()=>{
    getpopular();
})

function display(data){
    // document.getElementById("container").textContent="";
    data.forEach((element) => {
        var div = document.createElement("div");
        div.addEventListener("click",()=>{
            saveToLocal(element);
        })

        var title = document.createElement("h5");
        title.textContent=element.snippet.title;
        title.setAttribute("id","name");

        var poster = document.createElement("img");
        poster.src=element.snippet.thumbnails.medium.url;

        div.append(poster,title);
        document.getElementById("container").append(div);
    });
}



let saveToLocal = (elem)=>{
 localStorage.setItem("video",JSON.stringify(elem));
 localStorage.setItem("vidFrom","popular");
 window.location.href="video.html";
}

//  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=india&key=[YOUR_API_KEY]' 

