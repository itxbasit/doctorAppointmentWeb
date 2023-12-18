

    export default function generateTimeSlots(startTime, endTime) {
        const timeSlots = [];

        const start = new Date(`2023-01-01 ${startTime}`);
        const end = new Date(`2023-01-01 ${endTime}`);

        let current = new Date(start);
        while (current < end) {
            const slotEnd = new Date(current.getTime() + 30 * 60000);
            timeSlots.push(`${formatTime(current)} - ${formatTime(slotEnd)}`);
            current = slotEnd;
        }

        return timeSlots;
    }
    function formatTime(date) {
        return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    }