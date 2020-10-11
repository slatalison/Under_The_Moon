//poem source data
let poemCharacters = [
  ["花", "间", "一", "壶", "酒", "，", "独", "酌", "无", "相", "亲", "。"],
  ["举", "杯", "邀", "明", "月", "，", "对", "影", "成", "三", "人", "。"],
  ["月", "既", "不", "解", "饮", "，", "影", "徒", "随", "我", "身", "。"],
  ["暂", "伴", "月", "将", "影", "，", "行", "乐", "须", "及", "春", "。"],
  ["我", "歌", "月", "徘", "徊", "，", "我", "舞", "影", "零", "乱", "。"],
  ["醒", "时", "相", "交", "欢", "，", "醉", "后", "各", "分", "散", "。"],
  ["永", "结", "无", "情", "游", "，", "相", "期", "邈", "云", "汉", "。"],
];

let sequenceAlter = [
  [1, 2, 3, 4, 5, 0, 6, 7, 8, 9, 10, 0],
  [11, 12, 13, 14, 15, 0, 16, 17, 18, 19, 20, 0],
  [21, 22, 23, 24, 25, 0, 26, 27, 28, 29, 30, 0],
  [31, 32, 33, 34, 35, 0, 36, 37, 38, 39, 40, 0],
  [41, 42, 43, 44, 45, 0, 46, 47, 48, 49, 50, 0],
  [51, 52, 53, 54, 55, 0, 56, 57, 58, 59, 60, 0],
  [61, 62, 63, 64, 65, 0, 66, 67, 68, 69, 70, 0],
];


let shengdiao = [
  [1, 1, 4, 2, 3, 0, 2, 2, 2, 1, 1, 0],
  [3, 1, 1, 2, 4, 0, 4, 3, 2, 1, 2, 0],
  [4, 4, 4, 3, 3, 0, 3, 2, 2, 3, 1, 0],
  [4, 4, 4, 1, 3, 0, 2, 4, 1, 2, 1, 0],
  [3, 1, 4, 2, 2, 0, 3, 3, 3, 2, 4, 0],
  [3, 2, 1, 1, 1, 0, 4, 4, 4, 1, 4, 0],
  [3, 2, 2, 2, 2, 0, 1, 1, 3, 2, 4, 0],
];

let cixing = [
  [2, 0, 1, 2, 2, 0, 1, 3, 1, 0, 3, 0],
  [3, 2, 3, 1, 2, 0, 3, 2, 3, 1, 2, 0],
  [2, 0, 1, 3, 2, 0, 2, 1, 3, 1, 2, 0],
  [1, 1, 2, 0, 2, 0, 3, 1, 1, 0, 2, 0],
  [1, 3, 2, 3, 3, 0, 1, 3, 2, 3, 3, 0],
  [3, 1, 0, 3, 1, 0, 3, 1, 1, 3, 1, 0],
  [1, 3, 1, 2, 2, 0, 0, 3, 3, 2, 2, 0],
];

let pingze = [
  [1, 0, 2, 1, 2, 0, 2, 2, 1, 0, 0, 0],
  [2, 1, 1, 1, 2, 0, 2, 2, 1, 0, 1, 0],
  [2, 2, 2, 2, 2, 0, 0, 2, 1, 1, 1, 0],
  [2, 2, 2, 0, 2, 0, 0, 2, 1, 2, 1, 0],
  [2, 1, 2, 1, 0, 0, 2, 2, 2, 1, 2, 0],
  [2, 1, 1, 1, 1, 0, 2, 2, 2, 0, 2, 0],
  [2, 2, 1, 1, 1, 0, 0, 0, 2, 1, 2, 0],
];

let yuyi = [
  [1, 1, 3, 3, 3, 0, 3, 3, 9, 9, 9, 0],
  [3, 3, 5, 5, 5, 0, 7, 7, 4, 4, 4, 0],
  [5, 3, 3, 3, 3, 0, 7, 4, 4, 4, 4, 0],
  [9, 9, 5, 4, 7, 0, 10, 10, 1, 1, 1, 0],
  [10, 10, 5, 5, 5, 0, 10, 10, 7, 7, 7, 0],
  [11, 11, 4, 4, 4, 0, 3, 3, 9, 9, 9, 0],
  [4, 4, 2, 2, 2, 0, 4, 4, 2, 2, 2, 0],
];

let yuyiBlur = [
  [1, 1, 2, 2, 2, 0, 3, 3, 4, 4, 4, 0],
  [5, 5, 5, 5, 5, 0, 6, 6, 6, 6, 6, 0],
  [7, 7, 7, 7, 7, 0, 8, 8, 8, 8, 8, 0],
  [9, 9, 9, 9, 9, 0, 10, 10, 10, 10, 10, 0],
  [11, 11, 11, 12, 12, 0, 11, 11, 11, 12, 12, 0],
  [1, 1, 3, 3, 3, 0, 3, 3, 13, 13, 13, 0],
  [2, 2, 2, 2, 2, 0, 4, 4, 4, 4, 4, 0],
];





let poemTranslation = [
  "A cup of wine, under the flowering trees; I drink alone, for no friend is near.",
  "Raising my cup I beckon the bright moon, For he, with my shadow, will make three men.",
  "The moon, alas, is no drinker of wine; Listless, my shadow creeps about at my side.",
  "Yet with the moon as friend and the shadow as slave, I must make merry before the Spring is spent.",
  "To the songs I sing the moon flickers her beams; In the dance I weave my shadow tangles and breaks.",
  "While we were sober, three shared the fun; Now we are drunk, each goes his way.",
  "May we long share our odd, inanimate feast, And meet at last on the Cloudy River of the sky.",
];

//dynamic css
styleA1 = () => {
  for (i = 0; i < shengdiao.length; i++) {
    for (j = 0; j < shengdiao[i].length; j++) {
      let thisLetter = shengdiao[i][j];
      if (thisLetter == 1) {
        $("#chara" + i + j).css("color", "rgba(205,209,211,1)");
      } else if (thisLetter == 2) {
        $("#chara" + i + j).css("color", "rgba(205,209,211,0.7)");
      } else if (thisLetter == 4) {
        $("#chara" + i + j).css("color", "rgba(205,209,211,0.4)");
      } else if (thisLetter == 3) {
        $("#chara" + i + j).css("color", "rgba(205,209,211,0.1)");
      } else {
        $("#chara" + i + j).css("color", "rgb(205,209,211)");
      }
    }
  }
};

styleA2 = () => {
  for (i = 0; i < shengdiao.length; i++) {
    for (j = 0; j < shengdiao[i].length; j++) {
      let thisLetter = shengdiao[i][j];
      if (thisLetter == 1) {
        $("#chara" + i + j).css("font-size", "26px");
      } else if (thisLetter == 2) {
        $("#chara" + i + j).css("font-size", "23px");
      } else if (thisLetter == 4) {
        $("#chara" + i + j).css("font-size", "20px");
      } else if (thisLetter == 3) {
        $("#chara" + i + j).css("font-size", "17px");
      } else {
        $("#chara" + i + j).css("font-size", "24px");
      }
    }
  }
};

styleA3 = () => {
  for (i = 0; i < shengdiao.length; i++) {
    for (j = 0; j < shengdiao[i].length; j++) {
      let thisLetter = shengdiao[i][j];
      $("#chara" + i + j).css("color", "transparent");
      if (thisLetter == 1) {
        $("#chara" + i + j).css("text-shadow", "0 0 1.5px rgba(205,209,211,1)");
      } else if (thisLetter == 2) {
        $("#chara" + i + j).css("text-shadow", "0 0 1px rgba(205,209,211,1)");
      } else if (thisLetter == 4) {
        $("#chara" + i + j).css("text-shadow", "0 0 3px rgba(205,209,211,1)");
      } else if (thisLetter == 3) {
        $("#chara" + i + j).css("text-shadow", "0 0 5px rgba(205,209,211,1)");
      } else {
        $("#chara" + i + j).css("text-shadow", "0 0 0px rgba(205,209,211,1)");
      }
    }
  }
};

styleA4 = () => {
  for (i = 0; i < shengdiao.length; i++) {
    for (j = 0; j < shengdiao[i].length; j++) {
      let thisLetter = shengdiao[i][j];
      if (thisLetter == 1) {
        $("#chara" + i + j).css("letter-spacing", "25px");
      } else if (thisLetter == 2) {
        $("#chara" + i + j).css("letter-spacing", "11px");
      } else if (thisLetter == 4) {
        $("#chara" + i + j).css("letter-spacing", "17px");
      } else if (thisLetter == 3) {
        $("#chara" + i + j).css("letter-spacing", "6px");
      } else {
        $("#chara" + i + j).css("letter-spacing", "10px");
      }
    }
  }
};

styleA5 = () => {
  for (i = 0; i < shengdiao.length; i++) {
    for (j = 0; j < shengdiao[i].length; j++) {
      let thisLetter = shengdiao[i][j];
      if (thisLetter == 1) {
        $("#chara" + i + j).css("color", "rgb(138,188,209)");
      } else if (thisLetter == 2) {
        $("#chara" + i + j).css("color", "rgb(252,209,16)");
      } else if (thisLetter == 4) {
        $("#chara" + i + j).css("color", "rgb(239,71,93)");
      } else if (thisLetter == 3) {
        $("#chara" + i + j).css("color", "rgb(97,113,114)");
      } else {
        $("#chara" + i + j).css("color", "rgb(205,209,211)");
      }
    }
  }
};

styleB1 = () => {
  for (i = 0; i < pingze.length; i++) {
    for (j = 0; j < pingze[i].length; j++) {
      let thisLetter = pingze[i][j];
      if (thisLetter == 1) {
        $("#chara" + i + j).css("color", "rgba(205,209,211,0.2)");
      } else if (thisLetter == 0) {
        $("#chara" + i + j).css("color", "rgba(205,209,211,0.6)");
      } else if (thisLetter == 2) {
        $("#chara" + i + j).css("color", "rgba(205,209,211,1)");
      }
    }
  }
};

styleB2 = () => {
  for (i = 0; i < pingze.length; i++) {
    for (j = 0; j < pingze[i].length; j++) {
      let thisLetter = pingze[i][j];
      if (thisLetter == 1) {
        $("#chara" + i + j).css("font-size", "24px");
      } else if (thisLetter == 0) {
        $("#chara" + i + j).css("font-size", "20px");
      } else if (thisLetter == 2) {
        $("#chara" + i + j).css("font-size", "28px");
      }
    }
  }
};

styleB3 = () => {
  for (i = 0; i < pingze.length; i++) {
    for (j = 0; j < pingze[i].length; j++) {
      let thisLetter = pingze[i][j];
      $("#chara" + i + j).css("color", "transparent");
      if (thisLetter == 0) {
        $("#chara" + i + j).css("text-shadow", "0 0 2px rgba(205,209,211,1)");
      } else if (thisLetter == 1) {
        $("#chara" + i + j).css("text-shadow", "0 0 1px rgba(205,209,211,1)");
      } else if (thisLetter == 2) {
        $("#chara" + i + j).css("text-shadow", "0 0 0.5px rgba(205,209,211,1)");
      }
    }
  }
};

styleB4 = () => {
  for (i = 0; i < pingze.length; i++) {
    for (j = 0; j < pingze[i].length; j++) {
      let thisLetter = pingze[i][j];
      if (thisLetter == 1) {
        $("#chara" + i + j).css("vertical-align", "top");
      } else if (thisLetter == 0) {
        $("#chara" + i + j).css("vertical-align", "middle");
      } else if (thisLetter == 2) {
        $("#chara" + i + j).css("vertical-align", "buttom");
      }
    }
  }
};

styleB5 = () => {
  for (i = 0; i < pingze.length; i++) {
    for (j = 0; j < pingze[i].length; j++) {
      let thisLetter = pingze[i][j];
      if (thisLetter == 2) {
        $("#chara" + i + j).css("color", "rgb(252, 209, 16)");
      } else if (thisLetter == 1) {
        $("#chara" + i + j).css("color", "rgb(138, 188, 209)");
      }
    }
  }
};

//
styleC1 = () => {
  for (i = 0; i < cixing.length; i++) {
    for (j = 0; j < cixing[i].length; j++) {
      let thisLetter = cixing[i][j];
      if (thisLetter == 1) {
        $("#chara" + i + j).css("color", "rgba(205,209,211,0.5)");
      } else if (thisLetter == 0) {
        $("#chara" + i + j).css("color", "rgba(205,209,211,0.2)");
      } else if (thisLetter == 2) {
        $("#chara" + i + j).css("color", "rgba(205,209,211,1)");
      }
    }
  }
};

styleC2 = () => {
  for (i = 0; i < cixing.length; i++) {
    for (j = 0; j < cixing[i].length; j++) {
      let thisLetter = cixing[i][j];
      if (thisLetter == 1) {
        $("#chara" + i + j).css("font-size", "24px");
      } else if (thisLetter == 0) {
        $("#chara" + i + j).css("font-size", "24px");
      } else if (thisLetter == 2) {
        $("#chara" + i + j).css("font-size", "28px");
      }
    }
  }
};

styleC3 = () => {
  for (i = 0; i < cixing.length; i++) {
    for (j = 0; j < cixing[i].length; j++) {
      let thisLetter = cixing[i][j];
      $("#chara" + i + j).css("color", "transparent");
      if (thisLetter == 0) {
        $("#chara" + i + j).css("text-shadow", "0 0 5px rgba(205,209,211,1)");
      } else if (thisLetter == 1) {
        $("#chara" + i + j).css("text-shadow", "0 0 1.5px rgba(205,209,211,1)");
      } else if (thisLetter == 2) {
        $("#chara" + i + j).css("text-shadow", "0 0 0px rgba(205,209,211,1)");
      } else if (thisLetter == 3) {
        $("#chara" + i + j).css("text-shadow", "0 0 0px rgba(205,209,211,1)");
      }
    }
  }
};

styleC4 = () => {
  for (i = 0; i < cixing.length; i++) {
    for (j = 0; j < cixing[i].length; j++) {
      let thisLetter = cixing[i][j];
      if (thisLetter == 1) {
        $("#chara" + i + j).css("letter-spacing", "14px");
      } else if (thisLetter == 0) {
        $("#chara" + i + j).css("letter-spacing", "25px");
        $("#chara" + i + j).css("font-weight", "100");
        
      } else if (thisLetter == 2) {
        $("#chara" + i + j).css("letter-spacing", "8px");
        $("#chara" + i + j).css("font-weight", "900");
        $("#chara" + i + j).css("text-shadow", "0.7px 0.7px 0px rgba(205,209,211,1)");
      } else if (thisLetter == 3) {
        $("#chara" + i + j).css("letter-spacing", "12px");
      }
    }
  }
};

styleC5 = () => {
  for (i = 0; i < cixing.length; i++) {
    for (j = 0; j < cixing[i].length; j++) {
      let thisLetter = cixing[i][j];
      if (thisLetter == 1) {
        $("#chara" + i + j).css("color", "rgb(49,112,167)");
      } else if (thisLetter == 0) {
        $("#chara" + i + j).css("color", "rgb(205,209,211)");
      } else if (thisLetter == 2) {
        $("#chara" + i + j).css("color", "rgb(239,71,93)");
      } else if (thisLetter == 3) {
        $("#chara" + i + j).css("color", "rgb(252,209,16)");
      }
    }
  }
};

styleD1 = () => {
  for (i = 0; i < yuyi.length; i++) {
    for (j = 0; j < yuyi[i].length; j++) {
      let recolorP = 1 - yuyiBlur[i][j] / 15;
      $("#chara" + i + j).css("color", "rgba(205,209,211," + recolorP + ")" )
    }
  }
};

styleD2 = () => {
  for (i = 0; i < yuyi.length; i++) {
    for (j = 0; j < yuyi[i].length; j++) {
      let resizeP = yuyiBlur[i][j];
      $("#chara" + i + j).css("font-size", 28 - resizeP + "px" )
      $("#chara" + i + j).css("letter-spacing", 8 + resizeP + "px" )
    }
  }
};

styleD3 = () => {
  for (i = 0; i < yuyiBlur.length; i++) {
    for (j = 0; j < yuyiBlur[i].length; j++) {
      $("#chara" + i + j).css("color", "transparent");
      if (yuyiBlur[i][j] == 0) {
        $("#chara" + i + j).css("text-shadow", "0 0 0px rgba(205,209,211,1)");
      } else if (yuyiBlur[i][j] == 1) {
        $("#chara" + i + j).css("text-shadow", "0 0 0.4px rgba(205,209,211,1)");
      } else if (yuyiBlur[i][j] == 2) {
        $("#chara" + i + j).css("text-shadow", "0 0 0.8px rgba(205,209,211,1)");
      } else if (yuyiBlur[i][j] == 3) {
        $("#chara" + i + j).css("text-shadow", "0 0 1.3px rgba(205,209,211,1)");
      } else if (yuyiBlur[i][j] == 4) {
        $("#chara" + i + j).css("text-shadow", "0 0 1.6px rgba(205,209,211,1)");
      } else if (yuyiBlur[i][j] == 5) {
        $("#chara" + i + j).css("text-shadow", "0 0 2px rgba(205,209,211,1)");
      } else if (yuyiBlur[i][j] == 6) {
        $("#chara" + i + j).css("text-shadow", "0 0 2.2px rgba(205,209,211,1), 6px 2px 2px rgba(205,209,211,0.2)");
      } else if (yuyiBlur[i][j] == 7) {
        $("#chara" + i + j).css("text-shadow", "0 0 2.8px rgba(205,209,211,1)");
      } else if (yuyiBlur[i][j] == 8) {
        $("#chara" + i + j).css("text-shadow", "0 0 3.2px rgba(205,209,211,1), 6px 2px 2px rgba(205,209,211,0.2)");
      } else if (yuyiBlur[i][j] == 9) {
        $("#chara" + i + j).css("text-shadow", "0 0 3.6px rgba(205,209,211,1)");
      } else if (yuyiBlur[i][j] == 10) {
        $("#chara" + i + j).css("text-shadow", "0 0 4px rgba(205,209,211,1)");
      } else if (yuyiBlur[i][j] == 11) {
        $("#chara" + i + j).css("text-shadow", "0 0 4.3px rgba(205,209,211,1)");
      } else if (yuyiBlur[i][j] == 12) {
        $("#chara" + i + j).css("text-shadow", "6px 2px 5px rgba(205,209,211,1), 0 0 3px rgba(205,209,211,0.5)");
      } else if (yuyiBlur[i][j] == 13) {
        $("#chara" + i + j).css("text-shadow", "7px 0 1.6px rgba(205,209,211,0.4), 0 0 0.5px rgba(205,209,211,1)");
      }
    }
  }
};

styleD4 = () => {
  for (i = 0; i < sequenceAlter.length; i++) {
    for (j = 0; j < sequenceAlter[i].length; j++) {
      let thisLetter = sequenceAlter[i][j];
      if (thisLetter == 0) {
        $("#chara" + i + j).css("color", "rgba(205,209,211,0)");
      } else if (thisLetter == 1) {
        $("#chara" + i + j).offset({ left: 800 });
      }else if (thisLetter == 2) {
        $("#chara" + i + j).offset({ left: 760 });
      } else if (thisLetter == 3) {
        $("#chara" + i + j).offset({ left: 690 });
      } else if (thisLetter == 4) {
        $("#chara" + i + j).offset({ left: 705 });
      } else if (thisLetter == 5) {
        $("#chara" + i + j).offset({ left: 735 });
      } else if (thisLetter == 6) {
        $("#chara" + i + j).offset({ left: 920 });
      } else if (thisLetter == 7) {
        $("#chara" + i + j).offset({ left: 895 });
      } else if (thisLetter == 8) {
        $("#chara" + i + j).offset({ left: 965 });
      } else if (thisLetter == 9) {
        $("#chara" + i + j).offset({ left: 985 });
      } else if (thisLetter == 10) {
        $("#chara" + i + j).offset({ left: 1005 });
      } else if (thisLetter == 12) {
        $("#chara" + i + j).offset({ left: 740 });
      } else if (thisLetter == 13) {
        $("#chara" + i + j).offset({ left: 770 });
      } else if (thisLetter == 14) {
        $("#chara" + i + j).offset({ left: 830 });
      } else if (thisLetter == 15) {
        $("#chara" + i + j).offset({ left: 860 });
      } else if (thisLetter == 16) {
        $("#chara" + i + j).offset({ left: 930 });
      } else if (thisLetter == 17) {
        $("#chara" + i + j).offset({ left: 980 });
      } else if (thisLetter == 18) {
        $("#chara" + i + j).offset({ left: 1035 });
      } else if (thisLetter == 19) {
        $("#chara" + i + j).offset({ left: 1065 });
      } else if (thisLetter == 20) {
        $("#chara" + i + j).offset({ left: 1090 });
      } else if (thisLetter == 22) {
        $("#chara" + i + j).offset({ left: 740 });
      } else if (thisLetter == 23) {
        $("#chara" + i + j).offset({ left: 770 });
      } else if (thisLetter == 24) {
        $("#chara" + i + j).offset({ left: 790 });
      } else if (thisLetter == 25) {
        $("#chara" + i + j).offset({ left: 810 });
      } else if (thisLetter == 26) {
        $("#chara" + i + j).offset({ left: 920 });
      } else if (thisLetter == 27) {
        $("#chara" + i + j).offset({ left: 875 });
      } else if (thisLetter == 28) {
        $("#chara" + i + j).offset({ left: 975 });
      } else if (thisLetter == 29) {
        $("#chara" + i + j).offset({ left: 1050 });
      } else if (thisLetter == 30) {
        $("#chara" + i + j).offset({ left: 1070 });
      }else if (thisLetter == 32) {
        $("#chara" + i + j).offset({ left: 710 });
      } else if (thisLetter == 33) {
        $("#chara" + i + j).offset({ left: 755 });
      } else if (thisLetter == 34) {
        $("#chara" + i + j).offset({ left: 825 });
      } else if (thisLetter == 35) {
        $("#chara" + i + j).offset({ left: 870 });
      } else if (thisLetter == 36) {
        $("#chara" + i + j).offset({ left: 980 });
      } else if (thisLetter == 37) {
        $("#chara" + i + j).offset({ left: 1015 });
      } else if (thisLetter == 38) {
        $("#chara" + i + j).offset({ left: 955 });
      } else if (thisLetter == 39) {
        $("#chara" + i + j).offset({ left: 1050 });
      } else if (thisLetter == 40) {
        $("#chara" + i + j).offset({ left: 1100 });
      } else if (thisLetter == 41) {
        $("#chara" + i + j).offset({ left: 742 });
      } else if (thisLetter == 42) {
        $("#chara" + i + j).offset({ left: 762 });
      } else if (thisLetter == 43) {
        $("#chara" + i + j).offset({ left: 795 });
      } else if (thisLetter == 44) {
        $("#chara" + i + j).offset({ left: 830 });
      } else if (thisLetter == 45) {
        $("#chara" + i + j).offset({ left: 850 });
      } else if (thisLetter == 46) {
        $("#chara" + i + j).offset({ left: 990 });
      } else if (thisLetter == 47) {
        $("#chara" + i + j).offset({ left: 1015 });
      } else if (thisLetter == 48) {
        $("#chara" + i + j).offset({ left: 1035 });
      } else if (thisLetter == 49) {
        $("#chara" + i + j).offset({ left: 1140 });
      } else if (thisLetter == 50) {
        $("#chara" + i + j).offset({ left: 1085 });
      } else if (thisLetter == 52) {
        $("#chara" + i + j).offset({ left: 690 });
      } else if (thisLetter == 51) {
        $("#chara" + i + j).offset({ left: 762 });
      } else if (thisLetter == 53) {
        $("#chara" + i + j).offset({ left: 795 });
      } else if (thisLetter == 54) {
        $("#chara" + i + j).offset({ left: 830 });
      } else if (thisLetter == 55) {
        $("#chara" + i + j).offset({ left: 870 });
      } else if (thisLetter == 56) {
        $("#chara" + i + j).offset({ left: 965 });
      } else if (thisLetter == 57) {
        $("#chara" + i + j).offset({ left: 905 });
      } else if (thisLetter == 58) {
        $("#chara" + i + j).offset({ left: 990});
      } else if (thisLetter == 59) {
        $("#chara" + i + j).offset({ left: 1020 });
      } else if (thisLetter == 60) {
        $("#chara" + i + j).offset({ left: 1045 });
      } else if (thisLetter == 61) {
        $("#chara" + i + j).offset({ left: 730 });
      } else if (thisLetter == 62) {
        $("#chara" + i + j).offset({ left: 750 });
      } else if (thisLetter == 63) {
        $("#chara" + i + j).offset({ left: 820 });
      } else if (thisLetter == 64) {
        $("#chara" + i + j).offset({ left: 840 });
      } else if (thisLetter == 65) {
        $("#chara" + i + j).offset({ left: 875 });
      } else if (thisLetter == 66) {
        $("#chara" + i + j).offset({ left: 910 });
      } else if (thisLetter == 67) {
        $("#chara" + i + j).offset({ left: 940 });
      } else if (thisLetter == 68) {
        $("#chara" + i + j).offset({ left: 985 });
      } else if (thisLetter == 70) {
        $("#chara" + i + j).offset({ left: 1060 });
      } else if (thisLetter == 69) {
        $("#chara" + i + j).offset({ left: 1020 });
      }
    }
  }
};

styleD5 = () => {
  for (i = 0; i < yuyi.length; i++) {
    for (j = 0; j < yuyi[i].length; j++) {
      if (yuyi[i][j] == 0) {
        $("#chara" + i + j).css("color", "rgb(205,209,211)");
      } else if (yuyi[i][j] == 1) {
        $("#chara" + i + j).css("color", "rgb(239,71,93)");
      } else if (yuyi[i][j] == 2) {
        $("#chara" + i + j).css("color", "rgb(116,117,155)");
      } else if (yuyi[i][j] == 3) {
        $("#chara" + i + j).css("color", "rgb(138,188,209)");
      } else if (yuyi[i][j] == 4) {
        $("#chara" + i + j).css("color", "rgb(248,179,127)");
      } else if (yuyi[i][j] == 5) {
        $("#chara" + i + j).css("color", "rgb(252,209,16)");
      } else if (yuyi[i][j] == 7) {
        $("#chara" + i + j).css("color", "rgb(15,20,32)");
      } else if (yuyi[i][j] == 8) {
        $("#chara" + i + j).css("color", "rgb(252,209,16)");
      } else if (yuyi[i][j] == 9) {
        $("#chara" + i + j).css("color", "rgb(97,113,114)");
      } else if (yuyi[i][j] == 10) {
        $("#chara" + i + j).css("color", "rgb(173,101,152)");
      } else if (yuyi[i][j] == 11) {
        $("#chara" + i + j).css("color", "rgb(131,203,72)");
      } else if (yuyi[i][j] == 12) {
        $("#chara" + i + j).css("color", "rgb(252,209,16)");
      } else if (yuyi[i][j] == 13) {
        $("#chara" + i + j).css("color", "rgb(92,179,204)");
      }
    }
  }
};

//write buttoms
changeCSS = (cssFile, cssLinkIndex) => {
  let oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
  let newlink = document.createElement("link");
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("type", "text/css");
  newlink.setAttribute("href", cssFile);

  document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
  console.log("Test");
};

for (i = 0; i < 20; i++) {
  $("#pagePanel").append(
    '<a class = "pageButtons" id=' + "pageButton" + i + "></a>"
  );
  $("#pageButton" + i).append("<p>" + (i + 1) + "</p>");
}

//add characters to the page

for (i = 0; i < poemCharacters.length; i++) {
  for (j = 0; j < poemCharacters[i].length; j++) {
    $("#poemContainer").append(
      '<p class="charas" id="chara' +
        i +
        j +
        '">' +
        poemCharacters[i][j] +
        "</p>"
    );
  }
  $("#poemContainer").append(
    '<p class = "translation">' + poemTranslation[i] + "</p>"
  );
}




//link styles to buttons
$("#pageButton0").on("click", styleA1);
$("#pageButton1").on("click", styleA2);
$("#pageButton2").on("click", styleA3);
$("#pageButton3").on("click", styleA4);
$("#pageButton4").on("click", styleA5);
$("#pageButton5").on("click", styleB1);
$("#pageButton6").on("click", styleB2);
$("#pageButton7").on("click", styleB3);
$("#pageButton8").on("click", styleB4);
$("#pageButton9").on("click", styleB5);
$("#pageButton10").on("click", styleC1);
$("#pageButton11").on("click", styleC2);
$("#pageButton12").on("click", styleC3);
$("#pageButton13").on("click", styleC4);
$("#pageButton14").on("click", styleC5);
$("#pageButton15").on("click", styleD1);
$("#pageButton16").on("click", styleD2);
$("#pageButton17").on("click", styleD3);
$("#pageButton18").on("click", styleD4);
$("#pageButton19").on("click", styleD5);
