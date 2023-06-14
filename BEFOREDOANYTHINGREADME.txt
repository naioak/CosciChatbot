Location for change hosting address

1.In the machine
    1) .env | line 2
    2) app.html | line 30 | example: https://example.com/suggestion

2.In https://developers.line.biz/console/
    1) Provider/*Messaging API Channel*/Messaging API/Webhook settings/Webhook URL
       Add your hosting like this: https://example.com/line/callback

Start the Application
    npm run dev

If you want to change anything in richmenu
    1) https://example.com/deleterichmenu
    2) make change in /services/create-richmenu *beware that change anything in here may conflict with the already exist in database
    3) then run https://example.com/createrichmenu

**BEWARE THAT FIRST ID IN DATABASE MUST BE NONE

type architype when you want to add something in mariadb
    type 1 : text
        word : keyword
        ans_text1 : text answer
    type 2 : image
        word : keyword
        ans_img1 : image link ( example: /images/static/pic7.jpg )
    type 3 : google map
        word : keyword
        ans_text1 : title
        ans_text2 : address description
        ans_num1 : address latitude
        ans_num2 : address longitude
    type 4 : text and image
        word : keyword
        ans_text1 : text answer
        ans_img1 : image link
    type 5 : multiple image
        word: keyword
        ans_img1-5 : image link
        ans_num1 : number of image
    type 6 : multiple text
        word : keyword
        ans_text1-5 : text answer
        ans_num1 : number of text
    type 7 : multiple text and multiple image
        word : keyword
        ans_text1-5 : text answer
        ans_img1-5 : image link
        ans_num1 : number of text
        ans_num2 : number of image
    type 10 : Flex for Menu(DO NOT TOUCH THIS IF POSSIBLE)
        word : keyword
        ans_json1 : Json format like this 
             (example : [{"word":"งานอัตลักษณ์คืออะไร","answer":"งานอัตลักษณ์คืออะไร"},
            {"word":"ข้อปฎิบัติภายในวิทยาลัย","answer":"ข้อปฎิบัติภายในวิทยาลัย"},
            {"word":"การทำบัตรจอดรถ","answer":"การทำบัตรจอดรถ"},
            {"word":"บัตรนิสิตหาย","answer":"บัตรนิสิตหายต้องทำอย่างไร"}])
    type 20 : Flex for image and text(DO NOT INCLUDE YET)
        word : keyword
        ans_text1 : text that will appear in flex
        ans_img1 : image that will be a hero of flex