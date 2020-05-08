import React from 'react';
import Fb from "./images/fb.png";
import Lin from "./images/in.png";
import Insta from "./images/insta.png";
import Tw from "./images/tw.png";
import Apple from "./images/appleDownload.png";
import Android from "./images/androidDownload.png";
import "./footer.css";

const Footer = () => {
    return(
        <div className="footer w-100 row px-auto mt-2 mx-0 pt-4">
                <div className="col-3 h-75 pt-3 pl-5 pb-0">
                    <h5 style={{ color: 'grey' }}>Company</h5>
                    <ul className="pl-0">
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div className="col-3 h-75 pt-3 pl-5 pb-0">
                    <h5 style={{ color: 'grey' }}>Work with us</h5>
                    <ul className="pl-0">
                        <li>Authors</li>
                        <li>Advertise</li>
                        <li>Authors and ads blog</li>
                        <li>API</li>
                    </ul>
                </div>
                <div className="col-3 h-75 pt-3 pl-5">
                    <h5 style={{ color: 'grey' }}>Connect</h5>
                    <div className="row pb-0">
                        <a href="https://www.facebook.com/Goodreads/"><img alt="" src={Fb} width="40" height="40" className="mb-3" /></a>{' '}
                        <a href="https://www.twitter.com/goodreads"><img alt="" src={Tw} width="40" height="40" className="mb-3" /></a>{' '}
                        <a href="https://www.linkedin.com/company/goodreads-com/"><img alt="" src={Lin} width="40" height="40" className="mb-3" />{' '}</a>
                        <a href="https://www.instagram.com/goodreads"><img alt="" src={Insta} width="40" height="40" className="mb-3" /></a>{' '}
                    </div>
                </div>
                <div className="col-3 h-75 pt-3 pl-5 ">
                    <a href="https://apps.apple.com/app/apple-store/id355833469"><img className="mb-0" alt="" src={Apple} width="140" height="40" /></a>{' '}
                    <a href="https://play.google.com/store/apps/details?id=com.goodreads&utm_source=mw_footer&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"><img className="mb-0" alt="" src={Android} width="140" height="40" /></a>{' '}
                    <ul className="pl-0 mb-0 ml-2">
                        <li>© 2020 Goodreads, Inc.</li>
                        <li>Mobile version</li>
                    </ul>
                </div>

            </div>
    )
}

export default Footer;