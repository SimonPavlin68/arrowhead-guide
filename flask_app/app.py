from flask import Flask, request, jsonify
import math
from datetime import datetime

app = Flask(__name__)

g = 9.81

def merek_neg(v0, alpha, beta):
    real = beta - alpha if beta > 0 else -alpha + beta
    m = v0**2 * math.sin(math.radians(real*2)) / g
    return m

def merek_pos(v0, alpha, beta):
    real = beta - alpha
    m = v0**2 * math.sin(math.radians(real*2)) / g
    return m

def compute_result(v0, l, deg):
    x = l * math.cos(math.radians(deg))
    h = l * math.sin(math.radians(deg))

    if deg == 0:
        m = l
    elif deg < 0:
        h = -h
        z = g * x**2 / v0**2 - h
        beta = (math.atan2(x, h)/2 - math.acos(z / math.sqrt(h**2 + x**2))/2) * 180.0 / math.pi
        m = merek_neg(v0, deg, beta)
    else:
        z = g * x**2 / v0**2 + h
        beta = 90 - (math.atan2(x, h)/2 + math.acos(z / math.sqrt(h**2 + x**2))/2) * 180.0 / math.pi
        m = merek_pos(v0, deg, beta)

    return round(m, 1)


@app.route("/api/hello", methods=["GET"])
def hello():
    return jsonify({"message": "Hello, world!"})


@app.route("/api/merek", methods=["POST"])
def api_merek():
    data = request.json
    try:
        v0 = float(data["v0"])
        distance = float(data["distance"])
        angle = float(data["angle"])
    except (KeyError, ValueError, TypeError):
        return jsonify({"error": "Neveljavni podatki"}), 400

    result = compute_result(v0, distance, angle)
    return jsonify({"merek": result})

# login endpoint
@app.route("/api/login", methods=["POST"])
def api_login():
    data = request.json
    username = data.get("username", "Unknown")
    ip = request.remote_addr
    timestamp = datetime.utcnow().isoformat()

    # zapiši v datoteko
    with open("logins.csv", "a") as f:
        f.write(f"{timestamp},{ip},{username}\n")

    print(f"[LOGIN] {timestamp} {ip} {username}")
    return jsonify({"status": "ok"})

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000)
