**Preterm Delivery Prediction Web Application**   

**Introduction**  
Welcome to our Preterm Delivery Prediction Web Application! This web app is designed to provide users with an estimation of the possibility of preterm delivery using a neural network-based prediction model. Additionally, it features an AI chatbot to provide assistance and answer user queries related to preterm delivery and pregnancy. We also have separate pages to find the type of vaginal infection and hypertension related disorders as these two are one of the primary causes for preterm delivery.

**Background**  
Preterm birth, defined as birth before 37 weeks of pregnancy, is a significant public health concern globally. It can lead to various health complications for both the newborn and the mother. Sadly  India is the country with highest amount of preterm births and globally around 14 million children are born premature causing 35% of neonatal deaths.  Predicting the risk of preterm delivery is crucial for healthcare providers to take necessary preventive measures and provide appropriate care to pregnant women. This will help both the doctors and the expectant mothers to arrive at a data driven solution.

**Methodology**  
The dataset is from US Government Medical Records, hence it is reliable.
We used various machine learning classifiers like SVM, KNN, XGBoost, Random Forest. While the results were satisfactory, the best results were produced by our neural networks model, made of 3 dense layers, using Adam optimizer and L2 regularization to prevent overfitting.
Our prediction model is built using neural networks, and provides  92% accuracy of premature birth.

**Application**  
The web application serves as a user-friendly interface for accessing our preterm delivery prediction model. Users can input relevant pregnancy-related information, such as gestational age, maternal age, diabetes , hypertension levels etc. The model then processes this information and provides an estimation of the probability of preterm delivery.

Additionally, the application features an AI chatbot that can interact with users, answer questions, provide additional information about preterm delivery, and offer guidance on pregnancy-related concerns.

**1. Backend and Machine Learning:**  
Python: Primary programming language for machine learning and backend development.
Streamlit: Python library for building interactive web applications.
Pandas: Data manipulation and analysis, especially for handling input data.
NumPy: Numerical operations and array manipulation, often used in data preprocessing.
scikit-learn: Machine learning library for data preprocessing, model training, and prediction.
TensorFlow / Keras: Deep learning frameworks for building and training neural networks.  
**2. Frontend:**  
React.js: JavaScript library for building user interfaces.
HTML/CSS: Customization options are provided by React.js for layout and styling.
Streamlit: Frontend framework for building interactive web applications (for parts not handled by React.js).
Conclusion
Our Preterm Delivery Prediction Web Application combines the power of neural networks, React, and Streamlit to provide users with a valuable tool for estimating the risk of preterm birth. By leveraging artificial intelligence and modern web technologies, we aim to assist healthcare providers and expectant mothers and also doctors in making informed decisions regarding pregnancy care and management. We hope this application contributes to improving maternal and child health outcomes worldwide.
