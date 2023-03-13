import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

const Faq = ({ question, answer }) => {
    const [showAns, setShowAns] = useState(false)
    return (
        <article className='faq' onClick={() => setShowAns(prev => !prev)}>
            <div>
                <h4>{question}</h4>
                <button className="faq-icon">
                    {
                        showAns ? <AiOutlineMinus /> : <AiOutlinePlus />
                    }
                </button>
            </div>
            {showAns && <p>{answer}</p>}
        </article>
    );
};

export default Faq;