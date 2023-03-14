# import necessary libraries
from flask import Flask, render_template
import datetime

# create a new Flask app
app = Flask(__name__)

# define a route to render the countdown timer webpage
@app.route('/')
def countdown():
    # calculate the target date and time for the countdown to end
    target_date = datetime.datetime(2023, 12, 31, 23, 59, 59)

    # render the template for the webpage, passing in the target date
    return render_template('countdown.html', target_date=target_date)

if __name__ == '__main__':
    app.run(debug=True)
