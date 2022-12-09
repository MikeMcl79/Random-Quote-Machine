import React, {useEffect, useState} from 'react';
import './App.scss';
import Colors_Array from './colorArray';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'





let quoteDBUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"



function App() {
  
  const [quote, setQuote] = useState(" In moments of crisis panic does nothing. Harness it let it serve you.")
  const [author, setAuthor] = useState("Kratos")
  const [randomNumber, setRandomNumber] = useState(0)
  const [quotesArray, setQuotesArray] = useState(null)
  const [accentColor, setAccentColor] = useState('#282c34')
  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
  }

  useEffect(() => {
   fetchQuotes(quoteDBUrl)
  }, [])
  const getRandomeQuote = () => {
    let randomInteger = Math.floor(quotesArray.length *Math.random())
    setRandomNumber(randomInteger)
    setAccentColor(Colors_Array[randomInteger])
    setQuote(quotesArray[randomInteger].quote)
    setAuthor(quotesArray[randomInteger].author)
  }
  return (
    <div className="App">
      <header className="App-header" style={
        {backgroundColor: accentColor}}>
        <div id='quote-box' style={
        {color: accentColor}}>
          
         
        <p id='text'>
        "{quote}"
        </p>
        <p id='author'>- {author}</p>
        <div className='buttons'>
        <div className='button'>
        <a id='tweet-quote' style={
        {backgroundColor: accentColor}}  href={encodeURI('http://www.twitter.com/intent/tweet?text=${quote} -${afuthor}')}><FontAwesomeIcon icon={faTwitter} /></a>
        </div>
        <button id='new-quote' style={
        {backgroundColor: accentColor}} onClick={()=>getRandomeQuote()}>Generate A Random Quote</button>
        
        </div>
        </div>
        </header>
    </div>
  );
}

export default App;
