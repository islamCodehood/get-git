export const commands = [
  {
    name: "git add",
    use: "Add file contents to the index (staging area)",
    flags: [
      { name: "--all", use: "Stage all changes including untracked files" },
      { name: "--patch", use: "Interactively stage changes" }
    ],
    tag: "Changes"
  },
  {
    name: "git am",
    use: "Apply patches from a mailbox",
    flags: [
      { name: "--3way", use: "Attempt a three-way merge if patch applies with conflicts" },
      { name: "--skip", use: "Skip the current patch and continue" }
    ],
    tag: "Patching"
  },
  {
    name: "git archive",
    use: "Create an archive of files from a named tree",
    flags: [
      { name: "--format", use: "Specify the format (e.g., tar, zip)" },
      { name: "--prefix", use: "Prepend prefix to each filename in the archive" }
    ],
    tag: "Archiving"
  },
  {
    name: "git bisect",
    use: "Use binary search to find the commit that introduced a bug",
    flags: [
      { name: "--no-checkout", use: "Do not checkout the bisection commit" }
    ],
    tag: "Debugging"
  },
  {
    name: "git branch",
    use: "List, create, or delete branches",
    flags: [
      { name: "-d", use: "Delete a branch" },
      { name: "-m", use: "Rename a branch" }
    ],
    tag: "Branching"
  },
  {
    name: "git bundle",
    use: "Move objects and refs by archive",
    flags: [
      { name: "--all", use: "Include all refs in the bundle" }
    ],
    tag: "Archiving"
  },
  {
    name: "git checkout",
    use: "Switch branches or restore working tree files",
    flags: [
      { name: "-b", use: "Create a new branch and switch to it" },
      { name: "--track", use: "Set up tracking for a remote branch" }
    ],
    tag: "Branching"
  },
  {
    name: "git cherry-pick",
    use: "Apply the changes introduced by existing commits",
    flags: [
      { name: "--continue", use: "Continue cherry-pick after resolving conflicts" },
      { name: "--abort", use: "Abort the cherry-pick" }
    ],
    tag: "Changes"
  },
  {
    name: "git citool",
    use: "Graphical alternative to git commit",
    flags: [],
    tag: "Changes"
  },
  {
    name: "git clean",
    use: "Remove untracked files from the working tree",
    flags: [
      { name: "-f", use: "Force clean untracked files" },
      { name: "-d", use: "Remove untracked directories" }
    ],
    tag: "Cleanup"
  },
  {
    name: "git clone",
    use: "Clone a repository into a new directory",
    flags: [
      { name: "--branch", use: "Clone a specific branch" },
      { name: "--depth", use: "Create a shallow clone with a limited history" }
    ],
    tag: "Repository Setup"
  },
  {
    name: "git commit",
    use: "Record changes to the repository",
    flags: [
      { name: "-m", use: "Specify the commit message inline" },
      { name: "--amend", use: "Modify the most recent commit" }
    ],
    tag: "Changes"
  },
  {
    name: "git describe",
    use: "Give a human-readable name to a commit",
    flags: [
      { name: "--tags", use: "Match lightweight and annotated tags" }
    ],
    tag: "Information"
  },
  {
    name: "git diff",
    use: "Show changes between commits, branches, or the working directory",
    flags: [
      { name: "--cached", use: "Show changes staged for the next commit" },
      { name: "--name-only", use: "Show only names of changed files" }
    ],
    tag: "Changes"
  },
  {
    name: "git fetch",
    use: "Download objects and refs from another repository",
    flags: [
      { name: "--all", use: "Fetch all remotes" },
      { name: "--prune", use: "Prune deleted branches on the remote" }
    ],
    tag: "Remote Operations"
  },
  {
    name: "git format-patch",
    use: "Prepare patches for e-mail submission",
    flags: [
      { name: "-n", use: "Number of commits to generate patches from" }
    ],
    tag: "Patching"
  },
  {
    name: "git gc",
    use: "Cleanup unnecessary files and optimize the local repository",
    flags: [
      { name: "--aggressive", use: "Perform an aggressive garbage collection" }
    ],
    tag: "Maintenance"
  },
  {
    name: "git grep",
    use: "Print lines matching a pattern",
    flags: [
      { name: "-i", use: "Case-insensitive search" },
      { name: "-n", use: "Show line numbers" }
    ],
    tag: "Search"
  },
  {
    name: "git init",
    use: "Create an empty Git repository or reinitialize an existing one",
    flags: [
      { name: "--bare", use: "Create a bare repository" },
      { name: "--quiet", use: "Suppress output" }
    ],
    tag: "Repository Setup"
  },
  {
    name: "git log",
    use: "Show commit logs",
    flags: [
      { name: "--oneline", use: "Show condensed log with one line per commit" },
      { name: "--graph", use: "Show a graph of the commit history" }
    ],
    tag: "Information"
  },
  {
    name: "git merge",
    use: "Join two or more development histories together",
    flags: [
      { name: "--no-ff", use: "Create a merge commit even if fast-forward is possible" },
      { name: "--squash", use: "Combine all changes into a single commit" }
    ],
    tag: "Branching"
  },
  {
    name: "git mv",
    use: "Move or rename a file, directory, or symlink",
    flags: [],
    tag: "Changes"
  },
  {
    name: "git notes",
    use: "Add or inspect object notes",
    flags: [
      { name: "add", use: "Add notes to an object" }
    ],
    tag: "Notes"
  },
  {
    name: "git pull",
    use: "Fetch from and integrate with another repository or a local branch",
    flags: [
      { name: "--rebase", use: "Reapply commits on top of fetched changes" }
    ],
    tag: "Remote Operations"
  },
  {
    name: "git push",
    use: "Update remote refs along with associated objects",
    flags: [
      { name: "--force", use: "Force push" },
      { name: "--tags", use: "Push all tags" }
    ],
    tag: "Remote Operations"
  },
  {
    name: "git rebase",
    use: "Reapply commits on top of another base tip",
    flags: [
      { name: "--interactive", use: "Use interactive rebase" },
      { name: "--abort", use: "Abort the rebase" }
    ],
    tag: "Branching"
  },
  {
    name: "git reset",
    use: "Reset current HEAD to the specified state",
    flags: [
      { name: "--soft", use: "Reset HEAD only" },
      { name: "--hard", use: "Reset index and working tree" }
    ],
    tag: "Changes"
  },
  {
    name: "git restore",
    use: "Restore working tree files",
    flags: [
      { name: "--staged", use: "Restore changes from index" }
    ],
    tag: "Changes"
  },
  {
    name: "git revert",
    use: "Revert some existing commits",
    flags: [
      { name: "--no-edit", use: "Don't edit the commit message" }
    ],
    tag: "Changes"
  },
  {
    name: "git rm",
    use: "Remove files from the working tree and from the index",
    flags: [
      { name: "--cached", use: "Remove file only from index" }
    ],
    tag: "Changes"
  },
  {
    name: "git shortlog",
    use: "Summarize git log output",
    flags: [],
    tag: "Information"
  },
  {
    name: "git show",
    use: "Show various types of objects",
    flags: [],
    tag: "Information"
  },
  {
    name: "git stash",
    use: "Stash the changes in a dirty working directory away",
    flags: [
      { name: "--include-untracked", use: "Also stash untracked files" }
    ],
    tag: "Changes"
  },
  {
    name: "git status",
    use: "Show the working tree status",
    flags: [
      { name: "-s", use: "Short status" }
    ],
    tag: "Information"
  },
  {
    name: "git submodule",
    use: "Initialize, update, or inspect submodules",
    flags: [],
    tag: "Submodules"
  },
  {
    name: "git switch",
    use: "Switch branches",
    flags: [
      { name: "-c", use: "Create a new branch" },
      { name: "--detach", use: "Switch to a commit" }
    ],
    tag: "Branching"
  },
  {
    name: "git tag",
    use: "Create, list, delete, or verify a tag object signed with GPG",
    flags: [
      { name: "-a", use: "Create an annotated tag" }
    ],
    tag: "Tagging"
  }
];

