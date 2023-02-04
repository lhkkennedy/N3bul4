import numpy as np
import pandas as pd
import requests
import string
from bs4 import BeautifulSoup
import os
import time

## Using Multiple URLs ##
URL_base = "https://ukfinance.yahoo.com/quote/{}"
tickers = ["AMZN", "TSLA", "AAPL", "NVDA", "MSFT", "OEX.L"]

## create Data Frame to add data by column ##
df = pd.DataFrame()

## code from previous scraper placed in a for loop ##
for t in tickers:

    s = tickers.index(t)
    response = requests.request("GET", "https://uk.finance.yahoo.com/quote/{}".format(t), headers={'USER-AGENT': "Mozilla/5.0"})
    soup = BeautifulSoup(response.content, "html.parser")

    print("..................................................")

    heading_soup =soup.find_all("h1", class_="D(ib) Fz(18px)")
    name_u = heading_soup[0].text
    x = name_u.split(", ")
    if " " in x[0]:
        x = name_u.split(" ")
        name = x[0]
    else:
        name = x[0]
    print("Name: ", name)


    price_soup = soup.find_all("fin-streamer", class_="Fw(b) Fz(36px) Mb(-4px) D(ib)")
    price = price_soup[0].text
    print("Price: ", price)

    ticker = t
    print("Ticker :", ticker)

    change_soup = soup.find_all("fin-streamer", class_='Fw(500) Pstart(8px) Fz(24px)')
    change_u = change_soup[0].text
    x = change_u.split("+")
    if len(x) == 2:
        change = x[1]
    else:
        change = x[0]

    perc_change_u = change_soup[1].text
    x = perc_change_u.split("+")
    if len(x) == 2:
        x = x[1].split("%")
    else:
        x = x[0].split("(")
        x = x[1].split("%")
    perc_change = x[0]


    print("Change from open: ", change)
    print("Percentage change: ", perc_change)
    print("Adding to dataframe")

    date = pd.to_datetime('now', format='%Y-%m-%d %H:%M:%S')
    results = [date, name, price, ticker, perc_change, change]
    df_t = pd.DataFrame(results)
    df_t.columns = ['Data']
    df[s] = df_t['Data']

#transpose
df = df.T

#name columns
df.columns = ['date', 'name', 'price', 'ticker', 'percentage_change', 'change']

print("..................................................")
print("Data Frame: ", df)

#save to csv
filename = 'stockPrices.csv'
abspath = os.path.abspath(__file__)
dname = os.path.dirname(abspath)
os.chdir(dname)
filelocation = os.getcwd()
print("Saving as:  [ " + filename + " ]  in:  [ " + filelocation + " ] ")
df.to_csv(filename)

