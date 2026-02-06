from PIL import Image, ImageDraw, ImageFont
import os

# Create directories
directories = [
    'assets/images/hero',
    'assets/images/rooms',
    'assets/images/amenities',
    'assets/images/dining',
    'assets/images/spa',
    'assets/images/activities'
]

for directory in directories:
    os.makedirs(directory, exist_ok=True)

# Define images to create
images_to_create = [
    # Hero images
    ('assets/images/hero/beach-hero.jpg', 1920, 1080, '#1e3a8a', 'TownLink Beach Resort'),
    
    # Room images
    ('assets/images/rooms/ocean-view.jpg', 800, 600, '#0a7ea4', 'Ocean View Room'),
    ('assets/images/rooms/deluxe-suite.jpg', 800, 600, '#0e7490', 'Deluxe Suite'),
    ('assets/images/rooms/beachfront-villa.jpg', 800, 600, '#155e75', 'Beachfront Villa'),
    ('assets/images/rooms/presidential-suite.jpg', 800, 600, '#164e63', 'Presidential Suite'),
    
    # Amenity images
    ('assets/images/amenities/pool.jpg', 800, 600, '#2c7a7b', 'Infinity Pool'),
    ('assets/images/amenities/beach.jpg', 800, 600, '#319795', 'Private Beach'),
    ('assets/images/amenities/gym.jpg', 800, 600, '#38b2ac', 'Fitness Center'),
    ('assets/images/amenities/kids-club.jpg', 800, 600, '#4fd1c5', 'Kids Club'),
    
    # Dining images
    ('assets/images/dining/restaurant.jpg', 800, 600, '#f4a460', 'The Cove Restaurant'),
    ('assets/images/dining/beach-grill.jpg', 800, 600, '#e89b52', 'Beach Grill'),
    ('assets/images/dining/rooftop-bar.jpg', 800, 600, '#dc9244', 'Rooftop Bar'),
    ('assets/images/dining/poolside-cafe.jpg', 800, 600, '#d08936', 'Poolside Cafe'),
    
    # Spa images
    ('assets/images/spa/treatment.jpg', 800, 600, '#9f7aea', 'Spa Treatment Room'),
    ('assets/images/spa/massage.jpg', 800, 600, '#8b5cf6', 'Massage Therapy'),
    ('assets/images/spa/relaxation.jpg', 800, 600, '#7c3aed', 'Relaxation Lounge'),
    ('assets/images/spa/yoga.jpg', 800, 600, '#6d28d9', 'Yoga Studio'),
    
    # Activity images
    ('assets/images/activities/watersports.jpg', 800, 600, '#38b2ac', 'Water Sports'),
    ('assets/images/activities/snorkeling.jpg', 800, 600, '#2c7a7b', 'Snorkeling'),
    ('assets/images/activities/kayaking.jpg', 800, 600, '#319795', 'Kayaking'),
    ('assets/images/activities/surfing.jpg', 800, 600, '#4fd1c5', 'Surfing'),
    ('assets/images/activities/diving.jpg', 800, 600, '#0a7ea4', 'Scuba Diving'),
    ('assets/images/activities/yoga-beach.jpg', 800, 600, '#14b8a6', 'Beach Yoga'),
]

# Create images
for filepath, width, height, color, text in images_to_create:
    img = Image.new('RGB', (width, height), color=color)
    draw = ImageDraw.Draw(img)
    
    # Draw text in the center
    try:
        # Try to load a font
        font = ImageFont.truetype("arial.ttf", 40)
    except:
        # Fallback to default font
        font = ImageFont.load_default()
    
    # Get text bounding box
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    # Calculate position to center text
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    # Draw text
    draw.text((x, y), text, fill='white', font=font)
    
    # Add decorative border
    draw.rectangle([(10, 10), (width-10, height-10)], outline='white', width=3)
    
    # Save image
    img.save(filepath, quality=85)
    print(f'Created: {filepath}')

print('\n✓ All images created successfully!')
print(f'Total images: {len(images_to_create)}')
