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
        data: {"result": {"minY": 115.0, "minX": 0.0, "maxY": 30005.0, "series": [{"data": [[0.0, 115.0], [0.1, 126.0], [0.2, 129.0], [0.3, 130.0], [0.4, 132.0], [0.5, 133.0], [0.6, 134.0], [0.7, 134.0], [0.8, 135.0], [0.9, 136.0], [1.0, 136.0], [1.1, 137.0], [1.2, 138.0], [1.3, 138.0], [1.4, 139.0], [1.5, 139.0], [1.6, 140.0], [1.7, 140.0], [1.8, 141.0], [1.9, 141.0], [2.0, 142.0], [2.1, 142.0], [2.2, 143.0], [2.3, 143.0], [2.4, 144.0], [2.5, 144.0], [2.6, 145.0], [2.7, 145.0], [2.8, 146.0], [2.9, 146.0], [3.0, 147.0], [3.1, 147.0], [3.2, 148.0], [3.3, 148.0], [3.4, 149.0], [3.5, 149.0], [3.6, 150.0], [3.7, 151.0], [3.8, 151.0], [3.9, 152.0], [4.0, 153.0], [4.1, 153.0], [4.2, 154.0], [4.3, 155.0], [4.4, 156.0], [4.5, 157.0], [4.6, 158.0], [4.7, 160.0], [4.8, 161.0], [4.9, 163.0], [5.0, 166.0], [5.1, 168.0], [5.2, 170.0], [5.3, 174.0], [5.4, 177.0], [5.5, 180.0], [5.6, 183.0], [5.7, 186.0], [5.8, 188.0], [5.9, 191.0], [6.0, 193.0], [6.1, 196.0], [6.2, 199.0], [6.3, 202.0], [6.4, 205.0], [6.5, 208.0], [6.6, 211.0], [6.7, 213.0], [6.8, 216.0], [6.9, 219.0], [7.0, 221.0], [7.1, 224.0], [7.2, 226.0], [7.3, 229.0], [7.4, 231.0], [7.5, 234.0], [7.6, 236.0], [7.7, 238.0], [7.8, 241.0], [7.9, 243.0], [8.0, 245.0], [8.1, 247.0], [8.2, 249.0], [8.3, 252.0], [8.4, 254.0], [8.5, 256.0], [8.6, 258.0], [8.7, 260.0], [8.8, 262.0], [8.9, 264.0], [9.0, 266.0], [9.1, 268.0], [9.2, 271.0], [9.3, 273.0], [9.4, 277.0], [9.5, 281.0], [9.6, 285.0], [9.7, 288.0], [9.8, 292.0], [9.9, 295.0], [10.0, 298.0], [10.1, 302.0], [10.2, 305.0], [10.3, 308.0], [10.4, 311.0], [10.5, 315.0], [10.6, 318.0], [10.7, 320.0], [10.8, 324.0], [10.9, 326.0], [11.0, 329.0], [11.1, 332.0], [11.2, 334.0], [11.3, 337.0], [11.4, 340.0], [11.5, 343.0], [11.6, 346.0], [11.7, 348.0], [11.8, 351.0], [11.9, 354.0], [12.0, 357.0], [12.1, 360.0], [12.2, 362.0], [12.3, 365.0], [12.4, 367.0], [12.5, 370.0], [12.6, 373.0], [12.7, 375.0], [12.8, 378.0], [12.9, 380.0], [13.0, 382.0], [13.1, 385.0], [13.2, 387.0], [13.3, 389.0], [13.4, 391.0], [13.5, 393.0], [13.6, 396.0], [13.7, 398.0], [13.8, 400.0], [13.9, 402.0], [14.0, 403.0], [14.1, 405.0], [14.2, 407.0], [14.3, 409.0], [14.4, 410.0], [14.5, 412.0], [14.6, 413.0], [14.7, 415.0], [14.8, 417.0], [14.9, 419.0], [15.0, 420.0], [15.1, 422.0], [15.2, 423.0], [15.3, 425.0], [15.4, 427.0], [15.5, 429.0], [15.6, 431.0], [15.7, 432.0], [15.8, 434.0], [15.9, 435.0], [16.0, 437.0], [16.1, 438.0], [16.2, 439.0], [16.3, 441.0], [16.4, 442.0], [16.5, 444.0], [16.6, 445.0], [16.7, 446.0], [16.8, 447.0], [16.9, 449.0], [17.0, 450.0], [17.1, 451.0], [17.2, 453.0], [17.3, 454.0], [17.4, 455.0], [17.5, 456.0], [17.6, 458.0], [17.7, 459.0], [17.8, 460.0], [17.9, 462.0], [18.0, 463.0], [18.1, 464.0], [18.2, 465.0], [18.3, 467.0], [18.4, 468.0], [18.5, 469.0], [18.6, 470.0], [18.7, 472.0], [18.8, 473.0], [18.9, 474.0], [19.0, 475.0], [19.1, 476.0], [19.2, 477.0], [19.3, 478.0], [19.4, 479.0], [19.5, 480.0], [19.6, 481.0], [19.7, 482.0], [19.8, 483.0], [19.9, 485.0], [20.0, 486.0], [20.1, 487.0], [20.2, 488.0], [20.3, 489.0], [20.4, 490.0], [20.5, 491.0], [20.6, 492.0], [20.7, 493.0], [20.8, 494.0], [20.9, 495.0], [21.0, 496.0], [21.1, 497.0], [21.2, 498.0], [21.3, 499.0], [21.4, 500.0], [21.5, 501.0], [21.6, 502.0], [21.7, 503.0], [21.8, 504.0], [21.9, 505.0], [22.0, 506.0], [22.1, 507.0], [22.2, 508.0], [22.3, 509.0], [22.4, 510.0], [22.5, 510.0], [22.6, 512.0], [22.7, 513.0], [22.8, 513.0], [22.9, 514.0], [23.0, 515.0], [23.1, 516.0], [23.2, 517.0], [23.3, 518.0], [23.4, 519.0], [23.5, 520.0], [23.6, 521.0], [23.7, 522.0], [23.8, 523.0], [23.9, 524.0], [24.0, 524.0], [24.1, 525.0], [24.2, 526.0], [24.3, 527.0], [24.4, 528.0], [24.5, 529.0], [24.6, 530.0], [24.7, 530.0], [24.8, 531.0], [24.9, 532.0], [25.0, 533.0], [25.1, 533.0], [25.2, 534.0], [25.3, 535.0], [25.4, 536.0], [25.5, 537.0], [25.6, 538.0], [25.7, 539.0], [25.8, 539.0], [25.9, 540.0], [26.0, 541.0], [26.1, 542.0], [26.2, 543.0], [26.3, 544.0], [26.4, 544.0], [26.5, 545.0], [26.6, 546.0], [26.7, 547.0], [26.8, 548.0], [26.9, 549.0], [27.0, 549.0], [27.1, 550.0], [27.2, 551.0], [27.3, 552.0], [27.4, 553.0], [27.5, 553.0], [27.6, 555.0], [27.7, 555.0], [27.8, 556.0], [27.9, 557.0], [28.0, 558.0], [28.1, 559.0], [28.2, 559.0], [28.3, 560.0], [28.4, 561.0], [28.5, 562.0], [28.6, 563.0], [28.7, 563.0], [28.8, 564.0], [28.9, 565.0], [29.0, 566.0], [29.1, 567.0], [29.2, 568.0], [29.3, 569.0], [29.4, 569.0], [29.5, 570.0], [29.6, 571.0], [29.7, 572.0], [29.8, 573.0], [29.9, 573.0], [30.0, 574.0], [30.1, 575.0], [30.2, 576.0], [30.3, 577.0], [30.4, 578.0], [30.5, 578.0], [30.6, 579.0], [30.7, 580.0], [30.8, 581.0], [30.9, 581.0], [31.0, 582.0], [31.1, 583.0], [31.2, 584.0], [31.3, 585.0], [31.4, 585.0], [31.5, 586.0], [31.6, 587.0], [31.7, 588.0], [31.8, 588.0], [31.9, 589.0], [32.0, 590.0], [32.1, 591.0], [32.2, 592.0], [32.3, 592.0], [32.4, 593.0], [32.5, 594.0], [32.6, 594.0], [32.7, 595.0], [32.8, 596.0], [32.9, 597.0], [33.0, 598.0], [33.1, 598.0], [33.2, 599.0], [33.3, 600.0], [33.4, 601.0], [33.5, 602.0], [33.6, 603.0], [33.7, 603.0], [33.8, 604.0], [33.9, 605.0], [34.0, 605.0], [34.1, 606.0], [34.2, 607.0], [34.3, 608.0], [34.4, 609.0], [34.5, 609.0], [34.6, 610.0], [34.7, 611.0], [34.8, 611.0], [34.9, 612.0], [35.0, 613.0], [35.1, 614.0], [35.2, 615.0], [35.3, 616.0], [35.4, 616.0], [35.5, 617.0], [35.6, 618.0], [35.7, 619.0], [35.8, 619.0], [35.9, 620.0], [36.0, 621.0], [36.1, 622.0], [36.2, 622.0], [36.3, 623.0], [36.4, 624.0], [36.5, 625.0], [36.6, 626.0], [36.7, 626.0], [36.8, 627.0], [36.9, 628.0], [37.0, 629.0], [37.1, 629.0], [37.2, 630.0], [37.3, 631.0], [37.4, 632.0], [37.5, 632.0], [37.6, 633.0], [37.7, 634.0], [37.8, 635.0], [37.9, 636.0], [38.0, 636.0], [38.1, 637.0], [38.2, 638.0], [38.3, 639.0], [38.4, 640.0], [38.5, 640.0], [38.6, 641.0], [38.7, 642.0], [38.8, 643.0], [38.9, 644.0], [39.0, 644.0], [39.1, 645.0], [39.2, 646.0], [39.3, 647.0], [39.4, 648.0], [39.5, 649.0], [39.6, 649.0], [39.7, 650.0], [39.8, 651.0], [39.9, 652.0], [40.0, 653.0], [40.1, 654.0], [40.2, 654.0], [40.3, 655.0], [40.4, 656.0], [40.5, 657.0], [40.6, 658.0], [40.7, 658.0], [40.8, 659.0], [40.9, 660.0], [41.0, 661.0], [41.1, 661.0], [41.2, 662.0], [41.3, 663.0], [41.4, 664.0], [41.5, 665.0], [41.6, 665.0], [41.7, 666.0], [41.8, 667.0], [41.9, 668.0], [42.0, 669.0], [42.1, 670.0], [42.2, 671.0], [42.3, 671.0], [42.4, 672.0], [42.5, 673.0], [42.6, 674.0], [42.7, 675.0], [42.8, 675.0], [42.9, 676.0], [43.0, 677.0], [43.1, 678.0], [43.2, 679.0], [43.3, 679.0], [43.4, 680.0], [43.5, 681.0], [43.6, 682.0], [43.7, 683.0], [43.8, 683.0], [43.9, 684.0], [44.0, 685.0], [44.1, 686.0], [44.2, 687.0], [44.3, 687.0], [44.4, 688.0], [44.5, 689.0], [44.6, 690.0], [44.7, 691.0], [44.8, 691.0], [44.9, 692.0], [45.0, 693.0], [45.1, 694.0], [45.2, 694.0], [45.3, 695.0], [45.4, 696.0], [45.5, 697.0], [45.6, 698.0], [45.7, 698.0], [45.8, 699.0], [45.9, 700.0], [46.0, 701.0], [46.1, 702.0], [46.2, 703.0], [46.3, 703.0], [46.4, 704.0], [46.5, 705.0], [46.6, 706.0], [46.7, 707.0], [46.8, 708.0], [46.9, 708.0], [47.0, 709.0], [47.1, 710.0], [47.2, 711.0], [47.3, 712.0], [47.4, 712.0], [47.5, 713.0], [47.6, 714.0], [47.7, 715.0], [47.8, 716.0], [47.9, 717.0], [48.0, 717.0], [48.1, 718.0], [48.2, 719.0], [48.3, 720.0], [48.4, 721.0], [48.5, 722.0], [48.6, 722.0], [48.7, 723.0], [48.8, 724.0], [48.9, 725.0], [49.0, 726.0], [49.1, 726.0], [49.2, 727.0], [49.3, 728.0], [49.4, 729.0], [49.5, 729.0], [49.6, 730.0], [49.7, 731.0], [49.8, 732.0], [49.9, 733.0], [50.0, 734.0], [50.1, 734.0], [50.2, 735.0], [50.3, 736.0], [50.4, 737.0], [50.5, 738.0], [50.6, 738.0], [50.7, 739.0], [50.8, 740.0], [50.9, 741.0], [51.0, 742.0], [51.1, 742.0], [51.2, 743.0], [51.3, 744.0], [51.4, 745.0], [51.5, 746.0], [51.6, 746.0], [51.7, 747.0], [51.8, 748.0], [51.9, 749.0], [52.0, 750.0], [52.1, 750.0], [52.2, 751.0], [52.3, 752.0], [52.4, 753.0], [52.5, 754.0], [52.6, 754.0], [52.7, 755.0], [52.8, 756.0], [52.9, 757.0], [53.0, 758.0], [53.1, 758.0], [53.2, 759.0], [53.3, 760.0], [53.4, 761.0], [53.5, 762.0], [53.6, 763.0], [53.7, 763.0], [53.8, 764.0], [53.9, 765.0], [54.0, 766.0], [54.1, 767.0], [54.2, 767.0], [54.3, 768.0], [54.4, 769.0], [54.5, 770.0], [54.6, 770.0], [54.7, 771.0], [54.8, 772.0], [54.9, 773.0], [55.0, 773.0], [55.1, 774.0], [55.2, 775.0], [55.3, 775.0], [55.4, 776.0], [55.5, 777.0], [55.6, 778.0], [55.7, 778.0], [55.8, 779.0], [55.9, 780.0], [56.0, 781.0], [56.1, 782.0], [56.2, 782.0], [56.3, 783.0], [56.4, 784.0], [56.5, 785.0], [56.6, 785.0], [56.7, 786.0], [56.8, 787.0], [56.9, 788.0], [57.0, 788.0], [57.1, 789.0], [57.2, 790.0], [57.3, 791.0], [57.4, 792.0], [57.5, 792.0], [57.6, 793.0], [57.7, 794.0], [57.8, 795.0], [57.9, 796.0], [58.0, 796.0], [58.1, 797.0], [58.2, 798.0], [58.3, 799.0], [58.4, 799.0], [58.5, 800.0], [58.6, 801.0], [58.7, 802.0], [58.8, 802.0], [58.9, 803.0], [59.0, 804.0], [59.1, 804.0], [59.2, 805.0], [59.3, 806.0], [59.4, 807.0], [59.5, 807.0], [59.6, 808.0], [59.7, 809.0], [59.8, 809.0], [59.9, 810.0], [60.0, 811.0], [60.1, 811.0], [60.2, 812.0], [60.3, 813.0], [60.4, 814.0], [60.5, 814.0], [60.6, 815.0], [60.7, 816.0], [60.8, 816.0], [60.9, 817.0], [61.0, 818.0], [61.1, 819.0], [61.2, 819.0], [61.3, 820.0], [61.4, 821.0], [61.5, 821.0], [61.6, 822.0], [61.7, 823.0], [61.8, 823.0], [61.9, 824.0], [62.0, 825.0], [62.1, 826.0], [62.2, 826.0], [62.3, 827.0], [62.4, 828.0], [62.5, 828.0], [62.6, 829.0], [62.7, 830.0], [62.8, 830.0], [62.9, 831.0], [63.0, 832.0], [63.1, 832.0], [63.2, 833.0], [63.3, 834.0], [63.4, 835.0], [63.5, 835.0], [63.6, 836.0], [63.7, 837.0], [63.8, 837.0], [63.9, 838.0], [64.0, 839.0], [64.1, 840.0], [64.2, 840.0], [64.3, 841.0], [64.4, 842.0], [64.5, 842.0], [64.6, 843.0], [64.7, 844.0], [64.8, 844.0], [64.9, 845.0], [65.0, 846.0], [65.1, 846.0], [65.2, 847.0], [65.3, 848.0], [65.4, 849.0], [65.5, 849.0], [65.6, 850.0], [65.7, 851.0], [65.8, 851.0], [65.9, 852.0], [66.0, 853.0], [66.1, 853.0], [66.2, 854.0], [66.3, 855.0], [66.4, 855.0], [66.5, 856.0], [66.6, 857.0], [66.7, 857.0], [66.8, 858.0], [66.9, 859.0], [67.0, 860.0], [67.1, 860.0], [67.2, 861.0], [67.3, 861.0], [67.4, 862.0], [67.5, 863.0], [67.6, 864.0], [67.7, 864.0], [67.8, 865.0], [67.9, 866.0], [68.0, 866.0], [68.1, 867.0], [68.2, 868.0], [68.3, 869.0], [68.4, 869.0], [68.5, 870.0], [68.6, 871.0], [68.7, 871.0], [68.8, 872.0], [68.9, 873.0], [69.0, 874.0], [69.1, 874.0], [69.2, 875.0], [69.3, 876.0], [69.4, 876.0], [69.5, 877.0], [69.6, 878.0], [69.7, 879.0], [69.8, 879.0], [69.9, 880.0], [70.0, 881.0], [70.1, 881.0], [70.2, 882.0], [70.3, 883.0], [70.4, 883.0], [70.5, 884.0], [70.6, 885.0], [70.7, 886.0], [70.8, 886.0], [70.9, 887.0], [71.0, 888.0], [71.1, 889.0], [71.2, 889.0], [71.3, 890.0], [71.4, 891.0], [71.5, 891.0], [71.6, 892.0], [71.7, 893.0], [71.8, 893.0], [71.9, 894.0], [72.0, 895.0], [72.1, 895.0], [72.2, 896.0], [72.3, 897.0], [72.4, 897.0], [72.5, 898.0], [72.6, 899.0], [72.7, 900.0], [72.8, 900.0], [72.9, 901.0], [73.0, 902.0], [73.1, 903.0], [73.2, 903.0], [73.3, 904.0], [73.4, 905.0], [73.5, 905.0], [73.6, 906.0], [73.7, 907.0], [73.8, 907.0], [73.9, 908.0], [74.0, 909.0], [74.1, 910.0], [74.2, 910.0], [74.3, 911.0], [74.4, 912.0], [74.5, 913.0], [74.6, 913.0], [74.7, 914.0], [74.8, 915.0], [74.9, 916.0], [75.0, 916.0], [75.1, 917.0], [75.2, 918.0], [75.3, 919.0], [75.4, 919.0], [75.5, 920.0], [75.6, 921.0], [75.7, 922.0], [75.8, 922.0], [75.9, 923.0], [76.0, 924.0], [76.1, 925.0], [76.2, 926.0], [76.3, 926.0], [76.4, 927.0], [76.5, 928.0], [76.6, 929.0], [76.7, 929.0], [76.8, 930.0], [76.9, 931.0], [77.0, 932.0], [77.1, 932.0], [77.2, 933.0], [77.3, 934.0], [77.4, 935.0], [77.5, 936.0], [77.6, 936.0], [77.7, 937.0], [77.8, 938.0], [77.9, 939.0], [78.0, 940.0], [78.1, 940.0], [78.2, 941.0], [78.3, 942.0], [78.4, 943.0], [78.5, 944.0], [78.6, 944.0], [78.7, 945.0], [78.8, 946.0], [78.9, 947.0], [79.0, 948.0], [79.1, 948.0], [79.2, 949.0], [79.3, 950.0], [79.4, 951.0], [79.5, 952.0], [79.6, 953.0], [79.7, 953.0], [79.8, 954.0], [79.9, 955.0], [80.0, 956.0], [80.1, 956.0], [80.2, 957.0], [80.3, 958.0], [80.4, 959.0], [80.5, 960.0], [80.6, 961.0], [80.7, 962.0], [80.8, 963.0], [80.9, 964.0], [81.0, 964.0], [81.1, 965.0], [81.2, 966.0], [81.3, 967.0], [81.4, 968.0], [81.5, 969.0], [81.6, 969.0], [81.7, 970.0], [81.8, 971.0], [81.9, 972.0], [82.0, 973.0], [82.1, 973.0], [82.2, 974.0], [82.3, 975.0], [82.4, 976.0], [82.5, 977.0], [82.6, 978.0], [82.7, 979.0], [82.8, 980.0], [82.9, 981.0], [83.0, 981.0], [83.1, 982.0], [83.2, 983.0], [83.3, 984.0], [83.4, 985.0], [83.5, 986.0], [83.6, 987.0], [83.7, 988.0], [83.8, 989.0], [83.9, 990.0], [84.0, 991.0], [84.1, 992.0], [84.2, 993.0], [84.3, 994.0], [84.4, 995.0], [84.5, 996.0], [84.6, 996.0], [84.7, 998.0], [84.8, 998.0], [84.9, 999.0], [85.0, 1000.0], [85.1, 1001.0], [85.2, 1003.0], [85.3, 1004.0], [85.4, 1005.0], [85.5, 1006.0], [85.6, 1007.0], [85.7, 1008.0], [85.8, 1009.0], [85.9, 1010.0], [86.0, 1011.0], [86.1, 1012.0], [86.2, 1013.0], [86.3, 1014.0], [86.4, 1015.0], [86.5, 1016.0], [86.6, 1017.0], [86.7, 1018.0], [86.8, 1019.0], [86.9, 1020.0], [87.0, 1021.0], [87.1, 1022.0], [87.2, 1024.0], [87.3, 1025.0], [87.4, 1026.0], [87.5, 1027.0], [87.6, 1028.0], [87.7, 1029.0], [87.8, 1030.0], [87.9, 1031.0], [88.0, 1032.0], [88.1, 1033.0], [88.2, 1034.0], [88.3, 1036.0], [88.4, 1037.0], [88.5, 1038.0], [88.6, 1040.0], [88.7, 1041.0], [88.8, 1043.0], [88.9, 1044.0], [89.0, 1046.0], [89.1, 1047.0], [89.2, 1049.0], [89.3, 1051.0], [89.4, 1054.0], [89.5, 1060.0], [89.6, 1115.0], [89.7, 1382.0], [89.8, 1412.0], [89.9, 1427.0], [90.0, 1437.0], [90.1, 1444.0], [90.2, 1452.0], [90.3, 1458.0], [90.4, 1464.0], [90.5, 1470.0], [90.6, 1475.0], [90.7, 1479.0], [90.8, 1483.0], [90.9, 1488.0], [91.0, 1492.0], [91.1, 1495.0], [91.2, 1499.0], [91.3, 1502.0], [91.4, 1505.0], [91.5, 1508.0], [91.6, 1512.0], [91.7, 1515.0], [91.8, 1518.0], [91.9, 1521.0], [92.0, 1524.0], [92.1, 1527.0], [92.2, 1531.0], [92.3, 1534.0], [92.4, 1537.0], [92.5, 1540.0], [92.6, 1543.0], [92.7, 1546.0], [92.8, 1549.0], [92.9, 1552.0], [93.0, 1555.0], [93.1, 1558.0], [93.2, 1561.0], [93.3, 1564.0], [93.4, 1567.0], [93.5, 1570.0], [93.6, 1573.0], [93.7, 1577.0], [93.8, 1580.0], [93.9, 1583.0], [94.0, 1586.0], [94.1, 1589.0], [94.2, 1592.0], [94.3, 1596.0], [94.4, 1600.0], [94.5, 1603.0], [94.6, 1607.0], [94.7, 1610.0], [94.8, 1614.0], [94.9, 1618.0], [95.0, 1622.0], [95.1, 1626.0], [95.2, 1630.0], [95.3, 1633.0], [95.4, 1637.0], [95.5, 1641.0], [95.6, 1645.0], [95.7, 1649.0], [95.8, 1653.0], [95.9, 1658.0], [96.0, 1663.0], [96.1, 1667.0], [96.2, 1673.0], [96.3, 1677.0], [96.4, 1682.0], [96.5, 1688.0], [96.6, 1693.0], [96.7, 1699.0], [96.8, 1705.0], [96.9, 1712.0], [97.0, 1719.0], [97.1, 1726.0], [97.2, 1734.0], [97.3, 1742.0], [97.4, 1752.0], [97.5, 1762.0], [97.6, 1772.0], [97.7, 1785.0], [97.8, 1796.0], [97.9, 1808.0], [98.0, 1824.0], [98.1, 1841.0], [98.2, 1863.0], [98.3, 1887.0], [98.4, 1924.0], [98.5, 1962.0], [98.6, 2022.0], [98.7, 2091.0], [98.8, 2161.0], [98.9, 2227.0], [99.0, 2291.0], [99.1, 2350.0], [99.2, 2400.0], [99.3, 2452.0], [99.4, 2509.0], [99.5, 2567.0], [99.6, 2662.0], [99.7, 2982.0], [99.8, 3928.0], [99.9, 4899.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 19371.0, "series": [{"data": [[600.0, 17110.0], [700.0, 17057.0], [800.0, 19371.0], [900.0, 16580.0], [1000.0, 6334.0], [1100.0, 59.0], [1200.0, 32.0], [1300.0, 112.0], [1400.0, 1993.0], [1500.0, 4313.0], [1600.0, 3146.0], [1700.0, 1513.0], [1800.0, 692.0], [1900.0, 301.0], [2000.0, 211.0], [2100.0, 189.0], [2200.0, 218.0], [2300.0, 245.0], [2400.0, 249.0], [2500.0, 220.0], [2600.0, 113.0], [2800.0, 21.0], [2700.0, 67.0], [2900.0, 15.0], [3000.0, 14.0], [3100.0, 17.0], [3300.0, 18.0], [3200.0, 20.0], [3400.0, 16.0], [3500.0, 13.0], [3600.0, 11.0], [3700.0, 8.0], [3800.0, 13.0], [3900.0, 12.0], [4000.0, 8.0], [4100.0, 12.0], [4200.0, 18.0], [4300.0, 16.0], [4500.0, 12.0], [4600.0, 14.0], [4400.0, 13.0], [4800.0, 23.0], [4700.0, 12.0], [5000.0, 16.0], [5100.0, 11.0], [4900.0, 17.0], [5300.0, 10.0], [5200.0, 13.0], [5400.0, 8.0], [5500.0, 5.0], [5600.0, 7.0], [5700.0, 6.0], [5800.0, 4.0], [6100.0, 1.0], [6000.0, 1.0], [6300.0, 1.0], [6400.0, 2.0], [6500.0, 1.0], [6800.0, 4.0], [6700.0, 2.0], [7100.0, 3.0], [7000.0, 3.0], [7300.0, 1.0], [7400.0, 3.0], [7500.0, 1.0], [7600.0, 2.0], [7800.0, 2.0], [8100.0, 1.0], [8700.0, 1.0], [9200.0, 1.0], [9400.0, 1.0], [9700.0, 1.0], [10300.0, 1.0], [11500.0, 1.0], [11400.0, 1.0], [12200.0, 1.0], [13300.0, 1.0], [100.0, 8426.0], [30000.0, 1.0], [200.0, 5180.0], [300.0, 5092.0], [400.0, 10288.0], [500.0, 16046.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 30000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 94597.0, "series": [{"data": [[0.0, 29116.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 94597.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 11882.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 3.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 100.0, "minX": 1.61890332E12, "maxY": 100.0, "series": [{"data": [[1.61890356E12, 100.0], [1.61890422E12, 100.0], [1.61890416E12, 100.0], [1.61890386E12, 100.0], [1.61890428E12, 100.0], [1.61890332E12, 100.0], [1.61890398E12, 100.0], [1.61890392E12, 100.0], [1.61890362E12, 100.0], [1.61890404E12, 100.0], [1.61890374E12, 100.0], [1.61890368E12, 100.0], [1.61890434E12, 100.0], [1.61890338E12, 100.0], [1.6189038E12, 100.0], [1.6189035E12, 100.0], [1.6189044E12, 100.0], [1.61890344E12, 100.0], [1.6189041E12, 100.0]], "isOverall": false, "label": "kinesis", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6189044E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 778.2933229103733, "minX": 100.0, "maxY": 778.2933229103733, "series": [{"data": [[100.0, 778.2933229103733]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[100.0, 778.2933229103733]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 395.5, "minX": 1.61890332E12, "maxY": 1.64093184E7, "series": [{"data": [[1.61890356E12, 68678.83333333333], [1.61890422E12, 73317.76666666666], [1.61890416E12, 68494.0], [1.61890386E12, 68656.78333333334], [1.61890428E12, 74773.53333333334], [1.61890332E12, 395.5], [1.61890398E12, 69159.13333333333], [1.61890392E12, 68399.33333333333], [1.61890362E12, 64699.066666666666], [1.61890404E12, 69044.33333333333], [1.61890374E12, 68765.2], [1.61890368E12, 69008.86666666667], [1.61890434E12, 74616.3], [1.61890338E12, 66428.16666666667], [1.6189038E12, 68043.7], [1.6189035E12, 67833.63333333333], [1.6189044E12, 39984.2], [1.61890344E12, 68439.7], [1.6189041E12, 58266.76666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61890356E12, 1.4848272E7], [1.61890422E12, 1.6034976E7], [1.61890416E12, 1.4626368E7], [1.61890386E12, 1.48502016E7], [1.61890428E12, 1.64093184E7], [1.61890332E12, 67536.0], [1.61890398E12, 1.49659776E7], [1.61890392E12, 1.4819328E7], [1.61890362E12, 1.39664448E7], [1.61890404E12, 1.4935104E7], [1.61890374E12, 1.48849344E7], [1.61890368E12, 1.49428224E7], [1.61890434E12, 1.63649376E7], [1.61890338E12, 1.4404464E7], [1.6189038E12, 1.47016224E7], [1.6189035E12, 1.46475936E7], [1.6189044E12, 8768102.4], [1.61890344E12, 1.49138784E7], [1.6189041E12, 1.24980192E7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6189044E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 704.7027281279387, "minX": 1.61890332E12, "maxY": 904.3155781997842, "series": [{"data": [[1.61890356E12, 782.0532813515262], [1.61890422E12, 722.3699157641388], [1.61890416E12, 813.652242744064], [1.61890386E12, 781.4169698544739], [1.61890428E12, 704.7027281279387], [1.61890332E12, 748.6857142857143], [1.61890398E12, 775.8486333161445], [1.61890392E12, 778.118229166668], [1.61890362E12, 828.4502625034561], [1.61890404E12, 771.7705426356605], [1.61890374E12, 778.6366346901762], [1.61890368E12, 775.2182334710744], [1.61890434E12, 706.3665841292318], [1.61890338E12, 831.399464166108], [1.6189038E12, 786.5505971912337], [1.6189035E12, 787.9250428138583], [1.6189044E12, 732.4011883802827], [1.61890344E12, 774.3260447664628], [1.6189041E12, 904.3155781997842]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6189044E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 704.6979068673569, "minX": 1.61890332E12, "maxY": 904.3131079203336, "series": [{"data": [[1.61890356E12, 782.0500324886343], [1.61890422E12, 722.3670276774968], [1.61890416E12, 813.6481530343003], [1.61890386E12, 781.4126819126818], [1.61890428E12, 704.6979068673569], [1.61890332E12, 748.5714285714287], [1.61890398E12, 775.8454100051603], [1.61890392E12, 778.1144531249989], [1.61890362E12, 828.4473611494893], [1.61890404E12, 771.7666666666677], [1.61890374E12, 778.6323567539533], [1.61890368E12, 775.215263429752], [1.61890434E12, 706.3631647211427], [1.61890338E12, 831.3911587407911], [1.6189038E12, 786.5471846699061], [1.6189035E12, 787.921749440128], [1.6189044E12, 732.3992077464774], [1.61890344E12, 774.3235864924295], [1.6189041E12, 904.3131079203336]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6189044E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.06086154656830468, "minX": 1.61890332E12, "maxY": 269.05714285714294, "series": [{"data": [[1.61890356E12, 0.08317089018843415], [1.61890422E12, 0.09085439229843612], [1.61890416E12, 0.11741424802110766], [1.61890386E12, 0.08095114345114351], [1.61890428E12, 0.08972248353715884], [1.61890332E12, 269.05714285714294], [1.61890398E12, 0.09076843733883458], [1.61890392E12, 0.1006510416666668], [1.61890362E12, 0.08579718154186255], [1.61890404E12, 0.11304909560723492], [1.61890374E12, 0.07816956183562336], [1.61890368E12, 0.07515495867768589], [1.61890434E12, 0.08772550406791688], [1.61890338E12, 11.09202947086404], [1.6189038E12, 0.07770048562803539], [1.6189035E12, 0.06086154656830468], [1.6189044E12, 0.1580105633802817], [1.61890344E12, 0.1040238064432656], [1.6189041E12, 0.13710050949513586]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6189044E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 115.0, "minX": 1.61890332E12, "maxY": 13315.0, "series": [{"data": [[1.61890356E12, 3120.0], [1.61890422E12, 4101.0], [1.61890416E12, 10386.0], [1.61890386E12, 3533.0], [1.61890428E12, 3872.0], [1.61890332E12, 1738.0], [1.61890398E12, 3175.0], [1.61890392E12, 3687.0], [1.61890362E12, 3691.0], [1.61890404E12, 3475.0], [1.61890374E12, 3422.0], [1.61890368E12, 3859.0], [1.61890434E12, 3180.0], [1.61890338E12, 8733.0], [1.6189038E12, 3693.0], [1.6189035E12, 3448.0], [1.6189044E12, 4655.0], [1.61890344E12, 2691.0], [1.6189041E12, 13315.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61890356E12, 1477.4000000000005], [1.61890422E12, 958.0], [1.61890416E12, 1588.0], [1.61890386E12, 1481.4000000000005], [1.61890428E12, 925.0], [1.61890332E12, 1564.3999999999999], [1.61890398E12, 1472.3000000000002], [1.61890392E12, 1479.9000000000005], [1.61890362E12, 1630.0], [1.61890404E12, 1468.0], [1.61890374E12, 1493.0], [1.61890368E12, 1471.0], [1.61890434E12, 931.8000000000002], [1.61890338E12, 1541.0], [1.6189038E12, 1529.0], [1.6189035E12, 1549.8000000000002], [1.6189044E12, 982.0], [1.61890344E12, 1482.0], [1.6189041E12, 1599.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61890356E12, 1892.7599999999993], [1.61890422E12, 1808.0], [1.61890416E12, 2637.7099999999964], [1.61890386E12, 1916.3199999999997], [1.61890428E12, 1785.1000000000422], [1.61890332E12, 1738.0], [1.61890398E12, 1789.0], [1.61890392E12, 1909.1899999999996], [1.61890362E12, 2636.2699999999977], [1.61890404E12, 1798.1800000000003], [1.61890374E12, 2052.550000000001], [1.61890368E12, 1889.050000000002], [1.61890434E12, 1869.5400000000009], [1.61890338E12, 4886.460000000003], [1.6189038E12, 2219.0000000000055], [1.6189035E12, 1959.3199999999997], [1.6189044E12, 1821.400000000005], [1.61890344E12, 1780.3999999999996], [1.6189041E12, 4810.3200000000015]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61890356E12, 1600.0], [1.61890422E12, 1032.0], [1.61890416E12, 1771.0], [1.61890386E12, 1613.0], [1.61890428E12, 978.0], [1.61890332E12, 1714.8], [1.61890398E12, 1575.1499999999996], [1.61890392E12, 1620.0], [1.61890362E12, 1863.0499999999993], [1.61890404E12, 1591.0], [1.61890374E12, 1615.0], [1.61890368E12, 1592.0], [1.61890434E12, 987.0], [1.61890338E12, 1726.3999999999996], [1.6189038E12, 1683.0], [1.6189035E12, 1676.0], [1.6189044E12, 1413.5], [1.61890344E12, 1607.0], [1.6189041E12, 1818.099999999994]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61890356E12, 118.0], [1.61890422E12, 124.0], [1.61890416E12, 121.0], [1.61890386E12, 120.0], [1.61890428E12, 119.0], [1.61890332E12, 149.0], [1.61890398E12, 123.0], [1.61890392E12, 123.0], [1.61890362E12, 124.0], [1.61890404E12, 123.0], [1.61890374E12, 117.0], [1.61890368E12, 122.0], [1.61890434E12, 115.0], [1.61890338E12, 120.0], [1.6189038E12, 121.0], [1.6189035E12, 124.0], [1.6189044E12, 122.0], [1.61890344E12, 121.0], [1.6189041E12, 117.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61890356E12, 736.0], [1.61890422E12, 754.0], [1.61890416E12, 713.5], [1.61890386E12, 727.0], [1.61890428E12, 756.0], [1.61890332E12, 741.0], [1.61890398E12, 721.0], [1.61890392E12, 723.0], [1.61890362E12, 715.0], [1.61890404E12, 725.0], [1.61890374E12, 727.0], [1.61890368E12, 730.0], [1.61890434E12, 754.0], [1.61890338E12, 743.0], [1.6189038E12, 717.0], [1.6189035E12, 710.0], [1.6189044E12, 754.0], [1.61890344E12, 729.0], [1.6189041E12, 714.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6189044E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 424.0, "minX": 7.0, "maxY": 30005.0, "series": [{"data": [[7.0, 827.5], [13.0, 720.0], [17.0, 1176.0], [18.0, 583.0], [19.0, 2970.0], [20.0, 424.0], [21.0, 839.0], [23.0, 654.0], [24.0, 615.5], [27.0, 744.0], [33.0, 3547.0], [32.0, 2625.0], [37.0, 536.0], [36.0, 3088.0], [39.0, 871.0], [42.0, 4115.0], [49.0, 731.0], [48.0, 756.0], [50.0, 2107.5], [53.0, 693.5], [55.0, 2264.0], [58.0, 769.5], [61.0, 677.0], [62.0, 791.0], [64.0, 707.0], [65.0, 1025.0], [66.0, 699.5], [67.0, 721.0], [71.0, 627.0], [70.0, 728.0], [68.0, 767.5], [73.0, 791.0], [72.0, 768.0], [75.0, 685.0], [77.0, 764.0], [79.0, 783.0], [78.0, 1642.5], [76.0, 731.5], [80.0, 628.0], [83.0, 719.0], [82.0, 1592.0], [81.0, 868.0], [87.0, 750.0], [85.0, 865.5], [86.0, 759.5], [84.0, 731.0], [90.0, 801.0], [91.0, 803.0], [89.0, 786.0], [88.0, 745.0], [92.0, 872.5], [93.0, 758.0], [95.0, 758.0], [94.0, 763.5], [97.0, 811.0], [96.0, 796.5], [98.0, 745.5], [99.0, 750.5], [102.0, 726.5], [101.0, 788.0], [100.0, 755.0], [103.0, 727.0], [107.0, 775.0], [104.0, 834.0], [106.0, 913.0], [105.0, 771.0], [110.0, 832.0], [111.0, 806.0], [109.0, 708.0], [108.0, 751.0], [114.0, 801.5], [113.0, 802.0], [115.0, 778.0], [112.0, 812.5], [117.0, 797.0], [119.0, 792.0], [116.0, 777.0], [118.0, 747.5], [123.0, 779.5], [121.0, 764.0], [122.0, 787.5], [120.0, 812.0], [125.0, 790.0], [127.0, 766.0], [126.0, 746.5], [124.0, 762.5], [132.0, 749.0], [130.0, 736.0], [129.0, 758.0], [133.0, 743.0], [128.0, 770.5], [131.0, 750.5], [134.0, 758.0], [135.0, 756.0], [138.0, 765.0], [140.0, 742.0], [139.0, 725.0], [137.0, 729.0], [136.0, 744.5], [143.0, 737.0], [142.0, 725.0], [141.0, 746.0], [145.0, 731.0], [150.0, 723.0], [147.0, 720.0], [148.0, 700.0], [146.0, 733.5], [149.0, 704.5], [151.0, 721.0], [144.0, 741.0], [153.0, 693.0], [156.0, 678.0], [157.0, 631.0], [152.0, 687.0], [159.0, 670.0], [154.0, 718.5], [158.0, 639.0], [155.0, 695.5], [166.0, 578.5], [160.0, 663.0], [162.0, 645.0], [161.0, 641.0], [164.0, 643.0], [167.0, 615.5], [163.0, 650.0], [165.0, 684.5], [171.0, 602.5], [174.0, 595.0], [168.0, 572.0], [172.0, 579.0], [175.0, 545.0], [169.0, 631.5], [180.0, 525.0], [183.0, 582.0], [185.0, 619.0], [197.0, 548.0], [193.0, 526.0], [200.0, 561.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[133.0, 2560.0], [137.0, 30005.0], [145.0, 2556.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 200.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 424.0, "minX": 7.0, "maxY": 30005.0, "series": [{"data": [[7.0, 827.5], [13.0, 720.0], [17.0, 1176.0], [18.0, 583.0], [19.0, 2970.0], [20.0, 424.0], [21.0, 839.0], [23.0, 654.0], [24.0, 615.5], [27.0, 744.0], [33.0, 3547.0], [32.0, 2625.0], [37.0, 536.0], [36.0, 3088.0], [39.0, 871.0], [42.0, 4115.0], [49.0, 731.0], [48.0, 756.0], [50.0, 2107.5], [53.0, 693.5], [55.0, 2264.0], [58.0, 769.5], [61.0, 677.0], [62.0, 791.0], [64.0, 707.0], [65.0, 1025.0], [66.0, 699.5], [67.0, 721.0], [71.0, 627.0], [70.0, 728.0], [68.0, 767.5], [73.0, 791.0], [72.0, 768.0], [75.0, 685.0], [77.0, 764.0], [79.0, 783.0], [78.0, 1642.5], [76.0, 731.5], [80.0, 628.0], [83.0, 719.0], [82.0, 1592.0], [81.0, 868.0], [87.0, 750.0], [85.0, 865.5], [86.0, 759.5], [84.0, 731.0], [90.0, 801.0], [91.0, 803.0], [89.0, 786.0], [88.0, 745.0], [92.0, 872.5], [93.0, 758.0], [95.0, 758.0], [94.0, 763.5], [97.0, 811.0], [96.0, 796.5], [98.0, 745.5], [99.0, 750.5], [102.0, 726.5], [101.0, 788.0], [100.0, 755.0], [103.0, 727.0], [107.0, 775.0], [104.0, 834.0], [106.0, 913.0], [105.0, 771.0], [110.0, 832.0], [111.0, 806.0], [109.0, 708.0], [108.0, 751.0], [114.0, 801.5], [113.0, 802.0], [115.0, 778.0], [112.0, 812.5], [117.0, 797.0], [119.0, 792.0], [116.0, 777.0], [118.0, 747.5], [123.0, 779.5], [121.0, 764.0], [122.0, 787.5], [120.0, 812.0], [125.0, 790.0], [127.0, 766.0], [126.0, 746.5], [124.0, 762.5], [132.0, 749.0], [130.0, 736.0], [129.0, 758.0], [133.0, 743.0], [128.0, 770.5], [131.0, 750.5], [134.0, 758.0], [135.0, 756.0], [138.0, 765.0], [140.0, 742.0], [139.0, 725.0], [137.0, 729.0], [136.0, 744.5], [143.0, 737.0], [142.0, 725.0], [141.0, 746.0], [145.0, 731.0], [150.0, 723.0], [147.0, 720.0], [148.0, 700.0], [146.0, 733.5], [149.0, 704.5], [151.0, 721.0], [144.0, 741.0], [153.0, 693.0], [156.0, 678.0], [157.0, 631.0], [152.0, 687.0], [159.0, 670.0], [154.0, 718.5], [158.0, 639.0], [155.0, 695.5], [166.0, 578.5], [160.0, 663.0], [162.0, 645.0], [161.0, 641.0], [164.0, 643.0], [167.0, 615.5], [163.0, 650.0], [165.0, 684.5], [171.0, 602.5], [174.0, 595.0], [168.0, 572.0], [172.0, 579.0], [175.0, 545.0], [169.0, 631.5], [180.0, 525.0], [183.0, 582.0], [185.0, 619.0], [197.0, 548.0], [193.0, 526.0], [200.0, 561.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[133.0, 2560.0], [137.0, 30005.0], [145.0, 2556.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 200.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.25, "minX": 1.61890332E12, "maxY": 141.73333333333332, "series": [{"data": [[1.61890356E12, 128.25], [1.61890422E12, 138.5], [1.61890416E12, 126.33333333333333], [1.61890386E12, 128.26666666666668], [1.61890428E12, 141.73333333333332], [1.61890332E12, 2.25], [1.61890398E12, 129.26666666666668], [1.61890392E12, 128.0], [1.61890362E12, 120.63333333333334], [1.61890404E12, 129.0], [1.61890374E12, 128.56666666666666], [1.61890368E12, 129.06666666666666], [1.61890434E12, 141.35], [1.61890338E12, 124.41666666666667], [1.6189038E12, 126.98333333333333], [1.6189035E12, 126.51666666666667], [1.6189044E12, 74.06666666666666], [1.61890344E12, 128.81666666666666], [1.6189041E12, 107.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6189044E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.61890332E12, "maxY": 141.73333333333332, "series": [{"data": [[1.61890356E12, 128.25], [1.61890422E12, 138.46666666666667], [1.61890416E12, 126.33333333333333], [1.61890386E12, 128.25], [1.61890428E12, 141.73333333333332], [1.61890332E12, 0.5833333333333334], [1.61890398E12, 129.26666666666668], [1.61890392E12, 128.0], [1.61890362E12, 120.63333333333334], [1.61890404E12, 129.0], [1.61890374E12, 128.56666666666666], [1.61890368E12, 129.06666666666666], [1.61890434E12, 141.35], [1.61890338E12, 124.41666666666667], [1.6189038E12, 126.98333333333333], [1.6189035E12, 126.51666666666667], [1.6189044E12, 75.73333333333333], [1.61890344E12, 128.81666666666666], [1.6189041E12, 107.95]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.61890422E12, 0.03333333333333333]], "isOverall": false, "label": "500", "isController": false}, {"data": [[1.61890386E12, 0.016666666666666666]], "isOverall": false, "label": "503", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6189044E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.61890332E12, "maxY": 141.73333333333332, "series": [{"data": [[1.61890356E12, 128.25], [1.61890422E12, 138.46666666666667], [1.61890416E12, 126.33333333333333], [1.61890386E12, 128.25], [1.61890428E12, 141.73333333333332], [1.61890332E12, 0.5833333333333334], [1.61890398E12, 129.26666666666668], [1.61890392E12, 128.0], [1.61890362E12, 120.63333333333334], [1.61890404E12, 129.0], [1.61890374E12, 128.56666666666666], [1.61890368E12, 129.06666666666666], [1.61890434E12, 141.35], [1.61890338E12, 124.41666666666667], [1.6189038E12, 126.98333333333333], [1.6189035E12, 126.51666666666667], [1.6189044E12, 75.73333333333333], [1.61890344E12, 128.81666666666666], [1.6189041E12, 107.95]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.61890422E12, 0.03333333333333333], [1.61890386E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6189044E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.61890332E12, "maxY": 141.73333333333332, "series": [{"data": [[1.61890356E12, 128.25], [1.61890422E12, 138.46666666666667], [1.61890416E12, 126.33333333333333], [1.61890386E12, 128.25], [1.61890428E12, 141.73333333333332], [1.61890332E12, 0.5833333333333334], [1.61890398E12, 129.26666666666668], [1.61890392E12, 128.0], [1.61890362E12, 120.63333333333334], [1.61890404E12, 129.0], [1.61890374E12, 128.56666666666666], [1.61890368E12, 129.06666666666666], [1.61890434E12, 141.35], [1.61890338E12, 124.41666666666667], [1.6189038E12, 126.98333333333333], [1.6189035E12, 126.51666666666667], [1.6189044E12, 75.73333333333333], [1.61890344E12, 128.81666666666666], [1.6189041E12, 107.95]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.61890422E12, 0.03333333333333333], [1.61890386E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6189044E12, "title": "Total Transactions Per Second"}},
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

