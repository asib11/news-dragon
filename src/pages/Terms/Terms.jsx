// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>this is terms and conditions</h2>
            <p><small>go back <Link to='/register'>Register</Link></small></p>
        </div>
    );
};

export default Terms;