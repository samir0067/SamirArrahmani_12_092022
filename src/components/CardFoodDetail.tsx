import React, { FC } from "react";

/**
 * type for CardFoodDetail component
 */
type CardFoodDetailProps = {
  property: string;
  unit: string;
  srcImg: string;
  altImg: string;
  value?: number;
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
      <div className="cardFoodDetail_container">
        <img src={srcImg} alt={altImg} className="cardFoodDetail_container_img" />
      </div>
      <div className="cardFoodDetail_content">
        <h4>
          {value}
          {unit}
        </h4>
        <span>{property}</span>
      </div>
    </div>
  );
};
