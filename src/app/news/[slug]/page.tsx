import { getArticle } from "@/utils/news";

export default async function Article({ params }: { params: { slug: string } }) {
    const article = await getArticle(params.slug);
    const dateNow = Date.now();

    return (<>
        <div>slug: {params.slug}</div>
        <h2>fetched at {dateNow}</h2>
        
        <div>{article}</div>
    </>)
}