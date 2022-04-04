import { useState } from "react";

const LIMIT = 4;
const cssArts = props => {

    const [step, setStep] = useState(1);

    const ALL_TEMPLATES = [
        "./static/lightening-car.html",
        "./static/boy-illustration.html",
        "./static/bird-with-animation.html",
        "./static/glowing-city.html",
        "./static/gym-boy.html",
        "./static/boy-sitting-on-bench.html",
        "./static/holiday-house.html",
        "./static/swimming-pool.html",
        "./static/night-view.html",
        "./static/castle-building.html",
        "./static/bus-in-lightneing-view.html"
    ];

    const templates = ALL_TEMPLATES.slice((step - 1) * LIMIT, step * LIMIT);

    const nextPage = () => {
        setStep( step => {
            setStep(step + 1);
        })
    }

    const prevPage = () => {
        setStep( step => {
            setStep(step - 1);
        })
    }
    return(
        <div className="page-wrapper" style={{ paddingBottom: '20px'}}>
            <div className="css-arts-wrapper">
                {
                    templates.map( (template, index) => {
                        return(<iframe key={index} scrolling="no" style={{ overflow: "hidden"}} className="css-art" src={template}></iframe>)
                    })
                }
                
            </div>

            <div className="pagination-wrapper">
                <div className="buttons">
                    { 
                        step > 1 &&  <button type="button" className="button prev" onClick={prevPage}> Prev </button>
                    }

                    {
                       step < Math.ceil(ALL_TEMPLATES.length / LIMIT) && <button type="button" className="button next" onClick={nextPage}> Next </button>
                    }
                   
                    
                </div>
               
            </div>

        </div>
    )
}

export default cssArts;