import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function VisitorDashboard() {
    const data =[{
        img: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        slide: "Bring a valid government-issued ID (e.g., driver's license, passport). If required, complete any necessary forms before the visit.",
    },{
        img: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        slide: "Contact the prison or check their website for visitation rules, schedules, and regulations. Some prisons require visitors to be on an approved visitor list, so confirm if you need prior approval.",
    },{
        img: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        slide: "Maintain appropriate conduct—no loud talking, disruptive behavior, or excessive physical contact. Some prisons allow brief hugs and handshakes; others may have no-contact visits (through glass).",
    },{
        img: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        slide: "Some facilities require visits to be scheduled in advance. Check the available visiting hours and days.",
    },{
        img: "https://images.unsplash.com/photo-1527352667763-1bc86e8df838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        slide: "Arrive early and go through security. Arriving early allows time for security checks. Be prepared for metal detectors, pat-downs, or other security screenings.",
    },{
        img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        slide: "Respect time limits. Visits are often timed, so be mindful of the duration."
}];
    
  return (
    <div className="w-3/4">
      <Slide>
        {
            data.map(item=>(
                <div className="each-slide-effect h-96">
                <div
                  style={{ backgroundImage: `url(${item.img})`, height: "100%" }}
                  className="flex items-center justify-center bg-cover bg-center"
                >
                  <span className="text-white text-2xl font-bold px-4">
                    {item.slide}
                  </span>
                </div>
              </div>
            ))
        }
       
      </Slide>
    </div>
  );
}

export default VisitorDashboard;
