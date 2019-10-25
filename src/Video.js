import React, {useReducer} from "react";
import { Row , Col,} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown, faShare, faSave, faEllipsisH} from "@fortawesome/free-solid-svg-icons";

const initialState={url:"https://www.youtube.com/embed/Vz1Ev4_GTS0", title:"Mungaru Male Title Song | Mungaru Maleye Title Song HD (ಮುಂಗಾರು ಮಳೆಯೇ)", views:"4,884,154 views"};

function reducer(state,action)
{
    switch(action.type)
    {
        case 'img':return{url:action.value[0],title:action.value[1], views:action.value[2]};
        default:return
    }
}
function Video(){
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <Row>
            <Col sm={8}>
            <iframe class="video" width="99%" height="500" src={state.url}frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p class="fonts text-left"><b>{state.title}</b>
            <br/> <br/>
            </p>
            <Row>
            <Col sm={5}>
            <h1 class="fonts1 text-left">{state.views}</h1>
            </Col>
            <Col sm={1}>
            <h1 class="fonts"><FontAwesomeIcon icon={faThumbsUp}/>  200 </h1>
            </Col>
            <Col sm={1}>
            <h1 class="fonts"><FontAwesomeIcon icon={faThumbsDown}/>  5 </h1>
            </Col>
            <Col sm={2}>
            <h1 class="fonts"><FontAwesomeIcon icon={faShare}/>  Share </h1>
            </Col>
            <Col sm={2}>
            <h1 class="fonts"><FontAwesomeIcon icon={faSave}/> Save </h1>
            </Col>
            <Col sm={1}>
            <h1 class="fonts"><FontAwesomeIcon icon={faEllipsisH}/></h1>
            </Col>
            </Row>
            </Col>
            <Col sm={4}>
                <Row>
                    <Col sm={6}>
                        <p class="fonts2">Upnext</p>
                    </Col>
                    <Col sm={4}>
                        <p class="fonts2 text-right">AUTOPLAY</p>
                    </Col>
                    <Col sm={2}>
                    <div className='fonts2 custom-control custom-switch'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customSwitches'
          readOnly
        />
        <label className='custom-control-label' htmlFor='customSwitches'>
        </label>
      </div>
                    </Col> 
                </Row>
                <Row>
                <Col sm={6}>
                <a onMouseOver = {()=>dispatch({type:'img', value:["https://www.youtube.com/embed/4XtBnJIYNVk","Yenagali - Mussanje Maatu(ಏನಾಗಲಿ - ಮುಸ್ಸಂಜೆ ಮಾತು)","9,631,172 views"]})}>
                <iframe width="90%" height="100" src="https://www.youtube.com/embed/4XtBnJIYNVk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </a>
                </Col>
                <Col sm={6}>
                    <p class="fonts text-left"><b>Yenagali - Mussanje Maatu(ಏನಾಗಲಿ - ಮುಸ್ಸಂಜೆ ಮಾತು)</b>
                    <br/>
                    9,631,172 views
                    </p>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <Col sm={6}>
                <a onMouseOver = {()=>dispatch({type:'img', value:["https://www.youtube.com/embed/otgSkGyQOSM","ಕಾಣದಾ ಕಡಲಿಗೆ ಹಾಡನ್ನಾ ಸಿ. ಅಶ್ವಥ್ ಕಂಠಸಿರಿಯಲ್ಲಿ.....","18,969,123 views"]})}>
                <iframe width="90%" height="100" src="https://www.youtube.com/embed/otgSkGyQOSM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </a>
                </Col>
                <Col sm={6}>
                    <p class="fonts text-left"><b>ಕಾಣದಾ ಕಡಲಿಗೆ ಹಾಡನ್ನಾ ಸಿ. ಅಶ್ವಥ್ ಕಂಠಸಿರಿಯಲ್ಲಿ.....</b>
                    <br/>
                    18,969,123 views
                    </p>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <Col sm={6}>
                <a onMouseOver = {()=>dispatch({type:'img', value:["https://www.youtube.com/embed/zecRgZYi-kw","Gaalipata | Minchagi Neenu | HD Video Song | Ganesh | Yogaraj Bhat | Sonu Nigam","13,672,976 views"]})}>
                <iframe width="90%" height="100" src="https://www.youtube.com/embed/zecRgZYi-kw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </a>
                </Col>
                <Col sm={6}>
                    <p class="fonts text-left"><b>Gaalipata | Minchagi Neenu | HD Video Song | Ganesh | Yogaraj Bhat | Sonu Nigam</b>
                    <br/>
                    13,672,976 views
                    </p>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <Col sm={6}>
                <a onMouseOver = {()=>dispatch({type:'img', value:["https://www.youtube.com/embed/-xmRjO2G05c","Milana | Ninnindale | Puneeth Rajkumar | Pooja Gandhi | Manomurthy | Sonu Nigam | Kannada Song","8,208,515 views"]})}>
                <iframe width="90%" height="100" src="https://www.youtube.com/embed/-xmRjO2G05c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </a>
                </Col>
                <Col sm={6}>
                    <p class="fonts text-left"><b>Milana | Ninnindale | Puneeth Rajkumar | Pooja Gandhi | Manomurthy | Sonu Nigam | Kannada Song</b>
                    <br/>
                    8,208,515 views
                    </p>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <Col sm={6}>
                <a onMouseOver = {()=>dispatch({type:'img', value:["https://www.youtube.com/embed/pFt58gtRgiM" ,"Nooru Janmaku | America America | Ramesh Aravind | Hema Panchamukhi | Kannada Video Song","7,845,878 views"]})}>
                <iframe width="90%" height="100" src="https://www.youtube.com/embed/pFt58gtRgiM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </a>
                </Col>
                <Col sm={6}>
                    <p class="fonts text-left"><b>Nooru Janmaku | America America | Ramesh Aravind | Hema Panchamukhi | Kannada Video Song</b>
                    <br/>
                    7,845,878 views
                    </p>
                </Col>
            </Row>
            <hr></hr>
            </Col>
           
        </Row>
    )

}

export default Video;