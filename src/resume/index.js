import React from 'react' ;
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Particle from '../Particle' ;
import LeftPanel from './LeftPanel' ;
import RightPanel from './RightPanel';
import PrintPdf from './pdf' ;

export default function Resume(props) {
    return (
        <div className="resume">
            <PrintPdf />
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