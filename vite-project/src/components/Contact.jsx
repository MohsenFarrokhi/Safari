import {useNavigate} from "react-router-dom";

export const Contact = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    }
    return (
        <div className="contact">
            <div className="middle">
                <p>CONTACT US</p>
                <form onSubmit={handleSubmit}>
                    <div className="login">
                        <div>
                            <input style={{width:375,marginRight:8,marginBottom:4,paddingLeft:8,paddingBlock:12}} type="text" placeholder="Your name"/>
                            <input style={{width:375,paddingBlock:12,paddingLeft:8}} placeholder="Your e-mail" type="text"/>
                        </div>
                        <div>
                            <input style={{width:760,marginRight:4,marginBottom:4,paddingBlock:12,paddingLeft:8}} placeholder="Subject" type="text"/>
                        </div>
                        <div>
                            <textarea style={{width:760,height:120,marginRight:4,marginBottom:4,paddingBlock:12,paddingLeft:8}} placeholder="Message" required></textarea>
                        </div>
                        <div>
                            <button type="submit" className="button">SEND A MESSAGE</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;