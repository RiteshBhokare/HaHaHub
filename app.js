let btn = document.querySelector("button");
let url = "https://v2.jokeapi.dev/joke/Any?";
let p = document.querySelector("#jokee");

btn.addEventListener("click", async()=>{
    let joke = await getJokes();
    p.classList.add("fade")
    p.innerText = joke;
})

async function getJokes(){
    try{
        p.classList.remove("fade");
        let res = await axios.get(url);
        if(res.data.type == "twopart"){
            let question = res.data.setup;
            let answer = res.data.delivery;
            return question +"\n"+ answer;
        }else{
            return res.data.joke;
        }
    }
    catch(e){
        console.log("error - ", e);
        return "No Joke found";
    }
}
