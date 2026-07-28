import requests
from bs4 import  BeautifulSoup 
import time
import json

all_articles = []

for i in range(1,3):
  url = "https://techcrunch.com/latest/page/{}/".format(i)
  req = requests.get(url)
  # print(req.text)
  soup = BeautifulSoup(req.text,"html.parser")
  article = "div"
  articles = soup.find_all(article,class_ = "loop-card__content")
  for i in articles:
    if i.find(class_ ="loop-card__cat-group"):
      category = i.find(class_="loop-card__cat").text.strip()
      title = i.find(class_= "loop-card__title").text.strip()
      article_url = i.find(class_= "loop-card__title").a["href"]
      all_articles.append({
        "category":category,
        "title":title,
        "url":article_url
      })
  time.sleep(1)
with open("data.json","w",encoding="utf-8") as f:
  json.dump(all_articles[:20],f,ensure_ascii=False,indent=2)