import { getContributors } from "@/utils/contributors";


export default async function Contributors() {
    const contributors = await getContributors();
    const dateNow = Date.now();

    return (<>
        <h1>Contributors</h1>
        <h3>fetched at {dateNow}</h3>
        
        {
            contributors.map(contributor => <p key={contributor.Name}>{contributor.Name}</p>)
        }

    </>);
}
