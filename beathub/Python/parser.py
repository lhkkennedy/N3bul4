import pandas as pd

columns = ['index', 'time-stamp', 'in/out', 'verbose', 'channel', 'value', 'hex']
targetColumns = ['midi-item-name', 'midi-item-code', 'midi-item-values']

df = pd.read_csv('beathub\Python\midi\startstop_Midi.csv', header=None, names=columns)

print(df)