import {React, useCallback, useEffect, useState} from 'react'
import Quote from './Quote';
import Author from './Author';

const GetQuotes = () => {
    const [quotes, setQuotes] = useState({})
    let url = "https://api.realinspire.live/v1/quotes/random";
    
    const getRandomQuote = useCallback(() => {
        //fetch quote from APi
        fetch(url)
        //Convert response to JSON
        .then(res => res.json())
        //Get Data and console log it
        .then(data => setQuotes(data))
    }, [url])

    useEffect(() => {
        getRandomQuote()
    },[getRandomQuote])
    
    
    return (
        <div className='container'>
            {/* Show Quote in component. quotes is the array, 
            [0] is the index in the array in which we want to call
            .quote is the key in the json (quotes) that we want to display 
            
            If quotes is nonexistent or undefined, display Loading, otherwise, show the quote*/}
            <div className='quoteBox'>
                {!quotes || quotes[0]?.content===undefined?<Quote quote="Loading..."/>:<Quote quote={quotes[0]?.content}/>}
            </div>
            
            <div className='authorBox'>
                {!quotes || quotes[0]?.author===undefined?<Author author="Loading..."/>:<Author author={quotes[0]?.author}/>}
            </div>
            
            
            <div className='buttonBox'>
                <button onClick={getRandomQuote}><h3>Get New Quote</h3></button>
            </div>
            
        </div>
    )
}

export default GetQuotes