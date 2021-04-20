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
        data: {"result": {"minY": 123.0, "minX": 0.0, "maxY": 6437.0, "series": [{"data": [[0.0, 123.0], [0.1, 132.0], [0.2, 133.0], [0.3, 134.0], [0.4, 134.0], [0.5, 135.0], [0.6, 135.0], [0.7, 136.0], [0.8, 136.0], [0.9, 136.0], [1.0, 137.0], [1.1, 137.0], [1.2, 137.0], [1.3, 138.0], [1.4, 138.0], [1.5, 138.0], [1.6, 138.0], [1.7, 139.0], [1.8, 139.0], [1.9, 139.0], [2.0, 139.0], [2.1, 140.0], [2.2, 140.0], [2.3, 140.0], [2.4, 140.0], [2.5, 140.0], [2.6, 140.0], [2.7, 140.0], [2.8, 141.0], [2.9, 141.0], [3.0, 141.0], [3.1, 141.0], [3.2, 141.0], [3.3, 141.0], [3.4, 141.0], [3.5, 142.0], [3.6, 142.0], [3.7, 142.0], [3.8, 142.0], [3.9, 142.0], [4.0, 142.0], [4.1, 143.0], [4.2, 143.0], [4.3, 143.0], [4.4, 143.0], [4.5, 143.0], [4.6, 143.0], [4.7, 143.0], [4.8, 143.0], [4.9, 143.0], [5.0, 143.0], [5.1, 143.0], [5.2, 144.0], [5.3, 144.0], [5.4, 144.0], [5.5, 144.0], [5.6, 144.0], [5.7, 144.0], [5.8, 144.0], [5.9, 144.0], [6.0, 144.0], [6.1, 144.0], [6.2, 144.0], [6.3, 145.0], [6.4, 145.0], [6.5, 145.0], [6.6, 145.0], [6.7, 145.0], [6.8, 145.0], [6.9, 145.0], [7.0, 145.0], [7.1, 145.0], [7.2, 145.0], [7.3, 145.0], [7.4, 146.0], [7.5, 146.0], [7.6, 146.0], [7.7, 146.0], [7.8, 146.0], [7.9, 146.0], [8.0, 146.0], [8.1, 146.0], [8.2, 147.0], [8.3, 147.0], [8.4, 147.0], [8.5, 147.0], [8.6, 147.0], [8.7, 147.0], [8.8, 147.0], [8.9, 147.0], [9.0, 147.0], [9.1, 147.0], [9.2, 147.0], [9.3, 147.0], [9.4, 148.0], [9.5, 148.0], [9.6, 148.0], [9.7, 148.0], [9.8, 148.0], [9.9, 148.0], [10.0, 148.0], [10.1, 148.0], [10.2, 148.0], [10.3, 148.0], [10.4, 148.0], [10.5, 148.0], [10.6, 149.0], [10.7, 149.0], [10.8, 149.0], [10.9, 149.0], [11.0, 149.0], [11.1, 149.0], [11.2, 149.0], [11.3, 149.0], [11.4, 149.0], [11.5, 149.0], [11.6, 149.0], [11.7, 149.0], [11.8, 150.0], [11.9, 150.0], [12.0, 150.0], [12.1, 150.0], [12.2, 150.0], [12.3, 150.0], [12.4, 150.0], [12.5, 150.0], [12.6, 150.0], [12.7, 150.0], [12.8, 150.0], [12.9, 150.0], [13.0, 150.0], [13.1, 150.0], [13.2, 150.0], [13.3, 151.0], [13.4, 151.0], [13.5, 151.0], [13.6, 151.0], [13.7, 151.0], [13.8, 151.0], [13.9, 151.0], [14.0, 151.0], [14.1, 151.0], [14.2, 151.0], [14.3, 151.0], [14.4, 151.0], [14.5, 151.0], [14.6, 152.0], [14.7, 152.0], [14.8, 152.0], [14.9, 152.0], [15.0, 152.0], [15.1, 152.0], [15.2, 152.0], [15.3, 152.0], [15.4, 152.0], [15.5, 152.0], [15.6, 152.0], [15.7, 153.0], [15.8, 153.0], [15.9, 153.0], [16.0, 153.0], [16.1, 153.0], [16.2, 153.0], [16.3, 153.0], [16.4, 153.0], [16.5, 153.0], [16.6, 153.0], [16.7, 153.0], [16.8, 153.0], [16.9, 154.0], [17.0, 154.0], [17.1, 154.0], [17.2, 154.0], [17.3, 154.0], [17.4, 154.0], [17.5, 154.0], [17.6, 154.0], [17.7, 154.0], [17.8, 154.0], [17.9, 154.0], [18.0, 154.0], [18.1, 154.0], [18.2, 154.0], [18.3, 154.0], [18.4, 154.0], [18.5, 155.0], [18.6, 155.0], [18.7, 155.0], [18.8, 155.0], [18.9, 155.0], [19.0, 155.0], [19.1, 155.0], [19.2, 155.0], [19.3, 155.0], [19.4, 155.0], [19.5, 155.0], [19.6, 155.0], [19.7, 156.0], [19.8, 156.0], [19.9, 156.0], [20.0, 156.0], [20.1, 156.0], [20.2, 156.0], [20.3, 156.0], [20.4, 156.0], [20.5, 156.0], [20.6, 156.0], [20.7, 156.0], [20.8, 156.0], [20.9, 156.0], [21.0, 156.0], [21.1, 156.0], [21.2, 156.0], [21.3, 156.0], [21.4, 157.0], [21.5, 157.0], [21.6, 157.0], [21.7, 157.0], [21.8, 157.0], [21.9, 157.0], [22.0, 157.0], [22.1, 157.0], [22.2, 157.0], [22.3, 157.0], [22.4, 157.0], [22.5, 157.0], [22.6, 157.0], [22.7, 158.0], [22.8, 158.0], [22.9, 158.0], [23.0, 158.0], [23.1, 158.0], [23.2, 158.0], [23.3, 158.0], [23.4, 158.0], [23.5, 158.0], [23.6, 158.0], [23.7, 158.0], [23.8, 158.0], [23.9, 158.0], [24.0, 159.0], [24.1, 159.0], [24.2, 159.0], [24.3, 159.0], [24.4, 159.0], [24.5, 159.0], [24.6, 159.0], [24.7, 159.0], [24.8, 159.0], [24.9, 159.0], [25.0, 159.0], [25.1, 159.0], [25.2, 159.0], [25.3, 159.0], [25.4, 159.0], [25.5, 159.0], [25.6, 159.0], [25.7, 159.0], [25.8, 160.0], [25.9, 160.0], [26.0, 160.0], [26.1, 160.0], [26.2, 160.0], [26.3, 160.0], [26.4, 160.0], [26.5, 160.0], [26.6, 160.0], [26.7, 160.0], [26.8, 160.0], [26.9, 160.0], [27.0, 160.0], [27.1, 161.0], [27.2, 161.0], [27.3, 161.0], [27.4, 161.0], [27.5, 161.0], [27.6, 161.0], [27.7, 161.0], [27.8, 161.0], [27.9, 161.0], [28.0, 161.0], [28.1, 161.0], [28.2, 162.0], [28.3, 162.0], [28.4, 162.0], [28.5, 162.0], [28.6, 162.0], [28.7, 162.0], [28.8, 162.0], [28.9, 162.0], [29.0, 162.0], [29.1, 162.0], [29.2, 162.0], [29.3, 162.0], [29.4, 162.0], [29.5, 163.0], [29.6, 163.0], [29.7, 163.0], [29.8, 163.0], [29.9, 163.0], [30.0, 163.0], [30.1, 163.0], [30.2, 163.0], [30.3, 163.0], [30.4, 163.0], [30.5, 163.0], [30.6, 163.0], [30.7, 164.0], [30.8, 164.0], [30.9, 164.0], [31.0, 164.0], [31.1, 164.0], [31.2, 164.0], [31.3, 164.0], [31.4, 164.0], [31.5, 164.0], [31.6, 164.0], [31.7, 164.0], [31.8, 164.0], [31.9, 164.0], [32.0, 164.0], [32.1, 165.0], [32.2, 165.0], [32.3, 165.0], [32.4, 165.0], [32.5, 165.0], [32.6, 165.0], [32.7, 165.0], [32.8, 165.0], [32.9, 165.0], [33.0, 165.0], [33.1, 165.0], [33.2, 165.0], [33.3, 165.0], [33.4, 166.0], [33.5, 166.0], [33.6, 166.0], [33.7, 166.0], [33.8, 166.0], [33.9, 166.0], [34.0, 166.0], [34.1, 166.0], [34.2, 166.0], [34.3, 166.0], [34.4, 166.0], [34.5, 167.0], [34.6, 167.0], [34.7, 167.0], [34.8, 167.0], [34.9, 167.0], [35.0, 167.0], [35.1, 167.0], [35.2, 167.0], [35.3, 167.0], [35.4, 167.0], [35.5, 167.0], [35.6, 167.0], [35.7, 167.0], [35.8, 168.0], [35.9, 168.0], [36.0, 168.0], [36.1, 168.0], [36.2, 168.0], [36.3, 168.0], [36.4, 168.0], [36.5, 168.0], [36.6, 168.0], [36.7, 168.0], [36.8, 169.0], [36.9, 169.0], [37.0, 169.0], [37.1, 169.0], [37.2, 169.0], [37.3, 169.0], [37.4, 169.0], [37.5, 169.0], [37.6, 169.0], [37.7, 169.0], [37.8, 170.0], [37.9, 170.0], [38.0, 170.0], [38.1, 170.0], [38.2, 170.0], [38.3, 170.0], [38.4, 170.0], [38.5, 170.0], [38.6, 171.0], [38.7, 171.0], [38.8, 171.0], [38.9, 171.0], [39.0, 171.0], [39.1, 171.0], [39.2, 171.0], [39.3, 172.0], [39.4, 172.0], [39.5, 172.0], [39.6, 172.0], [39.7, 172.0], [39.8, 172.0], [39.9, 172.0], [40.0, 172.0], [40.1, 172.0], [40.2, 173.0], [40.3, 173.0], [40.4, 173.0], [40.5, 173.0], [40.6, 173.0], [40.7, 173.0], [40.8, 173.0], [40.9, 173.0], [41.0, 173.0], [41.1, 174.0], [41.2, 174.0], [41.3, 174.0], [41.4, 174.0], [41.5, 174.0], [41.6, 174.0], [41.7, 174.0], [41.8, 174.0], [41.9, 175.0], [42.0, 175.0], [42.1, 175.0], [42.2, 175.0], [42.3, 175.0], [42.4, 176.0], [42.5, 176.0], [42.6, 176.0], [42.7, 176.0], [42.8, 176.0], [42.9, 177.0], [43.0, 177.0], [43.1, 177.0], [43.2, 177.0], [43.3, 177.0], [43.4, 177.0], [43.5, 177.0], [43.6, 178.0], [43.7, 178.0], [43.8, 178.0], [43.9, 178.0], [44.0, 179.0], [44.1, 179.0], [44.2, 179.0], [44.3, 179.0], [44.4, 180.0], [44.5, 180.0], [44.6, 180.0], [44.7, 181.0], [44.8, 181.0], [44.9, 181.0], [45.0, 182.0], [45.1, 182.0], [45.2, 182.0], [45.3, 182.0], [45.4, 183.0], [45.5, 183.0], [45.6, 184.0], [45.7, 184.0], [45.8, 185.0], [45.9, 185.0], [46.0, 186.0], [46.1, 186.0], [46.2, 187.0], [46.3, 187.0], [46.4, 188.0], [46.5, 189.0], [46.6, 189.0], [46.7, 190.0], [46.8, 190.0], [46.9, 191.0], [47.0, 191.0], [47.1, 193.0], [47.2, 193.0], [47.3, 195.0], [47.4, 195.0], [47.5, 196.0], [47.6, 197.0], [47.7, 198.0], [47.8, 199.0], [47.9, 200.0], [48.0, 201.0], [48.1, 203.0], [48.2, 204.0], [48.3, 205.0], [48.4, 207.0], [48.5, 208.0], [48.6, 213.0], [48.7, 215.0], [48.8, 218.0], [48.9, 224.0], [49.0, 228.0], [49.1, 232.0], [49.2, 240.0], [49.3, 350.0], [49.4, 360.0], [49.5, 382.0], [49.6, 394.0], [49.7, 402.0], [49.8, 406.0], [49.9, 409.0], [50.0, 418.0], [50.1, 431.0], [50.2, 440.0], [50.3, 496.0], [50.4, 609.0], [50.5, 623.0], [50.6, 626.0], [50.7, 628.0], [50.8, 629.0], [50.9, 630.0], [51.0, 632.0], [51.1, 632.0], [51.2, 633.0], [51.3, 635.0], [51.4, 636.0], [51.5, 638.0], [51.6, 639.0], [51.7, 640.0], [51.8, 640.0], [51.9, 641.0], [52.0, 642.0], [52.1, 642.0], [52.2, 643.0], [52.3, 644.0], [52.4, 644.0], [52.5, 645.0], [52.6, 646.0], [52.7, 646.0], [52.8, 646.0], [52.9, 647.0], [53.0, 648.0], [53.1, 649.0], [53.2, 649.0], [53.3, 650.0], [53.4, 650.0], [53.5, 651.0], [53.6, 651.0], [53.7, 652.0], [53.8, 653.0], [53.9, 653.0], [54.0, 654.0], [54.1, 654.0], [54.2, 655.0], [54.3, 655.0], [54.4, 656.0], [54.5, 657.0], [54.6, 657.0], [54.7, 658.0], [54.8, 658.0], [54.9, 660.0], [55.0, 660.0], [55.1, 661.0], [55.2, 662.0], [55.3, 662.0], [55.4, 663.0], [55.5, 664.0], [55.6, 665.0], [55.7, 665.0], [55.8, 665.0], [55.9, 666.0], [56.0, 666.0], [56.1, 668.0], [56.2, 668.0], [56.3, 669.0], [56.4, 669.0], [56.5, 669.0], [56.6, 670.0], [56.7, 671.0], [56.8, 671.0], [56.9, 672.0], [57.0, 672.0], [57.1, 673.0], [57.2, 674.0], [57.3, 674.0], [57.4, 675.0], [57.5, 675.0], [57.6, 676.0], [57.7, 676.0], [57.8, 677.0], [57.9, 678.0], [58.0, 678.0], [58.1, 678.0], [58.2, 679.0], [58.3, 680.0], [58.4, 680.0], [58.5, 681.0], [58.6, 681.0], [58.7, 682.0], [58.8, 682.0], [58.9, 682.0], [59.0, 683.0], [59.1, 683.0], [59.2, 683.0], [59.3, 684.0], [59.4, 684.0], [59.5, 684.0], [59.6, 685.0], [59.7, 685.0], [59.8, 685.0], [59.9, 685.0], [60.0, 686.0], [60.1, 686.0], [60.2, 686.0], [60.3, 686.0], [60.4, 686.0], [60.5, 687.0], [60.6, 687.0], [60.7, 687.0], [60.8, 687.0], [60.9, 688.0], [61.0, 688.0], [61.1, 688.0], [61.2, 689.0], [61.3, 689.0], [61.4, 689.0], [61.5, 690.0], [61.6, 690.0], [61.7, 690.0], [61.8, 690.0], [61.9, 691.0], [62.0, 691.0], [62.1, 691.0], [62.2, 692.0], [62.3, 692.0], [62.4, 692.0], [62.5, 692.0], [62.6, 693.0], [62.7, 693.0], [62.8, 693.0], [62.9, 694.0], [63.0, 694.0], [63.1, 694.0], [63.2, 694.0], [63.3, 694.0], [63.4, 694.0], [63.5, 695.0], [63.6, 695.0], [63.7, 695.0], [63.8, 695.0], [63.9, 696.0], [64.0, 696.0], [64.1, 696.0], [64.2, 697.0], [64.3, 697.0], [64.4, 697.0], [64.5, 697.0], [64.6, 697.0], [64.7, 698.0], [64.8, 698.0], [64.9, 698.0], [65.0, 698.0], [65.1, 699.0], [65.2, 699.0], [65.3, 699.0], [65.4, 699.0], [65.5, 700.0], [65.6, 700.0], [65.7, 700.0], [65.8, 700.0], [65.9, 701.0], [66.0, 701.0], [66.1, 701.0], [66.2, 702.0], [66.3, 702.0], [66.4, 702.0], [66.5, 702.0], [66.6, 702.0], [66.7, 703.0], [66.8, 703.0], [66.9, 703.0], [67.0, 703.0], [67.1, 703.0], [67.2, 704.0], [67.3, 704.0], [67.4, 705.0], [67.5, 705.0], [67.6, 705.0], [67.7, 705.0], [67.8, 706.0], [67.9, 706.0], [68.0, 706.0], [68.1, 706.0], [68.2, 706.0], [68.3, 707.0], [68.4, 707.0], [68.5, 707.0], [68.6, 707.0], [68.7, 707.0], [68.8, 708.0], [68.9, 708.0], [69.0, 708.0], [69.1, 708.0], [69.2, 709.0], [69.3, 709.0], [69.4, 709.0], [69.5, 709.0], [69.6, 709.0], [69.7, 710.0], [69.8, 710.0], [69.9, 710.0], [70.0, 710.0], [70.1, 711.0], [70.2, 711.0], [70.3, 711.0], [70.4, 711.0], [70.5, 712.0], [70.6, 712.0], [70.7, 712.0], [70.8, 712.0], [70.9, 712.0], [71.0, 713.0], [71.1, 713.0], [71.2, 713.0], [71.3, 713.0], [71.4, 714.0], [71.5, 714.0], [71.6, 714.0], [71.7, 714.0], [71.8, 715.0], [71.9, 715.0], [72.0, 715.0], [72.1, 715.0], [72.2, 716.0], [72.3, 716.0], [72.4, 716.0], [72.5, 716.0], [72.6, 716.0], [72.7, 716.0], [72.8, 717.0], [72.9, 717.0], [73.0, 717.0], [73.1, 717.0], [73.2, 718.0], [73.3, 718.0], [73.4, 718.0], [73.5, 719.0], [73.6, 719.0], [73.7, 719.0], [73.8, 719.0], [73.9, 720.0], [74.0, 720.0], [74.1, 720.0], [74.2, 721.0], [74.3, 721.0], [74.4, 721.0], [74.5, 721.0], [74.6, 721.0], [74.7, 722.0], [74.8, 722.0], [74.9, 722.0], [75.0, 722.0], [75.1, 723.0], [75.2, 723.0], [75.3, 724.0], [75.4, 724.0], [75.5, 724.0], [75.6, 724.0], [75.7, 725.0], [75.8, 725.0], [75.9, 725.0], [76.0, 725.0], [76.1, 725.0], [76.2, 726.0], [76.3, 726.0], [76.4, 726.0], [76.5, 726.0], [76.6, 727.0], [76.7, 727.0], [76.8, 727.0], [76.9, 727.0], [77.0, 728.0], [77.1, 728.0], [77.2, 728.0], [77.3, 729.0], [77.4, 729.0], [77.5, 729.0], [77.6, 730.0], [77.7, 730.0], [77.8, 730.0], [77.9, 730.0], [78.0, 731.0], [78.1, 731.0], [78.2, 731.0], [78.3, 732.0], [78.4, 732.0], [78.5, 732.0], [78.6, 733.0], [78.7, 733.0], [78.8, 733.0], [78.9, 734.0], [79.0, 734.0], [79.1, 734.0], [79.2, 734.0], [79.3, 735.0], [79.4, 735.0], [79.5, 735.0], [79.6, 736.0], [79.7, 736.0], [79.8, 736.0], [79.9, 736.0], [80.0, 737.0], [80.1, 737.0], [80.2, 737.0], [80.3, 737.0], [80.4, 737.0], [80.5, 737.0], [80.6, 738.0], [80.7, 738.0], [80.8, 738.0], [80.9, 738.0], [81.0, 739.0], [81.1, 739.0], [81.2, 739.0], [81.3, 739.0], [81.4, 740.0], [81.5, 740.0], [81.6, 740.0], [81.7, 741.0], [81.8, 741.0], [81.9, 741.0], [82.0, 741.0], [82.1, 741.0], [82.2, 742.0], [82.3, 742.0], [82.4, 742.0], [82.5, 743.0], [82.6, 743.0], [82.7, 743.0], [82.8, 743.0], [82.9, 744.0], [83.0, 744.0], [83.1, 744.0], [83.2, 745.0], [83.3, 745.0], [83.4, 745.0], [83.5, 745.0], [83.6, 746.0], [83.7, 746.0], [83.8, 746.0], [83.9, 746.0], [84.0, 746.0], [84.1, 747.0], [84.2, 747.0], [84.3, 747.0], [84.4, 748.0], [84.5, 748.0], [84.6, 748.0], [84.7, 749.0], [84.8, 749.0], [84.9, 749.0], [85.0, 749.0], [85.1, 750.0], [85.2, 750.0], [85.3, 750.0], [85.4, 750.0], [85.5, 751.0], [85.6, 751.0], [85.7, 752.0], [85.8, 752.0], [85.9, 752.0], [86.0, 753.0], [86.1, 753.0], [86.2, 753.0], [86.3, 753.0], [86.4, 754.0], [86.5, 754.0], [86.6, 754.0], [86.7, 755.0], [86.8, 755.0], [86.9, 755.0], [87.0, 756.0], [87.1, 756.0], [87.2, 756.0], [87.3, 757.0], [87.4, 757.0], [87.5, 757.0], [87.6, 757.0], [87.7, 758.0], [87.8, 758.0], [87.9, 758.0], [88.0, 759.0], [88.1, 759.0], [88.2, 759.0], [88.3, 760.0], [88.4, 760.0], [88.5, 760.0], [88.6, 761.0], [88.7, 761.0], [88.8, 761.0], [88.9, 762.0], [89.0, 762.0], [89.1, 762.0], [89.2, 763.0], [89.3, 763.0], [89.4, 764.0], [89.5, 764.0], [89.6, 764.0], [89.7, 764.0], [89.8, 765.0], [89.9, 765.0], [90.0, 766.0], [90.1, 766.0], [90.2, 766.0], [90.3, 767.0], [90.4, 767.0], [90.5, 767.0], [90.6, 768.0], [90.7, 768.0], [90.8, 768.0], [90.9, 769.0], [91.0, 769.0], [91.1, 770.0], [91.2, 770.0], [91.3, 771.0], [91.4, 771.0], [91.5, 772.0], [91.6, 772.0], [91.7, 772.0], [91.8, 772.0], [91.9, 773.0], [92.0, 774.0], [92.1, 774.0], [92.2, 775.0], [92.3, 775.0], [92.4, 776.0], [92.5, 776.0], [92.6, 777.0], [92.7, 777.0], [92.8, 778.0], [92.9, 778.0], [93.0, 779.0], [93.1, 780.0], [93.2, 780.0], [93.3, 781.0], [93.4, 781.0], [93.5, 782.0], [93.6, 783.0], [93.7, 783.0], [93.8, 784.0], [93.9, 784.0], [94.0, 785.0], [94.1, 786.0], [94.2, 786.0], [94.3, 787.0], [94.4, 787.0], [94.5, 788.0], [94.6, 788.0], [94.7, 788.0], [94.8, 790.0], [94.9, 790.0], [95.0, 791.0], [95.1, 792.0], [95.2, 792.0], [95.3, 793.0], [95.4, 793.0], [95.5, 794.0], [95.6, 795.0], [95.7, 796.0], [95.8, 796.0], [95.9, 798.0], [96.0, 799.0], [96.1, 800.0], [96.2, 801.0], [96.3, 801.0], [96.4, 802.0], [96.5, 803.0], [96.6, 805.0], [96.7, 805.0], [96.8, 807.0], [96.9, 808.0], [97.0, 809.0], [97.1, 810.0], [97.2, 811.0], [97.3, 812.0], [97.4, 814.0], [97.5, 815.0], [97.6, 817.0], [97.7, 817.0], [97.8, 819.0], [97.9, 822.0], [98.0, 826.0], [98.1, 828.0], [98.2, 830.0], [98.3, 832.0], [98.4, 836.0], [98.5, 839.0], [98.6, 841.0], [98.7, 847.0], [98.8, 851.0], [98.9, 855.0], [99.0, 860.0], [99.1, 868.0], [99.2, 881.0], [99.3, 897.0], [99.4, 913.0], [99.5, 936.0], [99.6, 1140.0], [99.7, 1172.0], [99.8, 1183.0], [99.9, 1223.0], [100.0, 6437.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 2778.0, "series": [{"data": [[600.0, 872.0], [700.0, 1778.0], [3000.0, 1.0], [200.0, 84.0], [800.0, 192.0], [3200.0, 1.0], [900.0, 13.0], [1000.0, 3.0], [1100.0, 15.0], [300.0, 23.0], [1200.0, 4.0], [1400.0, 1.0], [6400.0, 1.0], [100.0, 2778.0], [400.0, 38.0], [1600.0, 1.0], [500.0, 5.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2923.0, "series": [{"data": [[0.0, 2923.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2883.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 4.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.6188975E12, "maxY": 1.0, "series": [{"data": [[1.6188996E12, 1.0], [1.61889768E12, 1.0], [1.6188993E12, 1.0], [1.618899E12, 1.0], [1.6188987E12, 1.0], [1.61889858E12, 1.0], [1.61889888E12, 1.0], [1.61889798E12, 1.0], [1.61889828E12, 1.0], [1.6188999E12, 1.0], [1.61889912E12, 1.0], [1.61889882E12, 1.0], [1.61889822E12, 1.0], [1.61889852E12, 1.0], [1.6188981E12, 1.0], [1.6188984E12, 1.0], [1.61890002E12, 1.0], [1.61889972E12, 1.0], [1.6188975E12, 1.0], [1.6188978E12, 1.0], [1.61889942E12, 1.0], [1.61889834E12, 1.0], [1.61889864E12, 1.0], [1.61889774E12, 1.0], [1.61889996E12, 1.0], [1.61889804E12, 1.0], [1.61889966E12, 1.0], [1.61889762E12, 1.0], [1.61889984E12, 1.0], [1.61889792E12, 1.0], [1.61889954E12, 1.0], [1.61889924E12, 1.0], [1.61889894E12, 1.0], [1.61889786E12, 1.0], [1.61890008E12, 1.0], [1.61889816E12, 1.0], [1.61889978E12, 1.0], [1.61889948E12, 1.0], [1.61889756E12, 1.0], [1.61889918E12, 1.0], [1.61889936E12, 1.0], [1.61889906E12, 1.0], [1.61889846E12, 1.0], [1.61889876E12, 1.0]], "isOverall": false, "label": "kinesis", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61890008E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 447.80499139414746, "minX": 1.0, "maxY": 447.80499139414746, "series": [{"data": [[1.0, 447.80499139414746]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 447.80499139414746]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 870.1, "minX": 1.6188975E12, "maxY": 268214.4, "series": [{"data": [[1.6188996E12, 1514.2], [1.61889768E12, 1525.5], [1.6188993E12, 1491.6], [1.618899E12, 1469.0], [1.6188987E12, 1423.8], [1.61889858E12, 1502.9], [1.61889888E12, 1536.8], [1.61889798E12, 1559.4], [1.61889828E12, 1536.8], [1.6188999E12, 1435.1], [1.61889912E12, 1559.4], [1.61889882E12, 1536.8], [1.61889822E12, 1559.4], [1.61889852E12, 1536.8], [1.6188981E12, 1536.8], [1.6188984E12, 1457.7], [1.61890002E12, 1525.5], [1.61889972E12, 1446.4], [1.6188975E12, 870.1], [1.6188978E12, 1525.5], [1.61889942E12, 1525.5], [1.61889834E12, 1570.7], [1.61889864E12, 1559.4], [1.61889774E12, 1559.4], [1.61889996E12, 1548.1], [1.61889804E12, 1536.8], [1.61889966E12, 1480.3], [1.61889762E12, 1536.8], [1.61889984E12, 1525.5], [1.61889792E12, 1570.7], [1.61889954E12, 1480.3], [1.61889924E12, 1536.8], [1.61889894E12, 1502.9], [1.61889786E12, 1548.1], [1.61890008E12, 1062.2], [1.61889816E12, 1570.7], [1.61889978E12, 1435.1], [1.61889948E12, 1514.2], [1.61889756E12, 1525.5], [1.61889918E12, 1502.9], [1.61889936E12, 1491.6], [1.61889906E12, 1514.2], [1.61889846E12, 1491.6], [1.61889876E12, 1514.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6188996E12, 258566.4], [1.61889768E12, 260496.0], [1.6188993E12, 254707.2], [1.618899E12, 250848.0], [1.6188987E12, 243129.6], [1.61889858E12, 256636.8], [1.61889888E12, 262425.6], [1.61889798E12, 266284.8], [1.61889828E12, 262425.6], [1.6188999E12, 245059.2], [1.61889912E12, 266284.8], [1.61889882E12, 262425.6], [1.61889822E12, 266284.8], [1.61889852E12, 262425.6], [1.6188981E12, 262425.6], [1.6188984E12, 248918.4], [1.61890002E12, 260496.0], [1.61889972E12, 246988.8], [1.6188975E12, 148579.2], [1.6188978E12, 260496.0], [1.61889942E12, 260496.0], [1.61889834E12, 268214.4], [1.61889864E12, 266284.8], [1.61889774E12, 266284.8], [1.61889996E12, 264355.2], [1.61889804E12, 262425.6], [1.61889966E12, 252777.6], [1.61889762E12, 262425.6], [1.61889984E12, 260496.0], [1.61889792E12, 268214.4], [1.61889954E12, 252777.6], [1.61889924E12, 262425.6], [1.61889894E12, 256636.8], [1.61889786E12, 264355.2], [1.61890008E12, 181382.4], [1.61889816E12, 268214.4], [1.61889978E12, 245059.2], [1.61889948E12, 258566.4], [1.61889756E12, 260496.0], [1.61889918E12, 256636.8], [1.61889936E12, 254707.2], [1.61889906E12, 258566.4], [1.61889846E12, 254707.2], [1.61889876E12, 258566.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61890008E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 430.51079136690663, "minX": 1.6188975E12, "maxY": 521.5454545454545, "series": [{"data": [[1.6188996E12, 446.8059701492536], [1.61889768E12, 441.70370370370364], [1.6188993E12, 456.25757575757575], [1.618899E12, 459.4846153846153], [1.6188987E12, 471.6904761904762], [1.61889858E12, 447.7518796992481], [1.61889888E12, 444.0735294117648], [1.61889798E12, 432.3188405797102], [1.61889828E12, 439.94852941176487], [1.6188999E12, 470.3700787401575], [1.61889912E12, 435.1739130434782], [1.61889882E12, 436.6470588235295], [1.61889822E12, 434.6956521739132], [1.61889852E12, 447.51470588235276], [1.6188981E12, 436.860294117647], [1.6188984E12, 464.88372093023236], [1.61890002E12, 442.58518518518497], [1.61889972E12, 468.14062499999983], [1.6188975E12, 521.5454545454545], [1.6188978E12, 445.51851851851853], [1.61889942E12, 440.25925925925947], [1.61889834E12, 430.51079136690663], [1.61889864E12, 438.91304347826076], [1.61889774E12, 433.90579710144925], [1.61889996E12, 440.8029197080293], [1.61889804E12, 442.8455882352941], [1.61889966E12, 458.6335877862596], [1.61889762E12, 442.04411764705895], [1.61889984E12, 445.0148148148148], [1.61889792E12, 434.60431654676256], [1.61889954E12, 458.6793893129771], [1.61889924E12, 441.8382352941176], [1.61889894E12, 449.57142857142844], [1.61889786E12, 438.3138686131386], [1.61890008E12, 449.87234042553206], [1.61889816E12, 436.0143884892086], [1.61889978E12, 471.3937007874017], [1.61889948E12, 450.7686567164179], [1.61889756E12, 444.14074074074085], [1.61889918E12, 448.24060150375936], [1.61889936E12, 454.50000000000006], [1.61889906E12, 451.61194029850753], [1.61889846E12, 447.87121212121207], [1.61889876E12, 452.3656716417909]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61890008E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 430.48920863309354, "minX": 1.6188975E12, "maxY": 521.4415584415585, "series": [{"data": [[1.6188996E12, 446.7985074626865], [1.61889768E12, 441.69629629629634], [1.6188993E12, 456.2424242424244], [1.618899E12, 459.4846153846153], [1.6188987E12, 471.6825396825398], [1.61889858E12, 447.7218045112783], [1.61889888E12, 444.05882352941177], [1.61889798E12, 432.3043478260869], [1.61889828E12, 439.9264705882353], [1.6188999E12, 470.3700787401575], [1.61889912E12, 435.1666666666666], [1.61889882E12, 436.63970588235304], [1.61889822E12, 434.67391304347836], [1.61889852E12, 447.47794117647044], [1.6188981E12, 436.8529411764706], [1.6188984E12, 464.86821705426354], [1.61890002E12, 442.58518518518497], [1.61889972E12, 468.14062499999983], [1.6188975E12, 521.4415584415585], [1.6188978E12, 445.51111111111095], [1.61889942E12, 440.25185185185194], [1.61889834E12, 430.48920863309354], [1.61889864E12, 438.88405797101444], [1.61889774E12, 433.8985507246375], [1.61889996E12, 440.79562043795613], [1.61889804E12, 442.83823529411745], [1.61889966E12, 458.62595419847344], [1.61889762E12, 441.99264705882365], [1.61889984E12, 445.0148148148148], [1.61889792E12, 434.58992805755395], [1.61889954E12, 458.67175572519085], [1.61889924E12, 441.8308823529412], [1.61889894E12, 449.54887218045116], [1.61889786E12, 438.27737226277384], [1.61890008E12, 449.86170212765956], [1.61889816E12, 435.99999999999983], [1.61889978E12, 471.3858267716536], [1.61889948E12, 450.7611940298505], [1.61889756E12, 444.1259259259259], [1.61889918E12, 448.24060150375936], [1.61889936E12, 454.50000000000006], [1.61889906E12, 451.6044776119405], [1.61889846E12, 447.87121212121207], [1.61889876E12, 452.3507462686565]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61890008E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.06106870229007636, "minX": 1.6188975E12, "maxY": 2.844155844155844, "series": [{"data": [[1.6188996E12, 0.10447761194029852], [1.61889768E12, 0.09629629629629632], [1.6188993E12, 0.2727272727272728], [1.618899E12, 0.13076923076923075], [1.6188987E12, 0.1111111111111111], [1.61889858E12, 0.12781954887218042], [1.61889888E12, 0.10294117647058824], [1.61889798E12, 0.09420289855072465], [1.61889828E12, 0.07352941176470584], [1.6188999E12, 0.07874015748031492], [1.61889912E12, 0.07246376811594199], [1.61889882E12, 0.2058823529411765], [1.61889822E12, 0.13043478260869576], [1.61889852E12, 0.07352941176470584], [1.6188981E12, 0.2132352941176469], [1.6188984E12, 0.08527131782945745], [1.61890002E12, 0.0814814814814815], [1.61889972E12, 0.10156250000000006], [1.6188975E12, 2.844155844155844], [1.6188978E12, 0.3333333333333333], [1.61889942E12, 0.0888888888888889], [1.61889834E12, 0.25179856115107907], [1.61889864E12, 0.07971014492753625], [1.61889774E12, 0.10144927536231886], [1.61889996E12, 0.20437956204379565], [1.61889804E12, 0.07352941176470584], [1.61889966E12, 0.26717557251908386], [1.61889762E12, 0.2867647058823532], [1.61889984E12, 0.2592592592592592], [1.61889792E12, 0.09352517985611512], [1.61889954E12, 0.06106870229007636], [1.61889924E12, 0.24264705882352947], [1.61889894E12, 0.08270676691729326], [1.61889786E12, 0.10218978102189782], [1.61890008E12, 0.2978723404255319], [1.61889816E12, 0.07194244604316542], [1.61889978E12, 0.07874015748031492], [1.61889948E12, 0.24626865671641796], [1.61889756E12, 0.1259259259259259], [1.61889918E12, 0.09022556390977446], [1.61889936E12, 0.31818181818181845], [1.61889906E12, 0.2164179104477611], [1.61889846E12, 0.33333333333333354], [1.61889876E12, 0.33582089552238814]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61890008E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 123.0, "minX": 1.6188975E12, "maxY": 6437.0, "series": [{"data": [[1.6188996E12, 880.0], [1.61889768E12, 818.0], [1.6188993E12, 1140.0], [1.618899E12, 1218.0], [1.6188987E12, 3203.0], [1.61889858E12, 1172.0], [1.61889888E12, 1180.0], [1.61889798E12, 838.0], [1.61889828E12, 814.0], [1.6188999E12, 1600.0], [1.61889912E12, 827.0], [1.61889882E12, 817.0], [1.61889822E12, 1156.0], [1.61889852E12, 1223.0], [1.6188981E12, 847.0], [1.6188984E12, 1183.0], [1.61890002E12, 855.0], [1.61889972E12, 1180.0], [1.6188975E12, 6437.0], [1.6188978E12, 865.0], [1.61889942E12, 839.0], [1.61889834E12, 844.0], [1.61889864E12, 909.0], [1.61889774E12, 879.0], [1.61889996E12, 885.0], [1.61889804E12, 1170.0], [1.61889966E12, 860.0], [1.61889762E12, 1191.0], [1.61889984E12, 824.0], [1.61889792E12, 892.0], [1.61889954E12, 1215.0], [1.61889924E12, 814.0], [1.61889894E12, 1165.0], [1.61889786E12, 784.0], [1.61890008E12, 833.0], [1.61889816E12, 809.0], [1.61889978E12, 3067.0], [1.61889948E12, 1172.0], [1.61889756E12, 864.0], [1.61889918E12, 1176.0], [1.61889936E12, 851.0], [1.61889906E12, 865.0], [1.61889846E12, 836.0], [1.61889876E12, 923.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6188996E12, 776.5], [1.61889768E12, 755.8], [1.6188993E12, 786.7], [1.618899E12, 780.0], [1.6188987E12, 760.0], [1.61889858E12, 759.4000000000001], [1.61889888E12, 741.6], [1.61889798E12, 749.1], [1.61889828E12, 760.9], [1.6188999E12, 807.8], [1.61889912E12, 742.0], [1.61889882E12, 749.3], [1.61889822E12, 741.0], [1.61889852E12, 761.8], [1.6188981E12, 763.2], [1.6188984E12, 790.0], [1.61890002E12, 774.8], [1.61889972E12, 795.3000000000001], [1.6188975E12, 768.0], [1.6188978E12, 764.4], [1.61889942E12, 762.4], [1.61889834E12, 739.0], [1.61889864E12, 750.3000000000001], [1.61889774E12, 747.1], [1.61889996E12, 760.6], [1.61889804E12, 745.3], [1.61889966E12, 801.8], [1.61889762E12, 763.2], [1.61889984E12, 757.8], [1.61889792E12, 741.0], [1.61889954E12, 780.8], [1.61889924E12, 758.3], [1.61889894E12, 772.2], [1.61889786E12, 751.2], [1.61890008E12, 791.0], [1.61889816E12, 750.0], [1.61889978E12, 780.6], [1.61889948E12, 769.0], [1.61889756E12, 764.8], [1.61889918E12, 771.2], [1.61889936E12, 778.1], [1.61889906E12, 790.0], [1.61889846E12, 771.4], [1.61889876E12, 777.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6188996E12, 867.4000000000002], [1.61889768E12, 815.1199999999999], [1.6188993E12, 1107.3299999999988], [1.618899E12, 1111.6699999999992], [1.6188987E12, 2664.8900000000076], [1.61889858E12, 1061.8399999999988], [1.61889888E12, 1080.469999999999], [1.61889798E12, 823.1799999999994], [1.61889828E12, 812.52], [1.6188999E12, 1548.7599999999998], [1.61889912E12, 813.7399999999996], [1.61889882E12, 813.67], [1.61889822E12, 1058.4999999999964], [1.61889852E12, 1077.9599999999982], [1.6188981E12, 831.4599999999998], [1.6188984E12, 1140.6999999999985], [1.61890002E12, 838.7999999999994], [1.61889972E12, 1119.0999999999988], [1.6188975E12, 6437.0], [1.6188978E12, 855.6399999999996], [1.61889942E12, 838.64], [1.61889834E12, 841.1999999999999], [1.61889864E12, 881.6999999999989], [1.61889774E12, 845.0699999999987], [1.61889996E12, 874.3600000000001], [1.61889804E12, 1167.4099999999999], [1.61889966E12, 858.4000000000001], [1.61889762E12, 1058.1699999999983], [1.61889984E12, 821.4799999999999], [1.61889792E12, 877.9999999999998], [1.61889954E12, 1202.2000000000003], [1.61889924E12, 812.52], [1.61889894E12, 1058.579999999999], [1.61889786E12, 782.86], [1.61890008E12, 833.0], [1.61889816E12, 803.8], [1.61889978E12, 2539.759999999998], [1.61889948E12, 1092.5500000000013], [1.61889756E12, 856.0799999999997], [1.61889918E12, 1061.0799999999988], [1.61889936E12, 847.3699999999999], [1.61889906E12, 858.0000000000001], [1.61889846E12, 835.01], [1.61889876E12, 909.3500000000003]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6188996E12, 800.25], [1.61889768E12, 772.5999999999999], [1.6188993E12, 819.55], [1.618899E12, 807.0999999999998], [1.6188987E12, 791.65], [1.61889858E12, 799.2], [1.61889888E12, 782.35], [1.61889798E12, 764.1999999999999], [1.61889828E12, 790.6], [1.6188999E12, 843.5999999999999], [1.61889912E12, 766.2499999999999], [1.61889882E12, 764.9000000000001], [1.61889822E12, 774.4499999999998], [1.61889852E12, 796.0], [1.6188981E12, 783.45], [1.6188984E12, 866.0], [1.61890002E12, 793.8], [1.61889972E12, 842.75], [1.6188975E12, 781.9999999999999], [1.6188978E12, 784.2], [1.61889942E12, 792.8], [1.61889834E12, 764.0], [1.61889864E12, 777.3999999999999], [1.61889774E12, 758.3499999999999], [1.61889996E12, 777.5], [1.61889804E12, 758.45], [1.61889966E12, 824.4], [1.61889762E12, 780.6500000000001], [1.61889984E12, 779.4], [1.61889792E12, 753.0], [1.61889954E12, 829.5999999999999], [1.61889924E12, 779.2], [1.61889894E12, 808.5999999999999], [1.61889786E12, 764.1], [1.61890008E12, 815.0], [1.61889816E12, 766.0], [1.61889978E12, 805.8], [1.61889948E12, 799.75], [1.61889756E12, 777.0], [1.61889918E12, 788.8], [1.61889936E12, 797.05], [1.61889906E12, 809.75], [1.61889846E12, 796.8], [1.61889876E12, 808.5]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6188996E12, 135.0], [1.61889768E12, 134.0], [1.6188993E12, 144.0], [1.618899E12, 136.0], [1.6188987E12, 133.0], [1.61889858E12, 136.0], [1.61889888E12, 139.0], [1.61889798E12, 138.0], [1.61889828E12, 130.0], [1.6188999E12, 134.0], [1.61889912E12, 132.0], [1.61889882E12, 138.0], [1.61889822E12, 123.0], [1.61889852E12, 137.0], [1.6188981E12, 134.0], [1.6188984E12, 132.0], [1.61890002E12, 138.0], [1.61889972E12, 138.0], [1.6188975E12, 145.0], [1.6188978E12, 139.0], [1.61889942E12, 133.0], [1.61889834E12, 133.0], [1.61889864E12, 137.0], [1.61889774E12, 137.0], [1.61889996E12, 140.0], [1.61889804E12, 131.0], [1.61889966E12, 136.0], [1.61889762E12, 134.0], [1.61889984E12, 142.0], [1.61889792E12, 134.0], [1.61889954E12, 134.0], [1.61889924E12, 133.0], [1.61889894E12, 133.0], [1.61889786E12, 134.0], [1.61890008E12, 134.0], [1.61889816E12, 135.0], [1.61889978E12, 138.0], [1.61889948E12, 132.0], [1.61889756E12, 137.0], [1.61889918E12, 136.0], [1.61889936E12, 136.0], [1.61889906E12, 132.0], [1.61889846E12, 135.0], [1.61889876E12, 140.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6188996E12, 424.0], [1.61889768E12, 387.0], [1.6188993E12, 443.0], [1.618899E12, 653.5], [1.6188987E12, 636.5], [1.61889858E12, 636.0], [1.61889888E12, 631.5], [1.61889798E12, 380.5], [1.61889828E12, 301.5], [1.6188999E12, 435.0], [1.61889912E12, 412.0], [1.61889882E12, 409.5], [1.61889822E12, 510.0], [1.61889852E12, 404.5], [1.6188981E12, 325.0], [1.6188984E12, 408.0], [1.61890002E12, 403.0], [1.61889972E12, 680.0], [1.6188975E12, 597.0], [1.6188978E12, 414.0], [1.61889942E12, 350.0], [1.61889834E12, 411.0], [1.61889864E12, 526.5], [1.61889774E12, 370.5], [1.61889996E12, 429.0], [1.61889804E12, 624.5], [1.61889966E12, 404.0], [1.61889762E12, 380.5], [1.61889984E12, 399.0], [1.61889792E12, 360.0], [1.61889954E12, 646.0], [1.61889924E12, 430.5], [1.61889894E12, 654.0], [1.61889786E12, 476.0], [1.61890008E12, 424.0], [1.61889816E12, 388.0], [1.61889978E12, 429.0], [1.61889948E12, 383.0], [1.61889756E12, 414.0], [1.61889918E12, 629.0], [1.61889936E12, 552.5], [1.61889906E12, 432.0], [1.61889846E12, 436.5], [1.61889876E12, 444.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61890008E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 293.0, "minX": 1.0, "maxY": 817.0, "series": [{"data": [[1.0, 817.0], [2.0, 408.5], [4.0, 293.0], [3.0, 403.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 293.0, "minX": 1.0, "maxY": 817.0, "series": [{"data": [[1.0, 817.0], [2.0, 408.5], [4.0, 293.0], [3.0, 403.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.3, "minX": 1.6188975E12, "maxY": 2.316666666666667, "series": [{"data": [[1.6188996E12, 2.2333333333333334], [1.61889768E12, 2.25], [1.6188993E12, 2.2], [1.618899E12, 2.1666666666666665], [1.6188987E12, 2.1], [1.61889858E12, 2.216666666666667], [1.61889888E12, 2.2666666666666666], [1.61889798E12, 2.3], [1.61889828E12, 2.2666666666666666], [1.6188999E12, 2.1166666666666667], [1.61889912E12, 2.3], [1.61889882E12, 2.2666666666666666], [1.61889822E12, 2.3], [1.61889852E12, 2.2666666666666666], [1.6188981E12, 2.2666666666666666], [1.6188984E12, 2.15], [1.61890002E12, 2.25], [1.61889972E12, 2.1333333333333333], [1.6188975E12, 1.3], [1.6188978E12, 2.25], [1.61889942E12, 2.25], [1.61889834E12, 2.316666666666667], [1.61889864E12, 2.3], [1.61889774E12, 2.3], [1.61889996E12, 2.283333333333333], [1.61889804E12, 2.2666666666666666], [1.61889966E12, 2.183333333333333], [1.61889762E12, 2.2666666666666666], [1.61889984E12, 2.25], [1.61889792E12, 2.316666666666667], [1.61889954E12, 2.183333333333333], [1.61889924E12, 2.2666666666666666], [1.61889894E12, 2.216666666666667], [1.61889786E12, 2.283333333333333], [1.61890008E12, 1.55], [1.61889816E12, 2.316666666666667], [1.61889978E12, 2.1166666666666667], [1.61889948E12, 2.2333333333333334], [1.61889756E12, 2.25], [1.61889918E12, 2.216666666666667], [1.61889936E12, 2.2], [1.61889906E12, 2.2333333333333334], [1.61889846E12, 2.2], [1.61889876E12, 2.2333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61890008E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.2833333333333334, "minX": 1.6188975E12, "maxY": 2.316666666666667, "series": [{"data": [[1.6188996E12, 2.2333333333333334], [1.61889768E12, 2.25], [1.6188993E12, 2.2], [1.618899E12, 2.1666666666666665], [1.6188987E12, 2.1], [1.61889858E12, 2.216666666666667], [1.61889888E12, 2.2666666666666666], [1.61889798E12, 2.3], [1.61889828E12, 2.2666666666666666], [1.6188999E12, 2.1166666666666667], [1.61889912E12, 2.3], [1.61889882E12, 2.2666666666666666], [1.61889822E12, 2.3], [1.61889852E12, 2.2666666666666666], [1.6188981E12, 2.2666666666666666], [1.6188984E12, 2.15], [1.61890002E12, 2.25], [1.61889972E12, 2.1333333333333333], [1.6188975E12, 1.2833333333333334], [1.6188978E12, 2.25], [1.61889942E12, 2.25], [1.61889834E12, 2.316666666666667], [1.61889864E12, 2.3], [1.61889774E12, 2.3], [1.61889996E12, 2.283333333333333], [1.61889804E12, 2.2666666666666666], [1.61889966E12, 2.183333333333333], [1.61889762E12, 2.2666666666666666], [1.61889984E12, 2.25], [1.61889792E12, 2.316666666666667], [1.61889954E12, 2.183333333333333], [1.61889924E12, 2.2666666666666666], [1.61889894E12, 2.216666666666667], [1.61889786E12, 2.283333333333333], [1.61890008E12, 1.5666666666666667], [1.61889816E12, 2.316666666666667], [1.61889978E12, 2.1166666666666667], [1.61889948E12, 2.2333333333333334], [1.61889756E12, 2.25], [1.61889918E12, 2.216666666666667], [1.61889936E12, 2.2], [1.61889906E12, 2.2333333333333334], [1.61889846E12, 2.2], [1.61889876E12, 2.2333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61890008E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.2833333333333334, "minX": 1.6188975E12, "maxY": 2.316666666666667, "series": [{"data": [[1.6188996E12, 2.2333333333333334], [1.61889768E12, 2.25], [1.6188993E12, 2.2], [1.618899E12, 2.1666666666666665], [1.6188987E12, 2.1], [1.61889858E12, 2.216666666666667], [1.61889888E12, 2.2666666666666666], [1.61889798E12, 2.3], [1.61889828E12, 2.2666666666666666], [1.6188999E12, 2.1166666666666667], [1.61889912E12, 2.3], [1.61889882E12, 2.2666666666666666], [1.61889822E12, 2.3], [1.61889852E12, 2.2666666666666666], [1.6188981E12, 2.2666666666666666], [1.6188984E12, 2.15], [1.61890002E12, 2.25], [1.61889972E12, 2.1333333333333333], [1.6188975E12, 1.2833333333333334], [1.6188978E12, 2.25], [1.61889942E12, 2.25], [1.61889834E12, 2.316666666666667], [1.61889864E12, 2.3], [1.61889774E12, 2.3], [1.61889996E12, 2.283333333333333], [1.61889804E12, 2.2666666666666666], [1.61889966E12, 2.183333333333333], [1.61889762E12, 2.2666666666666666], [1.61889984E12, 2.25], [1.61889792E12, 2.316666666666667], [1.61889954E12, 2.183333333333333], [1.61889924E12, 2.2666666666666666], [1.61889894E12, 2.216666666666667], [1.61889786E12, 2.283333333333333], [1.61890008E12, 1.5666666666666667], [1.61889816E12, 2.316666666666667], [1.61889978E12, 2.1166666666666667], [1.61889948E12, 2.2333333333333334], [1.61889756E12, 2.25], [1.61889918E12, 2.216666666666667], [1.61889936E12, 2.2], [1.61889906E12, 2.2333333333333334], [1.61889846E12, 2.2], [1.61889876E12, 2.2333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61890008E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.2833333333333334, "minX": 1.6188975E12, "maxY": 2.316666666666667, "series": [{"data": [[1.6188996E12, 2.2333333333333334], [1.61889768E12, 2.25], [1.6188993E12, 2.2], [1.618899E12, 2.1666666666666665], [1.6188987E12, 2.1], [1.61889858E12, 2.216666666666667], [1.61889888E12, 2.2666666666666666], [1.61889798E12, 2.3], [1.61889828E12, 2.2666666666666666], [1.6188999E12, 2.1166666666666667], [1.61889912E12, 2.3], [1.61889882E12, 2.2666666666666666], [1.61889822E12, 2.3], [1.61889852E12, 2.2666666666666666], [1.6188981E12, 2.2666666666666666], [1.6188984E12, 2.15], [1.61890002E12, 2.25], [1.61889972E12, 2.1333333333333333], [1.6188975E12, 1.2833333333333334], [1.6188978E12, 2.25], [1.61889942E12, 2.25], [1.61889834E12, 2.316666666666667], [1.61889864E12, 2.3], [1.61889774E12, 2.3], [1.61889996E12, 2.283333333333333], [1.61889804E12, 2.2666666666666666], [1.61889966E12, 2.183333333333333], [1.61889762E12, 2.2666666666666666], [1.61889984E12, 2.25], [1.61889792E12, 2.316666666666667], [1.61889954E12, 2.183333333333333], [1.61889924E12, 2.2666666666666666], [1.61889894E12, 2.216666666666667], [1.61889786E12, 2.283333333333333], [1.61890008E12, 1.5666666666666667], [1.61889816E12, 2.316666666666667], [1.61889978E12, 2.1166666666666667], [1.61889948E12, 2.2333333333333334], [1.61889756E12, 2.25], [1.61889918E12, 2.216666666666667], [1.61889936E12, 2.2], [1.61889906E12, 2.2333333333333334], [1.61889846E12, 2.2], [1.61889876E12, 2.2333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61890008E12, "title": "Total Transactions Per Second"}},
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

