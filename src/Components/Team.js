import emp1 from '../assets/emp1.jpeg'
import emp2 from '../assets/emp2.jpg'
import emp3 from '../assets/emp3.jpeg'

export default function Services() {
    return (
        <div>
            <h1>Our Team!</h1>
            <br></br>
            <div className='teams'>
                <div className='hello'>
                    <div className='img-box'>
                        <img
                            src={emp1}
                            alt=''
                            className='rounded-circle emp-img'
                        ></img>
                    </div>
                    <h4>Mary Jane</h4>
                    <h5>
                        <b>CTO, CompanyName</b>
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eligendi non quis exercitationem culpa nesciunt
                        nihil aut nostrum explicabo reprehenderit optio
                    </p>
                </div>
                <div className='hello'>
                    <div className='img-box'>
                        <img
                            src={emp2}
                            alt=''
                            className='rounded-circle emp-img'
                        ></img>
                    </div>
                    <h4>Mary Jane</h4>
                    <h5>
                        <b>CTO, CompanyName</b>
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eligendi non quis exercitationem culpa nesciunt
                        nihil aut nostrum explicabo reprehenderit optio
                    </p>
                </div>
                <div className='hello'>
                    <div className='img-box'>
                        <img
                            src={emp3}
                            alt=''
                            className='rounded-circle emp-img'
                        ></img>
                    </div>
                    <h4>Mary Jane</h4>
                    <h5>
                        <b>CTO, CompanyName</b>
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eligendi non quis exercitationem culpa nesciunt
                        nihil aut nostrum explicabo reprehenderit optio
                    </p>
                </div>
            </div>
            <br></br>
            <div className='teams'>
                <div>
                    <div className='img-box'>
                        <img
                            src={emp3}
                            alt=''
                            className='rounded-circle emp-img'
                        ></img>
                    </div>
                    <h4>Mary Jane</h4>
                    <h5>
                        <b>CTO, CompanyName</b>
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eligendi non quis exercitationem culpa nesciunt
                        nihil aut nostrum explicabo reprehenderit optio
                    </p>
                </div>
                <div>
                    <div className='img-box'>
                        <img
                            src={emp1}
                            alt=''
                            className='rounded-circle emp-img'
                        ></img>
                    </div>
                    <h4>Mary Jane</h4>
                    <h5>
                        <b>CTO, CompanyName</b>
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eligendi non quis exercitationem culpa nesciunt
                        nihil aut nostrum explicabo reprehenderit optio
                    </p>
                </div>
                <div>
                    <div className='img-box'>
                        <img
                            src={emp2}
                            alt=''
                            className='rounded-circle emp-img'
                        ></img>
                    </div>
                    <h4>Mary Jane</h4>
                    <h5>
                        <b>CTO, CompanyName</b>
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eligendi non quis exercitationem culpa nesciunt
                        nihil aut nostrum explicabo reprehenderit optio
                    </p>
                </div>
            </div>
            <br></br>
            <hr class='featurette-divider'></hr>
        </div>
    )
}
