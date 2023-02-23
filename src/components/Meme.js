import {useState,useEffect} from 'react';
import './Meme.css';


function Meme(){

    const [meme,setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    function getText(event){
        const {name,value} = event.target
        setMeme((prevMeme)=>(
            {
            ...prevMeme,
            [name]: value
            }
        ))
    }

    const [allMemes, setAllMemes] = useState([])

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data => setAllMemes(data.data.memes))
    },[])

    

    function getMemeImage(){

        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage:url
        }))
    }

    return(
        <main>
            <div className="meme-form">
                <input className="input-text" type="text" placeholder="Top Text" name='topText' value={meme.topText} onChange={getText}/>
                <input className="input-text" type="text" placeholder="Bottom Text" name = 'bottomText' value={meme.bottomText} onChange={getText}/>
                <button className="meme-button" onClick= {getMemeImage}>Get a new meme image  🖼</button>

                <div className='meme'>
                    <img src={meme.randomImage} className = "meme-image"/>
                    <h2 className='text-top'>{meme.topText}</h2>
                    <h2 className='text-bottom'>{meme.bottomText}</h2>
                </div>
                
            </div>
        </main>
    )
}

export default Meme