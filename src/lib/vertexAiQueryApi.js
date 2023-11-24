const vertexAiQuery = async (prompt, chatId, model) => {

  const project = process.env.GCP_PROJECT_ID;
  const location = "us-central1";

  const aiplatform = require("@google-cloud/aiplatform");
  // Imports the Google Cloud Prediction service client
  const { PredictionServiceClient } = aiplatform.v1;

  // Import the helper module for converting arbitrary protobuf.Value objects.
  const { helpers } = aiplatform;

  // Specifies the location of the api endpoint
  const clientOptions = {
    apiEndpoint: "us-central1-aiplatform.googleapis.com",
  };

  const publisher = "google";

  // Instantiates a client
  const predictionServiceClient = new PredictionServiceClient(clientOptions);
  // Configure the parent resource
  const endpoint = `projects/${project}/locations/${location}/publishers/${publisher}/models/${model}`;

  const message = {
    context:
      "You are a chatbot, your name is google bard. Yoy are confident, assertive and never apologize.",
    examples: [
      {
        input: { content: "Hi, google bard!" },
        output: {
          content: "Hello friends, how can I help you today?",
        },
      },
    ],
    messages: [
      {
        author: "user",
        content: prompt,
      },
    ],
  };
  const instanceValue = helpers.toValue(message);
  const instances = [instanceValue];

  const parameter = {
    temperature: 0.2,
    maxOutputTokens: 256,
    topP: 0.95,
    topK: 40,
  };
  const parameters = helpers.toValue(parameter);

  const request = {
    endpoint,
    instances,
    parameters,
  };

  // Predict request
  const result = await predictionServiceClient
    .predict(request)
    .then((result) => {
      
      const [response] = result;
      const predictions = response.predictions;
      const data =  predictions[0].structValue.fields.candidates.listValue.values[0].structValue.fields.content.stringValue;
      
      return data;
      
    }).catch((err) => {
      return `Bard is unable to find the answer for that. Error(${err.message})`;
    });

    // Return the result (data or error message) to the caller
    return result; 
  
};

export default vertexAiQuery;
