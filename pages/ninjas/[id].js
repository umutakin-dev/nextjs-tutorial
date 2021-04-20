export const getStaticPaths = async () => {
    const uri = "https://jsonplaceholder.typicode.com/users";
    const res = await fetch(uri);
    const data = await res.json();

    const paths = data.map((ninja) => {
        return {
            params: { id: ninja.id.toString() },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

const Details = () => {
    return (
        <div>
            <h1>Details Page</h1>
        </div>
    );
};

export default Details;
