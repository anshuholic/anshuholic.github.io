import React from 'react';
import {PDFtoIMG} from 'react-pdf-to-image';
import file from './ANSHUMAN.pdf';

const Resume = () =>
    <div className="container">
        <PDFtoIMG  file={file}>
            {({pages}) => {
                if (!pages.length) return 'Loading...';
                return pages.map((page, index)=>
                    <img key={index} src={page}/>
                );
            }}
        </PDFtoIMG>
    </div>

export default Resume;
