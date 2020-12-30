import React from 'react' ;
import {useLocation} from 'react-router-dom' ;
import CodeHighlight from '../blog/CodeHighlight';
import "../styles/blog.css";

export default function Post(props) {
    let location = useLocation();
    let data = location.state.data;

    return (
        <div>
            <div className="title">{data.title}</div>
            <div className="subtitle">{data.date}</div>
            <div className="image-container">
                <img src={data.image} alt="Heading Image" className="image"/>
            </div>
            <div className="button-link-wrap">
                <button className="button-link" onClick={()=>window.open('https://assignment-bs.netlify.app/', '_blank')}>Visit App</button>
            </div>
            <div class="blog-body">
                <p className="text-1">
                    Problem Desciption
                </p>
                <p className="text-2">
                    Implement a web page, which contains 3 tabs (Upcoming Campaigns, Live Campaign, Past campaigns) as defined in the following mockup.
                </p>

                <div className="para-separator">
                    <img className="image" alt="Sample Image" src="/images/bluestack.jpg" />
                </div>

                <div className="list-container">
                    <ul>
                        <li>Each tab should show relevant data based on the status of campaign (upcoming, live, past).</li>
                        <li>The very first column should show the time diff from today to that campaign's date. (You can consider any date. If the date is in the future, you can show the number of days in the future. For example, "23 days ahead")</li>
                        <li>Add functionality to reschedule a campaign by opening a calendar on clicking the Schedule again icon. (Whatever date you select, should be shown in the first column named "Date". The time diff shown against it should also be updated).</li>
                        <li>Once the date is changed of campaign. The campaign should move to the relevant Tab (Upcoming,Live,Past) , based on the date selected.</li>
                        <li>Clicking on View Pricing in the row should show a modal with relevant information of the campaign. See the design in the Specs section below</li>
                        <li><b>Entire UI should be responsive.. </b> Please use your judgement on how it should look on mobile devices</li>
                        <li>UI should be same regarding color schemes and layout, button states etc. The assets are provided in the Specs section</li>
                        <li>Please use dummy json to populate the table. For reference you can see the Need Help? section below</li>
                        <li>You should use a modern frontend framework like ReactJS, AngularJS, VueJS etc to implement this.</li>
                        <li>It should support basic localization of strings in 2 languages. There should be a button to select between different languages. (Optional bonus point)</li>
                    </ul>
                </div>    

                <div className="para-separator">
                    <p className="text-1">
                        Deliverables
                    </p>
                    <b>Once you are done, please share with us:</b>
                </div>
                <div className="list-container">
                    <ul>
                        <li>Source code link (GitHub, BitBucket, etc)</li>
                        <li>URL where you have deployed the project. You need to deploy the WebApp on some cloud platform and provide us the URL for the same. <span className="highlighted-text">This step is very important</span> </li>
                        <li>Share the testcases for how you will test this Webpage in following format</li>
                    </ul>
                </div>

                <div className="para-separator">
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Desciption</th>
                            <th>Execution steps	</th>
                            <th>Expected output</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Localization</td>
                            <td>Select German language from Language selector dropdown	</td>
                            <td>Header data,x days ago,x days ahead,Tabs text should be shown in german</td>

                        </tr>
                        <tr>
                            <td>Campaign Date change</td>
                            <td>Select today's date in Past Campaign tab for any campaign</td>
                            <td>The campaign should be removed from Past campaign tab and appear in Live Campaign tab</td>
                        </tr>
                    </tbody> 
                </table>       
                </div>
                
                <div className="para-separator">
                    <div className="list-container">
                        <ul>
                            <li>Modularize your code well. Putting everything in one file is not good.</li>
                            <li>Use external DB/cache if required. Storing on local files and local variables is not desirable.</li>
                            <li>Put proper comments in code , so that we can understand the function usage etc..</li>
                        </ul>
                    </div>
                </div>
                
                <div className="para-separator">
                    <p className="text-1">
                        Specs
                    </p>
                    <div className="list-container">
                        <ul>
                            <li>UI Design specs. <a className="link" href="https://www.figma.com/file/RVDVlcKRF1gRGX7jUiu820/Front-End?node-id=0%3A1">Click Here</a></li>
                            <li>Assets <a className="link" href="http://cdn3.bluestacks.com/Interviews/Front-end/Front-End.zip">Click Here</a></li>
                        </ul>
                    </div>
                </div>

                <div className="para-separator">
                    <p className="text-1">
                        Need Help?
                    </p>
                    <p>Sample json to render the data</p>
                    <CodeHighlight language="json" code={`{
  "data": [{
      "name": "Test Whatsapp",
      "region": "US",
      "createdOn": 1559807714999,
      "price": "Price info of Test Whatsapp",
      "csv": "Some CSV link for Whatsapp",
      "report": "Some report link for Whatsapp",
      "image_url":"Some image url of the campaign" 
    },
    {
      "name": "Super Jewels Quest",
      "region": "CA, FR",
      "createdOn": 1559806715124,
      "price": "Price info of Super Jewels Quest",
      "csv": "Some CSV link for Super Jewels Quest",
      "report": "Some report link for Super Jewels Ques",
      "image_url":"Some image url of the campaign"
    },
    {
      "name": "Mole Slayer",
      "region": "FR",
      "createdOn": 1559806711124,
      "price": "Price info of Mole Slayer",
      "csv": "Some CSV link for Mole Slayer",
      "report": "Some report link for Mole Slayer",
      "image_url":"Some image url of the campaign"
    },
    {
      "name": "Mancala Mix",
      "region": "JP",
      "createdOn": 1559806680124,
      "price": "Price info of Mancala Mix",
      "csv": "Some CSV link for Mancala Mix",
      "report": "Some report link for Mancala Mix",
      "image_url":"Some image url of the campaign"
    }
  ]
}`} />
                    <div className="list-container">
                        <ul>
                            <li>How to create Repo in GitHub? <a className="link" href="https://guides.github.com/activities/hello-world/">Click Here</a></li>
                            <li>How to host your WebApp online? <a className="link" href="https://gist.github.com/TylerFisher/6127328">Click Here</a> or <a className="link" href="https://pages.github.com/">Click Here</a></li>
                        </ul>
                    </div>
                </div>

                
            </div>    
        </div>
    )
}