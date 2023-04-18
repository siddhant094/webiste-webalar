//import { ReactComponent as img3 } from '../assets/sec-3.jpg'
import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'
import card4 from '../assets/card4.jpg'

export default function Services() {
    return (
        <div>
            <div className='services'>
                <h1>Services Offered</h1>
                <br></br>
                <div class='row row-cols-1 row-cols-md-4 g-4 cards'>
                    <div className='col'>
                        <div class='card'>
                            <img src={card1} class='card-img-top' alt='...' />
                            <div class='card-body'>
                                <h5 class='card-title'>Web Designing</h5>
                                <p class='card-text'>
                                    This is a longer card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class='col'>
                        <div class='card'>
                            <img src={card2} class='card-img-top' alt='...' />
                            <div class='card-body'>
                                <h5 class='card-title'>Card </h5>
                                <p class='card-text'>
                                    This is a longer card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class='col'>
                        <div class='card'>
                            <img src={card3} class='card-img-top' alt='...' />
                            <div class='card-body'>
                                <h5 class='card-title'>Card title</h5>
                                <p class='card-text'>
                                    This is a longer card with supporting text
                                    below as a natural lead-in to additional
                                    content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class='col'>
                        <div class='card'>
                            <img src={card4} class='card-img-top' alt='...' />
                            <div class='card-body'>
                                <h5 class='card-title'>Card title</h5>
                                <p class='card-text'>
                                    This is a longer card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <hr class='featurette-divider'></hr>
        </div>
    )
}
