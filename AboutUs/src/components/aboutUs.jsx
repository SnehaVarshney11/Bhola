// src/components/AboutUs.jsx
import React from "react";
import "../index.css";

function AboutUs() {
    return (
        <div className="bg-gray-100 p-10 text-justify">

            <h1 className="text-center uppercase font-semibold">About Us</h1>
            <p className="mb-8 mt-7">
                BHOLA aims to strengthen the small scale farmer community by bringing professionalism in farming & management, 
                improved logistics infrastructure and all these even in the peak season at affordable rates would increase their 
                benefits and help them be scalable. Indirectly this will also structure the employment in villages and enormous 
                options to earn more, additional to this the service providers will explore a chance to earn from their existing 
                tractors / farming equipment which go underutilized from structured & reliable system and will start adding more 
                such fleets to system which is the need of the hour to back our Young Bharat economy. Thus in this way we are 
                building a sustainable ecosystem in rural India.
            </p>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold">Bhola Custom App</h2>
                <p>
                    A User friendly mobile application for the small scale farmers to avail agriculture service like tractor 
                    services, harvesting services, bore-well services, irrigation services & other agro based services to increase
                    the yield by timely planning field maintenance pre/post season, need of the hour cropping, improve logistic 
                    infrastructure in rural farming to increase ease of doing farming business & delivery to APMC's to get high 
                    benefits.
                </p>
            </div>
            
            <div className="mb-8">
            <h2 className="text-2xl font-semibold">BHOLA Fleet APP</h2>
            <p>
                A platform for the service providers'/equipment owners'/ tractor owners to avail fleet tracking, maintenance 
                & resource management, with such a structured fleet management system will attract other fleet owner which is 
                highly need to serve the demand in the agriculture system which contributes to major share of GDP even today.
            </p>
            </div>
            
            <div className="mb-8">
                <h2 className="text-2xl font-semibold">BHOLA Driver/ Field Expert APP</h2>
                <p>
                    A platform for all the drivers, field experts & field assistant tracking their services or billing cycle, in 
                    order to make them come under a structured eco-system where every skilled person will have enormous opportunities
                    to self-employ.
                </p>
            </div>
            

            <div className="mb-8">
                <h2 className="text-2xl font-semibold">BHOLA E-Guidance</h2>
                <p>
                    BHOLA platform will have blogs to empower farmers by providing them education, access to resources and online 
                    platform to increase their productivity.
                    <ul className="list-disc pl-5">
                        <li>Education:
                            <p>New age machine & skilled labour to effectively perform farming activities.</p>
                        </li>
                        <li>Resources:
                            <p>Online Machines, Irrigation services, Logistics, Supply Chain Management & Nursery Services.</p>
                        </li>
                        <li>Platform:
                            <p>workshops to connect farmers with experts or operators to speed up their process of automating their farming in skilled manner.</p>
                        </li>
                    </ul>
                </p>
            </div>
            
            
            <div className="mb-8">
                <h2 className="text-2xl font-semibold">BHOLA Benefits</h2>
                <ul className="list-disc pl-5">
                    <li>Small scale farmers to increase their yield using the new age techniques and equipment, when needed model at affordable prices.</li>
                    <li>Well-paying jobs for tribal and rural youth looking for employment as tractor driver/ field experts/ equipment operators and assuring them good salaries and extra income if they are willing to work more.</li>
                    <li>Service provider (equipment / tractor owners) to earn money from their under-utilized machines/equipment, also they will be attracted by the structured system and will be interested to add more fleets which is need to serve the demand during peak season.</li>
                    <li>Farmers community and in turn be aware of the best practices of farming through BHOLA online blogs and video workshops.</li>
                </ul>
            </div>
            
        </div>
    );
}

export default AboutUs;
