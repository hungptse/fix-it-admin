import React from 'react';
import Aux from "../../../../../hoc/_Aux";
import NAV from './../../../../../store/constant';

const navLogo = (props) => {
    let toggleClass = ['mobile-menu'];
    if (props.collapseMenu) {
        toggleClass = [...toggleClass, 'on'];
    }

    return (
        <Aux>
            <div className="navbar-brand header-logo">
                 <a href={NAV.BLANK_LINK} className="b-brand">
                    <div className="b-bg">
                        <i className="feather cpu" />
                    </div>
                    <span className="b-title">Fixit - Dashboard</span>
                 </a>
                <a href={NAV.BLANK_LINK} className={toggleClass.join(' ')} id="mobile-collapse" onClick={props.onToggleNavigation}><span /></a>
            </div>
        </Aux>
    );
};

export default navLogo;
