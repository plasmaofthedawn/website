from flask import Flask, render_template, abort

app = Flask(__name__)


@app.route("/")
def main():
    return render_template("index.html", page="home")


@app.route("/about")
def about():
    return render_template("about.html", page="about")


@app.route("/projects")
def projects():
    return render_template("projects.html", page="projects")


@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html", page="404"), 404



if __name__ == '__main__':
    app.run('0.0.0.0', port=8080)
