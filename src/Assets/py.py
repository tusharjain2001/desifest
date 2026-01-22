import os

# Get Assets directory (where this script is located)
base_path = os.path.dirname(os.path.abspath(__file__))

# Page-based asset folders
folders = [
    "home",
    "about",
    "artist",
    "community",
    "openmic",
    "sofa_session",
    "concerts",
    "media",
    "press_kit",
    "shop"
]

for folder in folders:
    path = os.path.join(base_path, folder)
    os.makedirs(path, exist_ok=True)
    print(f"Created: {folder}")

print("✅ Page-based asset folders created successfully!")
