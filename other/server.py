from flask import Flask, send_from_directory
import os

app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_file(path):
    parent_dir = os.path.dirname(os.getcwd())
    if path != "" and os.path.exists(os.path.join(parent_dir, path)):
        return send_from_directory(parent_dir, path)
    else:
        return send_from_directory(parent_dir, 'index.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5005)
