const initNewsletterPopup = async () => {
    const modal = document.querySelector('#eg-newsletter-modal')

    if (!modal) return

    const showModal = () => {
      // console.log("show modal")
        MicroModal.show(modal.id, {
            disableScroll: true,
            onShow: modal => {
                // console.log('onShow')
            },
            onClose: modal => {
                // console.log('onClose')
            }
        })
    }

    if (window.location.href.includes('eg-newsletter-popup')) {
        showModal()
        return
    }

  if (!Shopify.designMode){
    if (document.cookie.indexOf('eg-newsletter-popup') > -1) return

    await new Promise(resolve => setTimeout(resolve, Number(modal.dataset.delay) * 1000))
    showModal()

    createCookie('eg-newsletter-popup', true, Number(modal.dataset.daysToWait))
  }
}
initNewsletterPopup()

const createCookie = (name, value, days) => {
    let date, expires
    if (days) {
        date = new Date()
        date.setDate(date.getDate() + days)
        expires = '; expires=' + date.toUTCString()
    } else {
        expires = ''
    }
    document.cookie = name + '=' + value + expires + '; path=/'
}



