var tipuesearch = {"pages":[{"tags":"misc","text":"NFU-MDE104B-40423226-胡原愷 倉儲: https://github.com/40423226/2017springcd_hw 簡報: https://40423226.github.io/2017springcd_hw 網誌: https://40423226.github.io/2017springcd_hw/blog/ Vimeo: https://vimeo.com/user46807821 Youtube: https://www.youtube.com/channel/UCOCiRpI5ND4RKKHHtDcDGsg","url":"./pages/about/","title":"About"},{"tags":"Course","text":"分組座位原始碼 #import os adata = open(\"w2b_cadlab.txt\", encoding=\"utf-8\").read() #讀取w2b_cadlab.txt 檔案,讓裡面的內容成為資料, 因為檔案裡有中文, 所以設定encoding 使用utf-8 的編驛碼 rdata = open(\"w2b_registered.txt\", encoding=\"utf-8\").read().splitlines() #print(adata) #用print 先檢查資料是否是我們需要的 alist = adata.splitlines() #利用splitlines 的方法把資料隔開, 就可以得到一個特定的數列 #print(alist[2]) n = 0 row = 0 final_list = [] w2_list = [] for stud_num in alist[2:]: #從第2列開始, 因為第0列和第1列都不是我們要的 row = row + 1 blist = stud_num.split(\"\\t\") #print(blist) column = 0 #為了避免序號連續, 利用column = 0 將順序重製, 因為每一列算完之後要換下一列重新開始 for i in range(len(blist)): column = column + 1 if blist[i] != \"\": #print(blist[i]) clist = blist[i].split(\"_\") stud_data = clist[0]+\"_\"+clist[1]+\"_\"+str(row)+\"_\"+str(column) final_list.append(stud_data) w2_list.append(clist[1]) n = n +1 # 根據數列前導字串排序, 目的在建立分組數列 group_list = sorted(final_list) print(\"分組名單:\") for i in range(len(group_list)): print(group_list[i]) print(\"座位列表:\") for i in range(len(final_list)): print(final_list[i]) for i in range(len(rdata)): if rdata[i] not in w2_list: print(\"缺席學生:\", rdata[i]) print(\"學生總數:\", n) #print(os.environ) Fourbar 利用Solvespace 畫出簡單的四連桿機構, 觀察該機構的運動方式, 也可以匯出到V-rep 進行動態模擬 Week 2_Fourbar from NFU-MDE104B-40423226 on Vimeo . 心得 雖然程式能做的人也可以做, 但人會出錯, 簡單卻繁瑣的工作就交給程式, 困難的再讓人類來做就行了","url":"./Week 2.html","title":"20170301 Week 2"},{"tags":"Course","text":"修改stunnel.conf的IP設定 Week 1_Set IP from NFU-MDE104B-40423226 on Vimeo . 心得: 還好還沒忘記, 複習一下ipconfig /all指令","url":"./Week 1.html","title":"20170222 Week 1"}]};