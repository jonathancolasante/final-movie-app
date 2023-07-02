import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

// Generate some fake data
const events = [
    {
        start: new Date(2023, 6, 7, 9, 0),
        end: new Date(2023, 6, 7, 11, 0),
    },
    {
      start: new Date(2023, 6, 7, 13, 0),
      end: new Date(2023, 6, 7, 15, 0),
    },
    {
      start: new Date(2023, 6, 7, 17, 0),
      end: new Date(2023, 6, 7, 19, 0),
    },
        {
        start: new Date(2023, 6, 6, 8, 0),
        end: new Date(2023, 6, 6, 10, 0),
    },
    {
      start: new Date(2023, 6, 6, 14, 0),
      end: new Date(2023, 6, 6, 16, 0),
    },
    {
      start: new Date(2023, 6, 6, 17, 0),
      end: new Date(2023, 6, 6, 19, 0),
    },
    {
      start: new Date(2023, 6, 9, 9, 0),
      end: new Date(2023, 6, 9, 11, 0),
  },
  {
    start: new Date(2023, 6, 9, 13, 0),
    end: new Date(2023, 6, 9, 15, 0),
  },
  {
    start: new Date(2023, 6, 9, 17, 0),
    end: new Date(2023, 6, 9, 19, 0),
  },
      {
      start: new Date(2023, 6, 8, 8, 0),
      end: new Date(2023, 6, 8, 10, 0),
  },
  {
    start: new Date(2023, 6, 8, 14, 0),
    end: new Date(2023, 6, 8, 16, 0),
  },
  {
    start: new Date(2023, 6, 8, 17, 0),
    end: new Date(2023, 6, 8, 19, 0),
  },
    {
        start: new Date(2023, 6, 4, 9, 0),
        end: new Date(2023, 6, 4, 11, 0),
    },
    {
      start: new Date(2023, 6, 4, 13, 0),
      end: new Date(2023, 6, 4, 15, 0),
    },
    {
      start: new Date(2023, 6, 4, 17, 0),
      end: new Date(2023, 6, 4, 19, 0),
    },
    {
        start: new Date(2023, 6, 5, 8, 0),
        end: new Date(2023, 6, 5, 10, 0),
    },
    {
      start: new Date(2023, 6, 5, 14, 0),
      end: new Date(2023, 6, 5, 16, 0),
    },
    {
      start: new Date(2023, 6, 5, 17, 0),
      end: new Date(2023, 6, 5, 19, 0),
    },
    {
        start: new Date(2023, 6, 3, 8, 0),
        end: new Date(2023, 6, 3, 10, 0),
    },
    {
      start: new Date(2023, 6, 3, 14, 0),
      end: new Date(2023, 6, 3, 16, 0),
    },
    {
      start: new Date(2023, 6, 3, 17, 0),
      end: new Date(2023, 6, 3, 19, 0),
    },
  ];

export default function MyCalendar() {

    const [currentDate, setCurrentDate] = useState(new Date());

    const handleNavigate = (newDate) => {
      // Prevent navigation if newDate is not in the current week
      if (moment(newDate).isSame(currentDate, 'week')) {
        setCurrentDate(newDate);
      }
    };

    return (
        <div style={{ height: 500 }}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, margin: '50px', fontSize: '10px' }}
            defaultView='week'
            date={currentDate}
            onNavigate={handleNavigate}
            toolbar={false}
          />
        </div>

      );
}
