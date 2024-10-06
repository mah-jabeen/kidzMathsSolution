var question = prompt(`What do you want?
    a)Forward counting
    b)Tables
    c)Backward counting`);

if (question === "a)Forward counting") {
  for (var i = 1; i <= 100; i += 10) {
    for (var j = i; j < i + 10; j++) {
      document.write(" " + j + " ");
    }
    document.write("</br>");
  }
} else if (question === "b)Tables") {
  var startFrom = +prompt("Enter Start Number");
  var endFrom = +prompt("Enter Ending Number");
  var tableOf = +prompt("Enter The Number ");

  for (var i = startFrom; i <= endFrom; i++) {
    document.write(tableOf + "  X  " + i + " = " + tableOf * i + "</br>");
  }
} else if (question === "a)Backward counting") {
  for (var i = 100; i >= 1; i -= 10) {
    for (var j = i; j > i - 10; j--) {
      document.write(" " + j + " ");
    }
    document.write("</br>");
  }
} else {
  document.write(`Enter something from above`);
}
