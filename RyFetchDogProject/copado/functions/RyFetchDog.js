fetch(
  'https://api.giphy.com/v1/gifs/search?q=dogs&api_key=cwxQISXRJJ5EO5nAW0kfohP1RSmK2PSE&rating=g')
  .then(response => response.json())
  .then(json =>
    // log third dog's GIF title
    console.log(json.data[2].title)
  )