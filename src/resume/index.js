import React from 'react' ;
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Particle from '../Particle' ;
import LeftPanel from './LeftPanel' ;
import RightPanel from './RightPanel';

export default function Resume(props) {
    return (
        <div className="resume">
            <div className="pdf-button-container">
                <button className="pdf-button">
                    <i class="fas fa-file-pdf fa-2x"></i>
                    <br/>
                    <span style={{color: '#CACFD2'}}>Download</span>
                </button>

            </div>
            <div className="resume-container">
                <Card className="resume-card-left">
                    <CardContent>
                        <LeftPanel />
                    </CardContent>
                </Card>
                <Card className="resume-card-right">
                    <CardContent>
                    <div className="resume-separator-2">
                        <RightPanel />
                    </div>        
                    </CardContent>
                </Card>  
            </div>
            <Particle /> 
        </div>
    )
}