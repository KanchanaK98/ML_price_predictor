import json
import pickle
import sys

print("hello py")
# Load the pickle file
with open('predictor.pickle', 'rb') as file:
    model = pickle.load(file)

# Get the input data from the command line arguments
input_data = json.loads(sys.argv[1])

# Perform prediction using the loaded model
print("Input data : ",[input_data])
prediction = model.predict([input_data])

print(prediction)
# Print the prediction result (to be captured by Node.js)
print(json.dumps(prediction))