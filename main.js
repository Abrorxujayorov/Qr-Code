const btn = document.getElementById('btn')
const inp = document.getElementById('inp')
const pic = document.getElementById('pic')
const api1 = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=`
btn.addEventListener('click', () => {
    pic.src = `${api1}${inp.value}`
})
