# Import necessary libraries
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS from flask_cors

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all origins

# Arithmetic calculation function
def calculate(operation, num1, num2):
    if operation == '+':
        return num1 + num2
    elif operation == '-':
        return num1 - num2
    elif operation == 'x':
        return num1 * num2
    elif operation == '/':
        if num2 == 0:
            return "Cannot divide by zero"
        else:
            return num1 / num2
    else:
        return "Invalid operation"

# Calculation endpoint
@app.route('/calculate', methods=['POST'])
def perform_calculation():
    data = request.get_json()
    operation = data['operation']
    num1 = data['num1']
    num2 = data['num2']
    
    result = calculate(operation, num1, num2)
    
    return jsonify({'result': result})

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
