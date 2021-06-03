const jsdom = require('jsdom')
const { JSDOM } = jsdom
const axios = require('axios')

const main = async () => {
  if (process.argv.length !== 3) {
    console.log('Usage: node my-wget.js "url"')
    process.exit(1)
  } else {
    try {
      const response = await axios.get(`${process.argv[2]}`)
      const dom = new JSDOM(response.data)

      const urlTag = process.argv[2]
      const titleTag = dom.window.document.querySelector('title').textContent
      //console.log(`title: ${titleTag}`)
      const links = dom.window.document.querySelectorAll('a').length
      console.log(links)
      const nbImgs = dom.window.document.querySelectorAll('img')
      //console.log(nbImgs.length)
      const contentLength = response.headers['content-length']
      //console.log(contentLength)
      // Correction iil te suffisait d'ecrire ton objet info ci dessous
      // pour compléter l'exercice. Dommage.
      const info = {
        url: urlTag,
        contentLength: contentLength,
        title: titleTag,
        nbUrls: links,
        nbImgs: nbImgs,
      }
    } catch (e) {
      console.log(e.message)
    }
  }
}

main()

//Malheureusement pas terminé...
