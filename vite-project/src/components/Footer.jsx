export const Footer = () => {
    return (
        <div className="footer">
            <span>© 2023 BeSafari - BeTheme. All Rights Reserved.</span>
            <div className="icons">
                <a href="https://www.facebook.com/" target="_blank">
                    <img className="icons" src="../../public/icons8-facebook.svg" alt="facebook-icon"/>
                </a>
                <a href="https://instagram.com" target="_blank">
                    <img className="icons" src="../../public/icons8-instagram.svg" alt="instagram"/>
                </a>
                <a href="https://maps.google.com" target="_blank">
                    <img className="icons" src="../../public/icons8-google-maps-old.svg" alt="google-map"/>
                </a>
                <a href="https://earth.google.com" target="_blank">
                    <img className="icons" src="../../public/icons8-google-earth.svg" alt="google-earth"/>
                </a>
            </div>
        </div>
    )
};

export default Footer;