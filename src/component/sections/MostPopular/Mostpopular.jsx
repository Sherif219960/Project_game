import './index.css'
import { Card } from '../../index'


const Mostpopular = () => {
    return (
        <>
            <div className="section-wrapper">
                <div className="section-header">
                    <h4>
                        <em>Most Popular</em>
                        Right Now
                    </h4>
                </div>
                <div className="most-popular-items">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}

export default Mostpopular