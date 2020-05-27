import React, { Fragment, Component } from 'react'
import { Typography } from '@material-ui/core'
import {Button} from 'semantic-ui-react'


export default function About() {
    return (
           <div className="row">
               <div className="col-6">
                   <h2 className="text-center">What Is Covid-19?</h2>
                   <div style={{marginLeft:"6px"}} className="jumbotron">
                   <p style={{fontSize:'16px'}}>
                     Coronaviruses (CoV) are a large family of viruses that cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS-CoV) and Severe Acute Respiratory Syndrome (SARS-CoV). A novel coronavirus (nCoV) is a new strain that has not been previously identified in humans.
                    </p>
                    <p style={{fontSize:"16px"}}>
                     Coronaviruses are zoonotic, meaning they are transmitted between animals and people. Detailed investigations found that SARS-CoV was transmitted from civet cats to humans and MERS-CoV from dromedary camels to humans. Several known coronaviruses are circulating in animals that have not yet infected humans.
                    </p>
                    <p style={{fontSize:'16px'}}>
                     Common signs of infection include respiratory symptoms, fever, cough, shortness of breath and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death.
                    </p>   
                   </div> 
                </div>
               <div className="col-6">
                  <h2 className="text-center">How to Prevent?</h2>
                  <img
                   alt="Covid-19"
                   src="https://www.lapuste.com/sites/default/files/inline-images/bcpha_poster.png"
                   style={{display:'block',width:'60%',marginLeft:'auto', marginTop:'auto', marginRight:'auto', marginBottom:'auto'}}
                  />
               </div>
           </div>
    )
}
