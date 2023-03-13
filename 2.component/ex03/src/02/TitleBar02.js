import React, { useState } from 'react';

export default function TitelBar02() {
    const [no, setNo] = useState(0);

    const onClickHandler = function(){
        setNo(no + 1);
        console.log(`TtitleBar02 Clicked: ${no}`)
    }


    return (
        <div>
            <h1
                onClick={onClickHandler}
                style={{
                    cursor: 'pointer'
                }}>
                Function Handler
                <br/>
                {   
                    // this.no VS this.stat.no
                    `${no}`
                }
                </h1>
        </div>
    )
}