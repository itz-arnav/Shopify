import React from 'react'
import { useNavigate } from 'react-router-dom';
import css from "../../assets/css/HomePage/HomePage.module.css"
import CompanyLogo from "../../assets/images/companyLogo.avif"
import GooglePlayLogo from "../../assets/images/googleplay.png"
import AppleStoreLogo from "../../assets/images/app-store.png"
import waveSvg from "../../assets/images/wave.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const HomePage = () => {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate('/signup');
    }

    const handleLogin = () => {
        navigate('/login');
    }

    return (
        <>
            <div className={css.homePageContainer}>
                <div className={css.headerSection}>
                    <div className={css.headerMainContainer}>
                        <div className={css.headerLeftSection}>
                            <img src={CompanyLogo} alt="Company Logo" className={css.headerCompanyLogo} />
                            <div className={css.headerListSection}>
                                <ul className={css.headerItemList}>
                                    <li className={css.headerIndividualListItem}>Discover</li>
                                    <li className={css.headerIndividualListItem}>Pricing</li>
                                    <li className={css.headerIndividualListItem}>FAQ</li>
                                </ul>
                            </div>
                        </div>
                        <div className={css.headerRightSection}>
                            <button className={css.headerLoginButton} onClick={handleLogin}>Login</button>
                            <button className={css.headerSignupButton} onClick={handleSignup}>Sign Up</button>
                        </div>
                    </div>
                </div>

                <div className={css.homePageContentSection}>
                    <div className={css.heroSection}>
                        <div className={css.heroTitleLarge}>Launch your site in seconds</div>
                        {/* <button className={css.homePageButton}>
                            <span>Click Me</span>
                            <span className={css.buttonLoader}></span>
                        </button> */}
                        <div className={css.submitFormSection}>
                            <div className={css.linkStartContent}>
                                <div className={css.linkStartText}>cppqt.dev/</div>
                                <input type="text" name="userProfileLink" id="" className={css.inputUserProfile} />
                            </div>
                            <div className={css.inputSubmitButton}>
                                <div className={css.inputSubmitButtonText}>Create Profile</div>
                            </div>
                        </div>
                        <div className={css.smallDetails}>Set up a profile, create content and start earning!</div>
                    </div>

                </div>

                <div className={css.footerSection}>
                    <img src={waveSvg} alt="Test" className={css.footerHorizontalBar} />
                    <div className={css.footerIconsContainer}>
                        <img src={GooglePlayLogo} alt="GooglePlayLogo" className={css.footerStoreIcon} />
                        <img src={AppleStoreLogo} alt="AppleStoreLogo" className={css.footerStoreIcon} />
                    </div>
                    <ul className={css.footerListSection}>
                        <li className={css.footerListItem}>Features</li>
                        <li className={css.footerListItem}>Help Center</li>
                        <li className={css.footerListItem}>Terms of Use</li>
                        <li className={css.footerListItem}>Privacy Policy</li>
                        <li className={css.footerListItem}>FAQ</li>
                    </ul>
                    <div className={css.footerSocialContainer}>
                        <FontAwesomeIcon icon={faInstagram} className={css.footerFontIcon} />
                        <FontAwesomeIcon icon={faTwitter} className={css.footerFontIcon} />
                        <FontAwesomeIcon icon={faYoutube} className={css.footerFontIcon} />
                        <FontAwesomeIcon icon={faLinkedin} className={css.footerFontIcon} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage