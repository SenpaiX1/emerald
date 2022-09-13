function abcloak() {
  var win = window.open()
  var url = window.location.href
  var iframe = win.document.createElement('iframe')
  iframe.src = url;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  win.document.body.appendChild(iframe);
}
