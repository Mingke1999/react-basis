import React from 'react';
import ReactDOM from 'react-dom/client';
import Time from './Time';
import Event from './Event';
var details ={
  title : "Details Page",
  desc : "description",
  list:["test1","test2"]
}
var users ={
  title : "all users",
  desc : "user list"
}
const root = ReactDOM.createRoot(document.getElementById('root'));
function tick(){
  root.render(
    <div>
      <Time/>
      {/*<Props title={details.title} desc={details.desc} list={details.list}/>
      <Props title={users.title} desc={users.desc}/>
      <State/>*/}
      <Event/>
    </div>
 );
}
setInterval(tick,1000)