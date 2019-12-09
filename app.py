from flask import Flask, render_template
app = Flask(__name__)

# basic route
@app.route("/")
def main():
   return render_template('main.html')

@app.route("/map")
def map():
    # return '<h1>Hello</h1>'
    return render_template('index.html')
    # try:
    #     return render_template('index.html')
    #
    # except Exception as e:
    #     print("Made it down here")
    #     print(e)

if __name__ == '__main__':
    app.run(debug=True)
