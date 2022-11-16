// import Link from 'next/link'
import { FormEvent } from 'react'
import styles from '../styles/Home.module.css'
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function PageWithJSbasedForm() {
  const [startDate, setStartDate] = useState(new Date());
  // Handle the submit event on form submit.
  const handleSubmit = async (event: FormEvent) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Cast the event target to an html form
    const form = event.target as HTMLFormElement

    // Get data from the form.
    const data = {
      origin: form.origin.value as string,
      destination: form.destination.value as string,
      departureDate: startDate,
    }

    console.log(data, 'form data')
    // Send the form data to our API and get a response.
    const response = await fetch('/api/form', {
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(data),
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // The method is POST because we are sending data.
      method: 'POST',
    })

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    console.log(`Is this your input: ${result.data}`)
  }

  const onDateChange = (date: any) => {
    // const form = event.target as HTMLFormElement;

    // const data = {
    //   departureDate: form.departureDate.value as string,
    // }

    setStartDate(date)
  }

  return (
    <div className="container">
      {/* <h1 className={styles.title}>
        Form
      </h1> */}

      <p className={styles.description}>
        Where would you like to go?
        {/* <code className={styles.code}>pages/js-form.js</code> */}
      </p>

      <div style={{ maxWidth: "500px" }}>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit}
        >
          <label className={styles.fieldLabel} htmlFor="origin">Origin</label>
          <div className={styles.fieldButton}>
            <input className={styles.fieldInput} type="text" id="origin" name="origin" required />
          </div>

          <label className={styles.fieldLabel} htmlFor="destination">Destination</label>
          <div className={styles.fieldButton}>
          <input className={styles.fieldInput}type="text" id="destination" name="destination" required />
          </div>

          <label className={styles.fieldLabel} htmlFor="departureDate">Departure date</label>
          <div className={styles.fieldButton}>
          <DatePicker minDate={new Date()} className={styles.fieldInput} selected={startDate} onChange={(date:Date) => onDateChange(date)} />
          </div>

         

          <button className={styles.buttonPrimary} type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}