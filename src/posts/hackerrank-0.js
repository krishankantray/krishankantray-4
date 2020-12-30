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
                <img src={data.image} alt="Sample Image" className="image"/>
            </div>
            <div class="blog-body">
                <p className="text-1">
                    Problem: ( Fair Cake Cutting )
                </p>
                <p className="text-2">
                    Leha is a young man from Belarus. He loves cakes really much. In Leha's country, cakes are always evenly divided between people.
                    Leha wants to know how many people he should invite to his party if he has a cake whose size is equal to units and he wants each person to get exactly units of cake. Note that Leha doesn't take a piece for himself; in other words, the cake is only divided among the people he invited to the party.
                </p>

                <div className="para-separator">
                    <p className="text-1">
                        Input Format
                    </p>
                    <p className="text-2">
                        The first line contains three space-separated integers describing the respective values of , , and .
                    </p>
                </div>

                <div className="para-separator">
                    <p className="text-1">
                        Constraints
                    </p>
                    <p className="text-2">
                        It is guaranteed that the answer is an integer.
                    </p>
                </div>    

                <div className="para-separator">
                    <p className="text-1">
                        Output Format
                    </p>
                    <p className="text-2">
                        Print a single integer denoting , the number of people he should invite to his party.
                    </p>
                </div>

                <div className="para-separator">
                    <p className="text-1">
                        Sample Input 0
                    </p>
                    <CodeHighlight language="bash" code={`5 10 1`} />
                </div>
                
                <div className="para-separator">
                    <p className="text-1">
                        Sample Output 0
                    </p>
                    <CodeHighlight language="bash" code={`2`} />
                </div>

                <div className="para-separator">
                    <p className="text-1">
                        Explanation 0
                    </p>
                    <p className="text-2">
                        In this sample case, , and . Leha wants each person to get units of cake. He has a cake whose size is unit, so if he invites people and the cake is distributed evenly among them, each person gets units of cake. Therefore, the answer is b=2 .
                    </p>
                </div>

                <div className="para-separator">
                    <p className="text-1">
                        Sample Output 0
                    </p>
                    <CodeHighlight lineNumber={false} language="cpp" code={`   #include <cmath>  
    #include <cstdio>  
    #include <vector>  
    #include <iostream>  
    #include <algorithm>  
    using namespace std;  


    int main() {  
        unsigned long int A,B,a,x;  
        double p;  
        cin>>A>>B>>a;  
        p=((B*a)/A);  
        
        x= floor(p);  
        cout<<x;  
        return 0;  
    }`} />
                </div>
            </div>    
        </div>
    )
}