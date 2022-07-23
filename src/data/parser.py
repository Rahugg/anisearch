import json, csv

arr = []
with open("quotes.csv", "r") as f:
    reader = csv.reader(f, delimiter=",")
    
    for row in reader:
        arr.append(
            {
                "key": row[0],
                "author": row[1],
                "anime": row[2],
                "image": row[3],
                "quote": row[4]
            }
        )



with open('data.json', 'w') as f:
    f.write('[\n')
    for i in range(len(arr)):
        f.write(json.dumps(arr[i], indent=4))
        if(i != len(arr) - 1):
            f.write(',\n')
    f.write('\n]')
        


