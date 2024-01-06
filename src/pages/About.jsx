import React, { useState } from 'react'
import { Navigate, useSearchParams } from 'react-router-dom';

const About = () => {
    const [user, setUser] = useState("vipin");
    const [searchParams] = useSearchParams();

    const name = searchParams.get('name');
    if (!user) {
        return <Navigate to="/" replace={true} />
    }
    return (
        <div className='about'>
            {name ? <p>Hi {name}</p> : <p> Hello {user}</p>}
            <h1>About Us</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam doloremque ducimus voluptas! Voluptatum, fugit ea. Facere eos, fuga, quisquam commodi cum dignissimos libero incidunt tempore saepe facilis provident possimus perspiciatis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolorum. Ad temporibus excepturi quae, est beatae nihil voluptas dolor? Ullam suscipit ducimus recusandae. Quas obcaecati sequi magnam minus ratione dolore, distinctio sit non fugiat cumque. Recusandae hic iste unde voluptatum!</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam mollitia praesentium itaque minus, cupiditate tenetur deleniti nemo exercitationem nobis temporibus dolor commodi hic quasi ipsam architecto dicta inventore adipisci blanditiis reiciendis, odit nesciunt sapiente. Molestiae.
            </p>
            {user && <button onClick={() => setUser(null)}>Logout</button>}
        </div>
    )
}

export default About