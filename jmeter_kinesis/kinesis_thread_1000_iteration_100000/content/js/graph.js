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
        data: {"result": {"minY": 119.0, "minX": 0.0, "maxY": 29337.0, "series": [{"data": [[0.0, 119.0], [0.1, 132.0], [0.2, 135.0], [0.3, 138.0], [0.4, 139.0], [0.5, 141.0], [0.6, 143.0], [0.7, 144.0], [0.8, 146.0], [0.9, 147.0], [1.0, 148.0], [1.1, 149.0], [1.2, 151.0], [1.3, 152.0], [1.4, 153.0], [1.5, 155.0], [1.6, 157.0], [1.7, 159.0], [1.8, 161.0], [1.9, 164.0], [2.0, 168.0], [2.1, 173.0], [2.2, 178.0], [2.3, 184.0], [2.4, 191.0], [2.5, 196.0], [2.6, 202.0], [2.7, 207.0], [2.8, 213.0], [2.9, 220.0], [3.0, 227.0], [3.1, 233.0], [3.2, 240.0], [3.3, 245.0], [3.4, 250.0], [3.5, 254.0], [3.6, 259.0], [3.7, 264.0], [3.8, 268.0], [3.9, 273.0], [4.0, 279.0], [4.1, 284.0], [4.2, 290.0], [4.3, 296.0], [4.4, 302.0], [4.5, 307.0], [4.6, 312.0], [4.7, 317.0], [4.8, 322.0], [4.9, 326.0], [5.0, 330.0], [5.1, 335.0], [5.2, 339.0], [5.3, 343.0], [5.4, 348.0], [5.5, 351.0], [5.6, 354.0], [5.7, 358.0], [5.8, 362.0], [5.9, 365.0], [6.0, 368.0], [6.1, 371.0], [6.2, 374.0], [6.3, 377.0], [6.4, 380.0], [6.5, 383.0], [6.6, 385.0], [6.7, 388.0], [6.8, 390.0], [6.9, 392.0], [7.0, 395.0], [7.1, 397.0], [7.2, 399.0], [7.3, 402.0], [7.4, 404.0], [7.5, 406.0], [7.6, 408.0], [7.7, 410.0], [7.8, 412.0], [7.9, 414.0], [8.0, 416.0], [8.1, 418.0], [8.2, 420.0], [8.3, 421.0], [8.4, 423.0], [8.5, 425.0], [8.6, 427.0], [8.7, 429.0], [8.8, 431.0], [8.9, 433.0], [9.0, 434.0], [9.1, 436.0], [9.2, 438.0], [9.3, 440.0], [9.4, 441.0], [9.5, 442.0], [9.6, 444.0], [9.7, 446.0], [9.8, 448.0], [9.9, 449.0], [10.0, 451.0], [10.1, 452.0], [10.2, 454.0], [10.3, 456.0], [10.4, 457.0], [10.5, 459.0], [10.6, 460.0], [10.7, 462.0], [10.8, 463.0], [10.9, 465.0], [11.0, 466.0], [11.1, 467.0], [11.2, 469.0], [11.3, 470.0], [11.4, 472.0], [11.5, 473.0], [11.6, 474.0], [11.7, 475.0], [11.8, 477.0], [11.9, 478.0], [12.0, 479.0], [12.1, 480.0], [12.2, 481.0], [12.3, 483.0], [12.4, 484.0], [12.5, 485.0], [12.6, 487.0], [12.7, 488.0], [12.8, 489.0], [12.9, 490.0], [13.0, 491.0], [13.1, 493.0], [13.2, 494.0], [13.3, 495.0], [13.4, 497.0], [13.5, 498.0], [13.6, 499.0], [13.7, 500.0], [13.8, 501.0], [13.9, 503.0], [14.0, 504.0], [14.1, 505.0], [14.2, 506.0], [14.3, 507.0], [14.4, 508.0], [14.5, 509.0], [14.6, 511.0], [14.7, 512.0], [14.8, 513.0], [14.9, 514.0], [15.0, 515.0], [15.1, 516.0], [15.2, 517.0], [15.3, 518.0], [15.4, 520.0], [15.5, 521.0], [15.6, 522.0], [15.7, 523.0], [15.8, 524.0], [15.9, 525.0], [16.0, 526.0], [16.1, 527.0], [16.2, 528.0], [16.3, 529.0], [16.4, 530.0], [16.5, 531.0], [16.6, 533.0], [16.7, 533.0], [16.8, 534.0], [16.9, 535.0], [17.0, 536.0], [17.1, 537.0], [17.2, 538.0], [17.3, 539.0], [17.4, 540.0], [17.5, 541.0], [17.6, 542.0], [17.7, 543.0], [17.8, 544.0], [17.9, 545.0], [18.0, 547.0], [18.1, 548.0], [18.2, 549.0], [18.3, 550.0], [18.4, 551.0], [18.5, 552.0], [18.6, 553.0], [18.7, 554.0], [18.8, 555.0], [18.9, 556.0], [19.0, 557.0], [19.1, 558.0], [19.2, 559.0], [19.3, 560.0], [19.4, 561.0], [19.5, 562.0], [19.6, 563.0], [19.7, 564.0], [19.8, 565.0], [19.9, 566.0], [20.0, 567.0], [20.1, 568.0], [20.2, 569.0], [20.3, 570.0], [20.4, 571.0], [20.5, 572.0], [20.6, 573.0], [20.7, 574.0], [20.8, 575.0], [20.9, 576.0], [21.0, 577.0], [21.1, 578.0], [21.2, 579.0], [21.3, 580.0], [21.4, 581.0], [21.5, 582.0], [21.6, 583.0], [21.7, 584.0], [21.8, 585.0], [21.9, 586.0], [22.0, 587.0], [22.1, 588.0], [22.2, 589.0], [22.3, 590.0], [22.4, 591.0], [22.5, 592.0], [22.6, 593.0], [22.7, 594.0], [22.8, 595.0], [22.9, 596.0], [23.0, 597.0], [23.1, 598.0], [23.2, 599.0], [23.3, 600.0], [23.4, 601.0], [23.5, 602.0], [23.6, 603.0], [23.7, 604.0], [23.8, 605.0], [23.9, 606.0], [24.0, 607.0], [24.1, 608.0], [24.2, 609.0], [24.3, 610.0], [24.4, 611.0], [24.5, 611.0], [24.6, 612.0], [24.7, 613.0], [24.8, 614.0], [24.9, 615.0], [25.0, 616.0], [25.1, 617.0], [25.2, 618.0], [25.3, 619.0], [25.4, 620.0], [25.5, 621.0], [25.6, 621.0], [25.7, 622.0], [25.8, 623.0], [25.9, 624.0], [26.0, 625.0], [26.1, 626.0], [26.2, 627.0], [26.3, 628.0], [26.4, 629.0], [26.5, 630.0], [26.6, 631.0], [26.7, 632.0], [26.8, 633.0], [26.9, 634.0], [27.0, 635.0], [27.1, 636.0], [27.2, 637.0], [27.3, 638.0], [27.4, 639.0], [27.5, 639.0], [27.6, 640.0], [27.7, 641.0], [27.8, 642.0], [27.9, 643.0], [28.0, 644.0], [28.1, 645.0], [28.2, 646.0], [28.3, 647.0], [28.4, 648.0], [28.5, 649.0], [28.6, 650.0], [28.7, 651.0], [28.8, 652.0], [28.9, 653.0], [29.0, 654.0], [29.1, 655.0], [29.2, 656.0], [29.3, 657.0], [29.4, 658.0], [29.5, 659.0], [29.6, 660.0], [29.7, 661.0], [29.8, 662.0], [29.9, 663.0], [30.0, 664.0], [30.1, 665.0], [30.2, 666.0], [30.3, 667.0], [30.4, 668.0], [30.5, 670.0], [30.6, 670.0], [30.7, 671.0], [30.8, 672.0], [30.9, 673.0], [31.0, 674.0], [31.1, 675.0], [31.2, 676.0], [31.3, 677.0], [31.4, 678.0], [31.5, 679.0], [31.6, 680.0], [31.7, 681.0], [31.8, 682.0], [31.9, 683.0], [32.0, 684.0], [32.1, 685.0], [32.2, 686.0], [32.3, 687.0], [32.4, 688.0], [32.5, 689.0], [32.6, 689.0], [32.7, 690.0], [32.8, 691.0], [32.9, 692.0], [33.0, 694.0], [33.1, 694.0], [33.2, 696.0], [33.3, 697.0], [33.4, 698.0], [33.5, 698.0], [33.6, 699.0], [33.7, 701.0], [33.8, 701.0], [33.9, 702.0], [34.0, 703.0], [34.1, 704.0], [34.2, 705.0], [34.3, 707.0], [34.4, 707.0], [34.5, 708.0], [34.6, 710.0], [34.7, 710.0], [34.8, 711.0], [34.9, 712.0], [35.0, 714.0], [35.1, 714.0], [35.2, 715.0], [35.3, 716.0], [35.4, 717.0], [35.5, 718.0], [35.6, 719.0], [35.7, 720.0], [35.8, 721.0], [35.9, 723.0], [36.0, 724.0], [36.1, 725.0], [36.2, 726.0], [36.3, 727.0], [36.4, 727.0], [36.5, 729.0], [36.6, 730.0], [36.7, 731.0], [36.8, 732.0], [36.9, 732.0], [37.0, 733.0], [37.1, 734.0], [37.2, 736.0], [37.3, 736.0], [37.4, 738.0], [37.5, 739.0], [37.6, 740.0], [37.7, 741.0], [37.8, 742.0], [37.9, 743.0], [38.0, 744.0], [38.1, 745.0], [38.2, 746.0], [38.3, 747.0], [38.4, 748.0], [38.5, 749.0], [38.6, 751.0], [38.7, 752.0], [38.8, 753.0], [38.9, 754.0], [39.0, 755.0], [39.1, 756.0], [39.2, 757.0], [39.3, 758.0], [39.4, 759.0], [39.5, 760.0], [39.6, 761.0], [39.7, 762.0], [39.8, 763.0], [39.9, 764.0], [40.0, 765.0], [40.1, 766.0], [40.2, 768.0], [40.3, 769.0], [40.4, 770.0], [40.5, 771.0], [40.6, 773.0], [40.7, 774.0], [40.8, 775.0], [40.9, 776.0], [41.0, 777.0], [41.1, 779.0], [41.2, 780.0], [41.3, 781.0], [41.4, 783.0], [41.5, 784.0], [41.6, 785.0], [41.7, 787.0], [41.8, 788.0], [41.9, 789.0], [42.0, 791.0], [42.1, 792.0], [42.2, 794.0], [42.3, 795.0], [42.4, 797.0], [42.5, 798.0], [42.6, 799.0], [42.7, 801.0], [42.8, 802.0], [42.9, 803.0], [43.0, 805.0], [43.1, 807.0], [43.2, 808.0], [43.3, 809.0], [43.4, 811.0], [43.5, 813.0], [43.6, 814.0], [43.7, 816.0], [43.8, 817.0], [43.9, 818.0], [44.0, 820.0], [44.1, 821.0], [44.2, 823.0], [44.3, 824.0], [44.4, 826.0], [44.5, 828.0], [44.6, 830.0], [44.7, 831.0], [44.8, 833.0], [44.9, 834.0], [45.0, 836.0], [45.1, 837.0], [45.2, 839.0], [45.3, 841.0], [45.4, 843.0], [45.5, 844.0], [45.6, 846.0], [45.7, 848.0], [45.8, 850.0], [45.9, 852.0], [46.0, 854.0], [46.1, 857.0], [46.2, 859.0], [46.3, 861.0], [46.4, 863.0], [46.5, 866.0], [46.6, 868.0], [46.7, 870.0], [46.8, 873.0], [46.9, 876.0], [47.0, 879.0], [47.1, 881.0], [47.2, 884.0], [47.3, 886.0], [47.4, 889.0], [47.5, 892.0], [47.6, 896.0], [47.7, 899.0], [47.8, 902.0], [47.9, 905.0], [48.0, 908.0], [48.1, 912.0], [48.2, 917.0], [48.3, 921.0], [48.4, 926.0], [48.5, 931.0], [48.6, 939.0], [48.7, 944.0], [48.8, 951.0], [48.9, 960.0], [49.0, 969.0], [49.1, 980.0], [49.2, 994.0], [49.3, 1018.0], [49.4, 1065.0], [49.5, 1545.0], [49.6, 2138.0], [49.7, 2714.0], [49.8, 3293.0], [49.9, 3811.0], [50.0, 4088.0], [50.1, 4255.0], [50.2, 4363.0], [50.3, 4452.0], [50.4, 4532.0], [50.5, 4600.0], [50.6, 4664.0], [50.7, 4721.0], [50.8, 4758.0], [50.9, 4797.0], [51.0, 4836.0], [51.1, 4870.0], [51.2, 4900.0], [51.3, 4928.0], [51.4, 4954.0], [51.5, 4980.0], [51.6, 5002.0], [51.7, 5025.0], [51.8, 5047.0], [51.9, 5066.0], [52.0, 5084.0], [52.1, 5103.0], [52.2, 5123.0], [52.3, 5139.0], [52.4, 5155.0], [52.5, 5172.0], [52.6, 5187.0], [52.7, 5199.0], [52.8, 5211.0], [52.9, 5223.0], [53.0, 5234.0], [53.1, 5247.0], [53.2, 5259.0], [53.3, 5270.0], [53.4, 5281.0], [53.5, 5293.0], [53.6, 5305.0], [53.7, 5315.0], [53.8, 5326.0], [53.9, 5336.0], [54.0, 5350.0], [54.1, 5360.0], [54.2, 5371.0], [54.3, 5380.0], [54.4, 5390.0], [54.5, 5400.0], [54.6, 5410.0], [54.7, 5419.0], [54.8, 5428.0], [54.9, 5437.0], [55.0, 5446.0], [55.1, 5454.0], [55.2, 5462.0], [55.3, 5470.0], [55.4, 5478.0], [55.5, 5485.0], [55.6, 5494.0], [55.7, 5504.0], [55.8, 5511.0], [55.9, 5520.0], [56.0, 5527.0], [56.1, 5534.0], [56.2, 5540.0], [56.3, 5547.0], [56.4, 5553.0], [56.5, 5559.0], [56.6, 5565.0], [56.7, 5572.0], [56.8, 5579.0], [56.9, 5587.0], [57.0, 5595.0], [57.1, 5601.0], [57.2, 5608.0], [57.3, 5614.0], [57.4, 5620.0], [57.5, 5626.0], [57.6, 5633.0], [57.7, 5639.0], [57.8, 5646.0], [57.9, 5652.0], [58.0, 5658.0], [58.1, 5663.0], [58.2, 5669.0], [58.3, 5675.0], [58.4, 5682.0], [58.5, 5689.0], [58.6, 5694.0], [58.7, 5700.0], [58.8, 5706.0], [58.9, 5712.0], [59.0, 5716.0], [59.1, 5722.0], [59.2, 5728.0], [59.3, 5733.0], [59.4, 5739.0], [59.5, 5744.0], [59.6, 5750.0], [59.7, 5755.0], [59.8, 5759.0], [59.9, 5764.0], [60.0, 5770.0], [60.1, 5775.0], [60.2, 5781.0], [60.3, 5785.0], [60.4, 5790.0], [60.5, 5795.0], [60.6, 5800.0], [60.7, 5804.0], [60.8, 5809.0], [60.9, 5815.0], [61.0, 5820.0], [61.1, 5825.0], [61.2, 5829.0], [61.3, 5834.0], [61.4, 5838.0], [61.5, 5844.0], [61.6, 5848.0], [61.7, 5853.0], [61.8, 5858.0], [61.9, 5862.0], [62.0, 5867.0], [62.1, 5872.0], [62.2, 5876.0], [62.3, 5880.0], [62.4, 5885.0], [62.5, 5890.0], [62.6, 5894.0], [62.7, 5899.0], [62.8, 5905.0], [62.9, 5909.0], [63.0, 5914.0], [63.1, 5919.0], [63.2, 5924.0], [63.3, 5928.0], [63.4, 5932.0], [63.5, 5937.0], [63.6, 5941.0], [63.7, 5946.0], [63.8, 5951.0], [63.9, 5955.0], [64.0, 5959.0], [64.1, 5964.0], [64.2, 5969.0], [64.3, 5973.0], [64.4, 5978.0], [64.5, 5982.0], [64.6, 5986.0], [64.7, 5990.0], [64.8, 5994.0], [64.9, 5998.0], [65.0, 6002.0], [65.1, 6008.0], [65.2, 6012.0], [65.3, 6017.0], [65.4, 6021.0], [65.5, 6025.0], [65.6, 6029.0], [65.7, 6032.0], [65.8, 6037.0], [65.9, 6041.0], [66.0, 6045.0], [66.1, 6049.0], [66.2, 6053.0], [66.3, 6057.0], [66.4, 6061.0], [66.5, 6065.0], [66.6, 6070.0], [66.7, 6074.0], [66.8, 6077.0], [66.9, 6082.0], [67.0, 6086.0], [67.1, 6090.0], [67.2, 6095.0], [67.3, 6098.0], [67.4, 6103.0], [67.5, 6107.0], [67.6, 6111.0], [67.7, 6116.0], [67.8, 6120.0], [67.9, 6124.0], [68.0, 6128.0], [68.1, 6132.0], [68.2, 6137.0], [68.3, 6141.0], [68.4, 6145.0], [68.5, 6148.0], [68.6, 6153.0], [68.7, 6157.0], [68.8, 6161.0], [68.9, 6165.0], [69.0, 6169.0], [69.1, 6174.0], [69.2, 6179.0], [69.3, 6183.0], [69.4, 6187.0], [69.5, 6191.0], [69.6, 6195.0], [69.7, 6199.0], [69.8, 6203.0], [69.9, 6207.0], [70.0, 6210.0], [70.1, 6214.0], [70.2, 6219.0], [70.3, 6222.0], [70.4, 6227.0], [70.5, 6231.0], [70.6, 6235.0], [70.7, 6240.0], [70.8, 6243.0], [70.9, 6247.0], [71.0, 6251.0], [71.1, 6256.0], [71.2, 6260.0], [71.3, 6263.0], [71.4, 6267.0], [71.5, 6271.0], [71.6, 6275.0], [71.7, 6279.0], [71.8, 6282.0], [71.9, 6286.0], [72.0, 6290.0], [72.1, 6295.0], [72.2, 6299.0], [72.3, 6303.0], [72.4, 6307.0], [72.5, 6311.0], [72.6, 6316.0], [72.7, 6320.0], [72.8, 6323.0], [72.9, 6328.0], [73.0, 6333.0], [73.1, 6337.0], [73.2, 6342.0], [73.3, 6346.0], [73.4, 6350.0], [73.5, 6355.0], [73.6, 6359.0], [73.7, 6363.0], [73.8, 6368.0], [73.9, 6372.0], [74.0, 6376.0], [74.1, 6380.0], [74.2, 6384.0], [74.3, 6388.0], [74.4, 6392.0], [74.5, 6397.0], [74.6, 6401.0], [74.7, 6405.0], [74.8, 6409.0], [74.9, 6414.0], [75.0, 6418.0], [75.1, 6422.0], [75.2, 6427.0], [75.3, 6431.0], [75.4, 6435.0], [75.5, 6439.0], [75.6, 6443.0], [75.7, 6447.0], [75.8, 6451.0], [75.9, 6456.0], [76.0, 6460.0], [76.1, 6464.0], [76.2, 6468.0], [76.3, 6473.0], [76.4, 6478.0], [76.5, 6482.0], [76.6, 6485.0], [76.7, 6489.0], [76.8, 6493.0], [76.9, 6498.0], [77.0, 6502.0], [77.1, 6506.0], [77.2, 6511.0], [77.3, 6516.0], [77.4, 6521.0], [77.5, 6525.0], [77.6, 6529.0], [77.7, 6534.0], [77.8, 6538.0], [77.9, 6542.0], [78.0, 6546.0], [78.1, 6552.0], [78.2, 6557.0], [78.3, 6561.0], [78.4, 6566.0], [78.5, 6571.0], [78.6, 6575.0], [78.7, 6579.0], [78.8, 6583.0], [78.9, 6587.0], [79.0, 6592.0], [79.1, 6597.0], [79.2, 6601.0], [79.3, 6606.0], [79.4, 6611.0], [79.5, 6616.0], [79.6, 6620.0], [79.7, 6625.0], [79.8, 6629.0], [79.9, 6634.0], [80.0, 6638.0], [80.1, 6643.0], [80.2, 6648.0], [80.3, 6653.0], [80.4, 6657.0], [80.5, 6662.0], [80.6, 6666.0], [80.7, 6671.0], [80.8, 6676.0], [80.9, 6681.0], [81.0, 6686.0], [81.1, 6690.0], [81.2, 6696.0], [81.3, 6701.0], [81.4, 6706.0], [81.5, 6711.0], [81.6, 6716.0], [81.7, 6722.0], [81.8, 6727.0], [81.9, 6731.0], [82.0, 6736.0], [82.1, 6741.0], [82.2, 6746.0], [82.3, 6752.0], [82.4, 6756.0], [82.5, 6761.0], [82.6, 6768.0], [82.7, 6772.0], [82.8, 6777.0], [82.9, 6782.0], [83.0, 6787.0], [83.1, 6793.0], [83.2, 6800.0], [83.3, 6805.0], [83.4, 6811.0], [83.5, 6816.0], [83.6, 6822.0], [83.7, 6827.0], [83.8, 6834.0], [83.9, 6839.0], [84.0, 6845.0], [84.1, 6850.0], [84.2, 6857.0], [84.3, 6864.0], [84.4, 6869.0], [84.5, 6875.0], [84.6, 6881.0], [84.7, 6886.0], [84.8, 6891.0], [84.9, 6896.0], [85.0, 6902.0], [85.1, 6908.0], [85.2, 6913.0], [85.3, 6919.0], [85.4, 6924.0], [85.5, 6930.0], [85.6, 6936.0], [85.7, 6941.0], [85.8, 6948.0], [85.9, 6953.0], [86.0, 6960.0], [86.1, 6967.0], [86.2, 6973.0], [86.3, 6980.0], [86.4, 6987.0], [86.5, 6993.0], [86.6, 6999.0], [86.7, 7005.0], [86.8, 7013.0], [86.9, 7018.0], [87.0, 7024.0], [87.1, 7030.0], [87.2, 7038.0], [87.3, 7044.0], [87.4, 7050.0], [87.5, 7056.0], [87.6, 7063.0], [87.7, 7070.0], [87.8, 7077.0], [87.9, 7083.0], [88.0, 7089.0], [88.1, 7096.0], [88.2, 7102.0], [88.3, 7110.0], [88.4, 7117.0], [88.5, 7124.0], [88.6, 7130.0], [88.7, 7137.0], [88.8, 7144.0], [88.9, 7152.0], [89.0, 7160.0], [89.1, 7168.0], [89.2, 7175.0], [89.3, 7182.0], [89.4, 7191.0], [89.5, 7201.0], [89.6, 7210.0], [89.7, 7219.0], [89.8, 7227.0], [89.9, 7237.0], [90.0, 7246.0], [90.1, 7255.0], [90.2, 7263.0], [90.3, 7271.0], [90.4, 7280.0], [90.5, 7291.0], [90.6, 7300.0], [90.7, 7308.0], [90.8, 7317.0], [90.9, 7325.0], [91.0, 7334.0], [91.1, 7342.0], [91.2, 7352.0], [91.3, 7361.0], [91.4, 7371.0], [91.5, 7381.0], [91.6, 7392.0], [91.7, 7402.0], [91.8, 7411.0], [91.9, 7426.0], [92.0, 7437.0], [92.1, 7447.0], [92.2, 7459.0], [92.3, 7469.0], [92.4, 7481.0], [92.5, 7492.0], [92.6, 7505.0], [92.7, 7515.0], [92.8, 7527.0], [92.9, 7540.0], [93.0, 7553.0], [93.1, 7564.0], [93.2, 7577.0], [93.3, 7589.0], [93.4, 7605.0], [93.5, 7621.0], [93.6, 7636.0], [93.7, 7653.0], [93.8, 7669.0], [93.9, 7682.0], [94.0, 7702.0], [94.1, 7717.0], [94.2, 7731.0], [94.3, 7749.0], [94.4, 7764.0], [94.5, 7788.0], [94.6, 7805.0], [94.7, 7823.0], [94.8, 7842.0], [94.9, 7860.0], [95.0, 7881.0], [95.1, 7899.0], [95.2, 7918.0], [95.3, 7939.0], [95.4, 7962.0], [95.5, 7986.0], [95.6, 8009.0], [95.7, 8038.0], [95.8, 8067.0], [95.9, 8094.0], [96.0, 8124.0], [96.1, 8149.0], [96.2, 8179.0], [96.3, 8209.0], [96.4, 8242.0], [96.5, 8273.0], [96.6, 8310.0], [96.7, 8356.0], [96.8, 8394.0], [96.9, 8434.0], [97.0, 8488.0], [97.1, 8542.0], [97.2, 8591.0], [97.3, 8650.0], [97.4, 8710.0], [97.5, 8774.0], [97.6, 8851.0], [97.7, 8948.0], [97.8, 9043.0], [97.9, 9153.0], [98.0, 9278.0], [98.1, 9423.0], [98.2, 9558.0], [98.3, 9727.0], [98.4, 10001.0], [98.5, 10435.0], [98.6, 11034.0], [98.7, 11539.0], [98.8, 12233.0], [98.9, 12724.0], [99.0, 13490.0], [99.1, 17453.0], [99.2, 20425.0], [99.3, 23041.0], [99.4, 24175.0], [99.5, 24620.0], [99.6, 24935.0], [99.7, 25233.0], [99.8, 25579.0], [99.9, 26009.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 11424.0, "series": [{"data": [[100.0, 2829.0], [200.0, 1994.0], [300.0, 3144.0], [400.0, 7139.0], [500.0, 10618.0], [600.0, 11424.0], [700.0, 9955.0], [800.0, 5655.0], [900.0, 1663.0], [1000.0, 222.0], [1100.0, 20.0], [1200.0, 10.0], [1300.0, 18.0], [1400.0, 21.0], [1500.0, 22.0], [1600.0, 32.0], [1700.0, 32.0], [1800.0, 19.0], [1900.0, 8.0], [2000.0, 6.0], [2100.0, 12.0], [2200.0, 17.0], [2300.0, 26.0], [2400.0, 23.0], [2500.0, 17.0], [2600.0, 16.0], [2800.0, 25.0], [2700.0, 18.0], [2900.0, 17.0], [3000.0, 21.0], [3100.0, 14.0], [3200.0, 20.0], [3300.0, 15.0], [3400.0, 15.0], [3500.0, 26.0], [3600.0, 22.0], [3700.0, 23.0], [3800.0, 34.0], [3900.0, 40.0], [4000.0, 49.0], [4200.0, 84.0], [4100.0, 64.0], [4300.0, 122.0], [4600.0, 176.0], [4400.0, 121.0], [4500.0, 157.0], [4700.0, 273.0], [4800.0, 322.0], [5000.0, 537.0], [4900.0, 437.0], [5100.0, 696.0], [5200.0, 934.0], [5300.0, 1043.0], [5400.0, 1285.0], [5500.0, 1557.0], [5600.0, 1803.0], [5700.0, 2098.0], [5800.0, 2329.0], [5900.0, 2462.0], [6000.0, 2648.0], [6100.0, 2632.0], [6200.0, 2780.0], [6300.0, 2589.0], [6400.0, 2628.0], [6500.0, 2464.0], [6600.0, 2323.0], [6800.0, 1950.0], [6900.0, 1821.0], [6700.0, 2134.0], [7000.0, 1711.0], [7100.0, 1469.0], [7300.0, 1202.0], [7200.0, 1227.0], [7400.0, 962.0], [7500.0, 894.0], [7600.0, 695.0], [7700.0, 639.0], [7800.0, 588.0], [7900.0, 505.0], [8000.0, 399.0], [8100.0, 399.0], [8600.0, 187.0], [8300.0, 268.0], [8200.0, 318.0], [8400.0, 234.0], [8500.0, 214.0], [8700.0, 164.0], [9200.0, 80.0], [8800.0, 118.0], [9100.0, 95.0], [8900.0, 125.0], [9000.0, 112.0], [9300.0, 81.0], [9400.0, 80.0], [9500.0, 81.0], [9600.0, 63.0], [9700.0, 52.0], [9800.0, 39.0], [9900.0, 32.0], [10000.0, 21.0], [10200.0, 29.0], [10100.0, 31.0], [10700.0, 17.0], [10300.0, 26.0], [10500.0, 27.0], [10400.0, 12.0], [10600.0, 19.0], [10900.0, 14.0], [11000.0, 25.0], [11200.0, 25.0], [10800.0, 18.0], [11100.0, 19.0], [11300.0, 23.0], [11400.0, 20.0], [11500.0, 24.0], [11600.0, 17.0], [11700.0, 15.0], [11900.0, 17.0], [12100.0, 7.0], [12000.0, 21.0], [12200.0, 17.0], [11800.0, 12.0], [12300.0, 18.0], [12400.0, 15.0], [12500.0, 30.0], [12600.0, 29.0], [12700.0, 15.0], [12800.0, 20.0], [12900.0, 24.0], [13000.0, 14.0], [13100.0, 14.0], [13200.0, 7.0], [13300.0, 11.0], [13400.0, 13.0], [13500.0, 8.0], [13600.0, 7.0], [13700.0, 8.0], [13800.0, 5.0], [13900.0, 8.0], [14000.0, 5.0], [14200.0, 3.0], [14300.0, 5.0], [14100.0, 3.0], [14400.0, 12.0], [14500.0, 5.0], [14700.0, 5.0], [14800.0, 6.0], [14600.0, 3.0], [14900.0, 3.0], [15000.0, 5.0], [15200.0, 3.0], [15100.0, 2.0], [15300.0, 2.0], [15400.0, 1.0], [15700.0, 1.0], [15900.0, 2.0], [16300.0, 2.0], [16800.0, 1.0], [17200.0, 1.0], [17400.0, 1.0], [18000.0, 4.0], [18200.0, 6.0], [17600.0, 1.0], [17800.0, 1.0], [18400.0, 2.0], [18600.0, 6.0], [18800.0, 4.0], [19000.0, 7.0], [19200.0, 7.0], [19400.0, 1.0], [20200.0, 5.0], [20400.0, 3.0], [20000.0, 5.0], [19800.0, 4.0], [19600.0, 4.0], [20800.0, 5.0], [21200.0, 4.0], [20600.0, 8.0], [21400.0, 2.0], [21000.0, 1.0], [22200.0, 5.0], [22000.0, 4.0], [21600.0, 5.0], [22400.0, 7.0], [21800.0, 2.0], [23000.0, 7.0], [23200.0, 5.0], [22800.0, 4.0], [23400.0, 5.0], [22600.0, 4.0], [23600.0, 4.0], [23800.0, 12.0], [24400.0, 31.0], [24000.0, 14.0], [24200.0, 21.0], [25200.0, 29.0], [24800.0, 34.0], [25000.0, 30.0], [25400.0, 30.0], [24600.0, 29.0], [26000.0, 14.0], [25600.0, 36.0], [26400.0, 7.0], [25800.0, 25.0], [26600.0, 5.0], [26200.0, 14.0], [26800.0, 8.0], [27600.0, 1.0], [27000.0, 3.0], [27400.0, 2.0], [27200.0, 1.0], [28000.0, 1.0], [28400.0, 2.0], [27800.0, 1.0], [28200.0, 1.0], [29200.0, 1.0], [17100.0, 1.0], [17300.0, 1.0], [16700.0, 1.0], [17900.0, 3.0], [17700.0, 3.0], [18100.0, 2.0], [18700.0, 6.0], [18900.0, 6.0], [19300.0, 3.0], [18500.0, 2.0], [19100.0, 3.0], [20100.0, 7.0], [20300.0, 4.0], [19700.0, 4.0], [19500.0, 7.0], [19900.0, 2.0], [21100.0, 4.0], [20700.0, 5.0], [21300.0, 4.0], [21500.0, 4.0], [20900.0, 4.0], [20500.0, 2.0], [21900.0, 6.0], [21700.0, 7.0], [22300.0, 4.0], [22500.0, 5.0], [22100.0, 4.0], [23100.0, 8.0], [22700.0, 4.0], [22900.0, 2.0], [23300.0, 3.0], [23500.0, 11.0], [23700.0, 9.0], [24100.0, 21.0], [23900.0, 16.0], [24500.0, 26.0], [24300.0, 28.0], [24700.0, 37.0], [25100.0, 51.0], [25500.0, 38.0], [25300.0, 30.0], [24900.0, 34.0], [25700.0, 26.0], [26100.0, 12.0], [26300.0, 13.0], [26500.0, 3.0], [25900.0, 14.0], [26700.0, 3.0], [27500.0, 3.0], [26900.0, 8.0], [27300.0, 2.0], [27700.0, 1.0], [28100.0, 1.0], [28300.0, 1.0], [28500.0, 1.0], [29300.0, 1.0], [28700.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 29300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 15188.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 55841.0, "series": [{"data": [[0.0, 15188.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 39524.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 55841.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1000.0, "minX": 1.61890452E12, "maxY": 1000.0, "series": [{"data": [[1.61890452E12, 1000.0], [1.6189047E12, 1000.0], [1.61890464E12, 1000.0], [1.61890482E12, 1000.0], [1.61890476E12, 1000.0], [1.61890488E12, 1000.0], [1.61890494E12, 1000.0], [1.61890458E12, 1000.0]], "isOverall": false, "label": "kinesis", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61890494E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3744.177245303157, "minX": 1000.0, "maxY": 3744.177245303157, "series": [{"data": [[1000.0, 3744.177245303157]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1000.0, 3744.177245303157]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1000.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4458.8, "minX": 1.61890452E12, "maxY": 3.39185088E7, "series": [{"data": [[1.61890452E12, 110338.6], [1.6189047E12, 141560.96666666667], [1.61890464E12, 141005.3], [1.61890482E12, 133011.7], [1.61890476E12, 144210.73333333334], [1.61890488E12, 137756.4], [1.61890494E12, 4458.8], [1.61890458E12, 98557.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61890452E12, 2.56675392E7], [1.6189047E12, 3.33840096E7], [1.61890464E12, 3.38664096E7], [1.61890482E12, 3.07751904E7], [1.61890476E12, 3.39185088E7], [1.61890488E12, 3.17187648E7], [1.61890494E12, 1014969.6], [1.61890458E12, 2.29776768E7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61890494E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3413.1427838869536, "minX": 1.61890452E12, "maxY": 5058.925008397715, "series": [{"data": [[1.61890452E12, 3928.8385205232175], [1.6189047E12, 3461.273336801338], [1.61890464E12, 3413.1427838869536], [1.61890482E12, 3733.212991410125], [1.61890476E12, 3425.6127545795925], [1.61890488E12, 3654.145698990158], [1.61890494E12, 3452.65589353612], [1.61890458E12, 5058.925008397715]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61890494E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3413.073329155022, "minX": 1.61890452E12, "maxY": 5058.8627813234825, "series": [{"data": [[1.61890452E12, 3928.4047511652166], [1.6189047E12, 3461.210450262994], [1.61890464E12, 3413.073329155022], [1.61890482E12, 3733.1470311618305], [1.61890476E12, 3425.545738991925], [1.61890488E12, 3654.0817009368634], [1.61890494E12, 3452.5741444866935], [1.61890458E12, 5058.8627813234825]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61890494E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.61890452E12, "maxY": 335.7612389114405, "series": [{"data": [[1.61890452E12, 335.7612389114405], [1.6189047E12, 0.5347089763597483], [1.61890464E12, 0.5293145689704293], [1.61890482E12, 0.4874286789140405], [1.61890476E12, 0.7415519399249055], [1.61890488E12, 0.5504319260250646], [1.61890494E12, 0.0], [1.61890458E12, 2.3761336916358813]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61890494E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 119.0, "minX": 1.61890452E12, "maxY": 29337.0, "series": [{"data": [[1.61890452E12, 16312.0], [1.6189047E12, 12169.0], [1.61890464E12, 10805.0], [1.61890482E12, 12604.0], [1.61890476E12, 11023.0], [1.61890488E12, 11374.0], [1.61890494E12, 9727.0], [1.61890458E12, 29337.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61890452E12, 7340.0], [1.6189047E12, 6974.0], [1.61890464E12, 6810.0], [1.61890482E12, 7694.0], [1.61890476E12, 6857.0], [1.61890488E12, 7436.1], [1.61890494E12, 7120.2], [1.61890458E12, 9481.000000000004]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61890452E12, 13107.849999999997], [1.6189047E12, 8477.859999999997], [1.61890464E12, 8267.919999999998], [1.61890482E12, 9426.5], [1.61890476E12, 8379.259999999995], [1.61890488E12, 8841.220000000001], [1.61890494E12, 8601.28000000001], [1.61890458E12, 25954.64]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61890452E12, 8556.399999999994], [1.6189047E12, 7424.0], [1.61890464E12, 7208.0], [1.61890482E12, 8242.0], [1.61890476E12, 7244.0], [1.61890488E12, 7832.049999999999], [1.61890494E12, 7498.549999999999], [1.61890458E12, 24447.849999999995]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61890452E12, 129.0], [1.6189047E12, 124.0], [1.61890464E12, 121.0], [1.61890482E12, 119.0], [1.61890476E12, 123.0], [1.61890488E12, 120.0], [1.61890494E12, 125.0], [1.61890458E12, 123.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61890452E12, 4726.5], [1.6189047E12, 981.0], [1.61890464E12, 990.0], [1.61890482E12, 971.0], [1.61890476E12, 971.0], [1.61890488E12, 1009.0], [1.61890494E12, 878.5], [1.61890458E12, 996.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61890494E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 193.0, "minX": 1.0, "maxY": 24448.0, "series": [{"data": [[12.0, 20432.0], [15.0, 611.0], [16.0, 21417.0], [24.0, 22143.0], [35.0, 193.0], [40.0, 3914.5], [43.0, 4408.0], [44.0, 22979.5], [47.0, 817.0], [46.0, 9796.0], [55.0, 5435.0], [57.0, 784.0], [68.0, 744.5], [74.0, 5597.0], [75.0, 10983.0], [76.0, 5254.5], [100.0, 4786.5], [133.0, 8204.0], [142.0, 24017.5], [145.0, 6750.0], [152.0, 2767.5], [171.0, 7846.0], [178.0, 964.0], [190.0, 5797.5], [192.0, 5431.5], [198.0, 5209.5], [203.0, 4747.0], [207.0, 805.0], [206.0, 909.5], [211.0, 4223.0], [213.0, 825.0], [219.0, 5095.0], [217.0, 5045.0], [222.0, 5273.5], [221.0, 796.5], [218.0, 24448.0], [216.0, 5289.0], [223.0, 821.0], [226.0, 992.0], [229.0, 995.5], [231.0, 823.5], [228.0, 6013.0], [234.0, 5182.5], [239.0, 925.0], [236.0, 5383.0], [237.0, 942.0], [233.0, 5820.0], [243.0, 4944.0], [245.0, 948.0], [241.0, 3056.5], [246.0, 2547.0], [242.0, 912.5], [247.0, 884.5], [240.0, 5917.5], [244.0, 5476.0], [250.0, 921.0], [249.0, 839.5], [252.0, 1011.0], [255.0, 5442.0], [254.0, 5086.0], [251.0, 970.0], [253.0, 970.0], [248.0, 841.0], [271.0, 894.0], [267.0, 3828.0], [266.0, 874.0], [264.0, 5187.0], [265.0, 924.0], [259.0, 929.0], [258.0, 985.5], [261.0, 949.5], [260.0, 4693.0], [257.0, 5125.0], [263.0, 1020.0], [256.0, 952.0], [270.0, 5205.0], [269.0, 898.0], [268.0, 947.5], [285.0, 922.0], [287.0, 921.0], [282.0, 4589.5], [283.0, 960.0], [275.0, 4745.0], [284.0, 900.5], [279.0, 4508.0], [272.0, 886.5], [273.0, 848.0], [274.0, 4790.5], [278.0, 864.0], [277.0, 5269.0], [276.0, 885.5], [286.0, 865.5], [280.0, 915.5], [281.0, 848.0], [291.0, 5223.0], [296.0, 1024.5], [295.0, 5176.0], [290.0, 4891.5], [292.0, 2142.0], [289.0, 4697.0], [288.0, 923.0], [299.0, 930.5], [297.0, 909.0], [298.0, 927.5], [301.0, 5055.0], [300.0, 969.0], [302.0, 5066.0], [303.0, 942.0], [293.0, 947.5], [294.0, 878.0], [307.0, 925.0], [310.0, 4933.0], [314.0, 5037.0], [312.0, 960.0], [318.0, 5299.0], [316.0, 916.5], [317.0, 4561.0], [315.0, 1001.0], [309.0, 891.0], [308.0, 4971.0], [311.0, 4429.0], [313.0, 5244.0], [306.0, 947.5], [305.0, 4827.0], [304.0, 5170.5], [322.0, 986.0], [332.0, 4893.0], [325.0, 5145.0], [334.0, 5322.5], [323.0, 1045.0], [327.0, 887.5], [320.0, 915.0], [321.0, 821.0], [326.0, 4860.0], [335.0, 918.5], [331.0, 902.0], [329.0, 5059.5], [324.0, 5037.0], [338.0, 5652.5], [344.0, 906.5], [337.0, 906.0], [349.0, 4811.5], [336.0, 927.0], [348.0, 2170.0], [340.0, 885.5], [341.0, 981.5], [351.0, 880.0], [339.0, 5191.0], [356.0, 5105.5], [355.0, 944.0], [359.0, 856.0], [365.0, 919.0], [376.0, 4936.5], [397.0, 11282.0], [1.0, 666.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 397.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 193.0, "minX": 1.0, "maxY": 24448.0, "series": [{"data": [[12.0, 20432.0], [15.0, 611.0], [16.0, 21417.0], [24.0, 22143.0], [35.0, 193.0], [40.0, 3914.5], [43.0, 4408.0], [44.0, 22979.5], [47.0, 817.0], [46.0, 9796.0], [55.0, 5435.0], [57.0, 784.0], [68.0, 744.5], [74.0, 5597.0], [75.0, 10983.0], [76.0, 5254.5], [100.0, 4786.5], [133.0, 8204.0], [142.0, 24017.5], [145.0, 6750.0], [152.0, 2767.5], [171.0, 7725.0], [178.0, 964.0], [190.0, 5797.5], [192.0, 5431.5], [198.0, 5209.5], [203.0, 4747.0], [207.0, 805.0], [206.0, 909.5], [211.0, 4223.0], [213.0, 825.0], [219.0, 5095.0], [217.0, 5045.0], [222.0, 5273.5], [221.0, 796.5], [218.0, 24448.0], [216.0, 5289.0], [223.0, 821.0], [226.0, 992.0], [229.0, 995.5], [231.0, 823.5], [228.0, 6013.0], [234.0, 5182.5], [239.0, 922.5], [236.0, 5383.0], [237.0, 942.0], [233.0, 5820.0], [243.0, 4944.0], [245.0, 948.0], [241.0, 3056.5], [246.0, 2547.0], [242.0, 912.5], [247.0, 884.5], [240.0, 5917.5], [244.0, 5476.0], [250.0, 921.0], [249.0, 839.5], [252.0, 1011.0], [255.0, 5442.0], [254.0, 5086.0], [251.0, 970.0], [253.0, 970.0], [248.0, 841.0], [271.0, 894.0], [267.0, 3828.0], [266.0, 874.0], [264.0, 5187.0], [265.0, 924.0], [259.0, 929.0], [258.0, 985.5], [261.0, 949.5], [260.0, 4693.0], [257.0, 5125.0], [263.0, 1020.0], [256.0, 952.0], [270.0, 5205.0], [269.0, 898.0], [268.0, 947.5], [285.0, 922.0], [287.0, 921.0], [282.0, 4589.5], [283.0, 960.0], [275.0, 4741.0], [284.0, 900.5], [279.0, 4508.0], [272.0, 886.5], [273.0, 848.0], [274.0, 4790.5], [278.0, 864.0], [277.0, 5269.0], [276.0, 885.5], [286.0, 865.5], [280.0, 914.5], [281.0, 848.0], [291.0, 5223.0], [296.0, 1024.5], [295.0, 5176.0], [290.0, 4891.5], [292.0, 2142.0], [289.0, 4697.0], [288.0, 923.0], [299.0, 930.5], [297.0, 909.0], [298.0, 927.5], [301.0, 5055.0], [300.0, 969.0], [302.0, 5064.5], [303.0, 942.0], [293.0, 947.5], [294.0, 878.0], [307.0, 925.0], [310.0, 4933.0], [314.0, 5037.0], [312.0, 960.0], [318.0, 5299.0], [316.0, 916.5], [317.0, 4561.0], [315.0, 1001.0], [309.0, 891.0], [308.0, 4971.0], [311.0, 4429.0], [313.0, 5244.0], [306.0, 947.5], [305.0, 4827.0], [304.0, 5170.5], [322.0, 986.0], [332.0, 4893.0], [325.0, 5145.0], [334.0, 5322.5], [323.0, 1045.0], [327.0, 887.5], [320.0, 915.0], [321.0, 821.0], [326.0, 4860.0], [335.0, 918.5], [331.0, 902.0], [329.0, 5059.5], [324.0, 5037.0], [338.0, 5652.5], [344.0, 906.5], [337.0, 906.0], [349.0, 4811.5], [336.0, 927.0], [348.0, 2170.0], [340.0, 885.5], [341.0, 979.0], [351.0, 880.0], [339.0, 5191.0], [356.0, 5105.5], [355.0, 944.0], [359.0, 856.0], [365.0, 919.0], [376.0, 4936.5], [397.0, 11282.0], [1.0, 666.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 397.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.183333333333333, "minX": 1.61890452E12, "maxY": 292.96666666666664, "series": [{"data": [[1.61890452E12, 238.36666666666667], [1.6189047E12, 288.35], [1.61890464E12, 292.51666666666665], [1.61890482E12, 265.81666666666666], [1.61890476E12, 292.96666666666664], [1.61890488E12, 262.8833333333333], [1.61890494E12, 3.183333333333333], [1.61890458E12, 198.46666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61890494E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.766666666666667, "minX": 1.61890452E12, "maxY": 292.96666666666664, "series": [{"data": [[1.61890452E12, 221.7], [1.6189047E12, 288.35], [1.61890464E12, 292.51666666666665], [1.61890482E12, 265.81666666666666], [1.61890476E12, 292.96666666666664], [1.61890488E12, 273.96666666666664], [1.61890494E12, 8.766666666666667], [1.61890458E12, 198.46666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61890494E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.766666666666667, "minX": 1.61890452E12, "maxY": 292.96666666666664, "series": [{"data": [[1.61890452E12, 221.7], [1.6189047E12, 288.35], [1.61890464E12, 292.51666666666665], [1.61890482E12, 265.81666666666666], [1.61890476E12, 292.96666666666664], [1.61890488E12, 273.96666666666664], [1.61890494E12, 8.766666666666667], [1.61890458E12, 198.46666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61890494E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.766666666666667, "minX": 1.61890452E12, "maxY": 292.96666666666664, "series": [{"data": [[1.61890452E12, 221.7], [1.6189047E12, 288.35], [1.61890464E12, 292.51666666666665], [1.61890482E12, 265.81666666666666], [1.61890476E12, 292.96666666666664], [1.61890488E12, 273.96666666666664], [1.61890494E12, 8.766666666666667], [1.61890458E12, 198.46666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61890494E12, "title": "Total Transactions Per Second"}},
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

