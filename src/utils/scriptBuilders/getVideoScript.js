import {convertToJSONLDScript} from './convertToJSONLDScript'

let getVideoScript = (videoData) => {
    let videoObject = {}
    videoObject.context = 'https://schema.org/'
    videoObject.type = 'VideoObject'
    videoObject.name = videoData.name ? videoData.name : '' 
    videoObject.description = videoData.description ? videoData.description : '' 
    videoObject.uploadDate = videoData.uploadDate ? videoData.uploadDate : '' 
    videoObject.duration = videoData.durationMinutes ? 'PT' + videoData.durationMinutes + 'M' + (videoData.durationSeconds ? videoData.durationSeconds + 'S' : '0S') : ''
    videoObject.thumbnailUrl = []
    if(videoData.thumbnailUrl) {
        for(var x = 0; x < videoData.thumbnailUrl.length; x++) {
            console.log(videoData.thumbnailUrl[x].url)
            videoObject.thumbnailUrl.push(videoData.thumbnailUrl[x].url)
        }
    }
    videoObject.contentUrl = videoData.contentURL ? videoData.contentURL : '' 
    videoObject.embedUrl = videoData.embedURL ? videoData.embedURL : '' 
    videoObject.publisher = {
        '@type': 'Organization',
        name: videoData.publisherName ? videoData.publisherName : '', 
        logo: {
            '@type': 'ImageObject', 
            url: videoData.publisherLogoURL ? videoData.publisherLogoURL : '', 
            width: videoData.publisherLogoWidth ? videoData.publisherLogoWidth : '', 
            height: videoData.publisherLogoHeight ? videoData.publisherLogoHeight : '' 
        }
    }
    let script = convertToJSONLDScript(videoObject)
    return script 
}

export default getVideoScript 