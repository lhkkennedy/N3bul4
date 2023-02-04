import requests
import json
import os
import csv

# insert URL with api Key 
url_base = "https://api.stlouisfed.org/fred/series/observations?series_id={}&api_key=22ee7a76e736e32f54f5df0a7171538d&file_type=json"
file_base = "FREDdata_{}.json"
fredSeries = ['WFRBLB50107','WFRBLT01026','WFRBSB50189','WFRBST01108']
for i in fredSeries:
    URL = url_base.format(i)
    data = requests.get(URL).json()
    #print(data)
    fileName = file_base.format(i)
    print(fileName)
    open(fileName, 'w')
    with open(fileName, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
        print(i, " Data from ", URL, ' dumped.')


