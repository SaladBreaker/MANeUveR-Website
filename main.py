from time import sleep

from flask import Flask, render_template, request

app = Flask(
    __name__, static_url_path="", static_folder="static", template_folder="templates"
)


@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")


@app.route("/result", methods=["GET"])
def get_result():
    try:
        sleep(1)
        # bash command to run the solver with request.args['json_input']
    except:
        pass

    result = request.args['json_input']
    return render_template("result.html", result=result)
