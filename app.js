const JokeSection = document.querySelector("#JokeSection");
const btn = document.querySelector("#submitButton");

const key = "gXyL15PS59uJG11ibhvJSg==AtjsFw9Aw2CJKbsO";
const config = {
    method: "GET",
    headers: {
        "X-Api-Key": key,
    },
};
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const tellAJoke = async () => {
    JokeSection.innerText = "Updating..."
    btn.disabled = true;
    btn.innerText = "Loading..."
    const res = await fetch(apiUrl, config);
    const data = await res.json();
    JokeSection.innerText = data[0].joke;
    btn.disabled = false;
    btn.innerText = "Tell me a joke";
    console.log(data[0].joke);
};

btn.addEventListener("click", () => {
    tellAJoke();
});