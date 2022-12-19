import React from 'react'
import Styles from "../Styles/Page-Section-Styles/Map.module.scss"

const Map = () => {
  return (
    <div className={Styles.Section}>
        <div style="max-width:100%;overflow:hidden;color:red;width:500px;height:500px;"><div id="display-google-map" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Hopewell+High+School+Hanover+JM&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="embedded-map-code" rel="nofollow" href="https://www.bootstrapskins.com/themes" id="grab-map-authorization">premium bootstrap themes</a><style></style></div>
    </div>
  )
}

export default Map