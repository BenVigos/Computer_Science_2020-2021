# This is unit 2

## Criteria A: Planning

### Context of the Problem:

An alien civilization came to contact with me and asked me to create a cool, fun and interesting counting system. The contraption should be able to count from 0 to 9.

### Justification for the solution:

I wanted to create something interesting and intuitive, something that can be memorized and can be easily read when viewed properly. I used Arduino because it's easy to use and has many capabilities. There's also room for a lot of further expansion in the future.

### Criteria for Success:

* Easy to read
* Can be memorized 
* Looks cool
* No visible cables

## Criteria B: Design

### Initial design
![Design](/UNIT-2/photos%20and%20stuff/unit_2-desing.jpg)

### System diagram
![System diagram](/UNIT-2/photos%20and%20stuff/unit_2-system_diagram.jpg)

## Criteria C: Development
![Logic formulas](/UNIT-2/photos%20and%20stuff/unit_2-logic_formulas.jpg)

### Final product
![Final product](/UNIT-2/photos%20and%20stuff/unit_2-arduino.jpg)

### Code
```
int A = 0;
int B = 0;
int C = 0;
int D = 0;

void setup()
{
  //Button A
  pinMode(13, OUTPUT);
  pinMode(7, INPUT);
  
  //Button B
  pinMode(12, OUTPUT);
  pinMode(6, INPUT);
  
  //Button C
  pinMode(11, OUTPUT);
  pinMode(5, INPUT);
  
  //Button D
  pinMode(10, OUTPUT);
  pinMode(4, INPUT);
  
  Serial.begin(9600);
}

void loop()
{

  
  
  if(digitalRead(7) == HIGH)
  {
    A = (A-1)*(A-1);
    Serial.println("button A is pressed");
    digitalWrite(13, A);
    delay(300);
  }
  
    if(digitalRead(6) == HIGH)
  {
    B = (B-1)*(B-1);
    Serial.println("button B is pressed");
    digitalWrite(12, B);
    delay(300);
  }
  
    if(digitalRead(5) == HIGH)
  {
    C = (C-1)*(C-1);
    Serial.println("button C is pressed");
    digitalWrite(11, C);
    delay(300);
  }
  
    if(digitalRead(4) == HIGH)
  {
    D = (D-1)*(D-1);
    Serial.println("button D is pressed");
    digitalWrite(10, D);
    delay(300);
  }
}
```
## Criteria D: Functionality

## Criteria E: Evaluation

### Guide sheet
https://docs.google.com/spreadsheets/d/15U8GftIOJLYDT_HLyW-AoH88V_5KD4rZaiWvgq5cP2Y/edit?usp=sharing 

|                                                                               |                   Expected Outcome                  | Met? |
|:-----------------------------------------------------------------------------:|:---------------------------------------------------:|:----:|
| Table with numbers, LED's and buttons is provided? Check Criteria E of Unit 2 |                         Yes                         |      |
|         Follow the table mentioned above to check the numbers from 0-9        | If table was followed, the numbers should light up. |      |
|           Play the automatic sequence of numbers and see if it works          |               Automatic sequence plays              |      |
|                       Count number of LED's and buttons                       |            5 LED's < 7 and 4 button <= 4            |      |
