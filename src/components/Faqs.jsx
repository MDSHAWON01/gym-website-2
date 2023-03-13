import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import { faqs } from '../data';
import Faq from './Faq';
import ProgramHead from './ProgramHead';

const Faqs = () => {
    return (
        <section className="faqs">
            <div className="container faqs-container">
                <ProgramHead icon={<FaQuestion />} title="FAQS" />
                <div className="faqs-wrapper">
                    {
                        faqs.map(({ id, question, answer }) => {
                            return <Faq key={id} answer={answer} question={question} />
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Faqs;