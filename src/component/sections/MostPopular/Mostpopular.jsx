import './index.css'
import { Card } from '../../index'
import { Fragment, useContext } from 'react'
import { cardContext } from '../../../App'

const Mostpopular = () => {
    const cardData = useContext(cardContext)

    const Cards = cardData.map(card =>
        <Fragment key={card.imageURL}>
            <div className="col-sm-12 col-md-4 col-lg-3">
                <Card {...card} />
            </div>
        </Fragment>)

    return (
        <>
            <div className="section-wrapper">
                <div className="section-header">
                    <h4>
                        <em>Most Popular</em>
                        Right Now
                    </h4>
                </div>
                <div className="row">
                    <div className="most-popular-items ">
                        {Cards}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mostpopular