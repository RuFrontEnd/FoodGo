import React, { useState, useEffect, useRef } from 'react';
import 'components/articleCard/articleCard.scss';
import photo from 'assets/jpg/article-img1.jpg';

function ArticleCard(props) {
  const {} = props;

  return (
    <>
      {/* 好文推薦 */}
      <section id="articleCard-container">
        {/* 推薦文章卡片 */}
        <div id="articleCard-wrap">
          {/* 圖片 */}
          <img src={photo} id="articleCard-article-photo"></img>
          {/* 文字 */}
          <div id="articleCard-article-text-area">
            <h5 id="articleCard-article-name">Alice Yong</h5>
            <p id="articleCard-article-text">
              以前勤勞的時候天天煮低卡便當，但是發覺實在很累。兩個人的食材份量很難拿捏，還要採買、準備、收拾清潔，後來乾脆直接放棄。你們的出現真的是一大救星~低卡方便又超好吃，偶爾想下廚也有菜箱寄送服務，而且還看得到產銷履歷，真的讓人很安心！
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ArticleCard;
