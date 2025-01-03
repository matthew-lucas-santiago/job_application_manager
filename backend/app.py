from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from backend.config import Config
from flask_cors import CORS
# Initialize Flask app
app = Flask(__name__)
CORS(app)
app.config.from_object(Config)

# Initialize extensions
db = SQLAlchemy(app)
jwt = JWTManager(app)

# Import and register routes
from backend.routes.auth_routes import auth_bp
from backend.routes.job_routes import job_bp

app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(job_bp, url_prefix='/jobs')

@app.route("/")
def home():
    return "Welcome to the Job Application Manager!"

with app.test_request_context():
    print(app.url_map)

if __name__ == "__main__":
    app.run(debug=True)
