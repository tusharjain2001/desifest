import React from 'react'

const Calendar = () => {
  return (
    <div className='p-1 md:p-28 mt-20'>
      <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden' }}>
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1OOyvXelALA3nJXmI2XrqH4gIwUoImjaGSh6IciGamjwoU_LzoJKUuxoZm_qEQODrI2hfaFQk1?gv=true"
          style={{ border: 0, display: 'block' }}
          width="100%"
          height="1000"
          frameBorder="0"
          title="Google Calendar Appointment Scheduling"
        />
      </div>
    </div>
  )
}

export default Calendar