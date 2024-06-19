import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import re
import pickle

# Load the dataset
df = pd.read_csv('UpdatedResumeDataSet.csv')
print(df.head())

print("Shape of DataFrame:", df.shape)

# Display the value counts of the 'Category' column
print(df['Category'].value_counts())

# Plot the category distribution
plt.figure(figsize=(15, 5))
sns.countplot(x='Category', data=df)
plt.xticks(rotation=90)
plt.show()

print("Unique categories:", df['Category'].unique())

# Plot the category distribution as a pie chart
counts = df['Category'].value_counts()
labels = df['Category'].unique()
plt.figure(figsize=(15, 10))
plt.pie(counts, labels=counts.index, autopct='%1.1f%%', shadow=True, colors=plt.cm.plasma(np.linspace(0, 1, len(labels))))
plt.show()

# Clean resume text
def cleanResume(txt):
    cleanText = re.sub('http\S+\s', ' ', txt)
    cleanText = re.sub('RT|cc', ' ', cleanText)
    cleanText = re.sub('#\S+\s', ' ', cleanText)
    cleanText = re.sub('@\S+', '  ', cleanText)
    cleanText = re.sub('[%s]' % re.escape("""!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"""), ' ', cleanText)
    cleanText = re.sub(r'[^\x00-\x7f]', ' ', cleanText)
    cleanText = re.sub('\s+', ' ', cleanText)
    return cleanText

df['Resume'] = df['Resume'].apply(lambda x: cleanResume(x))

# Encode the categories
from sklearn.preprocessing import LabelEncoder
le = LabelEncoder()
le.fit(df['Category'])
df['Category'] = le.transform(df['Category'])

# TF-IDF vectorization
from sklearn.feature_extraction.text import TfidfVectorizer
tfidf = TfidfVectorizer(stop_words='english')

tfidf.fit(df['Resume'])
requiredText = tfidf.transform(df['Resume'])

# Split the data
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(requiredText, df['Category'], test_size=0.2, random_state=42)

# Train the model
from sklearn.neighbors import KNeighborsClassifier
from sklearn.multiclass import OneVsRestClassifier
from sklearn.metrics import accuracy_score

clf = OneVsRestClassifier(KNeighborsClassifier())
clf.fit(X_train, y_train)
ypred = clf.predict(X_test)
print("Model Accuracy:", accuracy_score(y_test, ypred))

# Save the model to a pickle file
with open('knn_model.pkl', 'wb') as model_file:
    pickle.dump(clf, model_file)
    
# Save the TF-IDF vectorizer to a pickle file
with open('tfidf_vectorizer.pkl', 'wb') as vec_file:
    pickle.dump(tfidf, vec_file)

# Load the model and vectorizer from pickle files
try:
    with open('knn_model.pkl', 'rb') as model_file:
        loaded_model = pickle.load(model_file)
    print("Model loaded successfully.")
except Exception as e:
    print(f"Error loading model: {e}")

try:
    with open('tfidf_vectorizer.pkl', 'rb') as vec_file:
        loaded_vectorizer = pickle.load(vec_file)
    print("TF-IDF vectorizer loaded successfully.")
except Exception as e:
    print(f"Error loading TF-IDF vectorizer: {e}")

# Example usage of the loaded model and vectorizer
def predict_category(text):
    cleaned_text = cleanResume(text)
    input_features = loaded_vectorizer.transform([cleaned_text])
    prediction_id = loaded_model.predict(input_features)[0]
    category = le.inverse_transform([prediction_id])[0]
    return category

# Test the prediction function
test_text = "Experience in data science and machine learning."
predicted_category = predict_category(test_text)
print(f"Predicted category: {predicted_category}")
