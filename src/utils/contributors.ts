import { CONTRIBUTORS_SOURCE } from "./constants";

type Socials = {
    Twitter?: string;
    Twitch?: string;
    Github?: string;
    VideoService?: string;
    Discord?: string;
    Email?: string;
    Website?: string;
};

type Contributions = {
    "OpenSource"?: string[];
    "YARC-Charters"?: string[];
    "YARC-Launcher"?: string[];
    "YARG"?: string[];
    "Community"?: string[];
};

type Contributor = {
    Name: string;
    SpecialRole?: string;
    Socials?: Socials;
    Contributions?: Contributions;
};

type ContributorsList = Contributor[];

export const getContributors = async () => {
    const contributors: ContributorsList = await fetch(CONTRIBUTORS_SOURCE, { next: { tags: ["contributors"] } } ).then(res => res.json());
    return contributors;
}