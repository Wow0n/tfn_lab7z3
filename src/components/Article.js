import React from "react";

export default function Article({name, description, img, img_alt}) {
    return (
        <article>
            <h2>{name}</h2>
            <img src={img} alt={img_alt}/>
            <p>{description}</p>
        </article>
    )
}