from google.cloud import translate

translate_client = translate.Client()

def translate_list(x, y):
	
	target = y


	b = []
	for val in x.keys():
		text = u'{}'.format(val)
		
		translation = translate_client.translate(
			text,
			target_language=target)
		
		b.append(u'{}'.format(translation['translatedText']))

	return b