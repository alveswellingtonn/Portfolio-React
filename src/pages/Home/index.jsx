import React from 'react';

import Banner from '../../components/Banner/index';
// import SobreMim from '../../components/SobreMim/index';
import Portfolio from '../../components/Portfolio/index';
import Contact from '../../components/Contato';

function Home() {
    return (
        <React.Fragment>
            <Banner />
            {/* <SobreMim /> */}
            <Portfolio />
            <Contact />
        </React.Fragment>
    );
}

export default Home;