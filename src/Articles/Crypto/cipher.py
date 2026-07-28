import re
text = "fsdzFdhvdu_flskhu_lv_fodvvlfdo_flskhu"
shift_num = 3
decryption = ""

text2 = re.sub('[^a-zA-Z]',"",text)

print(text2)

for i in text2:
  if(ord(i) <=90 and ord(i) >= 65):
    if(ord(i)>=67):
      char = chr(ord(i)-3)
      decryption = decryption + str(char)
    else:
      if i == "A":decryption = decryption + "X"
      if i == "B":decryption = decryption + "Y"
      if i == "C":decryption = decryption + "Z"
  if(ord(i) <=122 and ord(i) >= 97):
      if(ord(i)>=99):
        char = chr(ord(i)-3)
        decryption = decryption + str(char)
      else:
        if i == "a":decryption = decryption + "x"
        if i == "b":decryption = decryption + "y"
        if i == "c":decryption = decryption + "z"
print(decryption)
  

