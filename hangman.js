let password = "Porwać się z motyką na słońce";
password = password.toUpperCase();

let lengthPassword = password.length;
let mistake = 0;

let password1 = "";

for (i = 0; i < lengthPassword; i++) {
  if (password.charAt(i) == " ") password1 = password1 + " ";
  else password1 = password1 + "-";
}

function writePassword() {
  document.getElementById("board").innerHTML = password1;
}

window.onload = game;

var letter = new Array(35);

letter[0] = "A";
letter[1] = "Ą";
letter[2] = "B";
letter[3] = "C";
letter[4] = "Ć";
letter[5] = "D";
letter[6] = "E";
letter[7] = "Ę";
letter[8] = "F";
letter[9] = "G";
letter[10] = "H";
letter[11] = "I";
letter[12] = "J";
letter[13] = "K";
letter[14] = "L";
letter[15] = "Ł";
letter[16] = "M";
letter[17] = "N";
letter[18] = "Ń";
letter[19] = "O";
letter[20] = "Ó";
letter[21] = "P";
letter[22] = "Q";
letter[23] = "R";
letter[24] = "S";
letter[25] = "Ś";
letter[26] = "T";
letter[27] = "U";
letter[28] = "V";
letter[29] = "W";
letter[30] = "X";
letter[31] = "Y";
letter[32] = "Z";
letter[33] = "Ż";
letter[34] = "Ź";

function game() {
  var alphabetGame = "";

  for (i = 0; i <= 34; i++) {
    var element = "l" + i;
    alphabetGame =
      alphabetGame +
      '<div class="letter" onclick="check(' +
      i +
      ')" id="' +
      element +
      '">' +
      letter[i] +
      "</div>";
  }

  document.getElementById("alphabet").innerHTML = alphabetGame;

  writePassword();
}

String.prototype.setSign = function (position, sign) {
  if (position > this.length - 1) return this.toString();
  else return this.substr(0, position) + sign + this.substr(position + 1);
};

function check(nr) {
  let hit = false;
  for (i = 0; i < lengthPassword; i++) {
    if (password.charAt(i) == letter[nr]) {
      password1 = password1.setSign(i, letter[nr]);
      hit = true;
    }
  }

  if (hit == true) {
    var element = "l" + nr;
    document.getElementById(element).style.background = "#9BD770";
    document.getElementById(element).style.color = "#375F1B";
    document.getElementById(element).style.border = "3px solid #375F1B";
    document.getElementById(element).style.cursor = "default";

    writePassword();
  } else {
    var element = "l" + nr;
    document.getElementById(element).style.background = "#FE8176";
    document.getElementById(element).style.color = "#A70F01";
    document.getElementById(element).style.border = "3px solid #A70F01";
    document.getElementById(element).style.cursor = "default";
    document.getElementById(element).setAttribute("onclick", ";");

    mistake++;
    let image = "img/s" + mistake + ".jpg";

    document.getElementById("gallows").innerHTML =
      '<img src="' + image + '" alt=""/>';
  }

  if (mistake >= 9) {
    document.getElementById("alphabet").innerHTML =
      "Niestety nie udało się :(" +
      '<button class="reset" onclick="location.reload()">JESZCZE RAZ?</button>';
  }

  if (password == password1) {
    document.getElementById("alphabet").innerHTML =
      "Podano prawidłowe hasło" +
      '<button class="reset" onclick="location.reload()">JESZCZE RAZ?</button>';
  }
}
