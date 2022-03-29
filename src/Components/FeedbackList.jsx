import {FeedbackItem} from './FeedbackItem'
import react from 'react';

export const FeedbackList = ({feedback,handleDelete}) => {
  return (<react.Fragment>
    {(!feedback || feedback.length===0)?<div>no feed back</div>:<div className='feedback-list'>{
    feedback.map((item)=>(
      <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
    ))
    }</div>}
  </react.Fragment>
  
  )
};
