This is how I want it laid out. 

First I want to use a javascript file (text-constants.js) to manage all the "text constants" throughout the project. 
- The header text (TEXT_HEADER)
- The slogan text (TEXT_SLOGAN)
- The section headers
    - "Products" (TEXT_HEADER_PRODUCTS)
    - "About" (TEXT_HEADER_ABOUT)
    - "Media" (TEXT_HEADER_MEDIA)
    - "Contact" (TEXT_HEADER_CONTACT)
- The Contact paragraph text (TEXT_CONTENT_CONTACT)
- The About paragraph text (TEXT_CONTENT_ANOUT)
- A variable that holds an array of json objects (PRODUCT_DETAILS)
    - Each item is for product details
        - Name (name)
        - Price (price)
        - Logo image file location (logo_path)

Second there needs to be a similar file but for media paths (media-constants.js)
- The header background image (IMAGE_HEADER)
- The product feature image (IMAGE_FEATURE)
- A variable that holds an array of json objects (MEDIA_ITEMS)
    - Each item has one variable (media_path)
    - This gets loaded into the media section of the UI


There will be the following sections:
- The header 
    - No section header text here (obviously)
    - Has a background image (path comes from media-constants.js)
    - Text overlayed (comes from text-constants.js)
- Product feature with image & slogan
    - No section header text here
    - The left side of the screen has a product image (path comes from media-constants.js)
    - To the right of the image is the slogan text
- Products
    - This is a product grid 
    - Each product item in the grid has the following
        - An image (file location comes from a variable text-constant.js)
        - Product name (comes from text-constant.js)
        - Product price (comes from text-constant.js)
- About
    - I have no specifics for this yet 
    - Text comes from text-constant.js
- Media 
    - This is a 2 column display
    - The image hights will differ, which is fine, thus we will just put each image under the previous one
    - Paths come from a variable in media-constants.js
- Contact 
    - I have no specifics for this yet 
    - Text comes from text-constant.js
- Footer
    - Just has a logo in the middle
    - Path comes from media-constants.js