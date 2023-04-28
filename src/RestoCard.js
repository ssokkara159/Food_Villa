import { IMG_URL_CARD } from "./Components/Constants/restoData";
import { restoData } from "./Components/Constants/restoData";

const RestoCard = ({ props }) => {
  const { name, cloudinaryImageId, cuisines, avgRating } = props;

  return (
    <div className="card-container">
      <div className="resto-image">
        <img src={IMG_URL_CARD + cloudinaryImageId}></img>
      </div>
      <div className="resto-name">
        <h2>{name}</h2>
      </div>
      <div className="cuisines">
        <span>{cuisines.join()}</span>
      </div>
      <div className="rating">
        <h4>{avgRating} Stars</h4>
      </div>
    </div>
  );
};
export default RestoCard;
