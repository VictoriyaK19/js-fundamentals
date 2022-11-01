function gramophone(band, album, song) {
    const duration = (album.length * band.length) * song.length/2;
    const rotations = Math.ceil(duration / 2.5);
    
    console.log(`The plate was rotated ${rotations} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');

