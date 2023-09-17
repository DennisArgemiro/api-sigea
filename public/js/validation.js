const params = new URLSearchParams(window.location.search)

const loading = document.querySelector(".loading")
const sucess = document.querySelector(".container-sucess")
const fail = document.querySelector(".container-fail")

const query = params.get("query")
const values = params.get("values")

async function response() {
  const res = await fetch("https://apilarici.dennisargemiro.repl.co", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify({
      query,
      values
    })
  }
  )
  const status = await res.json()
  console.log(status)
  if (status.status != 400) {
    loading.style.display = "none"
    sucess.style.display = "flex"
  } else {
    loading.style.display = "none"
    fail.style.display = "flex"
  }
}
response()