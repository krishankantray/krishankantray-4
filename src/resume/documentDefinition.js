import profile from './resume.json';
import {profilePic} from './profilePicBase64' ;
export const docDefinition = {
    pageSize: 'A4',
    pageMargins: [ 0,0,0,0 ],
  content: [
      {
          layout: 'noBorders',
          table: {
              widths:[185, "*"],
              heights:[837, 837],
              body: [
                  [
                      // Left Side
                      {
                          columns: [
                              {
                                  stack: [
                                  {image:profilePic, width:150,alignment:'center'},
                                  {text:profile.basics.name, alignment:'center', fontSize:'15', bold:true, margin: [0,25,0,0]},
                                  {text:profile.basics.label, alignment:'center', color:'#707b7c', bold:true, margin: [0,0,0,20] },
                                  
                                  {
                                      ul: [
                                              {text:profile.basics.location.city, margin:[0,0,0,5]},
                                              {text:profile.basics.phone, margin:[0,0,0,5]},
                                              {text:profile.basics.email, margin:[0,0,0,5]},
                                              {text:"www.linkedin.com/in/krishankantray", link:'https://www.linkedin.com/in/krishankantray', margin:[0,0,0,5]},
                                              {text:"https://github.com/krishankantray", link:'https://github.com/krishankantray', margin:[0,0,0,5]},
                                              {text:"https://krishankantray.com", link:'https://krishankantray.com', margin:[0,0,0,5]},
                                          ],
                                     margin:[5,30,0,0]
                                      
                                  },
                                  {text: "Skills", bold: true, margin:[0,20,0,20]},
                                  {
                                      svg: `<svg width='180' height='20px'>
                                                <g class='bars'>
                                                  <text x="5" y="8" font-size="10">JavaScript</text>
                                                  <rect x="55" fill='#ecf0f1' width='100%' height='12'></rect>;
                                                  <rect x="55" fill='#73c6b6' width='58%' height='12'></rect>
                                                </g>
                                              </svg>` ,
                                      margin:[0,0,0,5]
                                  },
                                  {
                                      svg: `<svg width='180' height='20px'>
                                                <g class='bars'>
                                                  <text x="5" y="8" font-size="10">ReactJS</text>
                                                  <rect x="55" fill='#ecf0f1' width='100%' height='12'></rect>;
                                                  <rect x="55" fill='#73c6b6' width='57%' height='12'></rect>
                                                </g>
                                              </svg>` ,
                                      margin:[0,0,0,5]
                                  },
                                  {
                                      svg: `<svg width='180' height='20px'>
                                                <g class='bars'>
                                                  <text x="5" y="8" font-size="10">NodeJS</text>
                                                  <rect x="55" fill='#ecf0f1' width='100%' height='12'></rect>;
                                                  <rect x="55" fill='#73c6b6' width='55%' height='12'></rect>
                                                </g>
                                              </svg>`,
                                      margin:[0,0,0,5]
                                  },
                                  {
                                      svg: `<svg width='180' height='20px'>
                                                <g class='bars'>
                                                  <text x="5" y="8" font-size="10">SQL</text>
                                                  <rect x="55" fill='#ecf0f1' width='100%' height='12'></rect>;
                                                  <rect x="55" fill='#73c6b6' width='50%' height='12'></rect>
                                                </g>
                                              </svg>`,
                                      margin:[0,0,0,5]
                                  },
                                  {
                                      svg: `<svg width='180' height='20px'>
                                                <g class='bars'>
                                                  <text x="5" y="8" font-size="10">C++</text>
                                                  <rect x="55" fill='#ecf0f1' width='100%' height='12'></rect>;
                                                  <rect x="55" fill='#73c6b6' width='65%' height='12'></rect>
                                                </g>
                                              </svg>`,
                                      margin:[0,0,0,5]
                                  },
                                  
                                  {text: "Achievements", bold: true, margin:[0,20,0,15]},
                                  {
                                      ul:[
                                          {text: 'Got Rank 230 in TCS Codevita', margin:[0,0,0,5]},
                                          {text: 'Six stars badge in Hackerrank problem solving', margin:[0,0,0,5]},
                                          {text: 'Cleared Hackwith Infy coding contest till final round', margin:[0,0,0,5]},
                                          {text: 'Got bronze medal at Week of code 37 and Hour Rank 29 contest at Hackerrank.', margin:[0,0,0,5]},
                                          {text: 'Around 6k view on my blog where I share problem solutions', margin:[0,0,0,5]}
                                      ],
                                      margin:[5,10,0,0]
                                  }
                                  
                                  ]
                              }
                          ],
                          fillColor: '#cacfd2',
                          margin:[5,0,0,0]
                      }, 
                      // Right Side
                      {
                         stack:[
                             {text: "Experience", alignment: 'center', fontSize:'15', bold: true, margin: [0,5,0,5]},
                             // Experience block
                             profile.work.map((d,i)=>[
                                {text: d.position, bold:true, margin:[0,10,0,0]},
                                {text: d.company, color:'grey', bold:true, margin:[0,0,0,5]},
                                 {
                                     layout: 'noBorders',
                                     table:{
                                         body: [
                                             [{text: 'Language  ', bold: true}, d.highlights.languages.join(", ")],
                                             [{text: 'Tools used  ', bold: true}, d.highlights.tools.join(", ") ],
                                             [{text: 'Project  ', bold: true}, {ul:d.highlights.projects} ]
                                         ]
                                         
                                     }
                                     
                                 },
                                 i===profile.work.length-1 ? {} :{canvas:[{
                                    type: 'line',
                                    x1: 0, y1: 10,
                                    x2: 400, y2: 10,
                                    lineWidth: 0.5,
                                    lineColor: '#5d6d7e'
                                },]}
                             ]),

                             // Projects Block
                             [
                                 {text: "Project", alignment: 'center', fontSize:'15', bold: true, margin: [0,5,0,5]},
                                 profile.projects.map((d,i)=>([
                                    {text:d.title, bold: true},
                                    {text:d.desc, margin: [0,3,0,3]},
                                    {text:"Github: "+d.github, link:d.github, color:'#2E4053'},
                                    {text:"Project: "+d.demoLink, link:d.demoLink, color:'#2E4053'},
                                    i===profile.projects.length-1 ? {} :{
                                        canvas:[{
                                        type: 'line',
                                        x1: 0, y1: 10,
                                        x2: 400, y2: 10,
                                        lineWidth: 0.5,
                                        lineColor: '#5d6d7e'
                                    },], margin: [0,0,0,10]}
                                 ]))
                             ],
                             
                             // Education Block
                             [
                                {text: "Education", alignment: 'center', fontSize:'15', bold: true, margin: [0,5,0,5]},
                                 profile.education.map((d,i)=>[
                                    {text:d.studyType, bold:true, margin:[0,0,0,3]},
                                    {text:d.area},
                                    {text:d.institution, margin:[0,0,0,3], italics: true},
                                    {text:d.score, color:'#2e86c1', bold:true},
                                    i===profile.education.length-1 ? {} :{
                                        canvas:[{
                                        type: 'line',
                                        x1: 0, y1: 5,
                                        x2: 400, y2: 5,
                                        lineWidth: 0.5,
                                        lineColor: '#5d6d7e'
                                    },], margin: [0,0,0,10]}
                                ])
                             ]
                         ]
                      }
                  ]
              ]
          },
      }
  ],
  
  // styles
  defaultStyle: {
      fontSize: 10,
  }
  
}
