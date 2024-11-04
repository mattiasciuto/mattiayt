import React, { useState } from 'react';
import './App.css';

function App() {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    const divideText = () => {
        const sentences = inputText.split(/(?<=[.?!])\s+/); // Divide in frasi usando punteggiatura
        let result = '';

        sentences.forEach(sentence => {
            const words = sentence.trim().split(/\s+/); // Dividi in parole
            if (words.length <= 30) {
                result += sentence + '\n'; // Aggiungi la frase se ha 30 parole o meno
            } else {
                // Dividi la frase in due parti più o meno uguali
                const midPoint = Math.floor(words.length / 2);
                let firstPart = words.slice(0, midPoint);
                let secondPart = words.slice(midPoint);

                // Cerca una virgola per una divisione migliore
                const commaIndex = secondPart.indexOf(',') + midPoint;
                if (commaIndex > midPoint) {
                    firstPart = words.slice(0, commaIndex);
                    secondPart = words.slice(commaIndex);
                }

                result += firstPart.join(' ') + '\n' + secondPart.join(' ') + '\n'; // Aggiungi le due parti
            }
        });

        setOutputText(result.trim()); // Imposta il risultato
    };

    return (
        <div className="container">
            <h1>suca</h1>
            <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Inserisci il tuo testo qui..."
                rows="10"
            />
            
            <button onClick={divideText}>Dividi Testo</button>
            <h2>Risultato</h2>
            <pre>{outputText}</pre>
        </div>
    );
}

export default App;
