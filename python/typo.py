from symspell import SymSpell
import sys
import cx_Oracle
import configparser
import json 

id = 'testID'
pw = '1234'
sid = 'testSID'
ip = '127.0.0.1'
port = '1521'

connInfo = id + "/" + pw + "@" + ip + ":" + port + "/" + sid

conn = cx_Oracle.connect(connInfo)
curs = conn.cursor()

sql = "SELECT SEQNUM FROM TBL_TEST WHERE KEYWORD = :bind"

inputArr = json.loads(sys.argv[1])

for item in inputArr:
    tempSentence = ''
    for word in item['text'].split():
        word = word.encode("euc_kr", "replace")
        word = word.decode("euc_kr")

        curs.execute(sql,bind = word.lower())
        result = curs.fetchall()

        if (len(result) > 0):
            tempSentence = tempSentence + ' ' + word
        # else:
             
    item['originText'] = item['text']
    item['text'] = tempSentence.strip()

print(str(inputArr))
