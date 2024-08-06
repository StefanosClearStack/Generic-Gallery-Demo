from flask import Flask, request, jsonify, render_template


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/embedded')
def embedded():
    return render_template('embedded.html')

if __name__ == '__main__':
    app.run(debug=True)
