import React, { FC } from "react";

/**
 * type for CardFoodDetail component
 */
type CardFoodDetailProps = {
  value: string;
  property: string;
  unit: string;
  srcImg: string;
  altImg: string;
};

/**
 * Functional component of the food type and its properties
 * @param { string } value measurements of properties
 * @param { string } property food property
 * @param { string } unit type of unit
 * @param { string } srcImg Path pointing to the image
 * @param { string } altImg Description of the image
 */
export const CardFoodDetail: FC<CardFoodDetailProps> = ({
  value,
  property,
  unit,
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
          {unit}
        </h4>
        <p className="cardFoodDetail_content_text">{property}</p>
      </div>
    </div>
  );
};
