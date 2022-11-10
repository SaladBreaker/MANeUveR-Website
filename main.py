import json
import logging

from logging_config import configure_logging

from flask import Flask, render_template, request, abort

configure_logging()

logger = logging.getLogger(__name__)

app = Flask(
    __name__, static_url_path="", static_folder="static", template_folder="templates"
)


@app.errorhandler(400)
def bad_request(e):
    # note that we set the 404 status explicitly
    return render_template("400.html"), 400


@app.errorhandler(500)
def bad_request(e):
    # note that we set the 404 status explicitly
    return render_template("500.html"), 500


@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")


@app.route("/result", methods=["GET"])
def get_result():
    result = request.args["json_input"]
    try:
        # we do this to check that the response is in json format, if it is not
        # the 400 page will be displayed
        json_result = json.loads(result)

        json_result = json.dumps(json_result, indent=4)
        with open("./solver/Models/json/SecureBilling.json", "w+") as outfile:
            outfile.write(json_result)

    except Exception as e:
        abort(400)

    from solver.runTests import main

    main()

    with open("./solver/Output/web_output.txt", "r") as f:
        solver_result = f.read()

    return render_template("result.html", result=solver_result)


if __name__ == "__main__":
    app.run(port=5055, debug=False)
