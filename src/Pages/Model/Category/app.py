from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import re
import nltk
import PyPDF2
import logging

nltk.download("punkt")
nltk.download("stopwords")

def load_models():
    try:
        with open("knn_model.pkl", "rb") as model_file:
            clf = pickle.load(model_file)
        with open("tfidf_vectorizer.pkl", "rb") as vectorizer_file:
            tfidf = pickle.load(vectorizer_file)
        print("Models loaded successfully.")
        return clf, tfidf
    except FileNotFoundError as e:
        print(f"File not found: {e}")
    except IOError as e:
        print(f"IO error: {e}")
    except Exception as e:
        print(f"An error occurred: {e}")

clf, tfidf = load_models()


def clean_resume(resume_text):
    clean_text = re.sub("http\S+\s*", " ", resume_text)
    clean_text = re.sub("RT|cc", " ", clean_text)
    clean_text = re.sub("#\S+", "", clean_text)
    clean_text = re.sub("@\S+", "  ", clean_text)
    clean_text = re.sub(
        "[%s]" % re.escape("""!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"""), " ", clean_text
    )
    clean_text = re.sub(r"[^\x00-\x7f]", r" ", clean_text)
    clean_text = re.sub("\s+", " ", clean_text)
    return clean_text


def extract_text_from_pdf(pdf_path):
    text = ""
    try:
        with open(pdf_path, "rb") as file:
            reader = PyPDF2.PdfFileReader(file)
            for page_num in range(reader.numPages):
                page = reader.getPage(page_num)
                text += page.extract_text()
    except Exception as e:
        logging.error(f"Error reading PDF file: {e}")
    return text


app = Flask(__name__)
CORS(app)  # Enable CORS


@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        pdf_content = data["pdf_content"]
        logging.info(
            f"Received PDF content: {pdf_content[:500]}..."
        )  # Log the first 500 characters

        cleaned_resume = clean_resume(pdf_content)
        input_features = tfidf.transform([cleaned_resume])
        logging.info(f"Received PDF content: hello")
        prediction_id = clf.predict(input_features)[0]

        category_mapping = {
            15: "Java Developer",
            23: "Testing",
            8: "DevOps Engineer",
            20: "Python Developer",
            24: "Web Designing",
            12: "HR",
            13: "Hadoop",
            3: "Blockchain",
            10: "ETL Developer",
            18: "Operations Manager",
            6: "Data Science",
            22: "Sales",
            16: "Mechanical Engineer",
            1: "Arts",
            7: "Database",
            11: "Electrical Engineering",
            14: "Health and Fitness",
            19: "PMO",
            4: "Business Analyst",
            9: "DotNet Developer",
            2: "Automation Testing",
            17: "Network Security Engineer",
            21: "SAP Developer",
            5: "Civil Engineer",
            0: "Advocate",
        }

        category_name = category_mapping.get(prediction_id, "Unknown")
        logging.info(f"Predicted category: {category_name}")

        return jsonify({"category": category_name})
    except Exception as e:
        logging.error(f"Error during prediction: {e}")
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    app.run(debug=True)
