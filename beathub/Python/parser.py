import pandas as pd
from pandas import json_normalize
from tqdm import tqdm
import json
import csv

columns = ['index', 'time-stamp', 'in/out', 'verbose', 'channel', 'value', 'hex', 'active']
targetColumns = ['midi-item-name', 'midi-item-code', 'midi-item-values']
easy = 'parsedataeasy.csv'
medium = 'parsedatamedium.csv'
hard = 'parsedatahard.csv'
nonsync = 'parsedataasync.csv'

select = easy
data = 'midi\{}'.format(select)
print(data)
df = pd.read_csv(data, header=None, names=columns)
df2 = pd.read_csv('midiDict.csv')
print(df, df2)

class midiEvent:
	def __init__(self, name, code, hex, channel, booleon, time, value, length):
		self.name = name
		self.code = code
		self.hex = hex
		self.channel = channel
		self.booleon = booleon
		self.time = time
		self.value = value
		self.length = length

	def add_new_event(self):
		event = [
		{"midi-item-name": self.name},
		{"midi-item-hex": self.hex},
		{"midi-item-channel": self.channel},
		{"midi-item-booleon": self.booleon},
		{"midi-item-time": self.time},
		{"midi-item-value": self.value},
		{"midi-item-length": self.length},
		]
		print("|", len(event_array), "|", self.name, "|", self.hex,"|", self.time, "|", self.booleon, "|", self.value[0], "|", self.value[len(self.value)-1], "|", len(self.value), "|")
		event_array.append(event)

def createEventClass(event_name, event_code, event_hex, event_channel, event_booleon, event_time, event_values, event_length):
	event_obj = midiEvent(event_name, event_code, event_hex, event_channel, event_booleon, event_time, event_values, event_length)
	event_obj.add_new_event()

event_array = []

print("_______________________________GitHub Table Format__________________________________")
print("| id | event-name | hex-code | time | Booleon| first-value | last-value | tick-length |")
print("| --- | --- | --- | --- | --- | --- | --- | --- |")

for count, x in enumerate(df.index):
	midiHex = df['hex'][count][:-3]
	for count2, y in enumerate(df2.index):
		if df2['hex-item-value'][count2] == midiHex[:-1]:
			# match in dict found
			# construct event meta data
			event_name = df2['my-name'][count2]
			event_code = df2['hex-item-value'][count2]
			event_time = df['time-stamp'][count]
			event_channel = df['channel'][count]
			event_hex = df['hex'][count]

			# run boole check
			event_booleon = df2['booleon'][count2]
			event_active = df2['active'][count2]
			tick_active = df['active'][count]
			event_values = []

			
			if event_booleon == False and event_active == False and tick_active == False:
				df2.at[count2, 'active'] = True
				# start new event tracking
				event_length = 0
				wait_counter = 0

				while df2['active'][count2] == True:
					current_index = count+event_length+wait_counter
					if  current_index == len(df) - 1:
						df2.at[count2, 'active'] = False
					if df2['hex-item-value'][count2].strip() == df['hex'][current_index][:-3].strip():
						event_length += 1
						tick_time = df['time-stamp'][current_index]
						tick_value = df['value'][current_index]
						tick = (tick_time, tick_value)
						df.at[current_index, 'active'] = True
						event_values.append(tick)
					else:
						wait_counter += 1
						if wait_counter > 50:
							df2.at[count2, 'active'] = False

				createEventClass(event_name, event_code, event_hex, event_channel, event_booleon, event_time, event_values, len(event_values))

			elif event_booleon == True:
				event_value = df['value'][count]
				createEventClass(event_name, event_code, event_hex, event_channel, event_booleon, event_time, event_value, len(event_value))

print("===============================================================================")
# print("===================================EVENT ARRAY====================================")
# for count, x in enumerate(event_array):
# 	print("===============================================================================")
# 	print("Event ", count, event_array[count][0], " : ", event_array[count][4])
# 	print("==================================DATA=========================================")
# 	print(event_array[count][5])