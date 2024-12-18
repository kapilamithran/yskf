let currentPage = 1;
let eventsPerPage = 6;
const eventsData = [
    // Dummy Event Data
    { title: "Event 1", time: "10:00 AM", place: "New York", date: "2024-12-10", img: "https://via.placeholder.com/150" },
    { title: "Event 2", time: "11:00 AM", place: "Los Angeles", date: "2024-12-12", img: "https://via.placeholder.com/150" },
    { title: "Event 3", time: "12:00 PM", place: "Chicago", date: "2024-12-15", img: "https://via.placeholder.com/150" },
    { title: "Event 4", time: "1:00 PM", place: "New York", date: "2024-12-20", img: "https://via.placeholder.com/150" },
    { title: "Event 1", time: "10:00 AM", place: "New York", date: "2024-12-10", img: "https://via.placeholder.com/150" },
    { title: "Event 2", time: "11:00 AM", place: "Los Angeles", date: "2024-12-12", img: "https://via.placeholder.com/150" },
    { title: "Event 3", time: "12:00 PM", place: "Chicago", date: "2024-12-15", img: "https://via.placeholder.com/150" },
    { title: "Event 4", time: "1:00 PM", place: "New York", date: "2024-12-20", img: "https://via.placeholder.com/150" },
    { title: "Event 1", time: "10:00 AM", place: "New York", date: "2024-12-10", img: "https://via.placeholder.com/150" },
    { title: "Event 2", time: "11:00 AM", place: "Los Angeles", date: "2024-12-12", img: "https://via.placeholder.com/150" },
    { title: "Event 3", time: "12:00 PM", place: "Chicago", date: "2024-12-15", img: "https://via.placeholder.com/150" },
    { title: "Event 4", time: "1:00 PM", place: "New York", date: "2024-12-20", img: "https://via.placeholder.com/150" },
    { title: "Event 1", time: "10:00 AM", place: "New York", date: "2024-12-10", img: "https://via.placeholder.com/150" },
    { title: "Event 2", time: "11:00 AM", place: "Los Angeles", date: "2024-12-12", img: "https://via.placeholder.com/150" },
    { title: "Event 3", time: "12:00 PM", place: "Chicago", date: "2024-12-15", img: "https://via.placeholder.com/150" },
    { title: "Event 4", time: "1:00 PM", place: "New York", date: "2024-12-20", img: "https://via.placeholder.com/150" },
    // Add more events
];

function displayEvents() {
    const eventsArea = document.getElementById("events-area");
    eventsArea.innerHTML = ""; // Clear previous events
    const startIndex = (currentPage - 1) * eventsPerPage;
    const endIndex = startIndex + eventsPerPage;

    eventsData.slice(startIndex, endIndex).forEach(event => {
        const eventBlock = document.createElement("div");
        eventBlock.classList.add("event-block");

        eventBlock.innerHTML = `
            <img src="${event.img}" alt="${event.title}">
            <div class="event-details">
                <h3>${event.title}</h3>
                <p>Time: ${event.time}</p>
                <p>Place: ${event.place}</p>
                <p>Date: ${event.date}</p>
            </div>
        `;
        eventsArea.appendChild(eventBlock);
    });
}

function filteredDisplayEvents(startDate, endDate,place){
    const eventsArea = document.getElementById("events-area");
    eventsArea.innerHTML = ""; // Clear previous events
    const startIndex = (currentPage - 1) * eventsPerPage;
    const endIndex = startIndex + eventsPerPage;

    eventsData.slice(startIndex, endIndex).forEach(event => {
        const eventDate = new Date(event.date);
        const start = new Date(startDate);
        const end = new Date(endDate);
    
        if (eventDate >= start && eventDate <= end && (event.place === place || place === "")) {
            const eventBlock = document.createElement("div");
            eventBlock.classList.add("event-block");
    
            eventBlock.innerHTML = `
                <img src="${event.img}" alt="${event.title}">
                <div class="event-details">
                    <h3>${event.title}</h3>
                    <p>Time: ${event.time}</p>
                    <p>Place: ${event.place}</p>
                    <p>Date: ${event.date}</p>
                </div>
            `;
            eventsArea.appendChild(eventBlock);
        }
    });    
}

function toggleView() {
    displayEvents();
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayEvents();
        document.getElementById("page-number").textContent = `Page ${currentPage}`;
    }
}

function nextPage() {
    if (currentPage * eventsPerPage < eventsData.length) {
        currentPage++;
        displayEvents();
        document.getElementById("page-number").textContent = `Page ${currentPage}`;
    }
}

function applyFilters() {
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;
    const place = document.getElementById("place").value;

    // Filter Logic
    console.log(`Filters: Date Range: ${startDate} - ${endDate}, Place: ${place}`);
    filteredDisplayEvents(startDate,endDate,place);
}

function redirectToIndex()
{
    window.location.href = "/";
}