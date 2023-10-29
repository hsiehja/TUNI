/**
 * CalendarComponent.js
 *
 * This component provides a one-week calendar view using the 'react-native-calendars' library.
 * It displays a calendar with a date range highlighting the current week.
 *
 * - The current week is defined from the current date to one week in the future.
 * - The selected dates within the week are highlighted and marked on the calendar.
 *
 * @returns {JSX.Element} The one-week calendar component.
 */

import React from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarComponent = () => {
  // Define the date range for your one-week calendar
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);

  // Format the date range
  const startDate = today.toISOString().split('T')[0];
  const endDate = nextWeek.toISOString().split('T')[0];

  // Customize the appearance of selected dates
  const selectedDates = {
    [startDate]: { selected: true, marked: true },
  };

  return (
    <View>
      <Calendar
        // Set the selected date range
        current={startDate}
        markedDates={selectedDates}
      />
    </View>
  );
};

export default CalendarComponent;
