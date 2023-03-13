import React, { useState } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import Draggable from 'react-draggable'
import interact from 'interactjs'
// const interact = require('interactjs')




export default function EnJpegLayout({ jpeg }) {

const { title, jpegDate, frame, }  =  jpeg.fields;


  
/* if (typeof window !== "undefined") { 
 
  // Make the DIV element draggable:
  dragElement(document.getElementById("mydiv"));
  
  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  } */
  
 
   
  
  return (
    <>
      
          <div className='max-w-[1240px] max-h-[1240px] w-full flex'> 
           <div className='m-auto'  >  
            
              <Draggable >
               <Image 
                src= {'https:' + frame.fields.file.url }
                width={ frame.fields.file.details.image.width }
                height={ frame.fields.file.details.image.height }
                alt='/draggit'   
                className='cursor-move rounded-lg hover:drop-shadow-xl' 
                draggable="true"            
                />  
              </Draggable>    
              </div>
              </div>
              
             
             
            
                              
    </>
    
  )
  
}
