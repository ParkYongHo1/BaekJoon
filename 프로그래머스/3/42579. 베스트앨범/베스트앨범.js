function solution(genres, plays) {
    let result = [];
    let total = {};
    let info = {};
    genres.map((genre,index)=>{
        total[genre] = (total[genre] || 0) + plays[index];
        if(!info[genre]) info[genre] = [];
        info[genre].push({index:index, plays:plays[index]})
    })
    const sortedGenre = Object.keys(total).sort((a,b) => total[b]- total[a])
    sortedGenre.map((genre,index)=>{
        const song = info[genre].sort((a,b)=> {
            if(b.plays === a.plays) return a.index - b.index
            return b.plays - a.plays   
        }).slice(0,2)
        result.push(...song.map(ele=>ele.index))
    })

    return result;
}