var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite  \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'exam', 'text': '\n', 'tags': '', 'url': 'exam.html'}, {'title': '專案一', 'text': '', 'tags': '', 'url': '專案一.html'}, {'title': '磁力吸引', 'text': '\n 在第一次作圖時，因為不熟悉Inventor 的一些操作，所以在作圖時間較長。 \n 而當完成時才發現，題目要求Z軸向上<解果當時操作失誤，沒注意就將Y軸向上了。 \n 所以經過翻轉還是沒辦法將Z軸轉上來，所以還是重新作圖了，當然第二次的速度就相對快很多了。 \n \xa0 \n \xa0 \n 示意圖: \n \n \xa0 \n \xa0 \n \xa0 \n \xa0 \n 零件圖: \n \n \n 底座↑ \n \xa0 \n \xa0 \n \xa0 \n \n 支撐柱 ↑ \n \xa0 \n \xa0 \n \xa0 \n \n 碗↑ \n \xa0 \n \xa0 \n \xa0 \n \n 軌道↑ \n \xa0 \n \xa0 \n 組合圖: \n Inventor圖檔: 連結 \n \xa0 \n \xa0 \n \n \n', 'tags': '', 'url': '磁力吸引.html'}, {'title': '專案二', 'text': '\xa0 \n \n \n \n', 'tags': '', 'url': '專案二.html'}, {'title': '軌道永動機', 'text': '\xa0 \n 在作圖時，這個看似簡單的原件，在畫軌道時其實是最費時間的， \n 好在最後成功使用陣列功能以及鏡射功能才能迅速地完成。 \n \xa0 \n \xa0 \n 示意圖 \n \xa0 \n \n \xa0 \n \xa0 \n 零件圖 \n \xa0 \n \n 底座 ⬆ \n \xa0 \n \n 軌道 ⬆ \n \xa0 \n', 'tags': '', 'url': '軌道永動機.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};