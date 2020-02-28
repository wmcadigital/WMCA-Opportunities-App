import React from 'react';
import Radio from './radio';

const NewAge = props => {
    const { age, match } = props;

    return (
        <>
            <label htmlFor="radio" className="wmca-form-label">
                Age
            </label>

            <div className="wmca-form__radio" id="radio">
                <Radio
                    to={'/opportunities/'}
                    description="All Age"
                    checked={match.url === '/opportunities/'}
                />

                {age &&
                    age.map(eligibility => {
                        const encodedUrl = encodeURIComponent(eligibility)
                            .toLowerCase()
                            .replace(/'/g, escape);
                        return (
                            <Radio
                                key={eligibility}
                                description={eligibility}
                                to={`/opportunities/eligibilities/${encodedUrl}`}
                                checked={
                                    match.params.eligibility === eligibility
                                }
                            />
                        );
                    })}
            </div>
        </>
    );
};

export default NewAge;
