import React,{ useState , useEffect , useContext} from 'react';
import ResumeContext from '../../context/resume/resumeContext';
import {useHistory } from 'react-router-dom';
import PdfAllPages from '../layout/resume/Pdf_All_Pages';
import '../../css/styleV2.css';
import Spinner from '../layout/Spinner';
import AuthContext from '../../context/auth/authContext'


const Resume = () => {

    const [err, setErr] = useState('');
    const [selectedFile, setFile] = useState([]);
    const [singleResume , setResume ] = useState(null)
    const { error , resumes , dataLoadingError, addResume , getResume , deleteResume, addSuccess,showSpinner} = useContext(ResumeContext);
    const { Token , isTokenValid} = useContext(AuthContext);
    

    useEffect(()=>{
        if(error) setErr(error)
        isTokenValid(Token)
        //get resume data
        //StartshowSpinner()
        getResume()
    },[error,Token])


    useEffect(()=>{
        if(resumes){
            setResume(resumes[0])
            }
if(addSuccess) window.location.reload(false);
    },[resumes,addSuccess])


     
console.log('addSUc : ', addSuccess);

            /** Events  **/
    const _handelOnChange=(e)=>{
        setFile([e.target.files[0]])
        setErr('')
    }
    
    var x=document.getElementById("eng");
    var y= document.getElementById("norsk");
     function viewEnglish(){
         setResume(resumes[0]);
         x.classList.add("disable");
         x.classList.remove("enable")
         y.classList.remove("disable")
         y.classList.add("enable")

     }

     function viewNorsk(){
        setResume(resumes[1]);
        x.classList.remove("disable");
        x.classList.add("enable");
        y.classList.add("disable")
        y.classList.remove("enable")
        

    }

    const _handelSubmit=(e)=>{
            e.preventDefault();
            if (selectedFile.length){
                var form_data = new FormData()
                form_data.append('myfile',selectedFile[0])
                
                addResume(form_data)
                
            }else{
                setErr('Please choose a PDF file here ')
            }

            // <a href="http://localhost:5000/api/v2/resume/5fc1715b7004ee1e24ddf05a/download">download</a>

    }

    return (
        <div className="container  Resume">
            
            <div className="row ">
                    <h2 className="center">MY RESUME</h2>
                    
            </div>


            <div className="row">
                        <div className="col s4 m3 l2 offset-l1 offset-m1 center">
                        <a id="eng" className="disable" onClick={()=>viewEnglish()}> CV in English</a>
                        </div>
                        <div className=" col s4 m3 l3 offset-l2 offset-m1 center">
                        <a id="norsk" className="enable" onClick={()=>viewNorsk()}> CV in Norwegian</a>
                        </div>
                   
            <div className="resume-btn-box-row col s4 m2 l2 offset-l2 offset-m2  center">
            {/* delete and download Button */}
            {singleResume?(
                <span className="resume-btn-box col s12">
                    <a href={`http://localhost:5000/api/v2/resume/${singleResume._id}/download`} className="btn waves-effect waves-light ">
                        <i className="material-icons">download</i>
                    </a>
                    {Token?
                        <button className="btn waves-effect waves-light  " onClick={()=>{deleteResume(singleResume._id); window.location.reload(false);}}>
                        <i className="material-icons">delete</i>
                    </button> 
                    :null}
                
                </span>
                ):null}
            </div>
            </div>

            <div className="row ">
 
                {/* upload form  */}
                {Token?<div className="col s12 m6 offset-m2 l6 offset-l3 card center form-box"> 

                   

                    <form onSubmit={_handelSubmit} autoComplete="off" encType="multipart/form-data"  className=" resume-form addProjectForm">

                             <p className="center red-text " style={{overflowWrap:'break-word'}}>{error?error:null}</p>

                            {/* upload */}
                        <div className="file-field input-field col s12 ">
                            
                            <div className="btn indigo darken-3 waves-effect waves-light">
                                <span>File</span>
                                <input type="file" name="img_path"  onChange={_handelOnChange} required/>
                            </div>  

                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" placeholder="Upload CV" />
                            </div>
                        </div> 

                    {/* button */}
                        <div className="col s12 m6 offset-m3 center" style={{ display:'flex' , alignItems: 'center',  justifyContent:'center' }}>
                            <button type="submit" className="btn indigo darken-3 waves-effect waves-light">send</button>
                      </div>


                    </form>


                </div>:null}

       </div>

        <div className="row">

        {/* Resumes PDF File */}

        {showSpinner?(<div className="col l8 offset-l2 center"><Spinner/></div>):


                // check if the file empty
       singleResume?(
            <div className="col card s12 m12 center pdf-warper" key={singleResume._id}>

                <PdfAllPages pdf={`/uploads/${singleResume.name}`} />
            </div>

        ):(<div className="col s12 m12 l12   card center   white blue-grey-text  text-darken-4 " style={{padding:"25px" , height:"12vh", display:'flex', justifyContent:'center' , alignItems:'center'}}>
            <p >{dataLoadingError|| 'THERE IS NO DATA'}</p>
            </div>)





        }

    


            
            </div> 
        </div>
    );
}

export default Resume;







//  >>>>> Display multi files

//  <div className="col s12 m5">
//     <h2>{singleResume.name}</h2>
//     {singleResume.path}
// </div>

// <div className="col s12 m5">
// <button onClick={()=>{deleteResume(singleResume._id)}}><i className="material-icons">delete</i></button>
// </div> 