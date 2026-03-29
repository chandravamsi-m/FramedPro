import os
import re

base_dir = r"c:\Users\Admin\Desktop\HTML Templates\FramedPro"

# Find all HTML files
html_files = []
for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith(".html"):
            html_files.append(os.path.join(root, file))

print(f"Total HTML files found: {len(html_files)}")

# Define the replacement pattern
# It looks for something like <link rel="stylesheet" href="...assets/css/style.css">
pattern = re.compile(r'(<link\s+rel=["\']stylesheet["\']\s+href=["\'](.*?assets/css/)style\.css["\']\s*\/?>)')

for html_file in html_files:
    try:
        with open(html_file, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
        
        match = pattern.search(content)
        if match:
            original_tag = match.group(1)
            prefix = match.group(2)
            
            # Create the 3 tags
            new_tags = (
                f'<link rel="stylesheet" href="{prefix}style.css">\n'
                f'  <link rel="stylesheet" href="{prefix}rtl.css">\n'
                f'  <link rel="stylesheet" href="{prefix}dark-mode.css">'
            )
            
            # Simple replace
            new_content = content.replace(original_tag, new_tags)
            
            if new_content != content:
                with open(html_file, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated: {os.path.relpath(html_file, base_dir)}")
        else:
            print(f"No match in: {os.path.relpath(html_file, base_dir)}")

    except Exception as e:
        print(f"Error processing {html_file}: {e}")
