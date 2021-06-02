const baseURL = 'http://localhost:5000/api/'

const SimpsonsService = {
  getCard() {
    return fetch(baseURL + "simpsons/")
    .then(res => res.json())
  },

  postCard(payload) {
    return fetch(baseURL + "simpsons/", {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },

  deleteCard(id) {
    return fetch(baseURL + "simpsons/" + id, {
      method: 'DELETE'
    })
  }
}

export default SimpsonsService;