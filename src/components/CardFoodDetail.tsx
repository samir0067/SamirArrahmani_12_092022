import React, { FC } from "react";

type CardFoodDetailProps = {
  value: string;
  property: string;
  feature: string;
  srcImg: string;
  altImg: string;
};

/**
 *
 * @param { string } value
 * @param { string } property
 * @param { string } feature
 * @param { string } srcImg
 * @param { string } altImg
 * @constructor
 */
export const CardFoodDetail: FC<CardFoodDetailProps> = ({
  value,
  property,
  feature,
  srcImg,
  altImg,
}: CardFoodDetailProps) => {
  return (
    <div className="cardFoodDetail">
      <div className="cardFoodDetail_containing_img">
        <img src={srcImg} alt={altImg} className="cardFoodDetail_containing_img" />
      </div>
      <div className="cardFoodDetail_content">
        <h4 className="cardFoodDetail_content_title">
          {value}
          {property}
        </h4>
        <p className="cardFoodDetail_content_text">{feature}</p>
      </div>
    </div>
  );
};
