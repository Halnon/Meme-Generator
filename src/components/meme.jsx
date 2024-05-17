import React from 'react';

export default function Meme() {
    return (
        <form className="form--container">
            <div className="labels--container">
                <p className="label--title">Top text</p>
                <label>
                    <input placeholder="Shut up" />
                </label>
                <p className="label--title">Bottom text</p>
                <label>
                    <input placeholder="and take my money" />
                </label>
            </div>
            <input type="submit" value="Get a new meme image" className="submit--input" />
        </form>
    )
}