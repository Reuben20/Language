let span_element = document.getElementById('span_element')

span_element.addEventListener("click", () => {
    let svg = document.getElementById('blue_copy')
    svg.style.transform = 'rotate(90deg)'
    let div = document.getElementById('pop_up')
    div.style.visibility = 'visible'
})

