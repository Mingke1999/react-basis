import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './Hello';
import Time from './Time';
const root = ReactDOM.createRoot(document.getElementById('root'));
function tick(){
  root.render(
    <div>
       <Hello/>
       <Time/>
    </div>
 );
}
setInterval(tick,1000)