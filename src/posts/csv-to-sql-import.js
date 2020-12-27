import React from 'react';
import {useLocation} from 'react-router-dom' ;
import CodeHighlight from '../blog/CodeHighlight';
import { Alert, AlertTitle } from '@material-ui/lab';
import Divider from '@material-ui/core/Divider'; 
import "../styles/blog.css";
import VideoPlayer from '../blog/VideoPlayer';

export default function Post() {
    let location = useLocation();
    let data = location.state.data; 
    return (
        <div>
            <div className="title">{data.title}</div>
            <div className="subtitle">{data.date}</div>
            <div className="image-container">
                <img src={data.image} className="image"/>
            </div>
            <div className="button-link-wrap">
                <button className="button-link" onClick={()=>window.open('https://suspicious-carson-2627ba.netlify.app/', '_blank')}>Visit App</button>
            </div>
            
            <div class="blog-body">
                <p className="text-1">
                🚀  What is this app all about ?
                </p>
                <p className="text-2">
                    This app allows users to import a .csv file and save it in MySQL. The .csv file needs to be in a specified format, something like this . Once the data is saved we can see and delete the table data on the front-end.
                </p>

                <div className="para-separator">
                    <p class="text-1">
                    🚀  Whats there on back-end and front-end ?
                    </p>
                    <div className="list-container">
                        <ul>
                            <li>
                                <b><u>Back-End :</u></b> 
                                <ul>
                                    <li>Node JS</li>
                                    <li>Express JS</li>
                                    <li>MySQL JS</li>
                                </ul>
                            </li>
                            <li>
                                <b><u>Front-End :</u></b> 
                                <ul>
                                    <li>React JS</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <Divider />
                <div className="para-separator">
                    <p className="text-1">
                    🚀   Here is the SQL table structure :
                    </p>
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>Feild</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>id</td>
                                <td>int(11)</td>
                            </tr>
                            <tr>
                                <td>level_col</td>
                                <td>varchar(255)</td>
                            </tr>
                            <tr>
                                <td>cvss</td>
                                <td>varchar(255)</td>
                            </tr>
                            <tr>
                                <td>title</td>
                                <td>varchar(255)</td>
                            </tr>
                            <tr>
                                <td>vulnerability</td>
                                <td>varchar(255)</td>
                            </tr>
                            <tr>
                                <td>solution</td>
                                <td>varchar(255)</td>
                            </tr>
                            <tr>
                                <td>reference_col</td>
                                <td>varchar(255)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Divider />
                <div className="para-separator">
                    <p className="text-1">
                    🚀  Where is it deployed ?
                    </p>
                    <p className="test-2">
                        Client side app ( React app ) is deployed on Netlify Server side app ( Node app ) is deployed on <a className="link" href="https://www.heroku.com/">Heroku</a>. 
                        MySQL database is deployed on Remote Mysql
                    </p>
                </div>
                <Divider />
                <div className="para-separator">
                    <p className="text-1">
                    🚀 How to run it locally ?
                    </p>
                    <p className="test-2">
                        To run it locally we need to clone two git repositories, one for the server and other for the client ( front-end).
                        <br/>
                        <b>To clone the client repo :</b>
                        <br/>
                        <CodeHighlight lineNumber={false} language="bash" code={`git clone https://github.com/krishankantray/csv-to-sql-import-client.git`} />
                        <br/>
                        <b>To clone the server repo :</b>
                        <br/>
                        <CodeHighlight lineNumber={false} language="bash" code={`git clone https://github.com/krishankantray/csv-to-sql-import-server.git`} />
                        <br/>
                        The above git setup is for online server auto deployment on Heroku and Netlify . We need to make some changes in it to run it locally.
                        <br/><br/>
                        <b>First we setup the server locally :</b>
                        <div className="list-container">
                            <ul>
                                <li>Open the directory : <span className="highlighted-text">csv-to-sql-import-server</span> , in any vscode or any other editor.</li>
                                <li>If you have a local MySql db then do replace the details in the <span className="highlighted-text">app>>config>>db.config.js</span> If you don't have a local MySql db then leave it as it is.</li>
                            </ul>
                        </div>
                        Now, open terminal ( in the directory : csv-to-sql-import-server ) :
                        <br/>
                        <span className="highlighted-text">npm install</span> <span className="highlighted-text">npm start</span> It should print in terminal : Server is running on port 9000.
                        <br/><br/>
                        <Alert severity="info">
                            <AlertTitle>Note</AlertTitle>
                            ( Make sure there is nothing previously running on port 9000, if there is then change the >port from line 25 of server.js )
                        </Alert>
                    </p>
                </div>
                <Divider />
                <div className="para-separator">
                    <p className="text-1">
                    🚀 To test if all APIs are working, open postman and use following APIs
                    </p>
                    <div className="list-container">
                        <ul>
                        <li>GET call for obtaining all the records, url should be : <span className="highlighted-text"> http://localhost:9000/customers/. </span> </li>

                        <li>GET call for single records by id, for eg :<span className="highlighted-text">  http://localhost:9000/customers/963 </span></li>

                        <li>POST call for bulk create records :<span className="highlighted-text"> http://localhost:9000/bulkcreate This call needs a body to be passed </span></li>

                        <li>POST call for single create records <span className="highlighted-text"> http://localhost:9000/customers This call needs a body to be passed </span></li>

                        <li>DELETE call for all records deletion <span className="highlighted-text"> http://localhost:9000/customers </span></li>

                        <li>DELETE call for records deletion <span className="highlighted-text"> http://localhost:9000/customers/963 </span></li>

                        <li>PUT call to update a single record <span className="highlighted-text"> http://localhost:9000/customers/963 </span></li>
                        </ul>
                    </div>
                    <br />
                    <b>Now, we will configure the local front-end ( React app ) :</b> <br/>
                    We only need to make some changes in App.js within src directory. Just change the line 35 , 69 and 97, i.e we need to change the URL of all the fetch calls from Apps.js.
                    <Alert severity="info" icon={false}>
                        <AlertTitle>For Example: </AlertTitle>
                        35 : Before https://csv-to-sql-import.herokuapp.com/bulkcreate <br/>
                        35 : After http:localhost:9000/bulkcreate
                    </Alert>
                    <br/>
                    Similarly for line 69 and 97 , just replace this part of URL - <a className="link" href="https://csv-to-sql-import.herokuapp.com">https://csv-to-sql-import.herokuapp.com</a> with http:localhost:9000
                    <br/>
                    and rest of the part of url remains same.
                    <br/> 
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th>GitHub Links</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Font-End : <a className="link" href="https://github.com/krishankantray/csv-to-sql-import-client">https://github.com/krishankantray/csv-to-sql-import-client</a> </td>
                            </tr>
                            <tr>
                                <td>Back-End : <a className="link" href="https://github.com/krishankantray/csv-to-sql-import-server">https://github.com/krishankantray/csv-to-sql-import-server</a> </td>
                            </tr>
                        </tbody>
                    </table>           
                    <b>See below video in case of any confusion : </b>
                    <br/>
                    <VideoPlayer url="https://youtu.be/Ktia6m4JooE"/> 
                </div>
            </div>
        </div>
    )
}