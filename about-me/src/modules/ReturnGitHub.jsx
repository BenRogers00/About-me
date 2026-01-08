import { Octokit } from "@octokit/core";
import { useEffect, useState } from "react";

export default function ReturnGitHub() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const octokit = new Octokit();

        const fetchUser = async () => {
            try {
                const response = await octokit.request("GET /users/BenRogers00", {
                    headers: {
                        "X-GitHub-Api-Version": "2022-11-28",
                    },
                });
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
        console.log(data);
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h2>{data.login}</h2>
            <p>{data.bio}</p>
            <p>{data.repos}</p>
            <p>Public Repos: {data.public_repos}</p>
            <a href={data.html_url} target="_blank" rel="noopener noreferrer">
                <button>Go to my GitHub Profile</button>
            </a>
        </div>
    );
}