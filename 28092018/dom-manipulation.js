var el = document.getElementById('sort-select');
el.addEventListener("change",function() {
    alert(this.value);
    console.log(this);
});