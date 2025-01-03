from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from backend.models import JobApplication, User
from backend.app import db

job_bp = Blueprint('job', __name__)

@job_bp.route('/', methods=['POST'])
@jwt_required()
def create_job():
    user_id = get_jwt_identity()
    data = request.get_json()
    new_job = JobApplication(company=data['company'], position=data['position'], status=data['status'], user_id=user_id)
    db.session.add(new_job)
    db.session.commit()
    return jsonify({"message": "Job application created!"}), 201
