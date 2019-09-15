# Imports the Google Cloud client library

from imageAPI import process_image
from translateAPI import translate_list

items = process_image('fruitbowl.jpg')

print(items)

translated = translate_list(items, 'es')

print(translated)
# Instantiates a client




# The text to translate

# The target language


# Translates some text into Russian

