export const redirectToWhatsappIt = () => {
  const details = {
    number: '+6598716988',
    template: encodeURIComponent('Hello Designerworks, i need IT Services!')
  }

  const whatsappUrl = `https://wa.me/${details.number}?text=${details.template}`
  window.open(whatsappUrl, '_blank')
}

export const redirectToWhatsappEdu = () => {
  const details = {
    number: '+6285782787878',
    template: encodeURIComponent('Hello Designerworks, i need Education Services!')
  }

  const whatsappUrl = `https://wa.me/${details.number}?text=${details.template}`
  window.open(whatsappUrl, '_blank')
}

export const redirectToInstagram = () => {
  const instagramUrl = 'https://www.instagram.com/designerworks.com.sg/'
  window.open(instagramUrl, '_blank')
}

export const redirectToTikTok = () => {
  const tiktokUrl = 'https://www.tiktok.com/'
  window.open(tiktokUrl, '_blank')
}

export const redirectToYouTube = () => {
  const youtubeUrl = 'https://www.youtube.com/@DESIGNERWORKSSG'
  window.open(youtubeUrl, '_blank')
}
