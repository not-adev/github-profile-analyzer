import axios from "axios";

export const analyzeGithubProfile = async (username) => {
    const userResponse = await axios.get(
        `https://api.github.com/users/${username}`
    );

    const repoResponse = await axios.get(
        `https://api.github.com/users/${username}/repos`
    );

    const user = userResponse.data;
    const repos = repoResponse.data;

    const totalStars = repos.reduce(
        (sum, repo) => sum + repo.stargazers_count,
        0
    );

    const mostStarredRepo = repos.sort(
        (a, b) =>
            b.stargazers_count - a.stargazers_count
    )[0]?.name || null;

    const accountAgeDays = Math.floor(
        (Date.now() - new Date(user.created_at)) /
        (1000 * 60 * 60 * 24)
    );

    const profileScore =
        user.followers * 3 +
        user.public_repos * 2 +
        totalStars * 5;

    return {
        username: user.login,
        name: user.name,
        public_repos: user.public_repos,
        followers: user.followers,
        following: user.following,
        account_age_days: accountAgeDays,
        total_stars: totalStars,
        profile_score: profileScore,
        profile_url: user.html_url,
        most_starred_repo: mostStarredRepo,
    };
};
