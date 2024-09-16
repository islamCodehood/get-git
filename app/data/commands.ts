export const commands = [
  {
    name: "git init",
    use: "Initializes a new Git repository in the directory",
    flags: [
      { name: "--bare", use: "Creates a bare repository" },
      { name: "--quiet", use: "Suppresses all output" }
    ],
    tag: "Repository Setup"
  },
  {
    name: "git clone",
    use: "Clones an existing repository into a new directory",
    flags: [
      { name: "--branch", use: "Clone a specific branch" },
      { name: "--depth", use: "Create a shallow clone with a limited history" }
    ],
    tag: "Repository Setup"
  },
  {
    name: "git add",
    use: "Adds changes to the staging area",
    flags: [
      { name: "--all", use: "Stages all changes, including deletions" },
      { name: "-p", use: "Interactively stage patches" }
    ],
    tag: "Committing"
  },
  {
    name: "git commit",
    use: "Commits staged changes to the repository",
    flags: [
      { name: "-m", use: "Specifies a commit message" },
      { name: "--amend", use: "Amends the last commit with staged changes" }
    ],
    tag: "Committing"
  },
  {
    name: "git status",
    use: "Shows the working directory status",
    flags: [
      { name: "-s", use: "Shows status in short format" },
      { name: "--ignored", use: "Shows ignored files as well" }
    ],
    tag: "Working Directory"
  },
  {
    name: "git log",
    use: "Displays the commit history",
    flags: [
      { name: "--oneline", use: "Shows each commit in one line" },
      { name: "--graph", use: "Displays an ASCII graph of branch and merge history" }
    ],
    tag: "Commit History"
  },
  {
    name: "git pull",
    use: "Fetches and integrates changes from the remote repository",
    flags: [
      { name: "--rebase", use: "Reapplies local commits on top of fetched commits" },
      { name: "--ff-only", use: "Only fast-forward if possible" }
    ],
    tag: "Remote Operations"
  },
  {
    name: "git push",
    use: "Pushes changes to the remote repository",
    flags: [
      { name: "--force", use: "Forces the push, potentially overwriting history" },
      { name: "--tags", use: "Pushes all tags" }
    ],
    tag: "Remote Operations"
  },
  {
    name: "git branch",
    use: "Lists, creates, or deletes branches",
    flags: [
      { name: "-d", use: "Deletes a branch" },
      { name: "-D", use: "Forcefully deletes a branch, even if it contains unmerged changes" }
    ],
    tag: "Branching"
  },
  {
    name: "git checkout",
    use: "Switches branches or restores files",
    flags: [
      { name: "-b", use: "Creates a new branch and switches to it" },
      { name: "--", use: "Disambiguates arguments when switching files or branches" }
    ],
    tag: "Branching"
  },
  {
    name: "git merge",
    use: "Merges changes from one branch into another",
    flags: [
      { name: "--no-ff", use: "Creates a merge commit even if the merge could be fast-forwarded" },
      { name: "--squash", use: "Squashes all commits into a single commit before merging" }
    ],
    tag: "Branching"
  },
  {
    name: "git rebase",
    use: "Reapplies commits on top of another base commit",
    flags: [
      { name: "-i", use: "Interactive rebase to edit, reorder, or squash commits" },
      { name: "--abort", use: "Aborts the rebase process and returns to the pre-rebase state" }
    ],
    tag: "Branching"
  },
  {
    name: "git fetch",
    use: "Downloads objects and refs from another repository",
    flags: [
      { name: "--all", use: "Fetch all remotes" },
      { name: "--tags", use: "Fetch all tags" }
    ],
    tag: "Remote Operations"
  },
  {
    name: "git reset",
    use: "Resets current HEAD to a specified state",
    flags: [
      { name: "--hard", use: "Resets index and working directory to match HEAD" },
      { name: "--soft", use: "Resets only HEAD, leaving index and working directory unchanged" }
    ],
    tag: "Committing"
  },
  {
    name: "git revert",
    use: "Creates a new commit that undoes changes from a previous commit",
    flags: [
      { name: "--no-edit", use: "Uses the default commit message without prompting" }
    ],
    tag: "Committing"
  },
  {
    name: "git stash",
    use: "Temporarily stores changes that are not ready to be committed",
    flags: [
      { name: "--include-untracked", use: "Stash untracked files along with tracked ones" },
      { name: "--keep-index", use: "Keep the index intact while stashing" }
    ],
    tag: "Working Directory"
  },
  {
    name: "git diff",
    use: "Shows differences between commits, branches, or the working directory",
    flags: [
      { name: "--cached", use: "Shows differences between the index and the last commit" },
      { name: "--name-only", use: "Shows names of changed files without the actual changes" }
    ],
    tag: "Working Directory"
  },
  {
    name: "git tag",
    use: "Creates or lists tags",
    flags: [
      { name: "-a", use: "Creates an annotated tag" },
      { name: "-d", use: "Deletes a tag" }
    ],
    tag: "Tagging"
  },
  {
    name: "git remote",
    use: "Manages remote repository connections",
    flags: [
      { name: "-v", use: "Displays the URLs of the remote connections" },
      { name: "add", use: "Adds a new remote" }
    ],
    tag: "Remote Operations"
  },
  {
    name: "git bisect",
    use: "Uses binary search to find the commit that introduced a bug",
    flags: [],
    tag: "Debugging"
  },
  {
    name: "git cherry-pick",
    use: "Applies changes from a specific commit",
    flags: [
      { name: "--no-commit", use: "Applies changes without creating a commit" }
    ],
    tag: "Committing"
  },
  {
    name: "git submodule",
    use: "Manages submodules inside a Git repository",
    flags: [
      { name: "add", use: "Adds a new submodule" },
      { name: "init", use: "Initializes submodules" },
      { name: "update", use: "Updates submodules" }
    ],
    tag: "Submodules"
  },
  {
    name: "git config",
    use: "Configures user-level settings such as name and email",
    flags: [
      { name: "--global", use: "Applies settings globally across all repositories" },
      { name: "--local", use: "Applies settings only to the local repository" }
    ],
    tag: "Configuration"
  },
  {
    name: "git reflog",
    use: "Shows the reference log, including changes to HEAD",
    flags: [],
    tag: "Debugging"
  },
  {
    name: "git fsck",
    use: "Verifies the integrity of the Git object database",
    flags: [],
    tag: "Maintenance"
  },
  {
    name: "git archive",
    use: "Creates a tar or zip archive of the repository",
    flags: [
      { name: "--format", use: "Specifies the format of the archive (e.g., tar, zip)" }
    ],
    tag: "Archiving"
  },
  {
    name: "git prune",
    use: "Removes unreachable objects from the repository",
    flags: [],
    tag: "Maintenance"
  },
  {
    name: "git gc",
    use: "Cleans up unnecessary files and optimizes the repository",
    flags: [],
    tag: "Maintenance"
  },
  {
    name: "git blame",
    use: "Shows the commit and author responsible for each line in a file",
    flags: [
      { name: "-L", use: "Limits the range of lines to annotate" }
    ],
    tag: "Debugging"
  },
  {
    name: "git shortlog",
    use: "Summarizes commit history",
    flags: [
      { name: "-s", use: "Shows only the number of commits per author" },
      { name: "-n", use: "Sorts by the number of commits per author" }
    ],
    tag: "Commit History"
  }
];
