const photographerTemplate = (data) => {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

const getUserCardDOM = () => {
        const article = document.createElement( 'article' );

    // création partie link clicable avec photo et nom
        const linkPagePhotographer = document.createElement( 'a' );
        linkPagePhotographer.href = "#"; //voir pour mettre le lien de la page photographe
        const img = document.createElement( 'img' );
        img.src = picture;
        img.alt = name;
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

    // création partie info photographe
        const divTextContent = document.createElement( 'div' );
        const h3 = document.createElement( 'h3' );
        h3.textContent = `${city}, ${country}`;
        const pTagline = document.createElement( 'p' );
        pTagline.textContent = tagline;
        const pPrice = document.createElement( 'p' );
        pPrice.textContent = `${price}€ / jour`;

    //  Ajout des élèments à la structure HTML
        article.appendChild(linkPagePhotographer);
        linkPagePhotographer.appendChild(img);
        linkPagePhotographer.appendChild(h2)

        article.appendChild(divTextContent);
        divTextContent.appendChild(h3);
        divTextContent.appendChild(pTagline);
        divTextContent.appendChild(pPrice);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}