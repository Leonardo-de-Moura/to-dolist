from flask import Blueprint, render_template, request

route_app= Blueprint('route', __name__)

@route_app.route('/home')
def home():
	return render_template('page.html')