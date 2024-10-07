var question = prompt(`what do you want?
    a)forward counting
    b)tables
    c)backward counting`).toLowerCase();

if (question === "a)forward counting") {
  for (var i = 1; i <= 100; i += 10) {
    for (var j = i; j < i + 10; j++) {
      document.write( "   " +  j  + "   ");
    }
    document.write("</br>");
  }
} else if (question === "b)tables") {
  var startFrom = +prompt("Enter Start Number");
  var endFrom = +prompt("Enter Ending Number");
  var tableOf = +prompt("Enter The Number ");

  for (var i = startFrom; i <= endFrom; i++) {
    document.write( tableOf + "  X  " + i + " = " + tableOf * i + "</br>" );
  }

} else if (question === "c)backward counting") {
  for (var i = 100; i >= 1; i -= 10) {
    for (var j = i; j > i - 10; j--) {
        document.write("   " + j + "   " );
    }
    document.write("</br>");
  }
} else {
  document.write(`<center> <b> Enter something from above <b> </center>`);
}
