import React, { useState, useEffect, useContext } from "react"
import logo from './logo.svg';
import './App.css';
import { navigate } from '@reach/router';
import * as api from './services/api';
import './css/custom.css';
import './css/bootstrap.min.css';
import './js/ie10-viewport-bug-workaround.js';

function Details() {
    const [docDetails, setDocDetails] = useState([]);

    function getDetails() {
        api.getDetails("").then(response => {
            setDocDetails(response.data)
        }).catch((error) => {
            setDocDetails([])
        });
      }

    function displayPhone(currentValue) {
        // return nothing if no value
        if (!currentValue) return currentValue; 

        if (currentValue.length == 10) {
            // returns: "(xxx) xxx-", (xxx) xxx-x", "(xxx) xxx-xx", "(xxx) xxx-xxx", "(xxx) xxx-xxxx"
            return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`; 
        } else {
            return currentValue
        }
    }

  return (
    <span>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-white">
            <div class="container ">
                <a class="navbar-brand title" href="#">
                    Rally Health India
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                    </ul>
                    <form class="form-inline mt-2 mt-md-0">
                        <li class="dropdown profileCTA">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                aria-expanded="false">Profile <span class="caret"></span></a>
                            <ul class="dropdown-menu" aria-labelledby="about-us">
                                <li><a href="#">Settings</a></li>
                                <li><a href="../login.html">Logout</a></li>
                            </ul>
                        </li>
                    </form>
                </div>
            </div>
        </nav>
        <div class="container topHeader">
            <div class="row">
                <div class="col-lg-12">
                    <h1>Who are you looking for?</h1>
                </div>
            </div>
        </div>

        <div class="jumbotron feature">
            <div class="container showSearchContainer">
                <div class="row">
                    <div class="col-lg-12">
                        <form class="example" action="action_page.php">
                            <input type="text" placeholder="Search for health care providers..." name="search"/>
                            <a class="searchBTN" type="" onClick={getDetails}>Search<i class="fa fa-search"></i></a>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="searchContainer">
                { docDetails.map((docDetail, index) => (
                    <div class="row ProviderList">
                        <div class="col-lg-9">
                            <div class="media">
                                <img class="mr-3" src="./images/pcpIcon.svg" alt="Generic placeholder image"></img>
                                <div class="media-body">
                                    <h1 class="mt-0"><a href="#" class="showPCPdetails">{docDetail.lastName}, {docDetail.firstName}, {docDetail.degree}</a><span>{docDetail.practice}</span></h1>
                                    <h6>{docDetail.address1}<br></br>
                                        {docDetail.address2}<br></br>
                                        {displayPhone(docDetail.phone)} PHONE<br></br>
                                        <a href="#">{docDetail.distanceInMiles} Miles Away</a><br></br>
                                        <a href="#">View Additional Locations ({docDetail.additionalLocation})</a><br></br>
                                        <a href="#">View Enrollment Information</a><p></p>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 rgtCol my-auto">
                            <h6>
                                <a href="#">{docDetail.evaluation}</a><br></br>
                                <a href="#">{docDetail.acceptance}</a>
                            </h6>
                        </div>
                        <div class="col-sm-12 botDetails">
                            {docDetail.botDetails} 
                        </div>
                    </div>
                ))}
            </div>
            <div class="providerContainer">
            </div>
        </div>

    </span>
  );
}

export default Details;
