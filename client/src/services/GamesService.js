const baseURL = 'http://localhost:5000/api/'

const FootballService = {
  getCard() {
    return fetch(baseURL + "football/")
    .then(res => res.json())
  },

  postCard(payload) {
    return fetch(baseURL + "football/", {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },

  deleteCard(id) {
    return fetch(baseURL + "football/" + id, {
      method: 'DELETE'
    })
  }
}

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

export default FootballService;
export default SimpsonsService;