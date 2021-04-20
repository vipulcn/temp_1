/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 65.0, "minX": 0.0, "maxY": 61557.0, "series": [{"data": [[0.0, 65.0], [0.1, 73.0], [0.2, 74.0], [0.3, 75.0], [0.4, 76.0], [0.5, 77.0], [0.6, 78.0], [0.7, 78.0], [0.8, 79.0], [0.9, 79.0], [1.0, 80.0], [1.1, 80.0], [1.2, 80.0], [1.3, 81.0], [1.4, 81.0], [1.5, 81.0], [1.6, 81.0], [1.7, 82.0], [1.8, 82.0], [1.9, 82.0], [2.0, 83.0], [2.1, 83.0], [2.2, 83.0], [2.3, 83.0], [2.4, 83.0], [2.5, 84.0], [2.6, 84.0], [2.7, 84.0], [2.8, 84.0], [2.9, 85.0], [3.0, 85.0], [3.1, 85.0], [3.2, 85.0], [3.3, 85.0], [3.4, 85.0], [3.5, 86.0], [3.6, 86.0], [3.7, 86.0], [3.8, 86.0], [3.9, 86.0], [4.0, 87.0], [4.1, 87.0], [4.2, 87.0], [4.3, 87.0], [4.4, 87.0], [4.5, 87.0], [4.6, 88.0], [4.7, 88.0], [4.8, 88.0], [4.9, 88.0], [5.0, 88.0], [5.1, 88.0], [5.2, 88.0], [5.3, 89.0], [5.4, 89.0], [5.5, 89.0], [5.6, 89.0], [5.7, 89.0], [5.8, 89.0], [5.9, 89.0], [6.0, 90.0], [6.1, 90.0], [6.2, 90.0], [6.3, 90.0], [6.4, 90.0], [6.5, 90.0], [6.6, 90.0], [6.7, 91.0], [6.8, 91.0], [6.9, 91.0], [7.0, 91.0], [7.1, 91.0], [7.2, 91.0], [7.3, 91.0], [7.4, 91.0], [7.5, 92.0], [7.6, 92.0], [7.7, 92.0], [7.8, 92.0], [7.9, 92.0], [8.0, 92.0], [8.1, 92.0], [8.2, 92.0], [8.3, 93.0], [8.4, 93.0], [8.5, 93.0], [8.6, 93.0], [8.7, 93.0], [8.8, 93.0], [8.9, 93.0], [9.0, 93.0], [9.1, 94.0], [9.2, 94.0], [9.3, 94.0], [9.4, 94.0], [9.5, 94.0], [9.6, 94.0], [9.7, 94.0], [9.8, 94.0], [9.9, 95.0], [10.0, 95.0], [10.1, 95.0], [10.2, 95.0], [10.3, 95.0], [10.4, 95.0], [10.5, 95.0], [10.6, 96.0], [10.7, 96.0], [10.8, 96.0], [10.9, 96.0], [11.0, 96.0], [11.1, 96.0], [11.2, 96.0], [11.3, 96.0], [11.4, 97.0], [11.5, 97.0], [11.6, 97.0], [11.7, 97.0], [11.8, 97.0], [11.9, 97.0], [12.0, 98.0], [12.1, 98.0], [12.2, 98.0], [12.3, 98.0], [12.4, 98.0], [12.5, 98.0], [12.6, 98.0], [12.7, 99.0], [12.8, 99.0], [12.9, 99.0], [13.0, 99.0], [13.1, 99.0], [13.2, 99.0], [13.3, 99.0], [13.4, 100.0], [13.5, 100.0], [13.6, 100.0], [13.7, 100.0], [13.8, 100.0], [13.9, 100.0], [14.0, 100.0], [14.1, 101.0], [14.2, 101.0], [14.3, 101.0], [14.4, 101.0], [14.5, 101.0], [14.6, 101.0], [14.7, 101.0], [14.8, 102.0], [14.9, 102.0], [15.0, 102.0], [15.1, 102.0], [15.2, 102.0], [15.3, 102.0], [15.4, 103.0], [15.5, 103.0], [15.6, 103.0], [15.7, 103.0], [15.8, 103.0], [15.9, 103.0], [16.0, 103.0], [16.1, 104.0], [16.2, 104.0], [16.3, 104.0], [16.4, 104.0], [16.5, 104.0], [16.6, 105.0], [16.7, 105.0], [16.8, 105.0], [16.9, 105.0], [17.0, 105.0], [17.1, 105.0], [17.2, 106.0], [17.3, 106.0], [17.4, 106.0], [17.5, 106.0], [17.6, 107.0], [17.7, 107.0], [17.8, 107.0], [17.9, 107.0], [18.0, 107.0], [18.1, 108.0], [18.2, 108.0], [18.3, 108.0], [18.4, 108.0], [18.5, 108.0], [18.6, 109.0], [18.7, 109.0], [18.8, 109.0], [18.9, 109.0], [19.0, 110.0], [19.1, 110.0], [19.2, 110.0], [19.3, 110.0], [19.4, 111.0], [19.5, 111.0], [19.6, 111.0], [19.7, 111.0], [19.8, 112.0], [19.9, 112.0], [20.0, 112.0], [20.1, 112.0], [20.2, 113.0], [20.3, 113.0], [20.4, 113.0], [20.5, 113.0], [20.6, 114.0], [20.7, 114.0], [20.8, 114.0], [20.9, 114.0], [21.0, 115.0], [21.1, 115.0], [21.2, 115.0], [21.3, 115.0], [21.4, 116.0], [21.5, 116.0], [21.6, 116.0], [21.7, 117.0], [21.8, 117.0], [21.9, 117.0], [22.0, 118.0], [22.1, 118.0], [22.2, 118.0], [22.3, 119.0], [22.4, 119.0], [22.5, 120.0], [22.6, 120.0], [22.7, 120.0], [22.8, 121.0], [22.9, 121.0], [23.0, 122.0], [23.1, 122.0], [23.2, 122.0], [23.3, 123.0], [23.4, 123.0], [23.5, 124.0], [23.6, 124.0], [23.7, 125.0], [23.8, 125.0], [23.9, 126.0], [24.0, 126.0], [24.1, 126.0], [24.2, 127.0], [24.3, 127.0], [24.4, 128.0], [24.5, 129.0], [24.6, 129.0], [24.7, 130.0], [24.8, 130.0], [24.9, 131.0], [25.0, 131.0], [25.1, 132.0], [25.2, 133.0], [25.3, 133.0], [25.4, 134.0], [25.5, 134.0], [25.6, 135.0], [25.7, 136.0], [25.8, 136.0], [25.9, 137.0], [26.0, 138.0], [26.1, 139.0], [26.2, 139.0], [26.3, 140.0], [26.4, 141.0], [26.5, 142.0], [26.6, 143.0], [26.7, 144.0], [26.8, 145.0], [26.9, 146.0], [27.0, 147.0], [27.1, 148.0], [27.2, 149.0], [27.3, 151.0], [27.4, 152.0], [27.5, 153.0], [27.6, 154.0], [27.7, 156.0], [27.8, 157.0], [27.9, 159.0], [28.0, 160.0], [28.1, 162.0], [28.2, 164.0], [28.3, 166.0], [28.4, 168.0], [28.5, 170.0], [28.6, 172.0], [28.7, 175.0], [28.8, 178.0], [28.9, 181.0], [29.0, 184.0], [29.1, 188.0], [29.2, 192.0], [29.3, 195.0], [29.4, 199.0], [29.5, 204.0], [29.6, 210.0], [29.7, 216.0], [29.8, 224.0], [29.9, 234.0], [30.0, 241.0], [30.1, 249.0], [30.2, 258.0], [30.3, 268.0], [30.4, 277.0], [30.5, 287.0], [30.6, 298.0], [30.7, 314.0], [30.8, 336.0], [30.9, 345.0], [31.0, 352.0], [31.1, 358.0], [31.2, 362.0], [31.3, 366.0], [31.4, 370.0], [31.5, 373.0], [31.6, 376.0], [31.7, 379.0], [31.8, 382.0], [31.9, 385.0], [32.0, 388.0], [32.1, 391.0], [32.2, 393.0], [32.3, 395.0], [32.4, 397.0], [32.5, 400.0], [32.6, 402.0], [32.7, 404.0], [32.8, 406.0], [32.9, 408.0], [33.0, 410.0], [33.1, 411.0], [33.2, 413.0], [33.3, 415.0], [33.4, 417.0], [33.5, 419.0], [33.6, 421.0], [33.7, 423.0], [33.8, 425.0], [33.9, 427.0], [34.0, 429.0], [34.1, 431.0], [34.2, 432.0], [34.3, 434.0], [34.4, 436.0], [34.5, 437.0], [34.6, 439.0], [34.7, 441.0], [34.8, 444.0], [34.9, 446.0], [35.0, 448.0], [35.1, 450.0], [35.2, 453.0], [35.3, 456.0], [35.4, 459.0], [35.5, 462.0], [35.6, 465.0], [35.7, 468.0], [35.8, 471.0], [35.9, 474.0], [36.0, 477.0], [36.1, 480.0], [36.2, 484.0], [36.3, 488.0], [36.4, 491.0], [36.5, 495.0], [36.6, 498.0], [36.7, 501.0], [36.8, 506.0], [36.9, 509.0], [37.0, 513.0], [37.1, 517.0], [37.2, 521.0], [37.3, 526.0], [37.4, 530.0], [37.5, 534.0], [37.6, 538.0], [37.7, 543.0], [37.8, 547.0], [37.9, 552.0], [38.0, 556.0], [38.1, 560.0], [38.2, 566.0], [38.3, 572.0], [38.4, 577.0], [38.5, 583.0], [38.6, 590.0], [38.7, 597.0], [38.8, 604.0], [38.9, 610.0], [39.0, 617.0], [39.1, 623.0], [39.2, 631.0], [39.3, 639.0], [39.4, 645.0], [39.5, 652.0], [39.6, 660.0], [39.7, 668.0], [39.8, 674.0], [39.9, 682.0], [40.0, 690.0], [40.1, 698.0], [40.2, 707.0], [40.3, 718.0], [40.4, 729.0], [40.5, 740.0], [40.6, 752.0], [40.7, 765.0], [40.8, 781.0], [40.9, 802.0], [41.0, 822.0], [41.1, 841.0], [41.2, 857.0], [41.3, 874.0], [41.4, 895.0], [41.5, 915.0], [41.6, 937.0], [41.7, 959.0], [41.8, 986.0], [41.9, 1011.0], [42.0, 1035.0], [42.1, 1056.0], [42.2, 1076.0], [42.3, 1100.0], [42.4, 1119.0], [42.5, 1142.0], [42.6, 1167.0], [42.7, 1196.0], [42.8, 1223.0], [42.9, 1255.0], [43.0, 1284.0], [43.1, 1315.0], [43.2, 1346.0], [43.3, 1372.0], [43.4, 1399.0], [43.5, 1424.0], [43.6, 1451.0], [43.7, 1473.0], [43.8, 1496.0], [43.9, 1519.0], [44.0, 1547.0], [44.1, 1573.0], [44.2, 1603.0], [44.3, 1630.0], [44.4, 1661.0], [44.5, 1696.0], [44.6, 1730.0], [44.7, 1758.0], [44.8, 1785.0], [44.9, 1815.0], [45.0, 1845.0], [45.1, 1876.0], [45.2, 1903.0], [45.3, 1933.0], [45.4, 1962.0], [45.5, 1988.0], [45.6, 2014.0], [45.7, 2043.0], [45.8, 2069.0], [45.9, 2090.0], [46.0, 2111.0], [46.1, 2132.0], [46.2, 2158.0], [46.3, 2178.0], [46.4, 2202.0], [46.5, 2222.0], [46.6, 2245.0], [46.7, 2268.0], [46.8, 2297.0], [46.9, 2320.0], [47.0, 2348.0], [47.1, 2377.0], [47.2, 2410.0], [47.3, 2443.0], [47.4, 2480.0], [47.5, 2509.0], [47.6, 2537.0], [47.7, 2568.0], [47.8, 2595.0], [47.9, 2618.0], [48.0, 2643.0], [48.1, 2670.0], [48.2, 2692.0], [48.3, 2715.0], [48.4, 2737.0], [48.5, 2760.0], [48.6, 2784.0], [48.7, 2803.0], [48.8, 2822.0], [48.9, 2845.0], [49.0, 2867.0], [49.1, 2890.0], [49.2, 2916.0], [49.3, 2939.0], [49.4, 2959.0], [49.5, 2981.0], [49.6, 3012.0], [49.7, 3034.0], [49.8, 3061.0], [49.9, 3086.0], [50.0, 3116.0], [50.1, 3144.0], [50.2, 3168.0], [50.3, 3197.0], [50.4, 3220.0], [50.5, 3242.0], [50.6, 3268.0], [50.7, 3292.0], [50.8, 3312.0], [50.9, 3339.0], [51.0, 3365.0], [51.1, 3392.0], [51.2, 3418.0], [51.3, 3450.0], [51.4, 3472.0], [51.5, 3496.0], [51.6, 3517.0], [51.7, 3537.0], [51.8, 3561.0], [51.9, 3584.0], [52.0, 3608.0], [52.1, 3628.0], [52.2, 3652.0], [52.3, 3669.0], [52.4, 3688.0], [52.5, 3708.0], [52.6, 3729.0], [52.7, 3750.0], [52.8, 3769.0], [52.9, 3792.0], [53.0, 3818.0], [53.1, 3838.0], [53.2, 3863.0], [53.3, 3885.0], [53.4, 3908.0], [53.5, 3930.0], [53.6, 3954.0], [53.7, 3975.0], [53.8, 3996.0], [53.9, 4020.0], [54.0, 4039.0], [54.1, 4058.0], [54.2, 4075.0], [54.3, 4094.0], [54.4, 4108.0], [54.5, 4124.0], [54.6, 4140.0], [54.7, 4158.0], [54.8, 4175.0], [54.9, 4192.0], [55.0, 4212.0], [55.1, 4228.0], [55.2, 4248.0], [55.3, 4264.0], [55.4, 4282.0], [55.5, 4297.0], [55.6, 4315.0], [55.7, 4330.0], [55.8, 4349.0], [55.9, 4366.0], [56.0, 4386.0], [56.1, 4401.0], [56.2, 4417.0], [56.3, 4434.0], [56.4, 4450.0], [56.5, 4465.0], [56.6, 4478.0], [56.7, 4491.0], [56.8, 4506.0], [56.9, 4522.0], [57.0, 4537.0], [57.1, 4552.0], [57.2, 4569.0], [57.3, 4586.0], [57.4, 4601.0], [57.5, 4617.0], [57.6, 4634.0], [57.7, 4646.0], [57.8, 4661.0], [57.9, 4679.0], [58.0, 4694.0], [58.1, 4708.0], [58.2, 4722.0], [58.3, 4739.0], [58.4, 4751.0], [58.5, 4764.0], [58.6, 4779.0], [58.7, 4793.0], [58.8, 4807.0], [58.9, 4819.0], [59.0, 4831.0], [59.1, 4843.0], [59.2, 4857.0], [59.3, 4869.0], [59.4, 4879.0], [59.5, 4891.0], [59.6, 4903.0], [59.7, 4915.0], [59.8, 4924.0], [59.9, 4934.0], [60.0, 4944.0], [60.1, 4954.0], [60.2, 4963.0], [60.3, 4975.0], [60.4, 4985.0], [60.5, 4994.0], [60.6, 5003.0], [60.7, 5013.0], [60.8, 5024.0], [60.9, 5033.0], [61.0, 5043.0], [61.1, 5053.0], [61.2, 5062.0], [61.3, 5072.0], [61.4, 5082.0], [61.5, 5094.0], [61.6, 5103.0], [61.7, 5112.0], [61.8, 5122.0], [61.9, 5131.0], [62.0, 5141.0], [62.1, 5152.0], [62.2, 5161.0], [62.3, 5171.0], [62.4, 5179.0], [62.5, 5189.0], [62.6, 5198.0], [62.7, 5207.0], [62.8, 5217.0], [62.9, 5227.0], [63.0, 5237.0], [63.1, 5248.0], [63.2, 5258.0], [63.3, 5267.0], [63.4, 5278.0], [63.5, 5288.0], [63.6, 5300.0], [63.7, 5310.0], [63.8, 5319.0], [63.9, 5328.0], [64.0, 5339.0], [64.1, 5349.0], [64.2, 5359.0], [64.3, 5368.0], [64.4, 5379.0], [64.5, 5389.0], [64.6, 5398.0], [64.7, 5406.0], [64.8, 5417.0], [64.9, 5425.0], [65.0, 5433.0], [65.1, 5443.0], [65.2, 5452.0], [65.3, 5461.0], [65.4, 5469.0], [65.5, 5478.0], [65.6, 5486.0], [65.7, 5495.0], [65.8, 5503.0], [65.9, 5511.0], [66.0, 5519.0], [66.1, 5528.0], [66.2, 5536.0], [66.3, 5544.0], [66.4, 5552.0], [66.5, 5560.0], [66.6, 5567.0], [66.7, 5577.0], [66.8, 5586.0], [66.9, 5593.0], [67.0, 5601.0], [67.1, 5610.0], [67.2, 5618.0], [67.3, 5628.0], [67.4, 5636.0], [67.5, 5645.0], [67.6, 5654.0], [67.7, 5662.0], [67.8, 5671.0], [67.9, 5679.0], [68.0, 5687.0], [68.1, 5695.0], [68.2, 5702.0], [68.3, 5712.0], [68.4, 5722.0], [68.5, 5733.0], [68.6, 5741.0], [68.7, 5749.0], [68.8, 5757.0], [68.9, 5765.0], [69.0, 5774.0], [69.1, 5782.0], [69.2, 5791.0], [69.3, 5798.0], [69.4, 5805.0], [69.5, 5815.0], [69.6, 5823.0], [69.7, 5832.0], [69.8, 5840.0], [69.9, 5848.0], [70.0, 5856.0], [70.1, 5863.0], [70.2, 5871.0], [70.3, 5879.0], [70.4, 5887.0], [70.5, 5894.0], [70.6, 5902.0], [70.7, 5910.0], [70.8, 5918.0], [70.9, 5926.0], [71.0, 5934.0], [71.1, 5943.0], [71.2, 5951.0], [71.3, 5960.0], [71.4, 5970.0], [71.5, 5979.0], [71.6, 5988.0], [71.7, 5997.0], [71.8, 6006.0], [71.9, 6014.0], [72.0, 6021.0], [72.1, 6030.0], [72.2, 6039.0], [72.3, 6047.0], [72.4, 6055.0], [72.5, 6063.0], [72.6, 6071.0], [72.7, 6082.0], [72.8, 6093.0], [72.9, 6100.0], [73.0, 6108.0], [73.1, 6117.0], [73.2, 6128.0], [73.3, 6137.0], [73.4, 6146.0], [73.5, 6154.0], [73.6, 6164.0], [73.7, 6172.0], [73.8, 6179.0], [73.9, 6186.0], [74.0, 6196.0], [74.1, 6205.0], [74.2, 6213.0], [74.3, 6220.0], [74.4, 6228.0], [74.5, 6236.0], [74.6, 6244.0], [74.7, 6255.0], [74.8, 6263.0], [74.9, 6274.0], [75.0, 6282.0], [75.1, 6291.0], [75.2, 6301.0], [75.3, 6310.0], [75.4, 6319.0], [75.5, 6328.0], [75.6, 6336.0], [75.7, 6346.0], [75.8, 6355.0], [75.9, 6364.0], [76.0, 6373.0], [76.1, 6383.0], [76.2, 6392.0], [76.3, 6400.0], [76.4, 6409.0], [76.5, 6417.0], [76.6, 6427.0], [76.7, 6437.0], [76.8, 6446.0], [76.9, 6454.0], [77.0, 6463.0], [77.1, 6472.0], [77.2, 6480.0], [77.3, 6489.0], [77.4, 6498.0], [77.5, 6506.0], [77.6, 6514.0], [77.7, 6522.0], [77.8, 6530.0], [77.9, 6540.0], [78.0, 6546.0], [78.1, 6556.0], [78.2, 6564.0], [78.3, 6572.0], [78.4, 6580.0], [78.5, 6590.0], [78.6, 6599.0], [78.7, 6607.0], [78.8, 6614.0], [78.9, 6624.0], [79.0, 6633.0], [79.1, 6643.0], [79.2, 6652.0], [79.3, 6662.0], [79.4, 6673.0], [79.5, 6683.0], [79.6, 6694.0], [79.7, 6704.0], [79.8, 6714.0], [79.9, 6723.0], [80.0, 6733.0], [80.1, 6741.0], [80.2, 6751.0], [80.3, 6761.0], [80.4, 6772.0], [80.5, 6783.0], [80.6, 6792.0], [80.7, 6802.0], [80.8, 6810.0], [80.9, 6821.0], [81.0, 6833.0], [81.1, 6844.0], [81.2, 6854.0], [81.3, 6864.0], [81.4, 6875.0], [81.5, 6884.0], [81.6, 6894.0], [81.7, 6904.0], [81.8, 6916.0], [81.9, 6927.0], [82.0, 6938.0], [82.1, 6948.0], [82.2, 6959.0], [82.3, 6970.0], [82.4, 6980.0], [82.5, 6990.0], [82.6, 7000.0], [82.7, 7010.0], [82.8, 7022.0], [82.9, 7033.0], [83.0, 7043.0], [83.1, 7053.0], [83.2, 7064.0], [83.3, 7076.0], [83.4, 7087.0], [83.5, 7097.0], [83.6, 7109.0], [83.7, 7121.0], [83.8, 7132.0], [83.9, 7143.0], [84.0, 7156.0], [84.1, 7167.0], [84.2, 7178.0], [84.3, 7192.0], [84.4, 7205.0], [84.5, 7217.0], [84.6, 7231.0], [84.7, 7246.0], [84.8, 7258.0], [84.9, 7270.0], [85.0, 7287.0], [85.1, 7299.0], [85.2, 7315.0], [85.3, 7328.0], [85.4, 7343.0], [85.5, 7356.0], [85.6, 7368.0], [85.7, 7379.0], [85.8, 7393.0], [85.9, 7407.0], [86.0, 7419.0], [86.1, 7432.0], [86.2, 7444.0], [86.3, 7455.0], [86.4, 7467.0], [86.5, 7478.0], [86.6, 7490.0], [86.7, 7505.0], [86.8, 7517.0], [86.9, 7529.0], [87.0, 7542.0], [87.1, 7554.0], [87.2, 7567.0], [87.3, 7581.0], [87.4, 7594.0], [87.5, 7609.0], [87.6, 7625.0], [87.7, 7641.0], [87.8, 7657.0], [87.9, 7671.0], [88.0, 7686.0], [88.1, 7700.0], [88.2, 7717.0], [88.3, 7732.0], [88.4, 7751.0], [88.5, 7768.0], [88.6, 7786.0], [88.7, 7805.0], [88.8, 7829.0], [88.9, 7846.0], [89.0, 7864.0], [89.1, 7883.0], [89.2, 7903.0], [89.3, 7922.0], [89.4, 7937.0], [89.5, 7954.0], [89.6, 7972.0], [89.7, 7989.0], [89.8, 8007.0], [89.9, 8026.0], [90.0, 8043.0], [90.1, 8062.0], [90.2, 8081.0], [90.3, 8099.0], [90.4, 8117.0], [90.5, 8135.0], [90.6, 8152.0], [90.7, 8171.0], [90.8, 8192.0], [90.9, 8208.0], [91.0, 8229.0], [91.1, 8246.0], [91.2, 8268.0], [91.3, 8286.0], [91.4, 8309.0], [91.5, 8336.0], [91.6, 8357.0], [91.7, 8383.0], [91.8, 8407.0], [91.9, 8431.0], [92.0, 8459.0], [92.1, 8485.0], [92.2, 8515.0], [92.3, 8538.0], [92.4, 8567.0], [92.5, 8600.0], [92.6, 8633.0], [92.7, 8664.0], [92.8, 8688.0], [92.9, 8721.0], [93.0, 8750.0], [93.1, 8781.0], [93.2, 8804.0], [93.3, 8828.0], [93.4, 8862.0], [93.5, 8891.0], [93.6, 8923.0], [93.7, 8967.0], [93.8, 9012.0], [93.9, 9048.0], [94.0, 9087.0], [94.1, 9125.0], [94.2, 9169.0], [94.3, 9213.0], [94.4, 9258.0], [94.5, 9307.0], [94.6, 9350.0], [94.7, 9401.0], [94.8, 9446.0], [94.9, 9497.0], [95.0, 9557.0], [95.1, 9610.0], [95.2, 9677.0], [95.3, 9747.0], [95.4, 9804.0], [95.5, 9861.0], [95.6, 9926.0], [95.7, 10009.0], [95.8, 10076.0], [95.9, 10140.0], [96.0, 10212.0], [96.1, 10292.0], [96.2, 10375.0], [96.3, 10455.0], [96.4, 10541.0], [96.5, 10631.0], [96.6, 10704.0], [96.7, 10785.0], [96.8, 10878.0], [96.9, 10979.0], [97.0, 11064.0], [97.1, 11148.0], [97.2, 11244.0], [97.3, 11330.0], [97.4, 11428.0], [97.5, 11550.0], [97.6, 11665.0], [97.7, 11777.0], [97.8, 11900.0], [97.9, 12002.0], [98.0, 12107.0], [98.1, 12235.0], [98.2, 12344.0], [98.3, 12451.0], [98.4, 12577.0], [98.5, 12717.0], [98.6, 12866.0], [98.7, 13013.0], [98.8, 13179.0], [98.9, 13338.0], [99.0, 13501.0], [99.1, 13678.0], [99.2, 13913.0], [99.3, 14138.0], [99.4, 14378.0], [99.5, 14670.0], [99.6, 14903.0], [99.7, 15342.0], [99.8, 16019.0], [99.9, 18927.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 18599.0, "series": [{"data": [[0.0, 15502.0], [100.0, 18599.0], [33300.0, 3.0], [33700.0, 1.0], [35700.0, 1.0], [200.0, 1405.0], [56100.0, 1.0], [59300.0, 1.0], [60100.0, 1.0], [300.0, 2169.0], [400.0, 4820.0], [500.0, 2444.0], [600.0, 1590.0], [700.0, 893.0], [800.0, 623.0], [900.0, 500.0], [1000.0, 515.0], [1100.0, 478.0], [1200.0, 394.0], [1300.0, 406.0], [1400.0, 484.0], [1500.0, 434.0], [1600.0, 368.0], [1700.0, 389.0], [1800.0, 394.0], [1900.0, 406.0], [2000.0, 468.0], [2100.0, 528.0], [2300.0, 422.0], [2200.0, 486.0], [2400.0, 334.0], [2500.0, 409.0], [2600.0, 474.0], [2800.0, 524.0], [2700.0, 532.0], [2900.0, 496.0], [3000.0, 440.0], [3100.0, 426.0], [3300.0, 451.0], [3200.0, 496.0], [3400.0, 455.0], [3500.0, 517.0], [3600.0, 571.0], [3700.0, 550.0], [3800.0, 501.0], [3900.0, 533.0], [4000.0, 595.0], [4100.0, 696.0], [4300.0, 674.0], [4200.0, 667.0], [4400.0, 765.0], [4500.0, 744.0], [4600.0, 743.0], [4800.0, 973.0], [4700.0, 818.0], [5000.0, 1162.0], [5100.0, 1234.0], [4900.0, 1125.0], [5200.0, 1142.0], [5300.0, 1182.0], [5500.0, 1415.0], [5400.0, 1319.0], [5600.0, 1375.0], [5700.0, 1343.0], [5800.0, 1453.0], [5900.0, 1343.0], [6100.0, 1337.0], [6000.0, 1346.0], [6200.0, 1323.0], [6300.0, 1284.0], [6500.0, 1372.0], [6600.0, 1214.0], [6400.0, 1315.0], [6700.0, 1179.0], [6800.0, 1142.0], [6900.0, 1094.0], [7000.0, 1069.0], [7100.0, 977.0], [7400.0, 948.0], [7300.0, 862.0], [7200.0, 860.0], [7500.0, 895.0], [7600.0, 763.0], [7800.0, 594.0], [7900.0, 676.0], [7700.0, 660.0], [8000.0, 629.0], [8100.0, 630.0], [8300.0, 479.0], [8200.0, 586.0], [8400.0, 452.0], [8600.0, 395.0], [8700.0, 397.0], [8500.0, 403.0], [8800.0, 409.0], [9000.0, 299.0], [9200.0, 250.0], [8900.0, 280.0], [9100.0, 267.0], [9700.0, 186.0], [9500.0, 201.0], [9600.0, 176.0], [9400.0, 243.0], [9300.0, 252.0], [10000.0, 176.0], [9800.0, 198.0], [9900.0, 148.0], [10100.0, 155.0], [10200.0, 155.0], [10400.0, 152.0], [10300.0, 133.0], [10500.0, 127.0], [10600.0, 149.0], [10700.0, 148.0], [11000.0, 138.0], [10900.0, 117.0], [10800.0, 117.0], [11200.0, 130.0], [11100.0, 125.0], [11700.0, 114.0], [11400.0, 108.0], [11300.0, 127.0], [11600.0, 86.0], [11500.0, 97.0], [11900.0, 114.0], [12100.0, 88.0], [12200.0, 103.0], [12000.0, 108.0], [11800.0, 92.0], [12700.0, 79.0], [12600.0, 84.0], [12400.0, 105.0], [12300.0, 112.0], [12500.0, 84.0], [12800.0, 79.0], [12900.0, 73.0], [13000.0, 79.0], [13100.0, 70.0], [13200.0, 76.0], [13300.0, 62.0], [13400.0, 75.0], [13500.0, 63.0], [13600.0, 65.0], [13700.0, 50.0], [13800.0, 44.0], [13900.0, 48.0], [14000.0, 61.0], [14100.0, 56.0], [14200.0, 41.0], [14300.0, 50.0], [14400.0, 43.0], [14500.0, 42.0], [14600.0, 31.0], [14700.0, 61.0], [14800.0, 40.0], [14900.0, 29.0], [15000.0, 34.0], [15100.0, 20.0], [15200.0, 27.0], [15300.0, 23.0], [15400.0, 30.0], [15500.0, 28.0], [15600.0, 10.0], [15700.0, 14.0], [15800.0, 12.0], [16000.0, 10.0], [16300.0, 8.0], [16100.0, 6.0], [15900.0, 5.0], [16200.0, 6.0], [16600.0, 7.0], [16400.0, 9.0], [16800.0, 9.0], [17000.0, 3.0], [17400.0, 2.0], [17200.0, 2.0], [18200.0, 3.0], [17800.0, 7.0], [18400.0, 2.0], [18000.0, 2.0], [17600.0, 3.0], [18600.0, 2.0], [19200.0, 1.0], [19000.0, 2.0], [18800.0, 1.0], [19400.0, 1.0], [20200.0, 2.0], [20400.0, 1.0], [19600.0, 2.0], [20800.0, 1.0], [21400.0, 1.0], [20600.0, 2.0], [21200.0, 1.0], [22400.0, 2.0], [22000.0, 3.0], [21800.0, 1.0], [22600.0, 1.0], [23400.0, 1.0], [23800.0, 1.0], [24200.0, 1.0], [27200.0, 1.0], [27600.0, 1.0], [28200.0, 2.0], [28600.0, 2.0], [28000.0, 4.0], [27800.0, 1.0], [28800.0, 1.0], [29200.0, 1.0], [32600.0, 1.0], [31800.0, 1.0], [34800.0, 1.0], [34000.0, 1.0], [32800.0, 1.0], [36000.0, 1.0], [46800.0, 1.0], [48800.0, 1.0], [60000.0, 1.0], [34700.0, 1.0], [33900.0, 1.0], [34300.0, 1.0], [36300.0, 1.0], [37500.0, 1.0], [47500.0, 1.0], [61500.0, 1.0], [17300.0, 3.0], [16700.0, 6.0], [17100.0, 5.0], [16500.0, 3.0], [16900.0, 1.0], [17700.0, 4.0], [17900.0, 1.0], [18300.0, 5.0], [18100.0, 3.0], [17500.0, 1.0], [19100.0, 2.0], [18900.0, 5.0], [18500.0, 2.0], [18700.0, 1.0], [19300.0, 1.0], [19700.0, 2.0], [19500.0, 1.0], [20700.0, 1.0], [21100.0, 3.0], [20500.0, 1.0], [21300.0, 2.0], [22500.0, 2.0], [22300.0, 1.0], [22700.0, 3.0], [23500.0, 1.0], [23300.0, 2.0], [25900.0, 2.0], [25700.0, 1.0], [27300.0, 2.0], [27700.0, 2.0], [29500.0, 2.0], [28700.0, 1.0], [29100.0, 1.0], [29700.0, 2.0], [30300.0, 2.0], [31500.0, 2.0], [31300.0, 1.0], [32300.0, 1.0], [31900.0, 1.0], [33800.0, 2.0], [35000.0, 2.0], [47000.0, 1.0], [48200.0, 1.0], [54200.0, 1.0], [53800.0, 1.0], [60600.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 61500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 65152.0, "series": [{"data": [[0.0, 42530.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 8297.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 65152.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 3.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1000.0, "minX": 1.61891142E12, "maxY": 1000.0, "series": [{"data": [[1.61891148E12, 1000.0], [1.61891166E12, 1000.0], [1.6189116E12, 1000.0], [1.61891178E12, 1000.0], [1.61891172E12, 1000.0], [1.61891142E12, 1000.0], [1.61891184E12, 1000.0], [1.61891154E12, 1000.0]], "isOverall": false, "label": "echo", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61891184E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 3623.508440964974, "minX": 1000.0, "maxY": 3623.508440964974, "series": [{"data": [[1000.0, 3623.508440964974]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1000.0, 3623.508440964974]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1000.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 947425.4166666666, "minX": 1.61891142E12, "maxY": 3.851638725E7, "series": [{"data": [[1.61891148E12, 3.1801368066666666E7], [1.61891166E12, 2.7319594166666668E7], [1.6189116E12, 3.851638725E7], [1.61891178E12, 3.4009393016666666E7], [1.61891172E12, 2.769824175E7], [1.61891142E12, 3.28349697E7], [1.61891184E12, 948514.3833333333], [1.61891154E12, 3.0920430316666666E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61891148E12, 3.1764800833333332E7], [1.61891166E12, 2.72881675E7], [1.6189116E12, 3.847782125E7], [1.61891178E12, 3.3970314583333336E7], [1.61891172E12, 2.7666365833333332E7], [1.61891142E12, 3.2797127916666668E7], [1.61891184E12, 947425.4166666666], [1.61891154E12, 3.0884910833333332E7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61891184E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 2948.9723684870664, "minX": 1.61891142E12, "maxY": 4679.2301425661935, "series": [{"data": [[1.61891148E12, 3682.408455837677], [1.61891166E12, 4266.487271955861], [1.6189116E12, 2948.9723684870664], [1.61891178E12, 3558.3742686736623], [1.61891172E12, 3949.2768865950557], [1.61891142E12, 3495.778313820088], [1.61891184E12, 4679.2301425661935], [1.61891154E12, 3718.272522803949]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61891184E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 2893.9886164184168, "minX": 1.61891142E12, "maxY": 4260.195234054589, "series": [{"data": [[1.61891148E12, 3673.294921637722], [1.61891166E12, 4260.195234054589], [1.6189116E12, 2893.9886164184168], [1.61891178E12, 3216.0638454984237], [1.61891172E12, 3941.528734830525], [1.61891142E12, 3477.8845090310156], [1.61891184E12, 3583.590631364561], [1.61891154E12, 3118.8824815694024]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61891184E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.61891142E12, "maxY": 195.51367888450903, "series": [{"data": [[1.61891148E12, 2.121734904628846], [1.61891166E12, 2.403620421439685], [1.6189116E12, 10.888320545609457], [1.61891178E12, 20.153422323203777], [1.61891172E12, 2.644232110475659], [1.61891142E12, 195.51367888450903], [1.61891184E12, 0.0], [1.61891154E12, 18.546919905035754]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61891184E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 65.0, "minX": 1.61891142E12, "maxY": 61557.0, "series": [{"data": [[1.61891148E12, 14648.0], [1.61891166E12, 14674.0], [1.6189116E12, 61557.0], [1.61891178E12, 20633.0], [1.61891172E12, 17552.0], [1.61891142E12, 15743.0], [1.61891184E12, 22554.0], [1.61891154E12, 37591.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61891148E12, 8492.100000000002], [1.61891166E12, 10120.7], [1.6189116E12, 6320.0], [1.61891178E12, 7014.4], [1.61891172E12, 8382.1], [1.61891142E12, 8122.4000000000015], [1.61891184E12, 7449.8], [1.61891154E12, 6940.300000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61891148E12, 12386.0], [1.61891166E12, 12335.14], [1.6189116E12, 8192.660000000003], [1.61891178E12, 14310.879999999997], [1.61891172E12, 14006.61], [1.61891142E12, 14454.060000000001], [1.61891184E12, 18948.999999999993], [1.61891154E12, 15538.720000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61891148E12, 9989.849999999999], [1.61891166E12, 11121.0], [1.6189116E12, 6828.049999999999], [1.61891178E12, 8231.0], [1.61891172E12, 9435.05], [1.61891142E12, 11552.199999999997], [1.61891184E12, 11320.199999999983], [1.61891154E12, 8197.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61891148E12, 67.0], [1.61891166E12, 68.0], [1.6189116E12, 66.0], [1.61891178E12, 71.0], [1.61891172E12, 69.0], [1.61891142E12, 65.0], [1.61891184E12, 83.0], [1.61891154E12, 72.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61891148E12, 3790.5], [1.61891166E12, 4039.0], [1.6189116E12, 2201.5], [1.61891178E12, 3473.0], [1.61891172E12, 4199.5], [1.61891142E12, 2787.0], [1.61891184E12, 4257.0], [1.61891154E12, 3134.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61891184E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 101.5, "minX": 2.0, "maxY": 60628.0, "series": [{"data": [[2.0, 10251.5], [4.0, 101.5], [37.0, 427.0], [38.0, 8197.0], [52.0, 8906.5], [53.0, 10067.0], [66.0, 7454.0], [65.0, 5997.0], [69.0, 5638.5], [74.0, 9510.0], [89.0, 3641.0], [96.0, 12325.0], [107.0, 3736.0], [106.0, 120.5], [111.0, 5529.5], [115.0, 337.0], [117.0, 131.0], [126.0, 6129.5], [127.0, 6352.0], [135.0, 4229.5], [139.0, 212.0], [140.0, 4418.5], [137.0, 3115.0], [144.0, 7540.0], [145.0, 4329.0], [148.0, 6668.0], [156.0, 2636.5], [158.0, 4094.0], [153.0, 10971.0], [164.0, 1576.0], [165.0, 6328.0], [175.0, 2762.5], [171.0, 5531.0], [172.0, 3456.5], [173.0, 2119.0], [168.0, 4863.5], [181.0, 2360.0], [180.0, 2930.0], [183.0, 5223.0], [177.0, 2708.0], [179.0, 840.0], [176.0, 147.0], [189.0, 3475.0], [184.0, 3487.5], [190.0, 4138.0], [188.0, 3173.0], [195.0, 2930.0], [199.0, 2793.5], [197.0, 3281.5], [192.0, 4980.0], [196.0, 402.5], [198.0, 7446.5], [194.0, 4836.0], [203.0, 3897.5], [204.0, 5116.0], [202.0, 5174.5], [201.0, 3115.0], [200.0, 6916.5], [211.0, 4040.0], [214.0, 673.5], [210.0, 670.0], [215.0, 1714.0], [213.0, 2620.0], [223.0, 3271.0], [217.0, 1255.5], [220.0, 3876.5], [221.0, 3121.0], [222.0, 2695.0], [216.0, 402.5], [218.0, 4753.5], [229.0, 4922.0], [231.0, 2157.0], [228.0, 3037.5], [225.0, 414.0], [230.0, 8047.5], [224.0, 764.0], [238.0, 130.0], [237.0, 6062.0], [234.0, 4713.5], [236.0, 443.0], [233.0, 4250.0], [239.0, 2580.0], [232.0, 2460.5], [235.0, 552.0], [240.0, 669.0], [244.0, 5633.5], [246.0, 2598.0], [242.0, 3330.5], [241.0, 4406.0], [245.0, 670.0], [247.0, 5224.0], [255.0, 505.0], [250.0, 3953.0], [252.0, 330.5], [254.0, 2958.5], [251.0, 2910.5], [249.0, 2945.0], [248.0, 4998.0], [253.0, 3787.0], [268.0, 4568.0], [271.0, 5685.0], [265.0, 5852.0], [269.0, 484.5], [260.0, 1949.0], [261.0, 4137.0], [256.0, 426.5], [263.0, 5506.0], [257.0, 510.5], [264.0, 2939.0], [259.0, 1834.5], [258.0, 4921.5], [267.0, 4925.0], [266.0, 1046.5], [286.0, 3997.5], [287.0, 4767.0], [284.0, 3933.5], [285.0, 511.0], [272.0, 2410.0], [280.0, 4245.5], [283.0, 4047.0], [282.0, 6126.5], [279.0, 1513.0], [276.0, 3777.0], [273.0, 3101.0], [277.0, 413.0], [300.0, 1811.0], [290.0, 2241.0], [297.0, 1942.5], [288.0, 2864.5], [289.0, 1532.0], [296.0, 2743.0], [303.0, 4676.0], [302.0, 4474.0], [301.0, 3436.0], [298.0, 5095.0], [295.0, 438.0], [293.0, 529.0], [299.0, 4319.0], [319.0, 4585.5], [315.0, 7594.5], [307.0, 4799.0], [314.0, 3940.5], [312.0, 3063.5], [306.0, 4231.0], [317.0, 3537.5], [316.0, 2570.5], [313.0, 4340.0], [304.0, 3817.5], [311.0, 449.5], [334.0, 4054.5], [321.0, 2765.5], [329.0, 9258.0], [324.0, 733.5], [325.0, 366.5], [332.0, 362.0], [333.0, 430.0], [323.0, 4848.0], [330.0, 6734.0], [331.0, 3874.5], [320.0, 4995.5], [327.0, 6177.0], [335.0, 1406.0], [328.0, 179.0], [326.0, 2672.5], [348.0, 4688.5], [338.0, 1090.0], [346.0, 4169.5], [345.0, 420.0], [339.0, 4882.0], [344.0, 4146.5], [350.0, 2872.5], [336.0, 682.5], [337.0, 692.0], [347.0, 4982.0], [343.0, 4385.0], [342.0, 3340.0], [352.0, 8815.0], [363.0, 509.0], [356.0, 3297.5], [362.0, 3800.5], [357.0, 3072.5], [359.0, 5222.0], [360.0, 3831.5], [364.0, 4540.0], [355.0, 5379.0], [371.0, 1883.0], [383.0, 420.5], [377.0, 2125.0], [376.0, 5676.0], [374.0, 1730.5], [382.0, 4060.5], [373.0, 4932.0], [370.0, 4231.5], [372.0, 4832.5], [380.0, 4677.0], [396.0, 4383.0], [394.0, 553.5], [384.0, 4266.0], [388.0, 4078.5], [387.0, 4517.5], [397.0, 4864.0], [398.0, 384.0], [386.0, 412.5], [390.0, 1217.5], [410.0, 470.0], [414.0, 4255.5], [412.0, 1631.5], [415.0, 1037.0], [401.0, 192.0], [403.0, 438.0], [425.0, 4219.0], [427.0, 4121.0], [429.0, 478.0], [428.0, 4539.5], [416.0, 5012.0], [435.0, 5538.0], [446.0, 5905.5], [438.0, 442.5], [443.0, 3924.0], [453.0, 5771.0], [478.0, 4619.0], [473.0, 491.0], [471.0, 482.0], [467.0, 425.0], [469.0, 4202.0], [491.0, 5217.0], [504.0, 446.0], [499.0, 446.0], [519.0, 4183.0], [518.0, 6894.0], [538.0, 585.0], [514.0, 5347.0], [547.0, 2861.0], [572.0, 3515.5], [548.0, 448.5], [644.0, 6182.0], [675.0, 1830.0], [691.0, 1354.0], [695.0, 4617.0], [730.0, 3592.0], [706.0, 2713.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[299.0, 60628.0], [347.0, 60163.0], [473.0, 60007.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 730.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 100.5, "minX": 2.0, "maxY": 60628.0, "series": [{"data": [[2.0, 10249.0], [4.0, 100.5], [37.0, 406.0], [38.0, 8195.5], [52.0, 8905.5], [53.0, 10065.0], [66.0, 7315.0], [65.0, 5995.0], [69.0, 5637.0], [74.0, 9508.0], [89.0, 3640.0], [96.0, 12324.0], [107.0, 3735.0], [106.0, 117.5], [111.0, 5358.5], [115.0, 335.0], [117.0, 129.0], [126.0, 5831.5], [127.0, 6351.0], [135.0, 4227.5], [139.0, 199.0], [140.0, 3960.0], [137.0, 3104.0], [144.0, 7537.5], [145.0, 4328.0], [148.0, 6666.5], [156.0, 1847.5], [158.0, 4093.0], [153.0, 10970.0], [164.0, 1574.5], [165.0, 6328.0], [175.0, 1465.0], [171.0, 5528.0], [172.0, 2606.0], [173.0, 1405.0], [168.0, 4298.0], [181.0, 2069.0], [180.0, 1867.0], [183.0, 5220.5], [177.0, 1776.0], [179.0, 593.0], [176.0, 146.0], [189.0, 3473.0], [184.0, 2314.0], [190.0, 4128.5], [188.0, 2063.5], [195.0, 2927.0], [199.0, 1900.0], [197.0, 2221.5], [192.0, 4209.5], [196.0, 402.0], [198.0, 7445.0], [194.0, 4835.5], [203.0, 3896.5], [204.0, 5115.0], [202.0, 5019.0], [201.0, 1944.0], [200.0, 6915.5], [211.0, 4039.0], [214.0, 669.0], [210.0, 663.0], [215.0, 1080.0], [213.0, 1755.0], [223.0, 3269.0], [217.0, 898.5], [220.0, 2518.0], [221.0, 2366.0], [222.0, 1769.0], [216.0, 373.5], [218.0, 4751.5], [229.0, 4613.0], [231.0, 1628.0], [228.0, 2058.5], [225.0, 401.0], [230.0, 8046.0], [224.0, 755.5], [238.0, 129.0], [237.0, 6061.0], [234.0, 4599.0], [236.0, 395.5], [233.0, 4248.5], [239.0, 1755.0], [232.0, 1309.5], [235.0, 525.0], [240.0, 668.0], [244.0, 5632.5], [246.0, 1553.0], [242.0, 2222.0], [241.0, 4347.0], [245.0, 658.0], [247.0, 4860.0], [255.0, 489.5], [250.0, 3795.5], [252.0, 325.5], [254.0, 1951.5], [251.0, 1920.0], [249.0, 1455.0], [248.0, 4995.0], [253.0, 3786.0], [268.0, 4563.0], [271.0, 5675.0], [265.0, 5851.0], [269.0, 478.0], [260.0, 1211.5], [261.0, 4113.5], [256.0, 425.5], [263.0, 5504.0], [257.0, 463.5], [264.0, 1818.5], [259.0, 1051.5], [258.0, 4921.0], [267.0, 4924.0], [266.0, 830.0], [286.0, 3965.0], [287.0, 4759.0], [284.0, 3932.0], [285.0, 507.0], [272.0, 1521.5], [280.0, 4244.0], [283.0, 4046.0], [282.0, 6066.5], [279.0, 983.0], [276.0, 2323.5], [273.0, 2160.5], [277.0, 413.0], [300.0, 1805.5], [290.0, 2239.5], [297.0, 1110.5], [288.0, 1820.0], [289.0, 1530.5], [296.0, 1840.0], [303.0, 4664.0], [302.0, 4471.5], [301.0, 3434.0], [298.0, 5094.5], [295.0, 203.0], [293.0, 480.0], [299.0, 4317.0], [319.0, 3812.5], [315.0, 7593.5], [307.0, 4745.0], [314.0, 3934.0], [312.0, 2273.5], [306.0, 4226.5], [317.0, 2367.0], [316.0, 2566.0], [313.0, 4339.0], [304.0, 3816.0], [311.0, 445.5], [334.0, 4053.0], [321.0, 2744.0], [329.0, 9255.5], [324.0, 728.5], [325.0, 181.5], [332.0, 160.5], [333.0, 423.0], [323.0, 4701.0], [330.0, 6728.5], [331.0, 3870.0], [320.0, 4980.0], [327.0, 6175.0], [335.0, 1310.0], [328.0, 170.0], [326.0, 1763.0], [348.0, 4656.0], [338.0, 1019.5], [346.0, 4163.5], [345.0, 419.0], [339.0, 4482.0], [344.0, 3235.0], [350.0, 1605.5], [336.0, 530.0], [337.0, 568.0], [347.0, 4981.0], [343.0, 4383.0], [342.0, 2169.0], [352.0, 8807.0], [363.0, 496.0], [356.0, 2338.0], [362.0, 3795.0], [357.0, 1847.5], [359.0, 4895.0], [360.0, 3830.5], [364.0, 4537.0], [355.0, 5285.0], [371.0, 1881.5], [383.0, 410.0], [377.0, 1473.0], [376.0, 5382.5], [374.0, 1730.0], [382.0, 4059.0], [373.0, 4931.0], [370.0, 4221.0], [372.0, 4764.0], [380.0, 4677.0], [396.0, 4382.0], [394.0, 539.0], [384.0, 4236.5], [388.0, 3009.0], [387.0, 4516.5], [397.0, 4850.0], [398.0, 379.5], [386.0, 407.5], [390.0, 1165.5], [410.0, 457.5], [414.0, 3427.0], [412.0, 1616.0], [415.0, 645.0], [401.0, 190.0], [403.0, 417.0], [425.0, 4206.0], [427.0, 3847.0], [429.0, 478.0], [428.0, 4537.5], [416.0, 4973.5], [435.0, 5537.0], [446.0, 5853.5], [438.0, 435.0], [443.0, 3923.0], [453.0, 5757.0], [478.0, 4609.0], [473.0, 480.0], [471.0, 436.0], [467.0, 423.0], [469.0, 4152.0], [491.0, 5207.0], [504.0, 442.0], [499.0, 426.0], [519.0, 4179.0], [518.0, 6893.0], [538.0, 543.0], [514.0, 5325.5], [547.0, 2851.0], [572.0, 3495.0], [548.0, 437.0], [644.0, 6175.5], [675.0, 1815.0], [691.0, 1117.0], [695.0, 4553.0], [730.0, 3581.0], [706.0, 2295.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[299.0, 60628.0], [347.0, 60163.0], [473.0, 60007.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 730.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.61891136E12, "maxY": 332.3666666666667, "series": [{"data": [[1.61891148E12, 274.3666666666667], [1.61891166E12, 235.7], [1.6189116E12, 332.3666666666667], [1.61891178E12, 284.6166666666667], [1.61891172E12, 238.96666666666667], [1.61891142E12, 283.28333333333336], [1.61891136E12, 16.666666666666668], [1.61891184E12, 0.31666666666666665], [1.61891154E12, 266.75]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61891184E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.61891142E12, "maxY": 332.3, "series": [{"data": [[1.61891148E12, 274.3666666666667], [1.61891166E12, 235.7], [1.6189116E12, 332.3], [1.61891178E12, 293.4166666666667], [1.61891172E12, 238.96666666666667], [1.61891142E12, 283.28333333333336], [1.61891184E12, 8.183333333333334], [1.61891154E12, 266.76666666666665]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6189116E12, 0.05]], "isOverall": false, "label": "408", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61891184E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.61891142E12, "maxY": 332.3, "series": [{"data": [[1.61891148E12, 274.3666666666667], [1.61891166E12, 235.7], [1.6189116E12, 332.3], [1.61891178E12, 293.4166666666667], [1.61891172E12, 238.96666666666667], [1.61891142E12, 283.28333333333336], [1.61891184E12, 8.183333333333334], [1.61891154E12, 266.76666666666665]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.6189116E12, 0.05]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61891184E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.05, "minX": 1.61891142E12, "maxY": 332.3, "series": [{"data": [[1.61891148E12, 274.3666666666667], [1.61891166E12, 235.7], [1.6189116E12, 332.3], [1.61891178E12, 293.4166666666667], [1.61891172E12, 238.96666666666667], [1.61891142E12, 283.28333333333336], [1.61891184E12, 8.183333333333334], [1.61891154E12, 266.76666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6189116E12, 0.05]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61891184E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

