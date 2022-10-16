import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from '../Components/Common/Card'


function About() {
    const params = useParams();
    console.log(params);
    return (
        <Card>
            <div className='about'>
                <h1>
                    Feedify
                </h1>
                <p>
                    A React project under the banner of SaMs-Hub
                </p>

                <p>
                    <Link to='/'>
                        Back to Home
                    </Link>
                </p>

            </div>
        </Card>
    )
}

export default About