import { useState } from "react";
import Demo from '../components/Demo';
const LIMIT = 6;
const cssArts = props => {

    const [step, setStep] = useState(4);

    const ALL_TEMPLATES = [{
        template: "./static/lightening-car.html",
        codepen: 'https://codepen.io/__akash__19/pen/pobgbYQ'
    },{
        template: "./static/glowing-city.html",
        codepen: 'https://codepen.io/__akash__19/pen/YzwmveX'
    },{
        template: "./static/boy-illustration.html",
        codepen: 'https://codepen.io/__akash__19/pen/NWNvaNB'
    },{
        template: "./static/chemistry-lab.html",
        codepen: 'https://codepen.io/__akash__19/pen/pobgbYQ'
    },{
        template: "./static/night-view.html",
        codepen: 'https://codepen.io/__akash__19/pen/XWdpmJo'
    }, {
        template: './static/city-with-mirror.html',
        codepen: 'https://codepen.io/__akash__19/pen/rNxopox'
    }, {
        template:  "./static/bird-with-animation.html",
        codepen: 'https://codepen.io/__akash__19/pen/QWKpyMm'
    },{
        template: "./static/gym-boy.html",
        codepen: 'https://codepen.io/__akash__19/pen/zYqpqXg'
    },{
        template: "./static/boy-sitting-on-bench.html",
        codepen: 'https://codepen.io/__akash__19/pen/GRoVJLE'
    },{
        template: "./static/holiday-house.html",
        codepen: 'https://codepen.io/__akash__19/pen/zYKpEeL'
    },{
        template: "./static/swimming-pool.html",
        codepen: 'https://codepen.io/__akash__19/pen/VweJVrr'
    },{
        template:  "./static/castle-building.html",
        codepen: 'https://codepen.io/__akash__19/pen/VwjLJgW'
    },{
        template: "./static/bus-in-lightneing-view.html",
        codepen: 'https://codepen.io/__akash__19/pen/zYKVLMd'
    }, {
        template: "./static/moving-car.html",
        codepen: "https://codepen.io/__akash__19/pen/LYGXwYZ"
    },{
        template: './static/pcmc-bus.html',
        codepen: 'https://codepen.io/__akash__19/pen/QWNbprJ'
    }, {
        template: './static/bee.html',
        codepen: 'https://codepen.io/__akash__19/pen/MWyweYv'
    },  {
        template: './static/chemistry-lab-2.html',
        codepen: 'https://codepen.io/__akash__19/pen/bGEPwKw'
    }, {
        template: './static/table-tenis-bat.html',
        codepen: 'https://codepen.io/__akash__19/pen/yLJYEPX'
    }, {
        template: './static/man-with-car.html',
        codepen: 'https://codepen.io/__akash__19/pen/abNmYrJ'
    }, {
        template: './static/man-with-mustache.html',
        codepen: 'https://codepen.io/__akash__19/pen/XWdrRKE'
    }, {
        template: './static/man-with-bald.html',
        codepen: 'https://codepen.io/__akash__19/pen/qBadvPp'
    }];
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
                    templates.map( (data, index) => {
                        return(<Demo data={data} key={index} />)
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