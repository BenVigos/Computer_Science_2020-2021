# Unit 2 part 2

## Criteria A: Planning

### Context of the problem
The international space association tasked us with creating a system to send messages between Earth and the moon by using only two buttons and a light. The messages would be sent from earth in the form of morse code and from the moon in the form of biary. We were asked to create the machine that would be placed on the moon, it has to translate english into binary and send it, and be able to receive morse and translate it to english.

### Justification for the solution
We used Arduino because it is easily accessible, relatively low cost, relatively easy to use and we can find quite a lot of support on the internet. We wanted to strike a good balance between not needing too many button clicks and being fast. We used a big light bulb to send the binary and also an lcd screen so the used can see what they're doing and sending.

### Feasibility Report 

**Technical Feasibility: Is there existing technology sufficient to implement the proposed system?**

There is plenty of existing technology that can send messages in English to binary, however, none which fit our client's specific limitations (two buttons),, in addition to merging the english-to-binary feature and morse-to-english feature. 

**Economic Feasibility: Is the proposed system cost-effective?** 

Our proposed solution only uses a basic arduino building set, and a laptop to power it. This makes it very cost-effective and accessible. 

**Legal Feasibility: Any conflicts between proposed system and regulations/laws?**  

No conflicts because we are not looking into getting our device copyrighted or patented, it's purpose is to remain small-scale. 

**Operational Feasibility: Are the existing organisational practices and procedures sufficient to support the operation of the new proposed system?**  

Yes, they are sufficient since the project is only aimed for short-term use, as well as its basic functions will be accessible to anyone who has limited knowledge on the Arduino. We are keeping track and documenting our process so if there is any need to revisit the project for the future, it will be easier to understand. 

**Schedule Feasibility: How long will we wait?**  

The project due date was by end of Dececmber 2020, which means that the development of this project will only span a couple of months.  

### Success Criteria

| n |                                     Criteria                                    |
|:-:|:-------------------------------------------------------------------------------:|
| 1 |             Must use one LCD, one arduino, two buttons, and one LED             |
| 2 |      Must include a table which informs the operator with the instructions      |
| 3 | Must allow the user to enter Englishs and output in either morse code or binary |
| 4 |  Must allow the user to enter either morse code or binary and output to English |
| 5 | Must be able to carry out the commands delete, error, acknowledge, send and SOS |
| 6 |                Must be able to send at least 10 words per minute                |

### Sketches of our first Design Drafts 

<img src="https://github.com/isabelandreatta1/Unit2/blob/main/Pictures/Communication%20System%20Draft.jpg" width="401" height="537"/>

*Figure 1: Communication System Design Draft* 

### Tinkercad Prototype 

<img src="https://github.com/isabelandreatta1/Unit2/blob/main/Pictures/Tinkercad.png" width="712" height="357"/>

*Figure 2: Our Tinkercad prototype including both hardware and code* 

We used Tinkercad to create our prototype. Tinkercad is an online 3D modelling program, which allows you to create digital prototypes of circuits. Due to its easy usability and clear design, it was a good tool to first test our code and also understand the hardware circuit. Once we arrived to a functioning online model, we then copied and uploaded the code on the arduino, and used the tinkercad circuit as a reference as we built the physical one. After we created our first prototype, we then worked alternating between Tinkercad and the physical device, always first checking with Tinkercad when adding a new feature, and then copying it down to our device. 


## Criteria B: Design


<img src="https://github.com/isabelandreatta1/Unit2/blob/main/Pictures/System%20Diagram.jpg" width="744.8" height="295.2"/>

*Figure 3: System Diagram* 

<img src="https://github.com/isabelandreatta1/Unit2/blob/main/Pictures/English%20to%20Binary%20Flowchart.png" width="430" height="940"/>

*Figure 4: Flow Diagram of the English to Binary* 


## Criteria C: Development

### Converting to binary
```cpp
//Double-click right -> Send message
int led = 13;
void dcl_R() {
  to_send = msg;
  for (int i =0; i< msg.length()-1; i++){
    char msgchar = msg.charAt(i);
    Serial.print(msgchar);
    String binary = String(msgchar-65,BIN);
    Serial.println(binary +" break ");
    Serial.println(binary.length());  
    for (int x=0; x<binary.length(); x++){
     
      if (binary[x] == '0'){
        Serial.println("Zero");
		digitalWrite(led,LOW); 
        delay(50000);  
      	digitalWrite(led,HIGH); 
  		delay(10000); 
  		digitalWrite(led,LOW); 
      	delay(1000); 
        }
      if (binary[x] =='1'){
      	Serial.println("One");
      	digitalWrite(led, HIGH);
 	 	delay(50000); 
  		digitalWrite(led,LOW);
        delay(10000); 
        digitalWrite(led,HIGH); 
  		delay(10000); 
  		digitalWrite(led,LOW); 
      	delay(10000);
       }
  	}
  }
  
  to_send.remove(to_send.length()-1);
  msg = "";
  
  for (int i=0; i<=to_send.length()+1; i++){
    lcd.print(" ");
    lcd.setCursor(0+i, 1);
  	lcd.print(" ");
  }
  ``` 
  
### Input Morse code and output English translation 

### Completed Code 

```cpp
#include <LiquidCrystal.h>

// initialize the library with the numbers of the interface pins
LiquidCrystal lcd(12, 11, 7, 6, 5, 4);

//char letters_b[17]
String msg = "";
String to_send = "";
char letters[17] = "ABCDEFGHIJKLMNOP";
char letters2[17] = "QRSTUVWXYZ@!.SAE";
int pos_l = 7;
int pos_r = 8;
int time = 0;
int pos = 0;
int d=0;
int it=0;
int last_bpl=0;
int last_bpr=0;
int led = 13; 
int switchscreen = 0; 

int inByte = 0; // sets up the variable that will store incoming data from serial (keyboard)
const int ledPin = 10; // sets pin 10 as the pin to which the LED light is attached
const int time_base = 100; // sets a dot to 100 milliseconds
const int dash = 3*time_base; // sets a dash to 300 milliseconds

void setup() {
  
  // set up the LCD's number of columns and rows:
  lcd.begin(16, 2);
  
  // set up the buttons
  pinMode(3, INPUT);
  pinMode(2, INPUT);
  pinMode(13, OUTPUT); 
  
  //Interrupts
  attachInterrupt(digitalPinToInterrupt(3), L_Button, RISING);
  attachInterrupt(digitalPinToInterrupt(2), R_Button, RISING);
  
  // serial monitor
  Serial.begin(9600);
  
  }

void blinkon(){
  	lcd.setCursor(pos_l - (d%8), 0);
  	lcd.print(" ");
  	lcd.setCursor(pos_r + (d%8), 0);
  	lcd.print(" ");
  	delay(200); 
}

void blinkoff(){
  lcd.setCursor(pos_l - (d%8), 0);
  lcd.print(letters[pos_l - (d%8)]);    
  lcd.setCursor(pos_r + (d%8), 0);
  lcd.print(letters[pos_r + (d%8)]);
  delay(200);
}


void blinkoff2(){
  lcd.setCursor(pos_l - (d%8), 0);
  lcd.print(letters2[pos_l - (d%8)]);    
  lcd.setCursor(pos_r + (d%8), 0);
  lcd.print(letters2[pos_r + (d%8)]);
  delay(200);
}
  
void loop() {
  
  if (switchscreen == 0){
    
    lcd.setCursor(0, 0);
    for (int i=0; i<sizeof(letters)-1; i++) {
      lcd.print(letters[i]);
    }
    
    
    if (d%8==0 && d>0){
    	switchscreen = 1;
      	d+=1;
    }
    
    if (it%4 == 0 && it>0) {
        d+=1;
    }
    blinkon();
    blinkoff(); 
    it+=1;
    
  }
  
  else{
    lcd.setCursor(0, 0);
    for (int i=0; i<sizeof(letters2)-1; i++) {
      lcd.print(letters2[i]);
    }
    
    
    if (d%8==0 && d>0){
    	switchscreen = 0; 
      d+=1;
    }
    
    if (it%4 == 0 && it>0) {
        d+=1;
    }
    blinkon();
    blinkoff2(); 
    it+=1;
  }

}
    
  void L_Button() {
    if (it-last_bpl<=1 && it>0) {
      Serial.print("double click ");
      dcl_L();
    }
      
    else {
      if (switchscreen == 0){
        msg.concat(letters[pos_l-(d%8)]);
        lcd.setCursor(0, 1);
        lcd.print(msg); 
        last_bpl = it;
      }
      else{
        msg.concat(letters2[pos_l-(d%8)]);
        lcd.setCursor(0, 1);
        lcd.print(msg); 
        last_bpl = it;
      }
    }
  }
  
  void R_Button() {
    if (it-last_bpr<=1 && it>0) {
      Serial.print("double click");
      dcl_R();
    }
    
    else {
      if (switchscreen ==0){
    	msg.concat(letters[pos_r+(d%8)]);
    	lcd.setCursor(0, 1);
    	lcd.print(msg);
    	last_bpr = it;
      }
          
      else{
        msg.concat(letters2[pos_r+(d%8)]);
    	lcd.setCursor(0, 1);
        if (msg == "S"){
          msg = "SOS";
            }
        if (msg == "A"){
          msg = "ACKNOWLEDGE";
            }
        if (msg == "E"){
          (msg = "ERROR");
            }
    	lcd.print(msg);
    	last_bpr = it;  
        }
    }
  }

//Double-click left -> Delete letter
void dcl_L() {
  msg.remove(msg.length()-1);
  msg.remove(msg.length()-1);
  
  lcd.setCursor(msg.length()+1, 1);
  lcd.print(" ");
  
  lcd.setCursor(msg.length(), 1);
  lcd.print(" ");
  
  lcd.setCursor(0, 1);
  lcd.print(msg);
}

//Double-click right -> Send message
void dcl_R() {
  to_send = msg;
  for (int i =0; i< msg.length()-1; i++){
    char msgchar = msg.charAt(i);
    Serial.print(msgchar);
    String binary = String(msgchar-65,BIN);
    Serial.println(binary +" break ");
    Serial.println(binary.length());  
    for (int x=0; x<binary.length(); x++){
     
      if (binary[x] == '0'){
        Serial.println("Zero");
		digitalWrite(led,LOW); 
        delay(50000);  
      	digitalWrite(led,HIGH); 
  		delay(1000); 
  		digitalWrite(led,LOW); 
      	delay(1000); 
        }
      if (binary[x] =='1'){
      	Serial.println("One");
      	digitalWrite(led, HIGH);
 	 	delay(50000); 
  		digitalWrite(led,LOW);
        delay(1000); 
        digitalWrite(led,HIGH); 
  		delay(1000); 
  		digitalWrite(led,LOW); 
      	delay(1000);
       }
  	}
    Serial.println("New letter");
    digitalWrite(led,HIGH); 
    delay(20000); 
    digitalWrite(led,LOW); 
    delay(20000); 
    digitalWrite(led,HIGH); 
    delay(20000); 
    digitalWrite(led,LOW);
  }
  
  to_send.remove(to_send.length()-1);
  msg = "";
  
  for (int i=0; i<=to_send.length()+1; i++){
    lcd.print(" ");
    lcd.setCursor(0+i, 1);
  	lcd.print(" ");
  }
}
```


## Criteria D: Functionality 

### Instruction Table for Communication System 

|                                     Command:                                     | Instruction                               | Left Button: | Right Button: |
|:--------------------------------------------------------------------------------:|-------------------------------------------|:------------:|:-------------:|
| Select left blinking letter                                                      | 1 Left press                              |       0     |       X     |
| Select right blinking letter                                                     | 1 Right press                             |       X      |       0       |
| Send Message                                                                     | 2 Right presses                           |       X      |     (2) 0     |
| Delete letter from message                                                       | 2 Left presses                            |     (2) 0    |       X       |
| Change mode of the device (from English input to translate Morse or vice versa ) | 1 Press of both buttons  at the same time |       0      |       0       |
| Input Morse code dot                                                             | 1 Left press under 1  second              | 0 < 1 second |       X       |
| Input Morse code dash                                                            | 1 Left press above 1  1second             | 0 > 1 second |       X       |
| Translate Morse code to English                                                  | 1 Right press                             |       X      |       0       |

**Key for Table:** 
- 0 = Press 
- X = Not presssed 
- (2) = Do this instruction twice 

Letter to Decimal Number Key 

| **A** | 0 | **F** | 5 | **K** | 10 | **P** | 15 | **U** | 20 | **Z** | 25 |
|---|---|---|---|---|----|---|----|---|----|---|----|
| **B** | 1 | **G** | 6 | **L** | 11 | **Q** | 16 | **V** | 21 |   |    |
| **C** | 2 | **H**| 7 | **M** | 12 | **R** | 17 | **W** | 22 |   |    |
| **D**| 3 | **I** | 8 | **N** | 13 | **S** | 18 | **X** | 23 |   |    |
| **E** | 4 | **J** | 9 | **O** | 14 | **T** | 19 | **Y** | 24 |   |    |


## Criteria E: Evaluation 

### Alpha Testing 

| Test No. | Procedure | Inputs | Expected Output | Success Criteria                                                                |Criteria Met| 
|----------|-----------|--------|-----------------|---------------------------------------------------------------------------------|------------|
| 1        |      Use left and right buttons to select best, and then double press the right button to send message.     |    "Best"    |    "Best" printed on message, and get the numbers 1,5,18,19 blink on the LED light.             | Must allow the user to enter English and output in binary                       |Yess |
| 2        | Use left button to enter input. Short press for dot and long press for dash. Press the right button to translate the letter (right button pressed after every grouping) | ...    ---    ... | "SOS" on screen" | Must allow the user to enter either morse code and output to English            |.  |
| 3        |       Use left button to select E, double press left button to delete letter. Then, wait for the second screen and press "S" for SOS.    |    "E" and "S"    |           Messsage "E" printed, then deleted letter/empty message. Next, "SOS" message, and numbers 18,14,18 blink on the LED light.      | Must be able to carry out the commands delete, error, acknowledge, send and SOS | Yes |
| 4        |   Same as Test 1        |    Same as Test 1  |       Taking 6 seconds to write the word "Best"          | Must be able to send at least 10 words per 
