import './Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <div className="Footer_content">
                <div className="Footer_left">
                    <h1 className="Logo">Rewards & Review</h1>
                    <p className="Footer_subtitle">
                        Get started noew try our product
                    </p>
                    <div className="Search_foot">
                        <input
                            type="text"
                            className="input_foot"
                            placeholder="Enter your email here"
                        />
                        <img
                            src="/arrow_footer.svg"
                            alt="Search"
                            className="search_foot_icon"
                        />
                    </div>
                </div>

                <div className="Footer_links">
                    <div className="link_column">
                        <h2>Support</h2>
                        <p>Help centre</p>
                        <p>Account information</p>
                        <p>About</p>
                        <p>Contact us</p>
                    </div>

                    <div className="link_column">
                        <h2>Help and Solution</h2>
                        <p>Talk to support</p>
                        <p>Support docs</p>
                        <p>System status</p>
                        <p>Covid responde</p>
                    </div>

                    <div className="link_column">
                        <h2>Product</h2>
                        <p>Update</p>
                        <p>Security</p>
                        <p>Beta test</p>
                        <p>Pricing product</p>
                    </div>
                </div>
            </div>

            <div className="Footer_bottom">
                <p>© 2023 Rewards&Review Inc. Copyright and rights reserved</p>
                <div className="Footer_legal">
                    <p>Terms and Conditions</p>
                    <span>•</span>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
