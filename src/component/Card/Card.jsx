import './index.css'
import popular_01 from '../../assets/images/popular-01.jpg'

const Card = () => {
    return (
        <div className="most-popular-item">
            <div className="card-wrapper">
                <img className='most-popular-item-image' src={popular_01} alt="popular_01" />
                <div className="most-popular-item-content">
                    <h4 className="most-popular-item-title">Fortnite
                        <br />
                        <span>sandbox</span>
                    </h4>
                    <ul>
                        <li>4.8</li>
                        <li>2.3M</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Card