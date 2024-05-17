import React from 'react';

export default function Meme() {
    return (
        <form className="form--container">
            <div className="labels--container">
                <div id="label--container1">
                    <p className="label--title">Top text</p>
                    <label>
                        <input placeholder="Shut up" />
                    </label>
                </div>
                <div id="label--container2">
                    <p className="label--title">Bottom text</p>
                    <label>
                        <input placeholder="and take my money" />
                    </label>
                </div>

            </div>
            <input type="submit" value="Get a new meme image" className="submit--input" />
        </form>
    )
}