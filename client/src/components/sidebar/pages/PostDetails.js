import React , {useEffect, useContext, useState}from "react";
import Sidebar from "../Sidebar";
import Articles from "../../layout/articles/Articles";
import { Link , useHistory} from "react-router-dom";
import ArticleContext from '../../../context/article/articleContext'
import  '../../../css/mediaQ/MQHome.css';

import ArticleDetail from '../../layout/articles/ArticleDetail';
import MobilSidebar from "../../sidebar/MobileSidbar";
import AuthContext from '../../../context/auth/authContext'
import AddArticleBtn from '../../layout/articles/Add_articleBtn';


const PostDetails = ({match}) => {

  const { getArticle, error,isLoading } = useContext(ArticleContext);
  const { isTokenValid , Token } = useContext(AuthContext);
  const history = useHistory()

  const [id , setID ] = useState('');
  const [articleChild , setChild ] = useState(null);


  useEffect(()=>{
    isTokenValid(Token)
    getArticle();
    window.scrollTo(0, 0); 
    //console.log(match);
    setID(match.params.id)
  },[Token,match.params.id])

  useEffect(()=>{
    //console.log('loading from postdetails :',isLoading);
    // console.log()
    //history.go(0)

    setChild(<ArticleDetail match={match}/>)
    // console.log(match);
    // console.log(id===match.params.id, id);
    // if((id) && id !==match.params.id){
    //     history.go(0)
    //     console.log('log : ',false);
    // }
  },[match.params.id , id,history])




  
  return (
  <div className="home ">

    <div className="container home-container">
     



    
        <div className="row ">


           
         


            {/* middleCard */}
            <div className="card z-depth-3 col s12 m8 l8  center ">
               { articleChild}
            </div>

            <div className="card right-box col s12 m3 l3 right center hide-on-small-only ">
              
              <i className="fas fa-book-open blue-grey-text  text-darken-3 "></i>
              <p className="blue-grey-text  text-darken-4">
                Articles & Research Papers
              </p>
              <div className="divider"></div>


      {/**  render the Add button if the token is valid only**/}
      {Token?<AddArticleBtn/>:null}
           

            {error ?<p className="center red viewPostErro"> error </p> : null}
            
              <Articles />
           
          </div>

      
       


         

           
             
            </div>

        </div>
         
    </div>

  );
};

export default PostDetails;
