import os
import re

# Define the base directory
base_dir = r"c:\Users\Admin\Desktop\HTML Templates\FramedPro"
images_dir = os.path.join(base_dir, "assets", "images")

# Extensions to look for
img_extensions = ('.jpg', '.jpeg', '.png', '.svg', '.webp', '.gif')

# Find all image files in assets/images
all_images = []
for root, dirs, files in os.walk(images_dir):
    for file in files:
        if file.lower().endswith(img_extensions):
            # Get the relative path from assets/images
            rel_path = os.path.relpath(os.path.join(root, file), images_dir)
            all_images.append(rel_path.replace("\\", "/"))

print(f"Total images found: {len(all_images)}")

# Find all HTML and CSS files
project_files = []
for root, dirs, files in os.walk(base_dir):
    if "unused" in root: continue
    for file in files:
        if file.endswith((".html", ".css", ".js")):
            project_files.append(os.path.join(root, file))

# Map images to usage
usage_map = {img: [] for img in all_images}

for file_path in project_files:
    try:
        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
            for img in all_images:
                # Search for the image name or full path in content
                img_name = os.path.basename(img)
                if img in content or img_name in content:
                    usage_map[img].append(os.path.relpath(file_path, base_dir))
    except Exception as e:
        print(f"Error reading {file_path}: {e}")

# Separate used and unused
used_images = []
unused_images = []

for img, files in usage_map.items():
    if files:
        used_images.append(img)
    else:
        unused_images.append(img)

print("\nUSED IMAGES:")
for img in used_images:
    print(f"{img} (Used in {len(usage_map[img])} files)")

print("\nUNUSED IMAGES:")
for img in unused_images:
    print(img)
