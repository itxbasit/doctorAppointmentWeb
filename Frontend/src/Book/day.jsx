
export default function generateDatesForDaysOfWeek(daysOfWeek) {
    const validDaysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    const targetDays = daysOfWeek.filter(day => validDaysOfWeek.includes(day));
  
    if (targetDays.length === 0) {
      console.error('No valid days of the week provided');
      return;
    }
  
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
  
    const targetDates = [];
  
    for (let i = 0; i < 1; i++) {
      for (const day of targetDays) {
        const targetDay = validDaysOfWeek.indexOf(day);
        const daysUntilTargetDay = (targetDay - currentDay + 7) % 7;
  
        const targetDate = new Date(currentDate);
        targetDate.setDate(currentDate.getDate() + daysUntilTargetDay + i * 7);
  
        // Format the date as "Mon DD YYYY"
        const formattedDate = targetDate.toDateString().slice(4);
        targetDates.push({ day, date: formattedDate });
      }
    }
  
    return targetDates;
  }
