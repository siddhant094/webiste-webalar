export default function Services() {
    return (
        <div>
            <div className='contact'>
                <br></br>
                <h1>Contact Us!</h1>
                <br></br>
                <form class='row g-3'>
                    <div class='col-md-6'>
                        <label for='inputEmail4' class='form-label'></label>
                        <input
                            type='text'
                            class='form-control'
                            id='inputEmail4'
                            placeholder='First name'
                        />
                    </div>
                    <div class='col-md-6'>
                        <label for='inputPassword4' class='form-label'></label>
                        <input
                            type='text'
                            class='form-control'
                            id='inputPassword4'
                            placeholder='Last name'
                        />
                    </div>
                    <div class='col-12'>
                        <input
                            type='text'
                            class='form-control'
                            id='inputAddress'
                            placeholder='Email Address'
                        />
                    </div>
                    <div class='mb-3'>
                        <textarea
                            class='form-control'
                            id='exampleFormControlTextarea1'
                            rows='3'
                            placeholder='Your Message here...'
                        ></textarea>
                    </div>
                    <div class='col-12'>
                        <button type='submit' class='btn btn-primary'>
                            Submit
                        </button>
                    </div>
                </form>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}
