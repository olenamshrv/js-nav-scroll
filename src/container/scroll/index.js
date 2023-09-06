scroll = () => {
  // return window.scroll({
  //   top: 0,
  //   left: 0,
  //   behavior: 'smooth',
  // })

  return window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })

  //   window.scrollBy({
  //     top: -scrollY,
  //     behavior: 'smooth',
  //   })
}

window.scroll_top.onclick = scroll

let isDisplay = false

function checkScroll() {
  if (scrollY > window.innerHeight && !isDisplay) {
    window.scroll_top.style = 'display: flex'
    isDisplay = true
    return null
  }
  if (scrollY <= window.innerHeight && isDisplay) {
    window.scroll_top.style.display = 'none'
    isDisplay = false
    return
  }
}

setInterval(checkScroll, 500)
