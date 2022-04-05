import Link from 'next/link';

const Demo = props => {
    const { data } = props;
    const goToDemo = () => {
        console.log('go to demo');
    }
    return(
        <div className="demo-wrapper">
            <iframe scrolling="no" style={{ overflow: "hidden"}} className="css-art" src={data.template}></iframe>
            <a href={data.codepen} target="_blank">
                <button className="redirect-to-codepen" type='button' onClick={goToDemo}> See Code on Codepen</button>
            </a>                
        </div>
    )
}

export default Demo;