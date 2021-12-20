/ here you need to const the songs in the playlist and the timing so if the user clicks on the song name, it will automatically embed it on the screen and autoplay it. Note: This function is called onto in the HTML so you can't put the short form name here because that will mess up the HTML*
const songs = {
  "Christmas Song": "0",
  "Baby It's Cold Outside": "212",
  "The Most Wonderful Time Of The Year": "374",
  "Last Christmas": "525",
  "Little Saint Nick": "808",
  "All I Want For Christmas": "940"
  }
*/ 
const songsDOM = document.querySelector(".songs")
const embed = document.getElementById("embed")
            
Object.keys(songs).map(song_title => {
  const seconds = songs[song_title]
  const outerElem = document.createElement("p")
  const link = document.createElement("a")
  link.innerHTML = song_title
  link.style = "cursor: pointer"
  link.onclick = () => {
// after /embed/ put the youtube video url with songs
    embed.src = `https://www.youtube.com/embed/TtY9eRayseg?start=${seconds}&autoplay=1`
 }
  outerElem.appendChild(link)
  songsDOM.appendChild(outerElem)
})
