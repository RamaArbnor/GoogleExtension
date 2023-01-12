let json;

const search = document.querySelector("input");
let txt = search.value;

const results = document.getElementById("result-stats")

const div = document.createElement('div');


div.innerText = txt;
results.innerHTML = json
document.body.appendChild(div);

div.className = "output"

// your code here
function postReq() {
    var xhr = new XMLHttpRequest();

    xhr.open("POST", "https://ai-srv.vercel.app/query", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            json = JSON.parse(xhr.responseText);
            console.log(json);
            results.innerHTML = json

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
