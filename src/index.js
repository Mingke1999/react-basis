import React from 'react';
import ReactDOM from 'react-dom/client';
import Forms from './Forms';

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
root.render(
  <div>
    <Forms/>
    {/*<Props title={details.title} desc={details.desc} list={details.list}/>
    <Props title={users.title} desc={users.desc}/>
    <State/>*/}
  </div>
);