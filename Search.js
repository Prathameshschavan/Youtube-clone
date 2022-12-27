let search_data= JSON.parse(localStorage.getItem("search")) || []
console.log("object");
function displaysearch(){
    console.log("yessss");
    search_data.map(function(element){
        var div = document.createElement("div");
        div.addEventListener("click",()=>{
            saveToLocal(element);
        })
    
        var title = document.createElement("h3");
            title.textContent=element.snippet.title;
            title.setAttribute("id","name");
    
            var poster = document.createElement("img");
            poster.src=element.snippet.thumbnails.medium.url;
    
            div.append(poster,title);
            document.getElementById("search_containser").append(div);
    })
    
}

displaysearch();

function saveToLocal(elem){
    localStorage.setItem("video",JSON.stringify(elem));
    localStorage.setItem("vidFrom","search");
    window.location.href="video.html";
    
}

async function getData(){
    var search = document.getElementById("search_inp").value;
    var data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${search}&key=AIzaSyA22IVI_MsTX-5sjH_i2H7rC5hBA4EfghM`);
    data= await data.json();
    console.log(data.items);
    localStorage.setItem("search",JSON.stringify(data.items));
    window.location.href="Searched.html"
    // displaysearch();
}