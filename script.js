$(function() {

  $(".btnConvert").click(function() {
    barcodeConverter($(this).attr('data-from'), $(this).attr('data-to'));
  });

  function barcodeConverter(src, target) {

    var srcData = cleanNewLines($(src).val());
    var srcArrData = srcData.split("\n");

    var n, barData;


    if (srcArrData.length > 0) {

      $(src).effect("transfer", {
        to: $(target)
      }, 700);



      $(target).val("");

      switch (target) {
        case "#base36":
          for (n in srcArrData) {
            barData = (parseInt(srcArrData[n])).toString(36).toUpperCase();

            if (srcArrData[n] !== "" && !isNaN(srcArrData[n])) {
              $(target).val($(target).val() + barData + "\n");
            }
          }
          break;
        case "#base10":
          for (n in srcArrData) {
            barData = (parseInt(srcArrData[n].toLowerCase(), 36));

            if (!isNaN(barData)) {
              $(target).val($(target).val() + barData + "\n");
            }
          }
          break;
        default:
          alert("error");
      }
    }
  }

  function cleanNewLines(myData) {
    return myData.replace(/\r?\n/g, '\n');
  }

});