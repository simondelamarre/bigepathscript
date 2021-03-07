/**
 * Retrieve a list of pictures URLs
 * @param {HTMLElement} target // the parent element of list
 * @return {string[]} the list of pictures urts
 **/
import { IMAGE } from "../types/Image";

export default (target: HTMLElement): Partial<IMAGE>[] => {
  const response: Partial<IMAGE>[] = [];
  try {
    const images = target.querySelectorAll('img');
    for (const picture of images) {
      try {
        let desc: string = "";
        if (picture.attributes['alt'])
          desc = picture.attributes['alt'].value;
        let url: string = ""
        if (picture.attributes['src'])
          url = picture.attributes['src'].value;

        // get srcset and data-srcset if exist
        const dataSrcSet = picture.attributes['data-srcset'];
        console.log('dataSrcSet ', dataSrcSet);
        if (dataSrcSet) {
          const srcSetList = dataSrcSet.value.split(',');
          console.log('srcSetList ', srcSetList)
          for (let pix of srcSetList) {
            const uri = pix.split(' ')[0];
            if (response.findIndex(e => e.url === uri) === -1) {
              response.push({ url: uri, description: "no-description" });
            }
          }
        }
        //data-srcset
        const srcset = picture.attributes['srcset'];
        if (srcset) {
          const srcSetList = srcset.value.split(',');
          for (let pix of srcSetList) {
            const uri = pix.split(' ')[0];
            if (response.findIndex(e => e.url === uri) === -1) {
              response.push({ url: uri, description: "no-description" });
            }
          }
        }
        /* if (url && url !== "")
          if (url.indexOf('http') === -1) url = `https://${url}`; */
        if (response.findIndex(e => e.url === url) === -1)
          response.push({ url: url, description: desc ? desc : "no-description" });
      } catch (err) {
        console.error('ERROR in pictures selector loop');
      }
    }

  } catch (err) {
    console.error("ERROR PICTuRe LIST ::: ", err);
  }
  return response;
}