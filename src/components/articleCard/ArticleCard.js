import React from 'react';
import 'components/articleCard/articleCard.scss';

function ArticleCard(props) {
  const {
    className,
    style,
    photo,
    author = 'Author Name',
    content = 'content',
  } = props;



  return (
    <section id="articleCard-container" className={className} style={style}>
      <div id="articleCard-wrap">
        <img src={photo} id="articleCard-article-photo"></img>
        <div id="articleCard-article-text-area">
          <h5 id="articleCard-article-name">{author}</h5>
          <p id="articleCard-article-text">{content}</p>
        </div>
      </div>
    </section>
  );
}

export default ArticleCard;
