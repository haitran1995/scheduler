import React, { useState, useEffect } from "react";
import "components/Application.scss";
import DayList from "./DayList";
import "components/Appointment"
import Appointment from "components/Appointment";
import axios from "axios";


export default function Application(props) {

  const [day, setDay] = useState("Monday");
  const [days, setDays] = useState([]);
  const [appointments, setAppointments] = useState([])


  useEffect(() =>  {

    const daysPromise = axios.get('/api/days')
    const appointmentsPromise = axios.get('/api/appointments')

    const promises = [daysPromise, appointmentsPromise]

    Promise.all(promises)
      .then((response) => {
        
        const daysResponse = response[0]
        const appointmentsResponse = response[1]

        setDays(daysResponse.data)
        setAppointments(appointmentsResponse.data)
      })
    },[])

const schedule = Object.values(appointments).map((appointment) => {
  return (
    <Appointment
      key={appointment.id}
      id={appointment.id}
      time={appointment.time}
      interview={appointment.interview}
    />
  )
})

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={days}
            value={day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule"> 
        {schedule}
      </section>
    </main>
  );
}
