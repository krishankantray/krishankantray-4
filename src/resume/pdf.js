import React, {useState} from "react";
import SyncLoader from 'react-spinners/SyncLoader' ;
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import {docDefinition} from './documentDefinition' ;
import '../styles/resumePDF.css' ;
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default function PrintPdf(){
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
        setTimeout(()=>{
            pdfMake.createPdf(docDefinition).download("Krishankant's Resume.pdf");
            handleClose();
        },4500)
    };
    const handleClose = () => {
        setOpen(false);
    };

    return(
    <>
        <div className="pdf-button-container">
            
            <div>
                <button className="pdf-button" onClick={handleClickOpen}>
                    <i class="fas fa-file-pdf fa-2x"></i>
                    <br/>
                    <span style={{color: '#CACFD2'}}>Download</span>
                </button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="resume-download-loader"
                    aria-describedby="resume-download-loader-description"
                >
                    <div style={{margin:"50px"}}>
                        <center>
                            <SyncLoader color="#16A085" loading={true} size={25} />
                        </center>
                        <center>    
                            <br/><br/><br/><br/><br/><br/>
                            <h2>Generating most<br/>recent <b>Resume</b></h2>
                        </center>
                    </div>
                </Dialog>
                </div>
        </div>    
    </>
    );
}
