import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import Button from '../assets/components/Button'
import './FreeTaxFiling.css'
import picture from '../assets/photos/vita_img.png'
import hearing from "../assets/photos/hearing.png"
import wheelchair from "../assets/photos/wheelchair.png"
import money from '../assets/photos/money.png'
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from "../assets/photos/pin.webp";
import { Link } from 'react-router-dom';



const FreeTaxFiling = () => {
    useEffect(() => {
        // Initialize the map after the component renders
        const map = L.map('map').setView([36.7783, 119.4179], 6);
        // Add a tile layer to the map
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        var calIcon = L.icon({
            iconUrl: icon,
        
            iconSize:     [40, 40], // size of the icon
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        var uclaIcon = L.icon({
            iconUrl: icon,
        
            iconSize:     [40, 40], // size of the icon
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        var uscIcon = L.icon({
            iconUrl: icon,
        
            iconSize:     [40, 40], // size of the icon
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });

        // Add a marker with a popup
        L.marker([37.8712, -122.2555], {icon: calIcon})
            .addTo(map)
            .bindPopup('Berkeley VITA')
            .openPopup();
        L.marker([34.022415, -118.285530], {icon: uclaIcon})
            .addTo(map)
            .bindPopup('USC VITA')
            .openPopup();
        L.marker([34.0700, -118.4398], {icon: uscIcon})
            .addTo(map)
            .bindPopup('UCLA VITA')
            .openPopup();
        var popup = L.popup();

        function onMapClick(e) {
            popup
                .setLatLng(e.latlng)
                .setContent("You clicked the map at " + e.latlng.toString())
                .openOn(map);
        }
        
        map.on('click', onMapClick);

        // Cleanup function to remove the map when the component unmounts
        return () => {
            map.remove();
        };
    }, []); // Run only once when the component mounts



    return (
    <>
    <Header currentPage="free-tax-filing"/>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
    crossorigin=""/>

    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossorigin=""></script>

    <section className='landing-section'>
        <div className="text-and-img">
            <div className="landing-text">
                <h1>Free Tax Preparation Services</h1>
                <p>Have a certified volunteer file your tax return, either in-person or virtually.</p>
            </div>
            <div>
                <img className="landing-photo" src={picture} alt="Our Team"/>
            </div>
        </div>
    </section>
    <section id="requirements-section">
        <div id="requirements-text">
            <h2>We offer <span className='green'>free</span> tax help for those who:</h2>
        </div>
        <div id="requirements-cards">
            <div id="card">
                <img src={money} className="icon"/>
                <p>Generally make $67,000 or less</p>
            </div>
            <div id="card">
                <img src={wheelchair} className="icon"/>
                <p>Have disabilities</p>
            </div>
            <div id="card">
                <img src={hearing} className="icon"/>
                <p>Have language barriers</p>
            </div>
        </div>
    </section>
    <section id="services-locations-section">
        <div id="services">
            <div id="service1">
                <h3 className='black'>Scope of Services</h3>
                <Link className="button-link" to="https://www.someurl.com" target='_blank'>
                    <button className="tax-resource-button">IRS Free Tax Preparation PDF</button>
                </Link>
            </div>
            <div id="service2">
                <h3 className='black'>What to Bring to Your Appointment</h3>
                <Link className="button-link" to="https://www.someurl.com" target='_blank'>
                    <button className="tax-resource-button">Checklist for Free Tax Return</button>
                </Link>
            </div>
        </div>
        <div id="location-services">
            <h2>Find a location near you</h2>
            <div id="map" ></div>
            <div id="buttons">
                <Link className="button-link" to="https://www.someurl.com" target='_blank'>
                    <button className="tax-resource-button">VITA sites</button>
                </Link>
                <Link className="button-link" to="https://www.someurl.com" target='_blank'>
                    <button className="tax-resource-button">Virtual tax preparation sites</button>
                </Link>
            </div>
            <div id="button-bottom">
                <Link className="button-link" to="https://www.someurl.com" target='_blank'>
                    <button className="tax-resource-button">United Way Bay Area Free Tax Help Sites</button>
                </Link>
                
            </div>
        </div>
    </section>
    <section>
        <div id="free-software">
            <div id="free-software-text">
                <h2>Free Self-Filing Software</h2>
                <body>File your tax return yourself.</body>
            </div>
            <div id="free-software-buttons">
                <div className="return-box">
                    <h4 className='black'>Federal Return</h4>
                    <Link className="button-link" to="https://www.someurl.com" target='_blank'>
                        <button className="tax-resource-button">IRS Direct File</button>
                    </Link>
                </div>
                <div className="return-box">
                    <h4 className='black'>State Return</h4>
                    <Link className="button-link" to="https://www.someurl.com" target='_blank'>
                        <button className="tax-resource-button">CA Franchise Tax Board (FTB)</button>
                    </Link>
                </div>
                <div className="return-box">
                    <h4 className='black'>Both</h4>
                    <div id="both-section">
                        <Link className="button-link" to="https://www.someurl.com" target='_blank'>
                            <button className="tax-resource-button">IRS Free File</button>
                        </Link>
                        <Link className="button-link" to="https://www.someurl.com" target='_blank'>
                            <button className="tax-resource-button">Online Taxes (OLT)</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </>
);
}

export default FreeTaxFiling;