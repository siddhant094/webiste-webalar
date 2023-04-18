import test1 from '../assets/card1.jpg'
import test2 from '../assets/card2.jpg'
import test3 from '../assets/card3.jpg'

export default function Services() {
    return (
        <div>
            <div className='services'>
                <h1>Testimonials</h1>
                <div class='row row-cols-1 row-cols-md-4 g-4 cards'>
                    <div class='col'>
                        <div class='card'>
                            <img
                                src={test1}
                                class='card-img-top card-img'
                                alt='...'
                            />
                            <div class='card-body'>
                                <h5 class='card-title'>Testimonial 1 </h5>
                                <p class='card-text'>Testimonial 1 Text</p>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div class='col'>
                        <div class='card'>
                            <img
                                src={test2}
                                class='card-img-top card-img'
                                alt='...'
                            />
                            <div class='card-body'>
                                <h5 class='card-title'>Testimonial 2</h5>
                                <p class='card-text'>Testimonial 2 Text</p>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div class='col'>
                        <div class='card'>
                            <img
                                src={test3}
                                class='card-img-top card-img'
                                alt='...'
                            />
                            <div class='card-body'>
                                <h5 class='card-title'>Testimonial 3</h5>
                                <p class='card-text'>Testimonial 1 Text</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class='featurette-divider'></hr>
        </div>
    )
}
