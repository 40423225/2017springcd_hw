var tipuesearch = {"pages":[{"url":"./pages/about/","text":"NFU-MDE104B-40423226-胡原愷 倉儲: https://github.com/40423226/2017springcd_hw 簡報: https://40423226.github.io/2017springcd_hw 網誌: https://40423226.github.io/2017springcd_hw/blog/ Vimeo: https://vimeo.com/user46807821 Youtube: https://www.youtube.com/channel/UCOCiRpI5ND4RKKHHtDcDGsg","title":"About","tags":"misc"},{"url":"./Week 6.html","text":"上課內容 V-rep 影片 個人影片區 心得 這這是第六次上課，這次跟上次一樣，只是用不同的軟體開啟而已，真是簡單。","title":"Week 6","tags":"Course"},{"url":"./Week 5.html","text":"上課內容 Solvespace 影片 個人影片區 心得 這是第五次上課，老師教我們如何在fossil筆記倉儲主頁顯示作業，並利用Solvespace讓四桿機構轉動，今天學的真多。","title":"Week 5","tags":"Course"},{"url":"./Week 4.html","text":"建立協同主機和單桿機構組件 建立協同主機 2017springcd_bg8 2017springcd_bg8: https://mde2a2.kmol.info/cdbg8 Solvespace 組合 Link_70 Link_80 Pin Onshape Link_70 Link_80 Pin 問題 這次GitHub又發生跟上次一樣推送出現問題。 解決辦法 刪除 plugin 下的 liquid_tags 目錄 影片 個人影片區 心得 這是第四次上課，跟上禮拜一樣在畫圖，但這次還多了要創建自己組的協同主機。還好滿簡單的。","title":"Week 4","tags":"Course"},{"url":"./Week 3.html","text":"四連桿機構 Solvespace Link_30 Link_50 Link_60 Onshape Link_30 Link_50 Link_60 影片 個人影片區 心得 這是第三次上課，要開始畫圖了，畫圖的話跟之前一樣這學期的wiki要在不同的地方編輯，感覺怪怪的，但用久就習慣了。","title":"Week 3","tags":"Course"},{"url":"./Week 2.html","text":"分組座位和四連桿機構 分組座位原始碼 #import os adata = open(\"w2b_cadlab.txt\", encoding=\"utf-8\").read() #讀取w2b_cadlab.txt 檔案,讓裡面的內容成為資料, 因為檔案裡有中文, 所以設定encoding 使用utf-8 的編驛碼 rdata = open(\"w2b_registered.txt\", encoding=\"utf-8\").read().splitlines() #print(adata) #用print 先檢查資料是否是我們需要的 alist = adata.splitlines() #利用splitlines 的方法把資料隔開, 就可以得到一個特定的數列 #print(alist[2]) n = 0 row = 0 final_list = [] w2_list = [] for stud_num in alist[2:]: #從第2列開始, 因為第0列和第1列都不是我們要的 row = row + 1 blist = stud_num.split(\"\\t\") #print(blist) column = 0 #為了避免序號連續, 利用column = 0 將順序重製, 因為每一列算完之後要換下一列重新開始 for i in range(len(blist)): column = column + 1 if blist[i] != \"\": #print(blist[i]) clist = blist[i].split(\"_\") stud_data = clist[0]+\"_\"+clist[1]+\"_\"+str(row)+\"_\"+str(column) final_list.append(stud_data) w2_list.append(clist[1]) n = n +1 # 根據數列前導字串排序, 目的在建立分組數列 group_list = sorted(final_list) print(\"分組名單:\") for i in range(len(group_list)): print(group_list[i]) print(\"座位列表:\") for i in range(len(final_list)): print(final_list[i]) for i in range(len(rdata)): if rdata[i] not in w2_list: print(\"缺席學生:\", rdata[i]) print(\"學生總數:\", n) #print(os.environ) Solvespace 影片 個人影片區 心得 這是第二次上課，重新分組了，但還是要用Solvespace畫4連桿機構組。感覺跟上學習差不多。","title":"Week 2","tags":"Course"},{"url":"./Week 1.html","text":"Stunnel.conf IP設定 未修改 stunnel.conf 的 IP 設定 修改過 stunnel.conf 的 IP 設定 影片 個人影片區 心得 這又是新的學期，開始交新的東西，雖然上學習被當了。但下學期還是會努力學習。","title":"Week 1","tags":"Course"}]};