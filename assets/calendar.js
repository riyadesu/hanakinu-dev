function generateCalendar(monthOffset, holidays, weekends, elementId) {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + monthOffset;
  const year = currentDate.getFullYear();

  const firstDay = new Date(year, currentMonth, 1);
  const lastDay = new Date(year, currentMonth + 1, 0);

  const monthName = firstDay.toLocaleString('default', { month: 'long' });
  const daysInMonth = lastDay.getDate();

  let calendarHTML = `<table><thead><tr>`;
  const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
  weekdays.forEach((day) => {
    calendarHTML += `<th>${day}</th>`;
  });
  calendarHTML += `</tr></thead><tbody><tr>`;

  for (let i = 0; i < firstDay.getDay(); i++) {
    calendarHTML += `<td></td>`;
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, currentMonth, day);
    const dateString = date.toISOString().split('T')[0];
    const isHoliday = holidays.includes(dateString) || weekends.includes(date.getDay());

    const holidayClass = isHoliday ? 'holiday' : '';

    calendarHTML += `<td class="${holidayClass}">${day}</td>`;

    if (date.getDay() === 6 && day !== daysInMonth) {
      calendarHTML += `</tr><tr>`;
    }
  }

  while (lastDay.getDay() !== 6) {
    calendarHTML += `<td></td>`;
    lastDay.setDate(lastDay.getDate() + 1);
  }
  calendarHTML += `</tr></tbody></table>`;

  document.getElementById(elementId).innerHTML = calendarHTML;
}

// Ensure currM exists and fetch holidays
const currM = document.getElementById('calendar');
let currentMonthHolidays = [];

if (currM && currM.getAttribute('data')) {
  const holidaysData = currM.getAttribute('data');
  // Split the string by commas to create an array of holiday dates
  currentMonthHolidays = holidaysData.split(',').map((date) => date.trim());
}

const nextMonthM = document.getElementById('next-month-calendar');
let nextMonthHolidays = [];

if (nextMonthM && nextMonthM.getAttribute('data')) {
  const holidaysData = nextMonthM.getAttribute('data');
  // Split the string by commas to create an array of holiday dates
  nextMonthHolidays = holidaysData.split(',').map((date) => date.trim());
}

console.log(currentMonthHolidays);
console.log(nextMonthHolidays);

// Combine current and next month holidays safely
const holidays = currentMonthHolidays.concat(nextMonthHolidays);

// Get selected weekends from the settings in Shopify
const weekends = [];
if (currM.getAttribute('data-holiday-sunday') === 'true') weekends.push(0); // Sunday
if (currM.getAttribute('data-holiday-monday') === 'true') weekends.push(1); // Monday
if (currM.getAttribute('data-holiday-tuesday') === 'true') weekends.push(2); // Tuesday
if (currM.getAttribute('data-holiday-wednesday') === 'true') weekends.push(3); // Wednesday
if (currM.getAttribute('data-holiday-thursday') === 'true') weekends.push(4); // Thursday
if (currM.getAttribute('data-holiday-friday') === 'true') weekends.push(5); // Friday
if (currM.getAttribute('data-holiday-saturday') === 'true') weekends.push(6); // Saturday

console.log('Selected weekends:', weekends);

// Generate the calendars for the current and next months
generateCalendar(0, holidays, weekends, 'calendar');
generateCalendar(1, holidays, weekends, 'next-month-calendar');
