import React from 'react';
import { connect } from 'react-redux';
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

const API_KEY = "AIzaSyD9ccUUIz3gAY_wfk94Lnj-3H_mJpJXYdM";

//replace calendar id with one you want to test

let calendars = [
    { calendarId: "09opmkrjova8h5k5k46fedmo88@group.calendar.google.com" }
];

let styles = {
    //you can use object styles
    calendar: {
        borderWidth: "3px" //make outer edge of calendar thicker
    },

    //you can also use emotion's string styles (remember to add the line 'import { css } from "@emotion/react";')
    today: css`
    /* highlight today by making the text red and giving it a red border */
    color: red;
    border: 1px solid red;
    background-color: grey;
  `
};

export const Kalender = (props) => {
    return (
        <div className="main-content">
            <div className="header">
                <p>Kalender Kamtibmas</p>
            </div>
            <div className="flex-row">
                <div className="flex-col p-20 w-100">


                    <div
                        style={{
                          paddingBottom: '10%'
                        }}
                    >
                        <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />

                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Kalender)
