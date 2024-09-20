from flask import Flask, send_from_directory
import os

app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_file(path):
    if path != "" and os.path.exists(path):
        return send_from_directory(os.getcwd(), path)
    else:
        return send_from_directory(os.getcwd(), 'index.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5005)
