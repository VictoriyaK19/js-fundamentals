function calculateVolumeAndArea(radius, height) {
    
    let volume = 1/3 * Math.PI * Math.pow(radius, 2) * height;

    let area = Math.PI * Math.pow(radius, 2) + 
            Math.PI * radius * Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);

}

calculateVolumeAndArea(3, 5);
calculateVolumeAndArea(3.3, 7.8);
