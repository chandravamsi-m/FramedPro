import os
import re

# Define the base directory
base_dir = r"c:\Users\Admin\Desktop\HTML Templates\FramedPro"
assets_images_dir = os.path.join(base_dir, "assets", "images")

# Extensions to look for
img_extensions = ('.jpg', '.jpeg', '.png', '.svg', '.webp', '.gif')

# Find all image files in assets/images and its subfolders
all_images = {}
for root, dirs, files in os.walk(assets_images_dir):
    for file in files:
        if file.lower().endswith(img_extensions):
            full_path = os.path.join(root, file)
            # Relative path from assets/images
            rel_path = os.path.relpath(full_path, assets_images_dir).replace("\\", "/")
            all_images[rel_path] = {
                "full_path": full_path,
                "name": file,
                "usage": [],
                "current_rel_path": rel_path
            }

print(f"Total images found in assets/images: {len(all_images)}")

# List of files to search in
search_files = []
for root, dirs, files in os.walk(base_dir):
    if "unused" in root: continue
    for file in files:
        if file.endswith((".html", ".css", ".js")):
            search_files.append(os.path.join(root, file))

# Map images to usage
for file_path in search_files:
    try:
        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
            for rel_path, info in all_images.items():
                name = info["name"]
                # Search for the full rel_path (e.g. "portfolio/tech-1.jpg") or just the name
                # We need to be careful with just names, but for now let's see.
                if rel_path in content or name in content:
                    info["usage"].append(os.path.relpath(file_path, base_dir))
    except Exception as e:
        print(f"Error reading {file_path}: {e}")

# Identify used and unused
used = {}
unused = {}

for rel_path, info in all_images.items():
    if info["usage"]:
        used[rel_path] = info
    else:
        unused[rel_path] = info

print(f"\nUSED IMAGES ({len(used)}):")
for rel_path in sorted(used.keys()):
    print(f"{rel_path} - Used in: {len(used[rel_path]['usage'])} files")

print(f"\nUNUSED IMAGES ({len(unused)}):")
for rel_path in sorted(unused.keys()):
    print(rel_path)
