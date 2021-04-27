import React from 'react';

const User = (props) => {
    console.log(props.familiar);
    const familiar = props.familiar;
    let greetings = "";
    if (familiar) {
        greetings = <div>
                        <p>Hello My fiends How are you</p>
                        <p>We met after a long time</p>
                    </div>;
    }
    else {
        greetings = <div>
                        <p>Who the hell are you</p>
                        <p>Even I haven't met you</p>
                    </div>;;
    }
    return (
        <div>
            <h2>Greetings</h2>
            {greetings}
            <h2>Food</h2>
            {familiar?<p>I Will pay for the bill</p>:<p>Pay bill his his whose whose</p>}
            <h2>Connection</h2>
            {familiar&& <p>Pleasae connectwith me in linkedin</p>}
        </div>
    );
};

export default User;