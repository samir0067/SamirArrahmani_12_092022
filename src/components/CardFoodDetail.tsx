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
  backgroundIcon?: string;
};

/**
 * Functional component of the food type and its properties
 * @param { string } property Food property
 * @param { string } unit Type of unit
 * @param { string } srcImg Path pointing to the image
 * @param { string } altImg Description of the image
 * @param { number } value Measurements of properties
 * @param { string } backgroundIcon Background to the icon
 */
export const CardFoodDetail: FC<CardFoodDetailProps> = ({
  value,
  property,
  unit,
  srcImg,
  altImg,
  backgroundIcon,
}: CardFoodDetailProps) => {
  return (
    <div className="cardFoodDetail">
      <div className={`cardFoodDetail_container ${backgroundIcon}`}>
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

CardFoodDetail.defaultProps = {
  backgroundIcon: "backgroundIconRed",
};
