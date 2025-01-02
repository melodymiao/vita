import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import Button from '../assets/components/Button'
import './FreeTaxFiling.css'
import picture from './vita_img.png'
import hearing from "./hearing.png"
import wheelchair from "./wheelchair.png"
import money from './money.png'
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from "./pin.webp";
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
    <section>
        <div id="title-section">
            <div id="title-words">
                <h1>Free Tax Preparation Services</h1>
                <body>Have a certified volunteer file your tax return, 
                    either in-person or virtually.</body>
            </div>
            <div id="title-img">
                <img src={picture} className="img"/>
            </div>

        </div>
    </section>
    <section>
        <div id="requirements-section">
            <div id="requirements-text">
                <h3>We offer free tax help to people who need 
                    assistance in preparing their own tax returns, 
                    including those who:</h3>
            </div>
            <div id="requirements-cards">
                <div id="card">
                    <img src={money} className="icon"/>
                    <body>Generally make $67,000 or less</body>
                </div>
                <div id="card">
                    <img src={wheelchair} className="icon"/>
                    <body>Have disabilities</body>
                </div>
                <div id="card">
                    <img src={hearing} className="icon"/>
                    <body>Have language barriers</body>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div id="services-locations-section">
            <div id="services">
                <div id="service1">
                    <h3>Scope of Services</h3>
                    <Button buttonText="IRS Free Tax Preparation PDF" linkTo="https://www.someurl.com"/>
                </div>
                <div id="service2">
                    <h3>What to Bring to Your Appointment</h3>
                    <Button buttonText="Checklist for Free Tax Return" linkTo="https://www.someurl.com"/>
                </div>
            </div>
            <div id="location-services">
                <h3>Find a location near you</h3>
                <div id="map" ></div>
                <div id="buttons">
                    <Button buttonText="VITA sites" linkTo="https://www.someurl.com"/>
                    <Button buttonText="Virtual tax preparation sites" linkTo="https://www.someurl.com"/>
                </div>
                <div id="button-bottom">
                    <Link className="button-link" to="https://www.someurl.com">
                        <button className="button">United Way Bay Area Free Tax Help Sites</button>
                    </Link>
                    {/* <Button buttonText="United Way Bay Area Free Tax Help Sites" linkTo="https://www.someurl.com"/> */}

                </div>
            </div>
        </div> 
    </section>
    <section>
        <div id="free-software">
            <div id="free-software-text">
                <h3>Free Self-Filing Software</h3>
                <body>File your tax return yourself.</body>
            </div>
            <div id="free-software-buttons">
                <div id="federal-return" class = 'buttoms'>
                    <h4>Federal Return</h4>
                    <Button buttonText="IRS Direct File" linkTo="https://www.someurl.com"/>
                </div>
                <div id="state-return" class = 'buttoms'>
                    <h4>State Return</h4>
                    <Button buttonText="CA Franchise Tax Board (FTB)" linkTo="https://www.someurl.com"/>
                </div>
                <div id="both">
                    <h4>Both</h4>
                    <div id="both-section" class = 'buttoms'>
                        <Button buttonText="IRS Free File" linkTo="https://www.someurl.com"/>
                        <Button buttonText="OnLine Taxes (OLT)" linkTo="https://www.someurl.com"/>
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