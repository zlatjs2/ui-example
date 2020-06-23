import React, { useState } from "react";
import ImageUrl0 from "../../images/sample0.jpg";
import ImageUrl1 from "../../images/sample1.jpg";
import ImageUrl3 from "../../images/sample3.jpg";
import ImageUrl4 from "../../images/sample4.jpg";
import NoResult from "../NoResult/NoResult.jsx";
import CardItem from "./CardItem.jsx";

const items = [
  {
    title: "[마카롱] 생일 2단 뚱카롱 케이크",
    label: "아모르파티 마카롱",
    hilight: 10000,
    price: null,
    comment:
      "간식이 너무 귀엽고 먹음직스러워보여서 구매했어요ㅎㅎㅎ 애기가 까다로워서 사료뿐만아니라 간식도 많이 가리는데 진짜 너무 잘먹어서 놀랐어요!! 다 먹으면 또 구매할게요! 감사합니다.",
    score: 5,
    thumbnail: ImageUrl0,
    writer: "seonmi",
  },
  {
    title: "🙂히히 키링🙂",
    label: "sohapp(쏘햅)",
    hilight: 10000,
    price: 20000,
    comment: "심플하고 예뻐욤~!!!",
    score: 4,
    thumbnail: ImageUrl1,
    writer: "seonmi",
  },
  {
    title: "🙂🚗붕붕 자동차 키링🚙",
    label: "sohapp(쏘햅)",
    hilight: 10500,
    price: 20000,
    comment: null,
    score: -1,
    thumbnail: "../../assets/images/sample4.jpg",
    writer: "",
  },
  {
    title: "아빠선물 커플 문구 각인 메탈 스킨 카드 명함 지갑 ",
    label: "트렌즈",
    hilight: 10000,
    price: null,
    comment: null,
    score: 0,
    thumbnail: ImageUrl3,
    writer: "seonmi",
  },
  {
    title: "[할인🙌🏻]정성껏 담근 매콤 파김치 🥬 수제반찬  ",
    label: "파김치프로젝트",
    hilight: 10000,
    price: 20000,
    comment: "잘모르겠어요.. 그냥 브랜드 파김치가 더 맛있는거 같아요 ㅠ",
    score: 1,
    thumbnail: ImageUrl4,
    writer: "seonmi",
  },
];

const CardListExample = () => {
  return (
    <article>
      <h2 className="sc-out">카드 리스트 UI 페이지</h2>
      <section>
        <h3 className="page-title">카드 리스트</h3>
        {items.length !== 0 && items ? (
          <ul className="card-list">
            {items.map((item, idx) => (
              <CardItem
                key={idx}
                title={item.title}
                label={item.label}
                hilight={item.hilight}
                thumbnail={item.thumbnail}
                price={item.price}
                comment={item.comment}
                score={item.score}
                writer={item.writer}
              />
            ))}
          </ul>
        ) : (
          <NoResult message="추천 상품이 없습니다." />
        )}
      </section>
    </article>
  );
};

export default CardListExample;
