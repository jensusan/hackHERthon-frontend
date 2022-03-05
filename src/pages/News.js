const News = ({news}) => {
    return(
        <>
            <h1>News</h1>
           { news.map((article) => {
                <div>
                    <a href={article.url} target='_blank'>
                    <img src={article.image} alt={article.title}/>
                    </a>
                    <h2>{article.title}</h2>
                    <h3>{article.source.name}</h3>
                    <p>{article.description}</p>
                </div>
            })}

        </>
    )
};

export default News;