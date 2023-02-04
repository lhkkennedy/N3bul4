import pandas as pd
import datetime
import calendar
import os

filename = 'UKenergyProduction.csv'
abbr_to_num = {name: num for num, name in enumerate(calendar.month_name) if num}
print(abbr_to_num)
df = pd.read_csv (filename)
print(df)
print('converting now')
df['Month'].replace(abbr_to_num, inplace=True)
df['DATE'] = pd.to_datetime(df[['Year', 'Month']].assign(DAY=1))
df.drop(['Year', 'Month'], axis=1)
print(df)
#save to csv
filelocation = os.getcwd()
print("Saving as:  [ " + filename + " ]  in:  [ " + filelocation + " ] ")
df.to_csv(filename)

