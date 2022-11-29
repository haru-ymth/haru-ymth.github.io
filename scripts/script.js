window.addEventListener('DOMContentLoaded', function() {
	var code=document.getElementsByClassName("script");
for(let i=0;i<code.length;i++){
  var div=document.createElement("div");
  div.style="display: flex;";
    div.innerHTML=`
  <button class="button" onclick="copyScripts(this.parentNode.previousElementSibling);">Copy</button>
  <main style="margin:auto 0 0 0;padding:7px;font-size:15px;opacity:0;transition: opacity 0.2s;">Copied!</main>
  `;
	code[i].after(div);
};
});
/*htmlのidをファイル名の.txtを抜いたやつにする。ファイルは/scripts/codes/にある。*/
function copyScripts(scripts){
	var element = document.createElement("textarea");
  fetch(`https://haruymth.github.io/scripts/codes/${scripts.id}.js`)
  .then(response => response.text())
  .then(data => {
	/*element.value=data;
	document.body.appendChild(element);
	element.select();
	document.execCommand('copy');
	document.body.removeChild(element);*/
	navigator.clipboard.writeText(data);
	scripts.nextElementSibling.children[1].style.opacity="0.7";
	setTimeout(function(){scripts.nextElementSibling.children[1].style.opacity="0"},3000);
  });
};
