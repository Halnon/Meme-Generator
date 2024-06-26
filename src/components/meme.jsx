import React from "react"

export default function Meme() {

    function handleClick() {

    }

    return (
        <main>
            <div className="form">
                <label className="input--labels">Top text
                    <input 
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                    />
                </label>
                <label className="input--labels">Bottom text
                    <input 
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                    />
                </label>
                <button 
                    className="form--button"
                    onClick={handleClick}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}