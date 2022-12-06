const yt = require('yt-converter');

const obtenerAudio = async () => {
    const data = await yt.getInfo('https://www.youtube.com/watch?v=LyX0tQ_jFys');
    
    const { title  } = data;
    await ytConvert(title);
}

const ytConvert = async ( title ) =>{
    return await yt.convertAudio({
        url: 'https://www.youtube.com/watch?v=LyX0tQ_jFys',
        itag: 140,
        directoryDownload: './src/assets/',
        title: title
    })
}

obtenerAudio();