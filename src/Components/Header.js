import img2 from '../assets/sec-2.jpg'

export default function Header() {
    return (
        <div>
            <nav className='navbar navbar-expand-lg bg-body-tertiary nav-prop'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>
                        CompanyName
                    </a>
                    <button
                        class='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarText'
                        aria-controls='navbarText'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarText'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <a
                                    className='nav-link active'
                                    aria-current='page'
                                    href='#'
                                >
                                    Home
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>
                                    About Us
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>
                                    Servies Offered
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>
                                    Out Team!
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>
                                    Testimonials
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>
                                    Contact Us!
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className='py-5 text-center container'>
                <div className='row py-lg-5'>
                    <div className='col-lg-6 col-md-8 mx-auto'>
                        <h1 className='fw-light'>Company Tagline</h1>
                        <p className='lead text-body-secondary'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus.
                        </p>
                        <p>
                            <a href='#' className='btn btn-primary my-2'>
                                Main call to action
                            </a>
                            <a href='#' className='btn btn-secondary my-2'>
                                Secondary action
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            <hr class='featurette-divider'></hr>

            <section className='about'>
                <img
                    src={img2}
                    className='img-thumbnail rounded float-start img2'
                    alt='...'
                />

                <h1>About Us</h1>
                <br></br>
                <p className='info-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla non mauris libero. Pellentesque massa nisi, faucibus
                    sed dignissim quis, elementum nec tortor. Sed vulputate
                    ipsum eget purus posuere pellentesque. Phasellus vel purus
                    posuere, mollis velit nec, tincidunt arcu. Aenean finibus
                    sodales orci ut congue. Cras venenatis pulvinar nunc, et
                    malesuada metus ultrices a. Aenean rhoncus eget ligula sit
                    amet condimentum. Ut efficitur accumsan auctor. Proin
                    maximus condimentum justo, viverra sagittis tellus. Maecenas
                    sed venenatis nibh. Vestibulum tincidunt quis erat at
                    auctor. Nam blandit erat vel massa imperdiet, non cursus
                    mauris tincidunt. Duis gravida justo et pretium pharetra.
                    <br></br>
                    <br></br>
                    Ut nec rhoncus nulla. Proin eget dolor ut libero faucibus
                    rutrum ut in nunc. Proin tincidunt eros ac neque
                    scelerisque, eget sollicitudin augue pharetra. Nam in dui
                    ante. Etiam rutrum sem nibh, id semper sapien eleifend sed.
                    Suspendisse elementum id felis id auctor. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.
                    <br></br>
                    <br></br>
                    In vitae consectetur orci. Aliquam odio lectus, eleifend
                    commodo sollicitudin sit amet, maximus vitae nisl. Praesent
                    pretium nibh et purus placerat, vitae eleifend tortor
                    efficitur. Fusce interdum pharetra blandit. Donec dui eros,
                    venenatis eu porta ac, egestas eu dui. Nulla id varius
                    ipsum. Proin tincidunt congue libero, sed finibus sapien
                    euismod pretium. Duis eget consequat magna. Proin vestibulum
                    quam ut risus pharetra facilisis. Sed semper facilisis urna
                    vel venenatis. Etiam sollicitudin condimentum lorem ut
                    maximus. Nulla tellus dolor, venenatis eu libero id,
                    tincidunt posuere lacus.
                    <br></br>
                    <br></br>
                    Vivamus aliquam blandit neque quis euismod. Aenean at odio
                    nibh. Vestibulum porta elit velit, ac eleifend lorem
                    tristique et. Aliquam vel mauris ex. Nullam mattis
                    consectetur sapien, sit amet maximus metus blandit vel.
                    Pellentesque sagittis massa nunc. Integer fringilla aliquam
                    rhoncus.
                </p>
            </section>
            <hr class='featurette-divider'></hr>
        </div>
    )
}
