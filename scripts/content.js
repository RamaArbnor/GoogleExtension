let json;

const search = document.querySelector("input");
let txt = search.value;

const results = document.getElementById("result-stats")
const searchRes = document.getElementById("search")


const div = document.createElement('pre');
div.innerHTML = "Loading .. ."
div.className = "snippet "


// const resultStats = document.getElementById("result-stats");
// results.insertAdjacentHTML("afterend", "<p>Added with js</p>");

searchRes.prepend(div)

// results.innerHTML = json



// your code here
function postReq() {
    var xhr = new XMLHttpRequest();

    xhr.open("POST", "https://ai-srv.vercel.app/query", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            json = JSON.parse(xhr.responseText);
            console.log(json);
            // results.innerHTML = json
            div.innerHTML = json.trim()

        }
    };

    var data = {
        prompt: search.value,
        max_tokens: 4080
    };

    xhr.send(JSON.stringify(data));

}

postReq()

// document.body.style.backgroundColor = "red";
