import React from 'react';
import './header.scss';
import { useHistory } from 'react-router-dom';
import LABELS from '../../globals/constants';

const Header = () => {
    let history = useHistory();

    function handleClick() {
        history.push('/');
    }

    return (
        <header className="header-container">
            <div className="header">
                <button className="header__button" onClick={handleClick}>
                    {LABELS.HEADER}
                </button>
                <div className="header__bar"></div>
            </div>
        </header>
    );
};

export default Header;
