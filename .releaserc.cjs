module.exports = {
  branches: [
    "+([0-9])?(.{+([0-9]),x}).x",
    "develop",
    "next",
    "next-major",
    { name: "beta", prerelease: true },
    { name: "alpha", prerelease: true },
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/npm",
      {
        npmPublish: true,
      },
    ],
    // [
    //   "@semantic-release/github",
    //   {
    //     npmPublish: true,
    //     assets: "dist/*.tgz",
    //   },
    // ],
    "@semantic-release/github",
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "package-lock.json", "CHANGELOG.md"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
  prepare: [
    {
      path: "@semantic-release/npm",
      npmPublish: true,
    },
    {
      path: "@semantic-release/exec",
      cmd: "npm run build",
    },
  ],
  debug: true,
};
