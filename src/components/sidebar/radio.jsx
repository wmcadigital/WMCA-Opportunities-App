import React from 'react';
import { Link } from 'react-router-dom';

const Radio = props => {
    const { to, description, checked } = props;
    return (
        <Link to={to}>
            <span className="wmca-form__radio">
                <label htmlFor={description} className="wmca-form__radio-label">
                    {description}
                </label>
                <input
                    type="radio"
                    name={description}
                    id={description}
                    value={description}
                    readOnly
                    checked={checked}
                />
                <span className="wmca-form__radio-checkmark" />
            </span>
        </Link>
    );
};

export default Radio;
