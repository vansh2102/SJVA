function changeFormAction() {
  var item = document.getElementById("item").value;
  var form = this;
  form.action = "https://aviationweather.gov/metar/data?ids=' + item + "&format=raw&hours=0&taf=off&layout=on";
  form.submit();
}