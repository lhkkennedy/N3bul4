import numpy as np
import pandas as pd
import requests
import string
from bs4 import BeautifulSoup
import os
import time

## Using Multiple URLs ##
URL_base = "https://members.parliament.uk/member/172/voting/{}"

for i in 10:
    page_number = "?page={}"
    page_number = page_number.format(i)
    response = requests.request("GET", URL_base.format(page_number))
    soup = BeautifulSoup(response.content, "html.parse")


members = ["4514", "172", "1423"]
