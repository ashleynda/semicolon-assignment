import React from "react";
import logo from "../../images/Tranxact on.png";
import style from "./Footer.module.css"


const Footer = () => {
    return (
        <footer>

            {/* <div className={style.footercon}> */}
            <div className={style.row1}>
                <div className={style.xlogo1}>
                    {/* <img className="xlogo3" src="Tranxact logoo.png" /> */}
                    <img className={style.xlogo3} src={logo} alt="Tranxactrust logo" />
                    {/* <img  className="xlogo3" src="Tranxactrust Xlogo.png" />
                            <img className="xlogo2" src="Tranxactrust.png" /> */}
                </div>
                <div className={style.foot}>
                    <div className={style.footerheader}>
                        <p>Products</p>
                    </div>
                    <p className={style.footercontent}>PayTrusty -- TrustMonie (escrow suite)</p>
                    {/* <p className={style.footercontent}>TrxtPay (crypto with escrow)</p> */}
                    <p className={style.footercontent}>Voucher</p>
                    <p className={style.footercontent}>Investrust</p>
                    <p className={style.footercontent}>Reverse Payment</p>
                    <p className={style.footercontent}>Collect Payment</p>
                    <p className={style.footercontent}>Contractrust (Govt suite)</p>
                    <p className={style.footercontent}>Shop</p>
                </div>

                <div className={style.foot}>
                    <div className={style.footerheader}>
                        <p>Process payments</p>
                    </div>
                    <p className={style.footercontent}>Smart Spend*</p>
                    <p className={style.footercontent}>Payment Link</p>
                    <p className={style.footercontent}>Tranxactrust POS</p>
                    <p className={style.footercontent}>Offline Payment</p>
                    <p className={style.footercontent}>Payment Gateway</p>
                    <p className={style.footercontent}>QR Codes</p>
                </div>

            </div>

            <div className={style.row1}>
                <div className={style.foot}>
                    <div className={style.footerheader}>
                        <p>Payments & Deliveries</p>
                    </div>
                    <p className={style.footercontent}>Voucher</p>
                    <p className={style.footercontent}>Express Delivery Protocol (EDP)</p>
                </div>
                <div className={style.foot}>
                    <div className={style.footerheader}>
                        <p>Developers</p>
                    </div>
                    <p className={style.footercontent}>Documents</p>
                    <p className={style.footercontent}>API Reference</p>
                    <p className={style.footercontent}>Integration</p>
                    <p className={style.footercontent}>Chargeback Guide</p>
                    <p className={style.footercontent}>Settlement Guide</p>
                </div>

                <div className={style.foot}>
                    <div className={style.footerheader}>
                        <p>Company</p>
                    </div>
                    <p className={style.footercontent}>About Us</p>
                    <p className={style.footercontent}>Career</p>
                    <p className={style.footercontent}>Terms of Use</p>
                    <p className={style.footercontent}>Privacy Policy</p>
                    <p className={style.footercontent}>Partners</p>
                    <p className={style.footercontent}>White Paper</p>
                </div>

            </div>

            <div className={style.row1}>

                <div className={style.foot}>
                    <div className={style.footerheader}>
                        <p>Become a Partner</p>
                    </div>
                    <p className={style.footercontent}>Logistics agency</p>
                    <p className={style.footercontent}>Refer and Earn</p>
                    <p className={style.footercontent}>Transact and Earn</p>
                    <p className={style.footercontent}>Onboarding APIs</p>
                    <p className={style.footercontent}>Real Estate payment broker</p>
                </div>

                <div className={style.foot}>
                    <div className={style.footerheader}>
                        <p>Resources</p>
                    </div>
                    <p className={style.footercontent}>Blog</p>
                    <p className={style.footercontent}>Customer Journey</p>
                    <p className={style.footercontent}>Happenings</p>
                    <p className={style.footercontent}>Chargeback Guide</p>
                    <p className={style.footercontent}>Settlement Guide</p>
                </div>


                <div className={style.foot}>
                    <div className={style.footerheader}>
                        <p>Help and Support</p>
                    </div>
                    <p className={style.footercontent}>Support</p>
                    <p className={style.footercontent}>Know Us</p>

                    <div className={style.logolink}>
                        <svg className={style.brandlogo} width="40" height="41" viewBox="0 0 40 41" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <a href="support@tranxactrust.com">support@tranxactrust.com</a>
                            <path
                                d="M33.3334 30.4998H30V15.9165L20 22.1665L10 15.9165V30.4998H6.66671V10.4998H8.66671L20 17.5832L31.3334 10.4998H33.3334M33.3334 7.1665H6.66671C4.81671 7.1665 3.33337 8.64984 3.33337 10.4998V30.4998C3.33337 31.3839 3.68456 32.2317 4.30968 32.8569C4.93481 33.482 5.78265 33.8332 6.66671 33.8332H33.3334C34.2174 33.8332 35.0653 33.482 35.6904 32.8569C36.3155 32.2317 36.6667 31.3839 36.6667 30.4998V10.4998C36.6667 9.61578 36.3155 8.76794 35.6904 8.14281C35.0653 7.51769 34.2174 7.1665 33.3334 7.1665Z"
                                fill="#6E7480" />
                        </svg>

                        <svg className={style.brandlogo} width="40" height="41" viewBox="0 0 40 41" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20 3.8335C17.8113 3.8335 15.6441 4.26459 13.622 5.10217C11.5999 5.93975 9.76257 7.16741 8.21493 8.71505C5.08932 11.8407 3.33337 16.0799 3.33337 20.5002C3.33337 27.8668 8.11671 34.1168 14.7334 36.3335C15.5667 36.4668 15.8334 35.9502 15.8334 35.5002V32.6835C11.2167 33.6835 10.2334 30.4502 10.2334 30.4502C9.46671 28.5168 8.38337 28.0002 8.38337 28.0002C6.86671 26.9668 8.50004 27.0002 8.50004 27.0002C10.1667 27.1168 11.05 28.7168 11.05 28.7168C12.5 31.2502 14.95 30.5002 15.9 30.1002C16.05 29.0168 16.4834 28.2835 16.95 27.8668C13.25 27.4502 9.36671 26.0168 9.36671 19.6668C9.36671 17.8168 10 16.3335 11.0834 15.1502C10.9167 14.7335 10.3334 13.0002 11.25 10.7502C11.25 10.7502 12.65 10.3002 15.8334 12.4502C17.15 12.0835 18.5834 11.9002 20 11.9002C21.4167 11.9002 22.85 12.0835 24.1667 12.4502C27.35 10.3002 28.75 10.7502 28.75 10.7502C29.6667 13.0002 29.0834 14.7335 28.9167 15.1502C30 16.3335 30.6334 17.8168 30.6334 19.6668C30.6334 26.0335 26.7334 27.4335 23.0167 27.8502C23.6167 28.3668 24.1667 29.3835 24.1667 30.9335V35.5002C24.1667 35.9502 24.4334 36.4835 25.2834 36.3335C31.9 34.1002 36.6667 27.8668 36.6667 20.5002C36.6667 18.3115 36.2356 16.1442 35.398 14.1221C34.5605 12.1 33.3328 10.2627 31.7852 8.71505C30.2375 7.16741 28.4002 5.93975 26.3781 5.10217C24.356 4.26459 22.1887 3.8335 20 3.8335Z"
                                fill="#6E7480" />
                        </svg>

                        <svg className={style.brandlogo} width="45" height="45" viewBox="0 0 45 45" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.625 3.75H30.375C36.375 3.75 41.25 8.625 41.25 14.625V30.375C41.25 33.2592 40.1042 36.0253 38.0648 38.0648C36.0253 40.1042 33.2592 41.25 30.375 41.25H14.625C8.625 41.25 3.75 36.375 3.75 30.375V14.625C3.75 11.7408 4.89576 8.97467 6.93521 6.93521C8.97467 4.89576 11.7408 3.75 14.625 3.75ZM14.25 7.5C12.4598 7.5 10.7429 8.21116 9.47703 9.47703C8.21116 10.7429 7.5 12.4598 7.5 14.25V30.75C7.5 34.4812 10.5187 37.5 14.25 37.5H30.75C32.5402 37.5 34.2571 36.7888 35.523 35.523C36.7888 34.2571 37.5 32.5402 37.5 30.75V14.25C37.5 10.5187 34.4812 7.5 30.75 7.5H14.25ZM32.3438 10.3125C32.9654 10.3125 33.5615 10.5594 34.001 10.999C34.4406 11.4385 34.6875 12.0346 34.6875 12.6562C34.6875 13.2779 34.4406 13.874 34.001 14.3135C33.5615 14.7531 32.9654 15 32.3438 15C31.7221 15 31.126 14.7531 30.6865 14.3135C30.2469 13.874 30 13.2779 30 12.6562C30 12.0346 30.2469 11.4385 30.6865 10.999C31.126 10.5594 31.7221 10.3125 32.3438 10.3125ZM22.5 13.125C24.9864 13.125 27.371 14.1127 29.1291 15.8709C30.8873 17.629 31.875 20.0136 31.875 22.5C31.875 24.9864 30.8873 27.371 29.1291 29.1291C27.371 30.8873 24.9864 31.875 22.5 31.875C20.0136 31.875 17.629 30.8873 15.8709 29.1291C14.1127 27.371 13.125 24.9864 13.125 22.5C13.125 20.0136 14.1127 17.629 15.8709 15.8709C17.629 14.1127 20.0136 13.125 22.5 13.125ZM22.5 16.875C21.0082 16.875 19.5774 17.4676 18.5225 18.5225C17.4676 19.5774 16.875 21.0082 16.875 22.5C16.875 23.9918 17.4676 25.4226 18.5225 26.4775C19.5774 27.5324 21.0082 28.125 22.5 28.125C23.9918 28.125 25.4226 27.5324 26.4775 26.4775C27.5324 25.4226 28.125 23.9918 28.125 22.5C28.125 21.0082 27.5324 19.5774 26.4775 18.5225C25.4226 17.4676 23.9918 16.875 22.5 16.875Z"
                                fill="#6E7480" />
                        </svg>

                        <svg className={style.brandlogo} width="40" height="41" viewBox="0 0 40 41" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_119_34)">
                                <path
                                    d="M40 5.37072C38.5022 6.1835 36.9134 6.717 35.2866 6.95349C36.9811 5.70948 38.2822 3.73952 38.8948 1.39235C37.284 2.56323 35.5216 3.38819 33.6838 3.83158C32.1867 1.87809 30.0541 0.657227 27.6936 0.657227C23.1614 0.657227 19.4869 5.1579 19.4869 10.7089C19.4869 11.4968 19.5595 12.2639 19.6994 12.9998C12.8791 12.5805 6.83219 8.57876 2.78453 2.49723C2.07828 3.98182 1.67359 5.70871 1.67359 7.55062C1.67359 11.0381 3.1225 14.1146 5.32438 15.9173C4.02117 15.8673 2.74664 15.4362 1.60719 14.6599C1.60672 14.702 1.60672 14.7441 1.60672 14.7864C1.60672 19.6567 4.43547 23.7194 8.18953 24.6429C6.98107 25.0454 5.71348 25.1044 4.48359 24.8151C5.52781 28.8086 8.55859 31.7146 12.1495 31.796C9.34094 34.4919 5.80234 36.0989 1.95766 36.0989C1.29516 36.0989 0.642031 36.0513 0 35.9585C3.63172 38.8105 7.94531 40.4746 12.5797 40.4746C27.6745 40.4746 35.9287 25.1577 35.9287 11.8746C35.9287 11.4387 35.9209 11.0052 35.905 10.5742C37.5116 9.15155 38.8983 7.3895 40 5.37072Z"
                                    fill="#6E7480" />
                            </g>
                            <defs>
                                <clipPath id="clip0_119_34">
                                    <rect width="40" height="40" fill="white" transform="translate(0 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>

                        <svg className={style.brandlogo} width="40" height="41" viewBox="0 0 40 41" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_119_38)">
                                <path
                                    d="M40 20.5C40 9.45437 31.0456 0.5 20 0.5C8.95437 0.5 0 9.45422 0 20.5C0 30.4825 7.31375 38.7567 16.875 40.257V26.2812H11.7969V20.5H16.875V16.0937C16.875 11.0812 19.8609 8.3125 24.4292 8.3125C26.6175 8.3125 28.9062 8.70312 28.9062 8.70312V13.625H26.3844C23.8997 13.625 23.125 15.1667 23.125 16.7484V20.5H28.6719L27.7852 26.2812H23.125V40.257C32.6862 38.7567 40 30.4827 40 20.5Z"
                                    fill="#6E7480" />
                                <path
                                    d="M27.7852 26.2812L28.6719 20.5H23.125V16.7484C23.125 15.1666 23.8998 13.625 26.3844 13.625H28.9062V8.70312C28.9062 8.70312 26.6175 8.3125 24.4292 8.3125C19.8609 8.3125 16.875 11.0813 16.875 16.0938V20.5H11.7969V26.2812H16.875V40.257C17.9088 40.419 18.9536 40.5003 20 40.5C21.0464 40.5003 22.0912 40.4191 23.125 40.257V26.2812H27.7852Z"
                                    fill="#F1F1F1" />
                            </g>
                            <defs>
                                <clipPath id="clip0_119_38">
                                    <rect width="40" height="40" fill="white" transform="translate(0 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>

                </div>
                <div className={style.copyright}>
                    <svg width="300" height="1" viewBox="0 0 300 1" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M1 0.5H1285" stroke="#6E7480" strokeLinecap="round" />
                    </svg>
                    <p className={style.trxt}>&copy; Tranxactrust 2024, All rights reserved<br /></p>
                </div>
            </div>
            {/* </div> */}
        </footer>

    );
}

export default Footer;
