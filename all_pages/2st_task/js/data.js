let myGalleryDatabase = [];


for (let i = 1; i <= 20; i++) {
    myGalleryDatabase.push({
        id: i,
        img: `../img/${i}st_img.jpg`,
        title: `${i}st image`
    })
}


export default myGalleryDatabase;