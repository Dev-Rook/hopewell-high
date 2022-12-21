import React from "react";
import Styles from "../Styles/Page-Section-Styles/Map.module.scss";

const Map = () => {
  let MapUrl = `https://maps.google.com/maps?q=Hopewell%20High%20School%20Hanover%20Jamaica&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={Styles.Section}>
      <div className={Styles.Mapouter}>
        <div className="gmap_canvas">
          <iframe
            title="Map"
            className={Styles.Map}
            id="gmap_canvas"
            src={MapUrl}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
