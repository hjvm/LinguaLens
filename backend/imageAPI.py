import json
from ibm_watson import VisualRecognitionV3

visual_recognition = VisualRecognitionV3(
	'2018-03-19',
	iam_apikey='8Qz4ZaqMR1K5_foFv2UG5JtFruZ_HlVQVSahRebIvw9j')

def process_image(image):
	
	with open(image, 'rb') as images_file:
		classes = visual_recognition.classify(
			images_file,
			threshold='0.6').get_result()
	
	classes = classes['images'][0]['classifiers'][0]['classes']
	
	y = {}
	
	for x in classes:
		a = "{}".format(x['class'])
		b = float("{}".format(x['score']))
		y[a] = b
	
	return y
