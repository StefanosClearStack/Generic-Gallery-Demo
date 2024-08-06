from flask import Flask, request, render_template


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/embedded')
def embedded():
    return render_template('embedded.html')

@app.route('/mobile')
def mobile():
    return render_template('mobile.html')
if __name__ == '__main__':
    app.run(debug=True)
