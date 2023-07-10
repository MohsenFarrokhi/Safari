export const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="middle">
                <p>WILDLIFE EXPERIENCE</p>
                <div className="rating">
                    <input type="radio" id="star10" name="rating" value="10"/>
                    <label htmlFor="star10"></label>
                    <input type="radio" id="star9" name="rating" value="9"/>
                    <label htmlFor="star9"></label>
                    <input type="radio" id="star8" name="rating" value="8"/>
                    <label htmlFor="star8"></label>
                    <input type="radio" id="star7" name="rating" value="7"/>
                    <label htmlFor="star7"></label>
                    <input type="radio" id="star6" name="rating" value="6"/>
                    <label htmlFor="star6"></label>
                    <input type="radio" id="star5" name="rating" value="5"/>
                    <label htmlFor="star5"></label>
                    <input type="radio" id="star4" name="rating" value="4"/>
                    <label htmlFor="star4"></label>
                    <input type="radio" id="star3" name="rating" value="3"/>
                    <label htmlFor="star3"></label>
                    <input type="radio" id="star2" name="rating" value="2"/>
                    <label htmlFor="star2"></label>
                    <input type="radio" id="star1" name="rating" value="1"/>
                    <label htmlFor="star1"></label>
                </div>
                <h4>
                    One of the most interesting facts about Africa is that the length and breadth of this continent are
                    about the same. It measures around 4,660 from north to south and from east to west. Africa is not
                    only the second largest but the second most populated continent as well and houses about 12% of the
                    world population.
                </h4>
            </div>
        </div>
    )
};

export default AboutUs;