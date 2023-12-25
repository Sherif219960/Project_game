import './index.css'

const Card = ({title,imageURL,subtitle,favorite,download}) => {
    return (
        <div className="most-popular-item">
            <div className="card-wrapper">
                <img className='most-popular-item-image' src={imageURL} alt="popular_01" />
                <div className="most-popular-item-content">
                    <h4 className="most-popular-item-title">{title}
                        <br />
                        <span>{subtitle}</span>
                    </h4>
                    <ul>
                        <li>{favorite}</li>
                        <li>{download}M</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Card