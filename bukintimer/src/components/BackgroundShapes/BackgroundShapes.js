import './backgroundshapes.css'

export default function BackgroundShapes({ stopAnimation = false }){
    return(
        <div className={`background-shapes ${stopAnimation ? 'animation-paused' : ''}`}>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
            <div className="shape"></div>
        </div>
    )
}