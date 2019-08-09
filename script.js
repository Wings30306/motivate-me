$.getJSON("data/motivational-quotes.json", function(json) {
    quotesData = json;

quote = quotesData[Math.floor(Math.random() * quotesData.length)]
    
document.getElementById("quote").innerHTML = `
<p class="motivational-quote">
${quote.quote}
</p>
<p class="author">${quote.author}</p>
`

})