import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './Hello';
import Time from './Time';
import Condition from './Condition';
import List from './List';
const root = ReactDOM.createRoot(document.getElementById('root'));
function tick(){
  root.render(
    <div>
       <Hello/>
       <Time/>
       <Condition/>
       <List/>
    </div>
 );
}
setInterval(tick,1000)