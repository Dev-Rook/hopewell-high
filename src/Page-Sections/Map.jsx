import React from "react";
import Styles from "../Styles/Page-Section-Styles/Map.module.scss";

const Map = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Mapouter}>
        <div class="gmap_canvas">
          <iframe
            className={Styles.Map}
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Hopewell%20High%20School%20Hanover%20Jamaica&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
