const url = (backpath) =>  {
    return backpath ? `https://image.tmdb.org/t/p/w500/${backpath}` : null
}


export { url }