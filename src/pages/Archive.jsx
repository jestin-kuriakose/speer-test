import React from "react";
import ActivityFeed from "../components/ActivityFeed.jsx";
import ArchivedCalls from "../components/ArchivedCalls.jsx";
import Header from "../components/Header.jsx";

const Archive = () => {
    return (
    <div className='container'>
      <Header/>
      <ArchivedCalls/>
    </div>
    )
}

export default Archive;