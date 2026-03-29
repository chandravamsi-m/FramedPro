import os
import re

base_dir = r"c:\Users\Admin\Desktop\HTML Templates\FramedPro"
images_dir = os.path.join(base_dir, "assets", "images")
img_extensions = ('.jpg', '.jpeg', '.png', '.svg', '.webp', '.gif')

# 1. Identify all images and their current relative paths from assets/images
all_images = []
for root, dirs, files in os.walk(images_dir):
    if "unused" in root: continue
    for file in files:
        if file.lower().endswith(img_extensions):
            full_path = os.path.join(root, file)
            rel_path = os.path.relpath(full_path, images_dir).replace("\\", "/")
            if "/" in rel_path: # It's in a subfolder
                all_images.append({
                    "full_path": full_path,
                    "rel_path": rel_path,
                    "name": file
                })

# 2. Identify all HTML, CSS, JS files
project_files = []
for root, dirs, files in os.walk(base_dir):
    if "unused" in root: continue
    for file in files:
        if file.endswith((".html", ".css", ".js")):
            project_files.append(os.path.join(root, file))

# 3. For each project file, replace the complex path with the flattened path
for file_path in project_files:
    try:
        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
        
        original_content = content
        for img in all_images:
            old_rel = img["rel_path"]
            new_rel = img["name"]
            # Replace occurrences where the old rel_path is used
            # We look for "assets/images/" + old_rel
            content = content.replace(f"assets/images/{old_rel}", f"assets/images/{new_rel}")
            # Also handle cases with extra slashes or relative jumps
            content = content.replace(f"images/{old_rel}", f"images/{new_rel}")

        if content != original_content:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Updated {os.path.relpath(file_path, base_dir)}")
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

# 4. Perform the move
for img in all_images:
    dest = os.path.join(images_dir, img["name"])
    if os.path.exists(img["full_path"]) and img["full_path"] != dest:
        try:
            os.rename(img["full_path"], dest)
            print(f"Moved {img['rel_path']} to assets/images/{img['name']}")
        except Exception as e:
            print(f"Error moving {img['name']}: {e}")

# 5. Clean up empty subdirectories
for root, dirs, files in os.walk(images_dir, topdown=False):
    if root != images_dir and "unused" not in root:
        if not os.listdir(root):
            os.rmdir(root)
            print(f"Removed empty directory {os.path.relpath(root, images_dir)}")
