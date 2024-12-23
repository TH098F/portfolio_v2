interface SkillEntry {
    name: string, // the string to display for its name
    color: string, // TODO: maybe make this into actual color type
    icon: string, // CSS class(es) of the icon
    link: string
};

export enum Skill {
    C, Cpp, CSharp, Python, Rust, Java, JavaScript, TypeScript, PHP, Ruby, Go, Swift, Kotlin, Elixir, Erlang, Lua, Perl,
    HTML, CSS,
    React, Angular, Vue, NodeJS, ExpressJS, Astro,
    SQL, MySQL, SQLite, PostGreSQL, MongoDB, REST,
    VSCode, Git, GitHub,
    Vulkan, DirectX, OpenGL
};

export const Skills = new Map<Skill, SkillEntry>([
    // languages
    [Skill.C, { name: "C", color: "#000000", icon: "", link: "" }],
    [Skill.Cpp, { name: "C++", color: "#000000", icon: "", link: "" }],
    [Skill.CSharp, { name: "C#", color: "#000000", icon: "", link: "" }],
    [Skill.Python, { name: "Python", color: "#000000", icon: "", link: "" }],
    [Skill.Rust, { name: "Rust", color: "#000000", icon: "", link: "" }],
    [Skill.Java, { name: "Java", color: "#000000", icon: "", link: "" }],
    [Skill.JavaScript, { name: "JavaScript", color: "#fff700", icon: "fab fa-js", link: "" }],
    [Skill.TypeScript, { name: "TypeScript", color: "#3178C6", icon: "lni lni-typescript", link: "https://www.typescriptlang.org" }],
    [Skill.PHP, { name: "PHP", color: "#000000", icon: "", link: "" }],
    [Skill.Ruby, { name: "Ruby", color: "#000000", icon: "", link: "" }],
    [Skill.Go, { name: "Go", color: "#000000", icon: "", link: "" }],
    [Skill.Swift, { name: "Swift", color: "#000000", icon: "", link: "" }],
    [Skill.Kotlin, { name: "Kotlin", color: "#000000", icon: "", link: "" }],
    [Skill.Elixir, { name: "Elixir", color: "#000000", icon: "", link: "" }],
    [Skill.Erlang, { name: "Erlang", color: "#000000", icon: "", link: "" }],
    [Skill.Lua, { name: "Lua", color: "#000000", icon: "", link: "" }],
    [Skill.Perl, { name: "Perl", color: "#000000", icon: "", link: "" }],

    // web
    [Skill.HTML, { name: "HTML", color: "#ff3300", icon: "fab fa-html5", link: "" }],
    [Skill.CSS, { name: "CSS", color: "#2071fe", icon: "fab fa-css3-alt", link: "" }],

    // JS
    [Skill.React, { name: "React", color: "#61DBFB", icon: "fab fa-react", link: "https://react.dev" }],
    [Skill.Angular, { name: "Angular", color: "#000000", icon: "", link: "" }],
    [Skill.Vue, { name: "Vue", color: "#000000", icon: "", link: "" }],
    [Skill.NodeJS, { name: "Node.js", color: "#000000", icon: "", link: "" }],
    [Skill.ExpressJS, { name: "Express.js", color: "#000000", icon: "", link: "" }],
    [Skill.Astro, { name: "Astro", color: "#FF3E00", icon: "fas fa-rocket", link: "https://astro.build" }],

    // DB
    [Skill.SQL, { name: "SQL", color: "#FFFFFF", icon: "fa fa-database", link: "" }],
    [Skill.MySQL, { name: "MySQL", color: "#FFD700", icon: "lni lni-mysql", link: "https://mysql.com" }],
    [Skill.SQLite, { name: "SQLite", color: "#000000", icon: "", link: "" }],
    [Skill.PostGreSQL, { name: "PostGreSQL", color: "#000000", icon: "", link: "" }],
    [Skill.MongoDB, { name: "MongoDB", color: "#47A248", icon: "lni lni-mongodb", link: "" }],
    [Skill.REST, { name: "REST", color: "#FF5733", icon: "fas fa-network-wired", link: "" }],

    // TECH
    [Skill.VSCode, { name: "VS Code", color: "#007ACC", icon: "lni lni-vs-code", link: "https://code.visualstudio.com" }],
    [Skill.Git, { name: "Git", color: "#F34F29", icon: "fab fa-git-alt", link: "https://git-scm.com" }],
    [Skill.GitHub, { name: "GitHub", color: "#eee", icon: "fab fa-github", link: "https://github.com" }],

    [Skill.Vulkan, { name: "Vulkan", color: "#000000", icon: "", link: "https://vulkan.org" }],
    [Skill.DirectX, { name: "DirectX", color: "#000000", icon: "", link: "" }],
    [Skill.OpenGL, { name: "OpenGL", color: "#000000", icon: "", link: "https://opengl.org" }],
]);

interface ProjectTagEntry {
    name: string,
    icon: string
}

export enum ProjectTag {
    FullStack,
    FrontEnd,
    BackEnd,
    WebDev,

    OpenSource,
    ClosedSource,

    Tools,
    Games,
    Graphics
}

export const ProjectTags = new Map<ProjectTag, ProjectTagEntry>([
    [ProjectTag.FullStack, { name: "Full-Stack", icon: "fas fa-server" }],
    [ProjectTag.FrontEnd, { name: "Front-End", icon: "fas fa-desktop" }],
    [ProjectTag.BackEnd, { name: "Back-End", icon: "fas fa-cogs" }],
    [ProjectTag.WebDev, { name: "Web Development", icon: "fas fa-globe" }],
    [ProjectTag.OpenSource, { name: "Open-Source", icon: "fas fa-code" }],
    [ProjectTag.ClosedSource, { name: "Closed-Source", icon: "fas fa-code" }],
    [ProjectTag.Tools, { name: "Tools", icon: "fas fa-code" }],
    [ProjectTag.Games, { name: "Games", icon: "fas fa-gamepad" }],
    [ProjectTag.Graphics, { name: "Graphics", icon: "fas fa-code" }],
]);

export interface Project {
    name: string,
    tags: ProjectTag[],
    technologies: Skill[],
    preview?: string,
    desc?: string,
    links?: {
        github?: string,
        live?: string
    }
};

//TODO: add contributions

export interface Config {
    url: string,
    base: string,
    name: string,
    skills: {
        back_end: Skill[],
        front_end: Skill[],
        tech: Skill[],
        other: Skill[]
    },
    projects: Project[],
    // introduction?: string,
    links?: {
        github?: string,
        email?: string,
        discord?: string
    },
    typewrite_words?: string[]
};