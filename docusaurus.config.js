module.exports = {
    title: "Handbook",
    tagline: "The Complete Guide to Atelier Studio Structure and Process",
    url: "https://handbook.raidguild.org",
    baseUrl: "/",
    favicon: "img/rsz_atelierlogo.png",
    organizationName: "kevinknielsen", // Usually your GitHub org/user name.
    projectName: "handbook", // Usually your repo name.
    themeConfig: {
        navbar: {
            title: "Atelier Product Studios",
            logo: {
                alt: "RaidGuild Logo",
                src: "img/atelierlogo.png",
            },
            links: [
                // { to: "docs/raidCentral", label: "Handbook", position: "left" },
                // {
                //   to: "docs/raidCentral#member-registry",
                //   label: "Member Registry",
                //   position: "left"
                // },
                {
                    href: "https://raidguild.org",
                    label: "Dot Org",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            // links: [
            //   {}, // keep this empty object in so the footer objects are "centered" in desktop view
            //   {
            //     title: "Our Presence",
            //     items: [
            //       {
            //         label: "Homepage",
            //         href: "https://raidguild.org"
            //       },
            //       {
            //         label: "DAO",
            //         href: "https://twitter.com/RaidGuild"
            //       },
            //       {
            //         label: "Twitter",
            //         href: "https://twitter.com/RaidGuild"
            //       },
            //       {
            //         label: "GitHub",
            //         href: "https://github.com/raid-guild"
            //       }
            //     ]
            //   }
            // ],
            copyright: `Copyright © ${new Date().getFullYear()} Atelier Studios`,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/raid-guild/handbook/edit/master/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};
