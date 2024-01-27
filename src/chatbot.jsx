import {Link, useHref} from "react-router-dom";
import {run} from "./components/geminiapi.jsx";
import {useEffect, useRef, useState} from "react";

import log from "./assets/X-logos__black.png"
function Chatbot()
{
    const [s,se]=useState(false);
    const msgend=useRef(null);
    const[input,setInput]=useState("");
    const [message,setMessage]=useState([
        {
            text:"Hi im powerstone created by Imran as part of Generative AI,How Can I Assist You Today? ",
            isbot:true
        }
    ]);
   
    const handleReq = async () => {
        const text = input;
        setInput("");

        setMessage([
            ...message,
            { text: input, isbot: false },
            { text: "Thinking...", isbot: true },
        ]);

        try {
            // Assuming `run` is an asynchronous function, you should wait for its completion.
            const response = await run(input);
            console.log(response)

            setMessage([
                ...message,
                {text: input, isbot: false},
                {text: response, isbot: true},
            ]);
        }
        catch (e)
        {
            setMessage([
                ...message,
                {text:input, isbot: false},
                {text: "powerstone is Offline wait for 1 min", isbot: true},
            ]);
        }
    };
    useEffect(() => {
        msgend.current.scrollIntoView();
    }, [message]);
    const handleClick=async (e)=>{
        if(e.key==='Enter')
        {
            await handleReq();
        }
    }
    const handleQuery=async (e)=> {
        const text = e.target.value;
        setMessage([
            ...message,
            {text, isbot: false},
            {text: "Thinking...", isbot: true},
        ]);

        // Assuming `run` is an asynchronous function, you should wait for its completion.
        try {
            if (e.target.value === "what is powerstone?") {
                setMessage([
                    ...message,
                    {text, isbot: false},
                    {
                        text: "powerstone is an LLM Model started By Imran Pasha As an Initiative Towards Developing Generative AI Based On Gemini Pro Version You Can Read More About Me on My Masters GitHub Profile:https://github.com/powerstone666 ",
                        isbot: true
                    },
                ]);
            } else {
                setMessage([
                    ...message,
                    {text, isbot: false},
                    {
                        text: "My Name is Imran Pasha Im a Full Stack Web Developer Proficient in Java Python React.js Node.js And Mysql You Can Follow me on My linkedin:https://www.linkedin.com/in/imranpasha636 GitHub:https://github.com/powerstone666",
                        isbot: true
                    },
                ]);
            }
        }
        catch (e)
        {
            setMessage([
                ...message,
                {text, isbot: false},
                {text: "powerstone is Offline wait for 1 min", isbot: true},
            ]);
        }
        };
        const see=()=>{
            if(s===false)
            {
                se(true);
                document.getElementById("see").style.display="block";
            }
            if(s===true)
            {
                se(false);
                document.getElementById("see").style.display="none";
            }
        }
        const cancel=()=>{
            document.getElementById("see").style.display="none";
        }
    return(
        <div className="bott">
           <div className="sidebar" id="see">
               <div className="upperside">
              
                   <div className="uppersidetop">
                   <button style={{border:"none",background:"transparent",top:"-40px",position:"relative",right:"30px"}} id="can" onClick={cancel}><img src="https://cdn-icons-png.flaticon.com/128/5735/5735775.png" style={{height:"40px"}}></img></button>
                       <img src="https://cdn-icons-png.flaticon.com/128/3050/3050874.png" className="logoo"/>
                       <span className="brand" >DynamicFlow</span>
                   </div>
                   <button type="button" className="btn btn-primary btn-lg" id="midbtn" onClick={()=>{window.location.reload()}}><img src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" className="addbtn"/> New Chat</button>
                   <div className="uppersidebottom">
                       <button type="button" className="btn btn-primary btn-lg" id="query" onClick={handleQuery} value={"what is powerstone?"}><img src="https://cdn-icons-png.flaticon.com/128/9068/9068690.png" id="iii"/>what is powerstone?</button>
                       <button type="button" className="btn btn-primary btn-lg" id="query"onClick={handleQuery} value={"About Creator"}><img src="https://cdn-icons-png.flaticon.com/128/9068/9068690.png" id="iii"/>About Creator...</button>
                   </div>
               </div>
               <div className="lowerrside">
                   <div className="listitem"><img className="listitemimg" src="https://cdn-icons-png.flaticon.com/128/1377/1377295.png"/><Link to="/user" style={{textDecoration:"none",color:"inherit"}}>Home</Link></div>
               </div>
           </div>
            <div className="mainn">
                <button id="bbb" style={{border:"none",background:"transparent",position:"relative",left:"-260px",top:"30px",margin:"0"}} onClick={see} ><img src="https://cdn-icons-png.flaticon.com/128/9343/9343683.png" style={{height:"30px"}}></img></button>
                <div className="chats">
                    {message.map((mess, i) =>
                        <div key={i} className={mess.isbot ? "ch boo" : "ch"}>
                            <img src={ mess.isbot?"https://cdn-icons-png.flaticon.com/128/232/232375.png":"https://cdn-icons-png.flaticon.com/128/3940/3940417.png"}/>
                            <p className="txtt" dangerouslySetInnerHTML={{__html: mess.text.replace(/\n/g, '<br>')}}/>
                        </div>
                    )}
                    <div ref={msgend}></div>
                </div>
                <div className="chatfooter">
                    <div className="in">
                        <textarea type={"text"} placeholder="Enter a Message" value={input} onKeyDown={handleClick} onChange={(e)=>{setInput(e.target.value)}}/>
                        <button className="send" onClick={handleReq} style={{marginRight:"10px"}}><img src="https://cdn-icons-png.flaticon.com/128/3608/3608124.png"/></button>
                    </div>
                    <p >powerstone may produce inaccurate information About Person,Place or Facts.DynamicFlow V-1.3 January 2024</p>
                </div>
            </div>
        </div>
    );
}
export default Chatbot