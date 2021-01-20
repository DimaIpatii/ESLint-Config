import React, {useState,useEffect} from 'react';

const Paragraph = () => {
    const [name, setName] = useState('');
    useEffect(() => {
        setName('Dima');
    },[]);

    return (
        <>
        <p>Some text inside. Hello {name}</p>
        </>
    );
};

export default Paragraph;

