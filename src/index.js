import React from 'react';
import ReactDOM from 'react-dom/client';
import FormPro from './FormPro';
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
    <FormPro/>
    {/*<Props title={details.title} desc={details.desc} list={details.list}/>
    <Props title={users.title} desc={users.desc}/>
    <State/>*/}
  </div>
);