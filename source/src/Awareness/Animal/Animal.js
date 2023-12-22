import "./animal.css"


function Animal({ animals }) {
    console.log(100, animals );
    const playSound = (soundUrl) => {
        const audio = new Audio(soundUrl);
        audio.play();
    };
    
    
    if (!Array.isArray(animals )) {
        return 
        <div></div>;
    }
    
    return (
        <div>
            <h1>Animals Learning</h1>
            <div className="bttn">
                {animals .map((animal ) => (
                    <div key={animal.id} name={animal.word} className="tni" onClick={() => playSound(animal.wordSound)} > 
                        <img src={animal.image} alt="Animal" />
                        
                    </div>
                ))}
            </div>
        </div>
        
    );
}

export default Animal;