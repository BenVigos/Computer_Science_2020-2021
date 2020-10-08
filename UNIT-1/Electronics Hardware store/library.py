#This program encrypts the store data

def encryptor(items, prices, inventory):
    msg = ["","","","","","",""]
    encr_msg = ["","","","","","",""]
    key = [int(ord(char)/10) for char in "p4ssw0rd"]
    encr_lines= open("encrypted store data.txt", "w")

    #Puts the elements in the format "item,price,inventory"
    for i in range(len(items)):
        msg[i] = items[i]+","+str(prices[i])+","+str(inventory[i])

    #Encrypts the elements
    for n,line in enumerate(msg):
        for x, elem in enumerate(line):
            encr_msg[n] += chr(ord(elem)+key[x%8])

    #Puts the encrypted elements in the file
    for elem in encr_msg:
        encr_lines.write(elem+"\n")






def decryptor(key):
    decrypted_list = ["","","","","","",""]
    final_dec_list = []
    shift = [int(ord(char)/10) for char in key]

    #all_lines = open("store data.txt", "r").readlines()
    encr_lines = open("encrypted store data.txt", "r").readlines()

    # Strips the lines from \n
    for i in range(len(decrypted_list)):
        encr_lines[i] = encr_lines[i].strip()

    for n,line in enumerate(encr_lines):
        for x, elem in enumerate(line):
            decrypted_list[n] += chr(ord(elem) - shift[x%8])

    decrypted_list = [decrypted_list[n] + "," for n in range(len(decrypted_list)) ]
    decrypted_list[len(decrypted_list)-1] = decrypted_list[len(decrypted_list)-1].rstrip(",")
    decrypted_list = "".join(decrypted_list)
    decrypted_list = decrypted_list.split(",")

    items = [decrypted_list[n] for n in range(len(decrypted_list)) if n%3==0]
    prices = [int(decrypted_list[n]) for n in range(len(decrypted_list)) if n%3==1]
    inventory = [int(decrypted_list[n]) for n in range(len(decrypted_list)) if n%3==2]
    decrypted_list = items+prices+inventory

    return decrypted_list, items, prices, inventory

def new_topic():
    print("""
      ===================
      """)
