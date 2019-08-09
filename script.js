$.getJSON("data/motivational-quotes.json", function(json) {
    quotesData = json;
    
document.getElementById("quote").innerHTML = `
<h2>Quote of the Day</h2>
<p class="motivational-quote">
${quotesData[Math.floor(Math.random() * quotesData.length)].quote}
</p>
<p class="author">${quotesData[Math.floor(Math.random() * quotesData.length)].author}</p>
`

})