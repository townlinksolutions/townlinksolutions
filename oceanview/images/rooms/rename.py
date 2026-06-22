import os

# Supported image extensions
image_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp')

# Get all image files from current directory
files = [f for f in os.listdir('.') if f.lower().endswith(image_extensions)]

# Sort files for consistent numbering
files.sort()

for index, old_name in enumerate(files, start=1):
    new_name = f"photo{index}.jpg"

    # Rename file
    os.rename(old_name, new_name)

    print(f"Renamed: {old_name} -> {new_name}")

print("All images renamed successfully.")