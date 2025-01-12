from routes.home import home_route
from routes.route import route_app

def configure_all(app):
    configure_routes(app)

 
def configure_routes(app):
    app.register_blueprint(home_route)
    app.register_blueprint(route_app, url_prefix='/routes')


