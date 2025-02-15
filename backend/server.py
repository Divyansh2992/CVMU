from flask import Flask, request, jsonify
import pandas as pd
import re

app = Flask(__name__)

# Load CSV file
df = pd.read_csv("startup_data.csv")

# Pre-defined category keywords
CATEGORY_KEYWORDS = {
    "AI": ["artificial intelligence", "machine learning", "AI", "chatbot", "automation"],
    "SaaS": ["software", "cloud", "platform", "B2B", "SaaS"],
    "E-commerce": ["online shop", "retail", "ecommerce", "dropshipping"],
    "Bakery": ["cakes", "pastries", "bread", "desserts"],
    "EdTech": ["education", "learning", "courses", "tutoring"],
}

def extract_category(idea):
    idea = idea.lower()
    for category, keywords in CATEGORY_KEYWORDS.items():
        if any(re.search(rf"\b{keyword}\b", idea) for keyword in keywords):
            return category
    return "General"  # Default if no match

@app.route("/best-locations", methods=["GET"])
def best_locations():
    idea = request.args.get("idea", "").strip()
    if not idea:
        return jsonify({"message": "Please provide a startup idea!", "locations": []})

    # Determine category from user input
    category = extract_category(idea)

    # Filter data based on the category
    filtered_data = df[df["Category"] == category].nlargest(10, "Growth Index")

    if filtered_data.empty:
        return jsonify({"message": "No relevant locations found!", "locations": []})

    result = {
        "message": f"Best locations for {category} startups:",
        "locations": filtered_data.to_dict(orient="records")
    }

    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
