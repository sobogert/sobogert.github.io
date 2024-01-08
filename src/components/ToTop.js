import '../style/toTop.css';

export function ToTop({ isTron } ) {

    return (
        <div className="to-top-btn">
            {/*Display word for redirecting to top of page*/}
            {
                isTron ?
                    <a className="words" href="#top" >
                        TOP
                    </a> :
                /*Display arrow for redirecting to top of page*/
                <a href="#top">
                    <svg width="41" height="76" viewBox="0 0 41 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5357 18.6371C6.44823 31.0774 -0.948486 37.5217 0.100119 38.7726C2.24462 41.3307 13.8402 28.3108 16.1593 31.8084C19.0582 34.2151 16.5 76 20.2923 76C24.5 76 21.7418 34.2151 24.6407 31.8084C26.9598 28.3108 38.5554 41.3307 40.6999 38.7726C41.7485 37.5217 34.3518 31.0774 28.2643 18.6371C23.0044 7.88812 22.5 0 20.2923 0C18.0847 0 17.7956 7.88812 12.5357 18.6371Z" fill="#F879AA"/>
                    </svg>
                </a>
            }



        </div>
    );
}