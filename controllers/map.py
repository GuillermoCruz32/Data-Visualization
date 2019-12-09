from flask import Flask, render_template

@app.route("/map")
def map():
    try:
        return render_template('index.html')

    except Exception as e:
        print("Made it down here")
        print(e)
