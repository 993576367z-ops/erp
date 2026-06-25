<?php ?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>HELI-X Railway Edition</title>
<style>
body{margin:0;background:#06111f;color:#fff;font-family:Arial}
.container{max-width:1200px;margin:40px auto;padding:30px;background:#111827;border-radius:20px}
textarea{width:100%;height:180px;background:#000;color:#0ff;padding:10px;margin:10px 0}
button{padding:12px 30px;background:#00c8ff;border:0;color:#fff}
</style>
</head>
<body>
<div class="container">
<h1>🚁 HELI-X Translator Railway Edition</h1>
<textarea id="source"></textarea>
<button onclick="run()">Translate</button>
<textarea id="result"></textarea>
</div>
<script>
async function run(){
 const fd=new FormData();
 fd.append("text",document.getElementById("source").value);
 const r=await fetch("api/translate.php",{method:"POST",body:fd});
 const d=await r.json();
 document.getElementById("result").value=d.translation;
}
</script>
</body>
</html>
