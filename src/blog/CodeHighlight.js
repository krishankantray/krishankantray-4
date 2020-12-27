import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {anOldHope} from 'react-syntax-highlighter/dist/esm/styles/hljs' ;
import '../styles/blog.css';

export default function CodeHighLight(props) {
    return (
        <div className="code-container">
            <SyntaxHighlighter 
                language={props.language} 
                showLineNumbers={props.lineNumber} 
                customStyle={{minWidth: "100%", boxShadow: '0px 2px 4px rgba(50,50,93,.1)'}} 
                style={anOldHope}
                lineNumberStyle={{
                    color: '#F7DC6F',
                    textAlign: 'right',
                    background: '#2C3E50',
                    marginLeft: '-0.5em',
                    paddingRight: '0.2em'
                 }}
            >
                {props.code}
            </SyntaxHighlighter>
        </div>
    )
}
