from flask import Flask,request, render_template

app = Flask(__name__)

eventsData = [
    { "title": "Event 1", "time": "10:00 AM", "place": "New York", "date": "2024-12-10", "img": "https://via.placeholder.com/150" },
    { "title": "Event 2", "time": "11:00 AM", "place": "Los Angeles", "date": "2024-12-12", "img": "https://via.placeholder.com/150" },
    { "title": "Event 3", "time": "12:00 PM", "place": "Chicago", "date": "2024-12-15", "img": "https://via.placeholder.com/150" },
    { "title": "Event 4", "time": "1:00 PM", "place": "New York", "date": "2024-12-20", "img": "https://via.placeholder.com/150" },
    # Additional events can go here...
]

# Route for the home page (index.html)
@app.route('/')
def index():
    return render_template('index.html')

# Route for the events page (events.html)
@app.route('/lifeSaverEvent')
def events():
    event_id = request.args.get('eventId')
    print(f"Received eventId: {event_id}") 

    return render_template('filter.html')

if __name__ == "__main__":
    app.run(debug=True)
