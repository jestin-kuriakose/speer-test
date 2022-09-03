import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import regeneratorRuntime from "regenerator-runtime";
import './activityFeed.css'

const ActivityFeed = () => {
    const [activities, setActivities] = useState([])

    useEffect(()=> {
        const getCallFeeds = async () => {
            try{
                const res = await axios.get('https://aircall-job.herokuapp.com/activities')
                setActivities(res.data)
            } catch (err) {
                console.log(err)
            }
            console.log(activities)
        }
        getCallFeeds()
    }, [])

    const onClickHandler = async (id, archiveStatus) => {
        console.log(id)
        try {
            const res = await axios.post(`https://aircall-job.herokuapp.com/activities/${id}`, {
                    is_archived: archiveStatus ? false : true
            })
            console.log(res.data)
            sendGetRequest()
        } catch(err) {
            console.log(err)
        }
    }

    const sendGetRequest = async () => {
        try{
            const res = await axios.get('https://aircall-job.herokuapp.com/activities')
            setActivities(res.data)
        } catch (err) {
            console.log(err)
        }
    }

  return (
    <div>
      { activities.map((activity)=>(
        !activity.is_archived && <div key={activity.id} style={{margin:"20px"}}>
            <p style={{textAlign: "center"}}>{new Date(activity.created_at).toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <div  style={{background: "white",
                                borderRadius: "3px",
                                boxShadow: "0 0 5px 0 rgba(0, 0, 0, .9)", 
                                padding: "10px", 
                                display: "flex", 
                                flexDirection:"row", 
                                alignItems:"center",
                                justifyContent:"space-between"}}>
                    
                    <p style={{fontWeight: "bold"}}>{activity.from}</p>
                    <p>{new Date(activity.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                    <button onClick={(e)=>onClickHandler(activity.id, activity.is_archived)} style={{backgroundColor: "#40c420", color: "white", border:"2px solid white", borderRadius:"3px", boxShadow: "0 0 5px 0 rgba(0, 0, 0, .9)"}}>ARCHIVE</button>
                </div>
            
        </div>

      ))}
    </div>
  );
};

export default ActivityFeed;