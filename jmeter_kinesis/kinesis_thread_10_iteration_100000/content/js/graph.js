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
        data: {"result": {"minY": 111.0, "minX": 0.0, "maxY": 30006.0, "series": [{"data": [[0.0, 111.0], [0.1, 122.0], [0.2, 123.0], [0.3, 124.0], [0.4, 125.0], [0.5, 126.0], [0.6, 126.0], [0.7, 127.0], [0.8, 127.0], [0.9, 128.0], [1.0, 128.0], [1.1, 128.0], [1.2, 129.0], [1.3, 129.0], [1.4, 129.0], [1.5, 129.0], [1.6, 130.0], [1.7, 130.0], [1.8, 130.0], [1.9, 130.0], [2.0, 130.0], [2.1, 131.0], [2.2, 131.0], [2.3, 131.0], [2.4, 131.0], [2.5, 131.0], [2.6, 132.0], [2.7, 132.0], [2.8, 132.0], [2.9, 132.0], [3.0, 132.0], [3.1, 132.0], [3.2, 133.0], [3.3, 133.0], [3.4, 133.0], [3.5, 133.0], [3.6, 133.0], [3.7, 133.0], [3.8, 133.0], [3.9, 133.0], [4.0, 134.0], [4.1, 134.0], [4.2, 134.0], [4.3, 134.0], [4.4, 134.0], [4.5, 134.0], [4.6, 134.0], [4.7, 134.0], [4.8, 134.0], [4.9, 135.0], [5.0, 135.0], [5.1, 135.0], [5.2, 135.0], [5.3, 135.0], [5.4, 135.0], [5.5, 135.0], [5.6, 135.0], [5.7, 135.0], [5.8, 135.0], [5.9, 136.0], [6.0, 136.0], [6.1, 136.0], [6.2, 136.0], [6.3, 136.0], [6.4, 136.0], [6.5, 136.0], [6.6, 136.0], [6.7, 136.0], [6.8, 136.0], [6.9, 136.0], [7.0, 137.0], [7.1, 137.0], [7.2, 137.0], [7.3, 137.0], [7.4, 137.0], [7.5, 137.0], [7.6, 137.0], [7.7, 137.0], [7.8, 137.0], [7.9, 137.0], [8.0, 137.0], [8.1, 137.0], [8.2, 138.0], [8.3, 138.0], [8.4, 138.0], [8.5, 138.0], [8.6, 138.0], [8.7, 138.0], [8.8, 138.0], [8.9, 138.0], [9.0, 138.0], [9.1, 138.0], [9.2, 138.0], [9.3, 138.0], [9.4, 138.0], [9.5, 139.0], [9.6, 139.0], [9.7, 139.0], [9.8, 139.0], [9.9, 139.0], [10.0, 139.0], [10.1, 139.0], [10.2, 139.0], [10.3, 139.0], [10.4, 139.0], [10.5, 139.0], [10.6, 139.0], [10.7, 139.0], [10.8, 139.0], [10.9, 139.0], [11.0, 140.0], [11.1, 140.0], [11.2, 140.0], [11.3, 140.0], [11.4, 140.0], [11.5, 140.0], [11.6, 140.0], [11.7, 140.0], [11.8, 140.0], [11.9, 140.0], [12.0, 140.0], [12.1, 140.0], [12.2, 140.0], [12.3, 140.0], [12.4, 141.0], [12.5, 141.0], [12.6, 141.0], [12.7, 141.0], [12.8, 141.0], [12.9, 141.0], [13.0, 141.0], [13.1, 141.0], [13.2, 141.0], [13.3, 141.0], [13.4, 141.0], [13.5, 141.0], [13.6, 141.0], [13.7, 141.0], [13.8, 141.0], [13.9, 141.0], [14.0, 142.0], [14.1, 142.0], [14.2, 142.0], [14.3, 142.0], [14.4, 142.0], [14.5, 142.0], [14.6, 142.0], [14.7, 142.0], [14.8, 142.0], [14.9, 142.0], [15.0, 142.0], [15.1, 142.0], [15.2, 142.0], [15.3, 142.0], [15.4, 142.0], [15.5, 142.0], [15.6, 142.0], [15.7, 143.0], [15.8, 143.0], [15.9, 143.0], [16.0, 143.0], [16.1, 143.0], [16.2, 143.0], [16.3, 143.0], [16.4, 143.0], [16.5, 143.0], [16.6, 143.0], [16.7, 143.0], [16.8, 143.0], [16.9, 143.0], [17.0, 143.0], [17.1, 143.0], [17.2, 143.0], [17.3, 143.0], [17.4, 144.0], [17.5, 144.0], [17.6, 144.0], [17.7, 144.0], [17.8, 144.0], [17.9, 144.0], [18.0, 144.0], [18.1, 144.0], [18.2, 144.0], [18.3, 144.0], [18.4, 144.0], [18.5, 144.0], [18.6, 144.0], [18.7, 144.0], [18.8, 144.0], [18.9, 144.0], [19.0, 144.0], [19.1, 144.0], [19.2, 145.0], [19.3, 145.0], [19.4, 145.0], [19.5, 145.0], [19.6, 145.0], [19.7, 145.0], [19.8, 145.0], [19.9, 145.0], [20.0, 145.0], [20.1, 145.0], [20.2, 145.0], [20.3, 145.0], [20.4, 145.0], [20.5, 145.0], [20.6, 145.0], [20.7, 145.0], [20.8, 145.0], [20.9, 146.0], [21.0, 146.0], [21.1, 146.0], [21.2, 146.0], [21.3, 146.0], [21.4, 146.0], [21.5, 146.0], [21.6, 146.0], [21.7, 146.0], [21.8, 146.0], [21.9, 146.0], [22.0, 146.0], [22.1, 146.0], [22.2, 146.0], [22.3, 146.0], [22.4, 146.0], [22.5, 146.0], [22.6, 146.0], [22.7, 147.0], [22.8, 147.0], [22.9, 147.0], [23.0, 147.0], [23.1, 147.0], [23.2, 147.0], [23.3, 147.0], [23.4, 147.0], [23.5, 147.0], [23.6, 147.0], [23.7, 147.0], [23.8, 147.0], [23.9, 147.0], [24.0, 147.0], [24.1, 147.0], [24.2, 147.0], [24.3, 147.0], [24.4, 147.0], [24.5, 148.0], [24.6, 148.0], [24.7, 148.0], [24.8, 148.0], [24.9, 148.0], [25.0, 148.0], [25.1, 148.0], [25.2, 148.0], [25.3, 148.0], [25.4, 148.0], [25.5, 148.0], [25.6, 148.0], [25.7, 148.0], [25.8, 148.0], [25.9, 148.0], [26.0, 148.0], [26.1, 149.0], [26.2, 149.0], [26.3, 149.0], [26.4, 149.0], [26.5, 149.0], [26.6, 149.0], [26.7, 149.0], [26.8, 149.0], [26.9, 149.0], [27.0, 149.0], [27.1, 149.0], [27.2, 149.0], [27.3, 149.0], [27.4, 149.0], [27.5, 149.0], [27.6, 149.0], [27.7, 149.0], [27.8, 150.0], [27.9, 150.0], [28.0, 150.0], [28.1, 150.0], [28.2, 150.0], [28.3, 150.0], [28.4, 150.0], [28.5, 150.0], [28.6, 150.0], [28.7, 150.0], [28.8, 150.0], [28.9, 150.0], [29.0, 150.0], [29.1, 150.0], [29.2, 150.0], [29.3, 150.0], [29.4, 151.0], [29.5, 151.0], [29.6, 151.0], [29.7, 151.0], [29.8, 151.0], [29.9, 151.0], [30.0, 151.0], [30.1, 151.0], [30.2, 151.0], [30.3, 151.0], [30.4, 151.0], [30.5, 151.0], [30.6, 151.0], [30.7, 151.0], [30.8, 151.0], [30.9, 152.0], [31.0, 152.0], [31.1, 152.0], [31.2, 152.0], [31.3, 152.0], [31.4, 152.0], [31.5, 152.0], [31.6, 152.0], [31.7, 152.0], [31.8, 152.0], [31.9, 152.0], [32.0, 152.0], [32.1, 152.0], [32.2, 153.0], [32.3, 153.0], [32.4, 153.0], [32.5, 153.0], [32.6, 153.0], [32.7, 153.0], [32.8, 153.0], [32.9, 153.0], [33.0, 153.0], [33.1, 153.0], [33.2, 153.0], [33.3, 153.0], [33.4, 153.0], [33.5, 153.0], [33.6, 154.0], [33.7, 154.0], [33.8, 154.0], [33.9, 154.0], [34.0, 154.0], [34.1, 154.0], [34.2, 154.0], [34.3, 154.0], [34.4, 154.0], [34.5, 154.0], [34.6, 154.0], [34.7, 154.0], [34.8, 154.0], [34.9, 155.0], [35.0, 155.0], [35.1, 155.0], [35.2, 155.0], [35.3, 155.0], [35.4, 155.0], [35.5, 155.0], [35.6, 155.0], [35.7, 155.0], [35.8, 155.0], [35.9, 155.0], [36.0, 155.0], [36.1, 156.0], [36.2, 156.0], [36.3, 156.0], [36.4, 156.0], [36.5, 156.0], [36.6, 156.0], [36.7, 156.0], [36.8, 156.0], [36.9, 156.0], [37.0, 156.0], [37.1, 156.0], [37.2, 157.0], [37.3, 157.0], [37.4, 157.0], [37.5, 157.0], [37.6, 157.0], [37.7, 157.0], [37.8, 157.0], [37.9, 157.0], [38.0, 157.0], [38.1, 157.0], [38.2, 158.0], [38.3, 158.0], [38.4, 158.0], [38.5, 158.0], [38.6, 158.0], [38.7, 158.0], [38.8, 158.0], [38.9, 158.0], [39.0, 158.0], [39.1, 159.0], [39.2, 159.0], [39.3, 159.0], [39.4, 159.0], [39.5, 159.0], [39.6, 159.0], [39.7, 159.0], [39.8, 159.0], [39.9, 159.0], [40.0, 160.0], [40.1, 160.0], [40.2, 160.0], [40.3, 160.0], [40.4, 160.0], [40.5, 160.0], [40.6, 160.0], [40.7, 161.0], [40.8, 161.0], [40.9, 161.0], [41.0, 161.0], [41.1, 161.0], [41.2, 161.0], [41.3, 161.0], [41.4, 162.0], [41.5, 162.0], [41.6, 162.0], [41.7, 162.0], [41.8, 162.0], [41.9, 162.0], [42.0, 162.0], [42.1, 163.0], [42.2, 163.0], [42.3, 163.0], [42.4, 163.0], [42.5, 163.0], [42.6, 163.0], [42.7, 164.0], [42.8, 164.0], [42.9, 164.0], [43.0, 164.0], [43.1, 164.0], [43.2, 165.0], [43.3, 165.0], [43.4, 165.0], [43.5, 165.0], [43.6, 166.0], [43.7, 166.0], [43.8, 166.0], [43.9, 166.0], [44.0, 166.0], [44.1, 167.0], [44.2, 167.0], [44.3, 167.0], [44.4, 167.0], [44.5, 168.0], [44.6, 168.0], [44.7, 168.0], [44.8, 169.0], [44.9, 169.0], [45.0, 169.0], [45.1, 169.0], [45.2, 170.0], [45.3, 170.0], [45.4, 171.0], [45.5, 171.0], [45.6, 171.0], [45.7, 172.0], [45.8, 172.0], [45.9, 173.0], [46.0, 173.0], [46.1, 174.0], [46.2, 174.0], [46.3, 175.0], [46.4, 175.0], [46.5, 176.0], [46.6, 176.0], [46.7, 177.0], [46.8, 178.0], [46.9, 178.0], [47.0, 179.0], [47.1, 180.0], [47.2, 181.0], [47.3, 181.0], [47.4, 183.0], [47.5, 184.0], [47.6, 184.0], [47.7, 186.0], [47.8, 187.0], [47.9, 188.0], [48.0, 190.0], [48.1, 191.0], [48.2, 192.0], [48.3, 194.0], [48.4, 196.0], [48.5, 198.0], [48.6, 201.0], [48.7, 204.0], [48.8, 209.0], [48.9, 212.0], [49.0, 221.0], [49.1, 230.0], [49.2, 262.0], [49.3, 345.0], [49.4, 353.0], [49.5, 364.0], [49.6, 374.0], [49.7, 384.0], [49.8, 391.0], [49.9, 396.0], [50.0, 400.0], [50.1, 406.0], [50.2, 411.0], [50.3, 420.0], [50.4, 430.0], [50.5, 441.0], [50.6, 456.0], [50.7, 477.0], [50.8, 521.0], [50.9, 597.0], [51.0, 604.0], [51.1, 608.0], [51.2, 610.0], [51.3, 613.0], [51.4, 615.0], [51.5, 617.0], [51.6, 619.0], [51.7, 620.0], [51.8, 622.0], [51.9, 623.0], [52.0, 624.0], [52.1, 625.0], [52.2, 627.0], [52.3, 627.0], [52.4, 628.0], [52.5, 629.0], [52.6, 630.0], [52.7, 631.0], [52.8, 632.0], [52.9, 632.0], [53.0, 633.0], [53.1, 634.0], [53.2, 635.0], [53.3, 636.0], [53.4, 636.0], [53.5, 637.0], [53.6, 638.0], [53.7, 638.0], [53.8, 639.0], [53.9, 640.0], [54.0, 641.0], [54.1, 641.0], [54.2, 642.0], [54.3, 643.0], [54.4, 643.0], [54.5, 644.0], [54.6, 645.0], [54.7, 645.0], [54.8, 646.0], [54.9, 647.0], [55.0, 647.0], [55.1, 648.0], [55.2, 649.0], [55.3, 649.0], [55.4, 650.0], [55.5, 650.0], [55.6, 651.0], [55.7, 652.0], [55.8, 652.0], [55.9, 653.0], [56.0, 653.0], [56.1, 654.0], [56.2, 654.0], [56.3, 655.0], [56.4, 655.0], [56.5, 656.0], [56.6, 656.0], [56.7, 657.0], [56.8, 657.0], [56.9, 658.0], [57.0, 658.0], [57.1, 659.0], [57.2, 659.0], [57.3, 660.0], [57.4, 660.0], [57.5, 661.0], [57.6, 661.0], [57.7, 662.0], [57.8, 662.0], [57.9, 663.0], [58.0, 663.0], [58.1, 664.0], [58.2, 664.0], [58.3, 664.0], [58.4, 665.0], [58.5, 665.0], [58.6, 666.0], [58.7, 666.0], [58.8, 666.0], [58.9, 667.0], [59.0, 667.0], [59.1, 667.0], [59.2, 668.0], [59.3, 668.0], [59.4, 669.0], [59.5, 669.0], [59.6, 669.0], [59.7, 670.0], [59.8, 670.0], [59.9, 671.0], [60.0, 671.0], [60.1, 671.0], [60.2, 672.0], [60.3, 672.0], [60.4, 672.0], [60.5, 673.0], [60.6, 673.0], [60.7, 673.0], [60.8, 674.0], [60.9, 674.0], [61.0, 675.0], [61.1, 675.0], [61.2, 675.0], [61.3, 676.0], [61.4, 676.0], [61.5, 676.0], [61.6, 677.0], [61.7, 677.0], [61.8, 677.0], [61.9, 677.0], [62.0, 678.0], [62.1, 678.0], [62.2, 678.0], [62.3, 679.0], [62.4, 679.0], [62.5, 679.0], [62.6, 680.0], [62.7, 680.0], [62.8, 680.0], [62.9, 681.0], [63.0, 681.0], [63.1, 681.0], [63.2, 682.0], [63.3, 682.0], [63.4, 682.0], [63.5, 683.0], [63.6, 683.0], [63.7, 683.0], [63.8, 683.0], [63.9, 684.0], [64.0, 684.0], [64.1, 684.0], [64.2, 684.0], [64.3, 685.0], [64.4, 685.0], [64.5, 685.0], [64.6, 686.0], [64.7, 686.0], [64.8, 686.0], [64.9, 686.0], [65.0, 687.0], [65.1, 687.0], [65.2, 687.0], [65.3, 688.0], [65.4, 688.0], [65.5, 688.0], [65.6, 689.0], [65.7, 689.0], [65.8, 689.0], [65.9, 689.0], [66.0, 690.0], [66.1, 690.0], [66.2, 690.0], [66.3, 691.0], [66.4, 691.0], [66.5, 691.0], [66.6, 691.0], [66.7, 692.0], [66.8, 692.0], [66.9, 692.0], [67.0, 693.0], [67.1, 693.0], [67.2, 693.0], [67.3, 693.0], [67.4, 694.0], [67.5, 694.0], [67.6, 694.0], [67.7, 695.0], [67.8, 695.0], [67.9, 695.0], [68.0, 696.0], [68.1, 696.0], [68.2, 696.0], [68.3, 696.0], [68.4, 697.0], [68.5, 697.0], [68.6, 697.0], [68.7, 698.0], [68.8, 698.0], [68.9, 698.0], [69.0, 698.0], [69.1, 699.0], [69.2, 699.0], [69.3, 699.0], [69.4, 699.0], [69.5, 700.0], [69.6, 700.0], [69.7, 700.0], [69.8, 701.0], [69.9, 701.0], [70.0, 701.0], [70.1, 701.0], [70.2, 702.0], [70.3, 702.0], [70.4, 702.0], [70.5, 703.0], [70.6, 703.0], [70.7, 703.0], [70.8, 704.0], [70.9, 704.0], [71.0, 704.0], [71.1, 704.0], [71.2, 705.0], [71.3, 705.0], [71.4, 705.0], [71.5, 706.0], [71.6, 706.0], [71.7, 706.0], [71.8, 707.0], [71.9, 707.0], [72.0, 707.0], [72.1, 708.0], [72.2, 708.0], [72.3, 708.0], [72.4, 708.0], [72.5, 709.0], [72.6, 709.0], [72.7, 709.0], [72.8, 710.0], [72.9, 710.0], [73.0, 710.0], [73.1, 710.0], [73.2, 711.0], [73.3, 711.0], [73.4, 711.0], [73.5, 712.0], [73.6, 712.0], [73.7, 712.0], [73.8, 712.0], [73.9, 713.0], [74.0, 713.0], [74.1, 713.0], [74.2, 714.0], [74.3, 714.0], [74.4, 714.0], [74.5, 714.0], [74.6, 715.0], [74.7, 715.0], [74.8, 715.0], [74.9, 716.0], [75.0, 716.0], [75.1, 716.0], [75.2, 717.0], [75.3, 717.0], [75.4, 717.0], [75.5, 717.0], [75.6, 718.0], [75.7, 718.0], [75.8, 718.0], [75.9, 719.0], [76.0, 719.0], [76.1, 719.0], [76.2, 719.0], [76.3, 720.0], [76.4, 720.0], [76.5, 720.0], [76.6, 721.0], [76.7, 721.0], [76.8, 721.0], [76.9, 722.0], [77.0, 722.0], [77.1, 722.0], [77.2, 722.0], [77.3, 723.0], [77.4, 723.0], [77.5, 723.0], [77.6, 724.0], [77.7, 724.0], [77.8, 724.0], [77.9, 725.0], [78.0, 725.0], [78.1, 725.0], [78.2, 726.0], [78.3, 726.0], [78.4, 726.0], [78.5, 726.0], [78.6, 727.0], [78.7, 727.0], [78.8, 727.0], [78.9, 728.0], [79.0, 728.0], [79.1, 728.0], [79.2, 728.0], [79.3, 729.0], [79.4, 729.0], [79.5, 729.0], [79.6, 730.0], [79.7, 730.0], [79.8, 730.0], [79.9, 731.0], [80.0, 731.0], [80.1, 731.0], [80.2, 732.0], [80.3, 732.0], [80.4, 732.0], [80.5, 733.0], [80.6, 733.0], [80.7, 733.0], [80.8, 733.0], [80.9, 734.0], [81.0, 734.0], [81.1, 734.0], [81.2, 735.0], [81.3, 735.0], [81.4, 735.0], [81.5, 736.0], [81.6, 736.0], [81.7, 736.0], [81.8, 737.0], [81.9, 737.0], [82.0, 737.0], [82.1, 738.0], [82.2, 738.0], [82.3, 738.0], [82.4, 739.0], [82.5, 739.0], [82.6, 739.0], [82.7, 739.0], [82.8, 740.0], [82.9, 740.0], [83.0, 741.0], [83.1, 741.0], [83.2, 741.0], [83.3, 742.0], [83.4, 742.0], [83.5, 742.0], [83.6, 743.0], [83.7, 743.0], [83.8, 743.0], [83.9, 744.0], [84.0, 744.0], [84.1, 744.0], [84.2, 745.0], [84.3, 745.0], [84.4, 745.0], [84.5, 746.0], [84.6, 746.0], [84.7, 746.0], [84.8, 747.0], [84.9, 747.0], [85.0, 748.0], [85.1, 748.0], [85.2, 748.0], [85.3, 749.0], [85.4, 749.0], [85.5, 750.0], [85.6, 750.0], [85.7, 750.0], [85.8, 751.0], [85.9, 751.0], [86.0, 751.0], [86.1, 752.0], [86.2, 752.0], [86.3, 753.0], [86.4, 753.0], [86.5, 753.0], [86.6, 754.0], [86.7, 754.0], [86.8, 755.0], [86.9, 755.0], [87.0, 756.0], [87.1, 756.0], [87.2, 756.0], [87.3, 757.0], [87.4, 757.0], [87.5, 757.0], [87.6, 758.0], [87.7, 758.0], [87.8, 759.0], [87.9, 759.0], [88.0, 759.0], [88.1, 760.0], [88.2, 760.0], [88.3, 761.0], [88.4, 761.0], [88.5, 762.0], [88.6, 762.0], [88.7, 763.0], [88.8, 763.0], [88.9, 764.0], [89.0, 764.0], [89.1, 764.0], [89.2, 765.0], [89.3, 765.0], [89.4, 766.0], [89.5, 766.0], [89.6, 767.0], [89.7, 767.0], [89.8, 768.0], [89.9, 768.0], [90.0, 769.0], [90.1, 769.0], [90.2, 770.0], [90.3, 770.0], [90.4, 771.0], [90.5, 771.0], [90.6, 772.0], [90.7, 772.0], [90.8, 773.0], [90.9, 773.0], [91.0, 774.0], [91.1, 774.0], [91.2, 775.0], [91.3, 775.0], [91.4, 776.0], [91.5, 777.0], [91.6, 777.0], [91.7, 778.0], [91.8, 778.0], [91.9, 779.0], [92.0, 780.0], [92.1, 780.0], [92.2, 781.0], [92.3, 781.0], [92.4, 782.0], [92.5, 783.0], [92.6, 783.0], [92.7, 784.0], [92.8, 784.0], [92.9, 785.0], [93.0, 786.0], [93.1, 786.0], [93.2, 787.0], [93.3, 788.0], [93.4, 789.0], [93.5, 790.0], [93.6, 791.0], [93.7, 792.0], [93.8, 792.0], [93.9, 793.0], [94.0, 794.0], [94.1, 795.0], [94.2, 796.0], [94.3, 796.0], [94.4, 797.0], [94.5, 798.0], [94.6, 799.0], [94.7, 800.0], [94.8, 801.0], [94.9, 802.0], [95.0, 803.0], [95.1, 804.0], [95.2, 805.0], [95.3, 806.0], [95.4, 807.0], [95.5, 808.0], [95.6, 809.0], [95.7, 810.0], [95.8, 811.0], [95.9, 812.0], [96.0, 814.0], [96.1, 815.0], [96.2, 817.0], [96.3, 818.0], [96.4, 819.0], [96.5, 821.0], [96.6, 823.0], [96.7, 824.0], [96.8, 826.0], [96.9, 828.0], [97.0, 830.0], [97.1, 832.0], [97.2, 834.0], [97.3, 837.0], [97.4, 839.0], [97.5, 841.0], [97.6, 844.0], [97.7, 846.0], [97.8, 850.0], [97.9, 853.0], [98.0, 857.0], [98.1, 860.0], [98.2, 864.0], [98.3, 867.0], [98.4, 872.0], [98.5, 877.0], [98.6, 883.0], [98.7, 888.0], [98.8, 895.0], [98.9, 903.0], [99.0, 913.0], [99.1, 927.0], [99.2, 948.0], [99.3, 980.0], [99.4, 1023.0], [99.5, 1164.0], [99.6, 1198.0], [99.7, 1566.0], [99.8, 1942.0], [99.9, 2168.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 32991.0, "series": [{"data": [[600.0, 12568.0], [700.0, 17150.0], [800.0, 2834.0], [900.0, 347.0], [1000.0, 62.0], [1100.0, 102.0], [1200.0, 11.0], [1300.0, 11.0], [1400.0, 23.0], [1500.0, 28.0], [100.0, 32991.0], [1600.0, 18.0], [1700.0, 18.0], [1800.0, 16.0], [1900.0, 26.0], [30000.0, 1.0], [2000.0, 45.0], [2100.0, 11.0], [2300.0, 1.0], [2200.0, 6.0], [2400.0, 1.0], [2500.0, 3.0], [2700.0, 5.0], [2800.0, 5.0], [2900.0, 3.0], [3000.0, 11.0], [3100.0, 7.0], [200.0, 446.0], [3200.0, 6.0], [3900.0, 1.0], [4000.0, 2.0], [4100.0, 3.0], [4200.0, 1.0], [4400.0, 3.0], [4500.0, 4.0], [300.0, 523.0], [6000.0, 1.0], [400.0, 530.0], [500.0, 112.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 30000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 34492.0, "series": [{"data": [[0.0, 34492.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 33218.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 225.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.948905109489049, "minX": 1.61890008E12, "maxY": 10.0, "series": [{"data": [[1.6189026E12, 10.0], [1.61890098E12, 10.0], [1.61890062E12, 10.0], [1.6189014E12, 10.0], [1.61890302E12, 10.0], [1.6189002E12, 10.0], [1.618902E12, 10.0], [1.61890116E12, 10.0], [1.61890278E12, 10.0], [1.61890044E12, 10.0], [1.61890176E12, 10.0], [1.61890158E12, 10.0], [1.61890218E12, 10.0], [1.61890056E12, 10.0], [1.61890164E12, 10.0], [1.61890224E12, 10.0], [1.61890206E12, 10.0], [1.61890266E12, 10.0], [1.61890104E12, 10.0], [1.61890182E12, 10.0], [1.61890242E12, 10.0], [1.6189008E12, 10.0], [1.61890284E12, 10.0], [1.61890122E12, 10.0], [1.61890038E12, 10.0], [1.6189023E12, 10.0], [1.61890128E12, 10.0], [1.6189029E12, 10.0], [1.6189011E12, 10.0], [1.6189005E12, 10.0], [1.6189017E12, 10.0], [1.61890086E12, 10.0], [1.61890308E12, 10.0], [1.61890146E12, 10.0], [1.61890014E12, 10.0], [1.61890032E12, 10.0], [1.61890188E12, 10.0], [1.61890248E12, 10.0], [1.61890134E12, 10.0], [1.61890026E12, 10.0], [1.61890194E12, 10.0], [1.61890236E12, 10.0], [1.61890074E12, 10.0], [1.61890296E12, 10.0], [1.61890008E12, 9.948905109489049], [1.61890212E12, 10.0], [1.61890272E12, 10.0], [1.61890254E12, 10.0], [1.61890092E12, 10.0], [1.61890068E12, 10.0], [1.61890152E12, 10.0]], "isOverall": false, "label": "kinesis", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61890308E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 173.0, "minX": 6.0, "maxY": 531.0, "series": [{"data": [[8.0, 531.0], [9.0, 173.0], [10.0, 442.3883090692312], [6.0, 430.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.999896961846392, 442.385465732452]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1548.1, "minX": 1.61890008E12, "maxY": 2720736.0, "series": [{"data": [[1.6189026E12, 15266.3], [1.61890098E12, 15695.7], [1.61890062E12, 15774.8], [1.6189014E12, 15288.9], [1.61890302E12, 15537.5], [1.6189002E12, 14712.6], [1.618902E12, 14249.3], [1.61890116E12, 15481.0], [1.61890278E12, 15718.3], [1.61890044E12, 15627.9], [1.61890176E12, 15435.8], [1.61890158E12, 15650.5], [1.61890218E12, 15447.1], [1.61890056E12, 14384.9], [1.61890164E12, 15571.4], [1.61890224E12, 15718.3], [1.61890206E12, 14983.8], [1.61890266E12, 15537.5], [1.61890104E12, 15627.9], [1.61890182E12, 15786.1], [1.61890242E12, 15040.3], [1.6189008E12, 15390.6], [1.61890284E12, 15933.0], [1.61890122E12, 15707.0], [1.61890038E12, 15503.6], [1.6189023E12, 15390.6], [1.61890128E12, 15571.4], [1.6189029E12, 15514.9], [1.6189011E12, 15469.7], [1.6189005E12, 14825.6], [1.6189017E12, 15594.0], [1.61890086E12, 15435.8], [1.61890308E12, 14328.4], [1.61890146E12, 14591.916666666666], [1.61890014E12, 14757.8], [1.61890032E12, 15051.6], [1.61890188E12, 15729.6], [1.61890248E12, 15356.7], [1.61890134E12, 15322.8], [1.61890026E12, 13797.3], [1.61890194E12, 15673.1], [1.61890236E12, 15356.7], [1.61890074E12, 15797.4], [1.61890296E12, 15040.3], [1.61890008E12, 1548.1], [1.61890212E12, 14995.1], [1.61890272E12, 15616.6], [1.61890254E12, 15435.8], [1.61890092E12, 15288.9], [1.61890068E12, 15492.3], [1.61890152E12, 15616.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6189026E12, 2606889.6], [1.61890098E12, 2680214.4], [1.61890062E12, 2693721.6], [1.6189014E12, 2610748.8], [1.61890302E12, 2653200.0], [1.6189002E12, 2512339.2], [1.618902E12, 2433225.6], [1.61890116E12, 2643552.0], [1.61890278E12, 2684073.6], [1.61890044E12, 2668636.8], [1.61890176E12, 2635833.6], [1.61890158E12, 2672496.0], [1.61890218E12, 2637763.2], [1.61890056E12, 2456380.8], [1.61890164E12, 2658988.8], [1.61890224E12, 2684073.6], [1.61890206E12, 2558649.6], [1.61890266E12, 2653200.0], [1.61890104E12, 2668636.8], [1.61890182E12, 2695651.2], [1.61890242E12, 2568297.6], [1.6189008E12, 2628115.2], [1.61890284E12, 2720736.0], [1.61890122E12, 2682144.0], [1.61890038E12, 2647411.2], [1.6189023E12, 2628115.2], [1.61890128E12, 2658988.8], [1.6189029E12, 2649340.8], [1.6189011E12, 2641622.4], [1.6189005E12, 2531635.2], [1.6189017E12, 2662848.0], [1.61890086E12, 2635833.6], [1.61890308E12, 2446732.8], [1.61890146E12, 2493043.2], [1.61890014E12, 2520057.6], [1.61890032E12, 2570227.2], [1.61890188E12, 2686003.2], [1.61890248E12, 2622326.4], [1.61890134E12, 2616537.6], [1.61890026E12, 2356041.6], [1.61890194E12, 2676355.2], [1.61890236E12, 2622326.4], [1.61890074E12, 2697580.8], [1.61890296E12, 2568297.6], [1.61890008E12, 264355.2], [1.61890212E12, 2560579.2], [1.61890272E12, 2666707.2], [1.61890254E12, 2635833.6], [1.61890092E12, 2610748.8], [1.61890068E12, 2645481.6], [1.61890152E12, 2666707.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61890308E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 424.51276595744633, "minX": 1.61890008E12, "maxY": 726.8029197080291, "series": [{"data": [[1.6189026E12, 444.62768319763177], [1.61890098E12, 431.83153347732133], [1.61890062E12, 428.8646131805156], [1.6189014E12, 443.34368070953434], [1.61890302E12, 435.4378181818186], [1.6189002E12, 464.8671274961603], [1.618902E12, 477.888183980967], [1.61890116E12, 437.79562043795676], [1.61890278E12, 430.28396836808], [1.61890044E12, 433.16413593637077], [1.61890176E12, 438.9238653001464], [1.61890158E12, 434.18483754512596], [1.61890218E12, 438.4272128749083], [1.61890056E12, 471.5019638648861], [1.61890164E12, 434.4847605224964], [1.61890224E12, 431.8662832494604], [1.61890206E12, 450.78959276018134], [1.61890266E12, 436.3934545454548], [1.61890104E12, 433.86550976138847], [1.61890182E12, 429.56478167501814], [1.61890242E12, 450.1217129977457], [1.6189008E12, 440.07268722466927], [1.61890284E12, 424.51276595744633], [1.61890122E12, 432.6453237410071], [1.61890038E12, 437.9985422740532], [1.6189023E12, 440.78193832599055], [1.61890128E12, 434.08708272859224], [1.6189029E12, 436.5768390386018], [1.6189011E12, 438.78962746530357], [1.6189005E12, 458.00609756097623], [1.6189017E12, 435.1188405797105], [1.61890086E12, 440.289165446559], [1.61890308E12, 442.61041009463696], [1.61890146E12, 464.6044891640866], [1.61890014E12, 454.18453292496207], [1.61890032E12, 450.72597597597644], [1.61890188E12, 431.14870689655146], [1.61890248E12, 440.9896983075794], [1.61890134E12, 442.81415929203536], [1.61890026E12, 489.66994266994277], [1.61890194E12, 431.2552271088673], [1.61890236E12, 441.60117733627675], [1.61890074E12, 429.10944206008577], [1.61890296E12, 452.0555972952665], [1.61890008E12, 726.8029197080291], [1.61890212E12, 453.09042954031685], [1.61890272E12, 435.2604920405207], [1.61890254E12, 439.1266471449482], [1.61890092E12, 442.4338507021432], [1.61890068E12, 437.78336980306324], [1.61890152E12, 433.0781476121562]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61890308E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 424.508510638298, "minX": 1.61890008E12, "maxY": 726.7007299270072, "series": [{"data": [[1.6189026E12, 444.6247224278306], [1.61890098E12, 431.82937365010866], [1.61890062E12, 428.8610315186245], [1.6189014E12, 443.34294161123415], [1.61890302E12, 435.4356363636364], [1.6189002E12, 464.84946236559114], [1.618902E12, 477.8850118953216], [1.61890116E12, 437.7919708029198], [1.61890278E12, 430.2782171099926], [1.61890044E12, 433.15979754157615], [1.61890176E12, 438.91654465592967], [1.61890158E12, 434.18122743682255], [1.61890218E12, 438.4213606437459], [1.61890056E12, 471.49960722702286], [1.61890164E12, 434.47822931785197], [1.61890224E12, 431.8576563623283], [1.61890206E12, 450.786576168929], [1.61890266E12, 436.3927272727273], [1.61890104E12, 433.86261749819295], [1.61890182E12, 429.56478167501814], [1.61890242E12, 450.11945905334323], [1.6189008E12, 440.0668135095451], [1.61890284E12, 424.508510638298], [1.61890122E12, 432.6410071942444], [1.61890038E12, 437.99271137026193], [1.6189023E12, 440.77900146842865], [1.61890128E12, 434.08127721335234], [1.6189029E12, 436.57465404224274], [1.6189011E12, 438.78524470416414], [1.6189005E12, 458.0015243902439], [1.6189017E12, 435.1123188405794], [1.61890086E12, 440.2869692532941], [1.61890308E12, 442.6033123028391], [1.61890146E12, 464.59984520123845], [1.61890014E12, 454.1730474732009], [1.61890032E12, 450.71846846846887], [1.61890188E12, 431.14511494252866], [1.61890248E12, 440.98675496688713], [1.61890134E12, 442.8075221238945], [1.61890026E12, 489.65929565929594], [1.61890194E12, 431.24945926459924], [1.61890236E12, 441.59749816041204], [1.61890074E12, 429.10586552217524], [1.61890296E12, 452.0503380916605], [1.61890008E12, 726.7007299270072], [1.61890212E12, 453.0866616428037], [1.61890272E12, 435.2561505065126], [1.61890254E12, 439.12518301610504], [1.61890092E12, 442.4301552106425], [1.61890068E12, 437.78336980306324], [1.61890152E12, 433.07452966714925]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61890308E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.043664996420901936, "minX": 1.61890008E12, "maxY": 3.9854014598540135, "series": [{"data": [[1.6189026E12, 0.05181347150259056], [1.61890098E12, 0.06623470122390206], [1.61890062E12, 0.060888252148997145], [1.6189014E12, 0.0532150776053215], [1.61890302E12, 0.06763636363636366], [1.6189002E12, 0.0645161290322581], [1.618902E12, 0.07454401268834247], [1.61890116E12, 0.06204379562043795], [1.61890278E12, 0.05391804457225018], [1.61890044E12, 0.06796818510484448], [1.61890176E12, 0.07393850658857974], [1.61890158E12, 0.060649819494584874], [1.61890218E12, 0.058522311631309505], [1.61890056E12, 0.10919088766692849], [1.61890164E12, 0.067489114658926], [1.61890224E12, 0.04672897196261669], [1.61890206E12, 0.07164404223227758], [1.61890266E12, 0.04945454545454545], [1.61890104E12, 0.06001446131597974], [1.61890182E12, 0.043664996420901936], [1.61890242E12, 0.054094665664913666], [1.6189008E12, 0.05506607929515417], [1.61890284E12, 0.047517730496453844], [1.61890122E12, 0.05179856115107912], [1.61890038E12, 0.08236151603498547], [1.6189023E12, 0.055800293685756105], [1.61890128E12, 0.05805515239477505], [1.6189029E12, 0.04734158776402035], [1.6189011E12, 0.05843681519357191], [1.6189005E12, 0.07164634146341468], [1.6189017E12, 0.06521739130434784], [1.61890086E12, 0.0666178623718887], [1.61890308E12, 0.05835962145110409], [1.61890146E12, 0.06656346749226008], [1.61890014E12, 0.07197549770290967], [1.61890032E12, 0.05705705705705706], [1.61890188E12, 0.06034482758620692], [1.61890248E12, 0.05886681383370136], [1.61890134E12, 0.061946902654867235], [1.61890026E12, 0.09172809172809172], [1.61890194E12, 0.05118961788031729], [1.61890236E12, 0.0750551876379692], [1.61890074E12, 0.05364806866952786], [1.61890296E12, 0.07212622088655149], [1.61890008E12, 3.9854014598540135], [1.61890212E12, 0.05727204220045206], [1.61890272E12, 0.06439942112879898], [1.61890254E12, 0.05710102489019054], [1.61890092E12, 0.07538802660753881], [1.61890068E12, 0.06199854121079505], [1.61890152E12, 0.0680173661360347]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61890308E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 111.0, "minX": 1.61890008E12, "maxY": 6046.0, "series": [{"data": [[1.6189026E12, 2029.0], [1.61890098E12, 2122.0], [1.61890062E12, 1172.0], [1.6189014E12, 1416.0], [1.61890302E12, 1177.0], [1.6189002E12, 3064.0], [1.618902E12, 2548.0], [1.61890116E12, 2174.0], [1.61890278E12, 2980.0], [1.61890044E12, 1169.0], [1.61890176E12, 2141.0], [1.61890158E12, 1197.0], [1.61890218E12, 2092.0], [1.61890056E12, 4585.0], [1.61890164E12, 2049.0], [1.61890224E12, 2078.0], [1.61890206E12, 2098.0], [1.61890266E12, 2042.0], [1.61890104E12, 2128.0], [1.61890182E12, 1150.0], [1.61890242E12, 4066.0], [1.6189008E12, 2123.0], [1.61890284E12, 2088.0], [1.61890122E12, 1176.0], [1.61890038E12, 3124.0], [1.6189023E12, 2056.0], [1.61890128E12, 2051.0], [1.6189029E12, 1950.0], [1.6189011E12, 1219.0], [1.6189005E12, 2399.0], [1.6189017E12, 988.0], [1.61890086E12, 2019.0], [1.61890308E12, 3228.0], [1.61890146E12, 4278.0], [1.61890014E12, 3097.0], [1.61890032E12, 3016.0], [1.61890188E12, 2001.0], [1.61890248E12, 3084.0], [1.61890134E12, 2076.0], [1.61890026E12, 3281.0], [1.61890194E12, 3054.0], [1.61890236E12, 2168.0], [1.61890074E12, 2238.0], [1.61890296E12, 3038.0], [1.61890008E12, 6046.0], [1.61890212E12, 2207.0], [1.61890272E12, 2014.0], [1.61890254E12, 2069.0], [1.61890092E12, 2093.0], [1.61890068E12, 1501.0], [1.61890152E12, 2032.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6189026E12, 785.0], [1.61890098E12, 757.0], [1.61890062E12, 756.0], [1.6189014E12, 775.0], [1.61890302E12, 764.4000000000001], [1.6189002E12, 804.0], [1.618902E12, 818.8], [1.61890116E12, 765.0], [1.61890278E12, 750.0], [1.61890044E12, 759.0], [1.61890176E12, 766.0], [1.61890158E12, 762.0], [1.61890218E12, 769.0], [1.61890056E12, 778.6000000000001], [1.61890164E12, 753.0], [1.61890224E12, 751.0], [1.61890206E12, 794.0], [1.61890266E12, 758.4000000000001], [1.61890104E12, 753.6000000000001], [1.61890182E12, 756.2], [1.61890242E12, 790.0], [1.6189008E12, 771.0], [1.61890284E12, 743.0], [1.61890122E12, 754.0], [1.61890038E12, 759.0], [1.6189023E12, 771.0], [1.61890128E12, 764.0], [1.6189029E12, 766.0], [1.6189011E12, 769.0], [1.6189005E12, 785.0], [1.6189017E12, 763.0], [1.61890086E12, 780.0], [1.61890308E12, 773.0], [1.61890146E12, 756.8], [1.61890014E12, 808.0], [1.61890032E12, 791.0], [1.61890188E12, 745.0], [1.61890248E12, 775.0], [1.61890134E12, 771.0], [1.61890026E12, 812.8], [1.61890194E12, 744.0], [1.61890236E12, 770.0], [1.61890074E12, 745.0], [1.61890296E12, 788.0], [1.61890008E12, 961.6000000000021], [1.61890212E12, 795.0], [1.61890272E12, 757.0], [1.61890254E12, 769.0], [1.61890092E12, 779.6000000000001], [1.61890068E12, 761.0], [1.61890152E12, 750.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6189026E12, 900.44], [1.61890098E12, 871.6999999999994], [1.61890062E12, 897.1499999999999], [1.6189014E12, 927.9800000000005], [1.61890302E12, 849.24], [1.6189002E12, 1752.7000000000003], [1.618902E12, 1619.7599999999998], [1.61890116E12, 860.0], [1.61890278E12, 838.0799999999999], [1.61890044E12, 845.0], [1.61890176E12, 879.5899999999983], [1.61890158E12, 847.6800000000012], [1.61890218E12, 895.8399999999992], [1.61890056E12, 2094.8999999999996], [1.61890164E12, 894.8400000000001], [1.61890224E12, 864.0799999999999], [1.61890206E12, 1009.9500000000003], [1.61890266E12, 838.24], [1.61890104E12, 860.2000000000016], [1.61890182E12, 842.1399999999999], [1.61890242E12, 930.7200000000003], [1.6189008E12, 865.7399999999998], [1.61890284E12, 827.0], [1.61890122E12, 841.0], [1.61890038E12, 874.0499999999997], [1.6189023E12, 1054.1799999999985], [1.61890128E12, 850.8400000000001], [1.6189029E12, 855.5999999999999], [1.6189011E12, 918.4999999999998], [1.6189005E12, 1680.0499999999984], [1.6189017E12, 878.7100000000005], [1.61890086E12, 857.9899999999998], [1.61890308E12, 878.31], [1.61890146E12, 1010.039999999999], [1.61890014E12, 996.3700000000006], [1.61890032E12, 1337.5000000000182], [1.61890188E12, 860.0699999999999], [1.61890248E12, 868.0000000000005], [1.61890134E12, 863.4300000000001], [1.61890026E12, 2918.12], [1.61890194E12, 836.1199999999999], [1.61890236E12, 861.8000000000002], [1.61890074E12, 828.0], [1.61890296E12, 993.4400000000005], [1.61890008E12, 5442.940000000007], [1.61890212E12, 949.72], [1.61890272E12, 838.3600000000006], [1.61890254E12, 870.6399999999994], [1.61890092E12, 894.3800000000001], [1.61890068E12, 914.7599999999995], [1.61890152E12, 860.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6189026E12, 817.7999999999997], [1.61890098E12, 788.0], [1.61890062E12, 783.0], [1.6189014E12, 813.0], [1.61890302E12, 791.0], [1.6189002E12, 866.0], [1.618902E12, 900.0], [1.61890116E12, 799.45], [1.61890278E12, 782.0], [1.61890044E12, 785.8], [1.61890176E12, 791.2999999999997], [1.61890158E12, 789.7], [1.61890218E12, 808.1999999999998], [1.61890056E12, 826.3], [1.61890164E12, 788.0], [1.61890224E12, 780.0], [1.61890206E12, 842.6499999999999], [1.61890266E12, 781.0], [1.61890104E12, 786.8], [1.61890182E12, 788.0], [1.61890242E12, 830.7999999999997], [1.6189008E12, 801.5499999999997], [1.61890284E12, 772.45], [1.61890122E12, 776.0], [1.61890038E12, 789.3499999999999], [1.6189023E12, 812.0], [1.61890128E12, 790.0], [1.6189029E12, 784.0], [1.6189011E12, 810.0], [1.6189005E12, 859.0], [1.6189017E12, 792.0], [1.61890086E12, 805.6499999999999], [1.61890308E12, 804.0], [1.61890146E12, 802.0], [1.61890014E12, 856.6499999999999], [1.61890032E12, 825.6999999999998], [1.61890188E12, 775.3499999999999], [1.61890248E12, 802.0], [1.61890134E12, 798.0], [1.61890026E12, 903.0], [1.61890194E12, 767.5999999999999], [1.61890236E12, 798.0], [1.61890074E12, 781.05], [1.61890296E12, 843.5999999999995], [1.61890008E12, 4099.599999999999], [1.61890212E12, 835.5999999999999], [1.61890272E12, 788.8499999999999], [1.61890254E12, 792.6499999999999], [1.61890092E12, 809.0], [1.61890068E12, 796.0], [1.61890152E12, 780.8499999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6189026E12, 122.0], [1.61890098E12, 119.0], [1.61890062E12, 116.0], [1.6189014E12, 122.0], [1.61890302E12, 121.0], [1.6189002E12, 124.0], [1.618902E12, 123.0], [1.61890116E12, 121.0], [1.61890278E12, 123.0], [1.61890044E12, 125.0], [1.61890176E12, 111.0], [1.61890158E12, 121.0], [1.61890218E12, 119.0], [1.61890056E12, 118.0], [1.61890164E12, 124.0], [1.61890224E12, 123.0], [1.61890206E12, 121.0], [1.61890266E12, 121.0], [1.61890104E12, 119.0], [1.61890182E12, 117.0], [1.61890242E12, 117.0], [1.6189008E12, 121.0], [1.61890284E12, 119.0], [1.61890122E12, 124.0], [1.61890038E12, 121.0], [1.6189023E12, 119.0], [1.61890128E12, 118.0], [1.6189029E12, 121.0], [1.6189011E12, 123.0], [1.6189005E12, 123.0], [1.6189017E12, 115.0], [1.61890086E12, 119.0], [1.61890308E12, 122.0], [1.61890146E12, 124.0], [1.61890014E12, 126.0], [1.61890032E12, 117.0], [1.61890188E12, 124.0], [1.61890248E12, 120.0], [1.61890134E12, 122.0], [1.61890026E12, 117.0], [1.61890194E12, 126.0], [1.61890236E12, 120.0], [1.61890074E12, 123.0], [1.61890296E12, 123.0], [1.61890008E12, 134.0], [1.61890212E12, 123.0], [1.61890272E12, 122.0], [1.61890254E12, 117.0], [1.61890092E12, 117.0], [1.61890068E12, 126.0], [1.61890152E12, 121.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6189026E12, 407.0], [1.61890098E12, 402.0], [1.61890062E12, 368.0], [1.6189014E12, 415.0], [1.61890302E12, 416.0], [1.6189002E12, 409.5], [1.618902E12, 466.0], [1.61890116E12, 402.5], [1.61890278E12, 394.0], [1.61890044E12, 401.0], [1.61890176E12, 392.5], [1.61890158E12, 392.0], [1.61890218E12, 406.0], [1.61890056E12, 387.0], [1.61890164E12, 402.0], [1.61890224E12, 412.0], [1.61890206E12, 409.5], [1.61890266E12, 391.0], [1.61890104E12, 398.0], [1.61890182E12, 383.0], [1.61890242E12, 416.0], [1.6189008E12, 396.0], [1.61890284E12, 380.0], [1.61890122E12, 396.5], [1.61890038E12, 400.0], [1.6189023E12, 393.5], [1.61890128E12, 398.0], [1.6189029E12, 394.0], [1.6189011E12, 395.0], [1.6189005E12, 414.0], [1.6189017E12, 391.5], [1.61890086E12, 399.5], [1.61890308E12, 417.0], [1.61890146E12, 432.0], [1.61890014E12, 410.0], [1.61890032E12, 396.5], [1.61890188E12, 388.0], [1.61890248E12, 402.0], [1.61890134E12, 401.0], [1.61890026E12, 402.0], [1.61890194E12, 386.0], [1.61890236E12, 386.0], [1.61890074E12, 361.0], [1.61890296E12, 404.0], [1.61890008E12, 604.0], [1.61890212E12, 432.0], [1.61890272E12, 405.0], [1.61890254E12, 393.0], [1.61890092E12, 406.0], [1.61890068E12, 402.0], [1.61890152E12, 392.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61890308E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 167.0, "minX": 1.0, "maxY": 30006.0, "series": [{"data": [[33.0, 167.0], [32.0, 381.0], [4.0, 352.0], [5.0, 169.5], [6.0, 1813.0], [7.0, 1798.0], [8.0, 286.5], [10.0, 1086.5], [11.0, 711.0], [12.0, 683.5], [13.0, 200.0], [14.0, 713.0], [15.0, 428.5], [1.0, 430.0], [16.0, 596.5], [17.0, 591.0], [18.0, 548.5], [19.0, 602.5], [20.0, 462.0], [21.0, 414.5], [22.0, 411.0], [23.0, 396.5], [24.0, 397.0], [25.0, 389.0], [26.0, 357.5], [27.0, 385.0], [28.0, 186.5], [29.0, 186.0], [30.0, 169.5], [31.0, 407.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[21.0, 30006.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 167.0, "minX": 1.0, "maxY": 30006.0, "series": [{"data": [[33.0, 167.0], [32.0, 381.0], [4.0, 351.5], [5.0, 169.5], [6.0, 1813.0], [7.0, 1798.0], [8.0, 286.5], [10.0, 1086.5], [11.0, 711.0], [12.0, 683.5], [13.0, 200.0], [14.0, 713.0], [15.0, 428.5], [1.0, 427.0], [16.0, 596.5], [17.0, 590.5], [18.0, 548.5], [19.0, 602.5], [20.0, 462.0], [21.0, 414.5], [22.0, 411.0], [23.0, 396.5], [24.0, 397.0], [25.0, 389.0], [26.0, 357.5], [27.0, 385.0], [28.0, 186.5], [29.0, 186.0], [30.0, 169.5], [31.0, 407.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[21.0, 30006.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.45, "minX": 1.61890008E12, "maxY": 23.5, "series": [{"data": [[1.6189026E12, 22.516666666666666], [1.61890098E12, 23.15], [1.61890062E12, 23.266666666666666], [1.6189014E12, 22.55], [1.61890302E12, 22.916666666666668], [1.6189002E12, 21.7], [1.618902E12, 21.016666666666666], [1.61890116E12, 22.833333333333332], [1.61890278E12, 23.183333333333334], [1.61890044E12, 23.05], [1.61890176E12, 22.766666666666666], [1.61890158E12, 23.083333333333332], [1.61890218E12, 22.783333333333335], [1.61890056E12, 21.216666666666665], [1.61890164E12, 22.966666666666665], [1.61890224E12, 23.183333333333334], [1.61890206E12, 22.1], [1.61890266E12, 22.916666666666668], [1.61890104E12, 23.05], [1.61890182E12, 23.283333333333335], [1.61890242E12, 22.183333333333334], [1.6189008E12, 22.7], [1.61890284E12, 23.5], [1.61890122E12, 23.166666666666668], [1.61890038E12, 22.866666666666667], [1.6189023E12, 22.7], [1.61890128E12, 22.966666666666665], [1.6189029E12, 22.883333333333333], [1.6189011E12, 22.816666666666666], [1.6189005E12, 21.866666666666667], [1.6189017E12, 23.0], [1.61890086E12, 22.766666666666666], [1.61890308E12, 20.966666666666665], [1.61890146E12, 21.533333333333335], [1.61890014E12, 21.766666666666666], [1.61890032E12, 22.2], [1.61890188E12, 23.2], [1.61890248E12, 22.65], [1.61890134E12, 22.6], [1.61890026E12, 20.35], [1.61890194E12, 23.116666666666667], [1.61890236E12, 22.65], [1.61890074E12, 23.3], [1.61890296E12, 22.183333333333334], [1.61890008E12, 2.45], [1.61890212E12, 22.116666666666667], [1.61890272E12, 23.033333333333335], [1.61890254E12, 22.766666666666666], [1.61890092E12, 22.55], [1.61890068E12, 22.85], [1.61890152E12, 23.033333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61890308E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.61890008E12, "maxY": 23.5, "series": [{"data": [[1.6189026E12, 22.516666666666666], [1.61890098E12, 23.15], [1.61890062E12, 23.266666666666666], [1.6189014E12, 22.55], [1.61890302E12, 22.916666666666668], [1.6189002E12, 21.7], [1.618902E12, 21.016666666666666], [1.61890116E12, 22.833333333333332], [1.61890278E12, 23.183333333333334], [1.61890044E12, 23.05], [1.61890176E12, 22.766666666666666], [1.61890158E12, 23.083333333333332], [1.61890218E12, 22.783333333333335], [1.61890056E12, 21.216666666666665], [1.61890164E12, 22.966666666666665], [1.61890224E12, 23.183333333333334], [1.61890206E12, 22.1], [1.61890266E12, 22.916666666666668], [1.61890104E12, 23.05], [1.61890182E12, 23.283333333333335], [1.61890242E12, 22.183333333333334], [1.6189008E12, 22.7], [1.61890284E12, 23.5], [1.61890122E12, 23.166666666666668], [1.61890038E12, 22.866666666666667], [1.6189023E12, 22.7], [1.61890128E12, 22.966666666666665], [1.6189029E12, 22.883333333333333], [1.6189011E12, 22.816666666666666], [1.6189005E12, 21.866666666666667], [1.6189017E12, 23.0], [1.61890086E12, 22.766666666666666], [1.61890308E12, 21.133333333333333], [1.61890146E12, 21.516666666666666], [1.61890014E12, 21.766666666666666], [1.61890032E12, 22.2], [1.61890188E12, 23.2], [1.61890248E12, 22.65], [1.61890134E12, 22.6], [1.61890026E12, 20.35], [1.61890194E12, 23.116666666666667], [1.61890236E12, 22.65], [1.61890074E12, 23.3], [1.61890296E12, 22.183333333333334], [1.61890008E12, 2.283333333333333], [1.61890212E12, 22.116666666666667], [1.61890272E12, 23.033333333333335], [1.61890254E12, 22.766666666666666], [1.61890092E12, 22.55], [1.61890068E12, 22.85], [1.61890152E12, 23.033333333333335]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.61890146E12, 0.016666666666666666]], "isOverall": false, "label": "503", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61890308E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.61890008E12, "maxY": 23.5, "series": [{"data": [[1.6189026E12, 22.516666666666666], [1.61890098E12, 23.15], [1.61890062E12, 23.266666666666666], [1.6189014E12, 22.55], [1.61890302E12, 22.916666666666668], [1.6189002E12, 21.7], [1.618902E12, 21.016666666666666], [1.61890116E12, 22.833333333333332], [1.61890278E12, 23.183333333333334], [1.61890044E12, 23.05], [1.61890176E12, 22.766666666666666], [1.61890158E12, 23.083333333333332], [1.61890218E12, 22.783333333333335], [1.61890056E12, 21.216666666666665], [1.61890164E12, 22.966666666666665], [1.61890224E12, 23.183333333333334], [1.61890206E12, 22.1], [1.61890266E12, 22.916666666666668], [1.61890104E12, 23.05], [1.61890182E12, 23.283333333333335], [1.61890242E12, 22.183333333333334], [1.6189008E12, 22.7], [1.61890284E12, 23.5], [1.61890122E12, 23.166666666666668], [1.61890038E12, 22.866666666666667], [1.6189023E12, 22.7], [1.61890128E12, 22.966666666666665], [1.6189029E12, 22.883333333333333], [1.6189011E12, 22.816666666666666], [1.6189005E12, 21.866666666666667], [1.6189017E12, 23.0], [1.61890086E12, 22.766666666666666], [1.61890308E12, 21.133333333333333], [1.61890146E12, 21.516666666666666], [1.61890014E12, 21.766666666666666], [1.61890032E12, 22.2], [1.61890188E12, 23.2], [1.61890248E12, 22.65], [1.61890134E12, 22.6], [1.61890026E12, 20.35], [1.61890194E12, 23.116666666666667], [1.61890236E12, 22.65], [1.61890074E12, 23.3], [1.61890296E12, 22.183333333333334], [1.61890008E12, 2.283333333333333], [1.61890212E12, 22.116666666666667], [1.61890272E12, 23.033333333333335], [1.61890254E12, 22.766666666666666], [1.61890092E12, 22.55], [1.61890068E12, 22.85], [1.61890152E12, 23.033333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.61890146E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61890308E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.61890008E12, "maxY": 23.5, "series": [{"data": [[1.6189026E12, 22.516666666666666], [1.61890098E12, 23.15], [1.61890062E12, 23.266666666666666], [1.6189014E12, 22.55], [1.61890302E12, 22.916666666666668], [1.6189002E12, 21.7], [1.618902E12, 21.016666666666666], [1.61890116E12, 22.833333333333332], [1.61890278E12, 23.183333333333334], [1.61890044E12, 23.05], [1.61890176E12, 22.766666666666666], [1.61890158E12, 23.083333333333332], [1.61890218E12, 22.783333333333335], [1.61890056E12, 21.216666666666665], [1.61890164E12, 22.966666666666665], [1.61890224E12, 23.183333333333334], [1.61890206E12, 22.1], [1.61890266E12, 22.916666666666668], [1.61890104E12, 23.05], [1.61890182E12, 23.283333333333335], [1.61890242E12, 22.183333333333334], [1.6189008E12, 22.7], [1.61890284E12, 23.5], [1.61890122E12, 23.166666666666668], [1.61890038E12, 22.866666666666667], [1.6189023E12, 22.7], [1.61890128E12, 22.966666666666665], [1.6189029E12, 22.883333333333333], [1.6189011E12, 22.816666666666666], [1.6189005E12, 21.866666666666667], [1.6189017E12, 23.0], [1.61890086E12, 22.766666666666666], [1.61890308E12, 21.133333333333333], [1.61890146E12, 21.516666666666666], [1.61890014E12, 21.766666666666666], [1.61890032E12, 22.2], [1.61890188E12, 23.2], [1.61890248E12, 22.65], [1.61890134E12, 22.6], [1.61890026E12, 20.35], [1.61890194E12, 23.116666666666667], [1.61890236E12, 22.65], [1.61890074E12, 23.3], [1.61890296E12, 22.183333333333334], [1.61890008E12, 2.283333333333333], [1.61890212E12, 22.116666666666667], [1.61890272E12, 23.033333333333335], [1.61890254E12, 22.766666666666666], [1.61890092E12, 22.55], [1.61890068E12, 22.85], [1.61890152E12, 23.033333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.61890146E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61890308E12, "title": "Total Transactions Per Second"}},
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

