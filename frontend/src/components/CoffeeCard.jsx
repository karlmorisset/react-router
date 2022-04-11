import "@pages/coffee.scss";
import tasse from "@assets/tasse.webp";
import PropTypes from "prop-types";

function CoffeeCard({ coffee, notes }) {
  return (
    <div className="coffeeCard">
      <header>
        <div className="infos">
          <h2 className="intensity">{coffee.intensifier}</h2>
          <h1>{coffee.blend_name}</h1>
        </div>
        <img className="logo" src={tasse} alt="" />
      </header>

      <div className="caracteristics">
        <div className="notes title">
          <p>notes of :</p>
          <p className="panel">{notes}</p>
        </div>

        <div className="origin title">
          <p>Origin :</p>
          <p className="panel">{coffee.origin}</p>
        </div>
      </div>
    </div>
  );
}

CoffeeCard.propTypes = {
  coffee: PropTypes.shape.isRequired,
  notes: PropTypes.string.isRequired,
};

export default CoffeeCard;
