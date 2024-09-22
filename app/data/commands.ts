export const commands = [
  {
    name: "git add <file>",
    use: "Add specified file(s) to the staging area, preparing them for a commit",
    flags: [
      { name: "--all", use: "Stage all modified and untracked files" },
      { name: "--patch", use: "Interactively stage parts of a file" }
    ],
    tag: "Changes"
  },
  {
    name: "git am <patch-file>",
    use: "Apply patches from a mailbox file to your repository",
    flags: [
      { name: "--3way", use: "Try a three-way merge if the patch does not apply cleanly" },
      { name: "--skip", use: "Skip the current patch if it cannot be applied" }
    ],
    tag: "Patching"
  },
  {
    name: "git archive <tree-ish>",
    use: "Create an archive of files from a commit or branch",
    flags: [
      { name: "--format", use: "Specify archive format (e.g., tar, zip)" },
      { name: "--prefix", use: "Add a prefix to the files in the archive" }
    ],
    tag: "Archiving"
  },
  {
    name: "git bisect <start|bad|good>",
    use: "Find the commit that introduced a bug using binary search",
    flags: [
      { name: "--no-checkout", use: "Don't checkout the bisection commit" }
    ],
    tag: "Debugging"
  },
  {
    name: "git branch <branch-name>",
    use: "Create, list, or delete branches",
    flags: [
      { name: "-d <branch-name>", use: "Delete the specified branch" },
      { name: "-m <old-name> <new-name>", use: "Rename a branch" }
    ],
    tag: "Branching"
  },
  {
    name: "git bundle <create|verify>",
    use: "Create or verify a bundle of Git objects and references",
    flags: [
      { name: "--all", use: "Bundle all branches and refs" }
    ],
    tag: "Archiving"
  },
  {
    name: "git checkout <branch-name>",
    use: "Switch to the specified branch or restore files in the working directory",
    flags: [
      { name: "-b <new-branch>", use: "Create and switch to a new branch" },
      { name: "--track", use: "Set up tracking for a remote branch" }
    ],
    tag: "Branching"
  },
  {
    name: "git cherry-pick <commit-hash>",
    use: "Apply the changes introduced by the specified commit",
    flags: [
      { name: "--continue", use: "Continue after resolving cherry-pick conflicts" },
      { name: "--abort", use: "Abort the cherry-pick process" }
    ],
    tag: "Changes"
  },
  {
    name: "git citool",
    use: "Open a graphical interface for creating a commit",
    flags: [],
    tag: "Changes"
  },
  {
    name: "git clean <file-pattern>",
    use: "Remove untracked files from the working directory",
    flags: [
      { name: "-f", use: "Force clean untracked files" },
      { name: "-d", use: "Remove untracked directories" }
    ],
    tag: "Cleanup"
  },
  {
    name: "git clone <repository-url>",
    use: "Clone the specified repository into a new directory",
    flags: [
      { name: "--branch <branch-name>", use: "Clone a specific branch" },
      { name: "--depth <depth>", use: "Create a shallow clone with limited history" }
    ],
    tag: "Repository Setup"
  },
  {
    name: "git commit -m <message>",
    use: "Record changes in the staging area with a descriptive message",
    flags: [
      { name: "--amend", use: "Modify the most recent commit" }
    ],
    tag: "Changes"
  },
  {
    name: "git describe <commit-hash>",
    use: "Give a human-readable name to the specified commit",
    flags: [
      { name: "--tags", use: "Use both lightweight and annotated tags" }
    ],
    tag: "Information"
  },
  {
    name: "git diff <commit|branch|file>",
    use: "Show differences between commits, branches, or files",
    flags: [
      { name: "--cached", use: "Show differences between staged changes and last commit" },
      { name: "--name-only", use: "Show only the names of changed files" }
    ],
    tag: "Changes"
  },
  {
    name: "git fetch <remote>",
    use: "Download changes and references from the specified remote repository",
    flags: [
      { name: "--all", use: "Fetch from all configured remotes" },
      { name: "--prune", use: "Remove any remote-tracking branches that no longer exist" }
    ],
    tag: "Remote Operations"
  },
  {
    name: "git format-patch <commit-range>",
    use: "Generate patch files for commits to be emailed",
    flags: [
      { name: "-n <count>", use: "Generate patches for the last <count> commits" }
    ],
    tag: "Patching"
  },
  {
    name: "git gc",
    use: "Clean up unnecessary files and optimize the repository",
    flags: [
      { name: "--aggressive", use: "Perform a more thorough garbage collection" }
    ],
    tag: "Maintenance"
  },
  {
    name: "git grep <pattern>",
    use: "Search for lines matching the pattern in tracked files",
    flags: [
      { name: "-i", use: "Ignore case" },
      { name: "-n", use: "Show line numbers with matching lines" }
    ],
    tag: "Search"
  },
  {
    name: "git init <directory>",
    use: "Create a new Git repository in the specified directory",
    flags: [
      { name: "--bare", use: "Create a bare repository with no working directory" },
      { name: "--quiet", use: "Suppress all output" }
    ],
    tag: "Repository Setup"
  },
  {
    name: "git log",
    use: "Show a log of commits in the repository",
    flags: [
      { name: "--oneline", use: "Display commits as one line per commit" },
      { name: "--graph", use: "Show a graphical representation of the commit history" }
    ],
    tag: "Information"
  },
  {
    name: "git merge <branch-name>",
    use: "Merge changes from the specified branch into the current branch",
    flags: [
      { name: "--no-ff", use: "Force the creation of a merge commit even if fast-forward is possible" },
      { name: "--squash", use: "Combine all changes into a single commit" }
    ],
    tag: "Branching"
  },
  {
    name: "git mv <old-path> <new-path>",
    use: "Move or rename a file, directory, or symlink",
    flags: [],
    tag: "Changes"
  },
  {
    name: "git notes add <object>",
    use: "Add or inspect notes on the specified object",
    flags: [],
    tag: "Notes"
  },
  {
    name: "git pull <remote> <branch>",
    use: "Fetch and merge changes from the specified remote branch",
    flags: [
      { name: "--rebase", use: "Reapply local changes on top of fetched changes" }
    ],
    tag: "Remote Operations"
  },
  {
    name: "git push <remote> <branch>",
    use: "Push local commits to the specified remote branch",
    flags: [
      { name: "--force", use: "Force push even if it may overwrite changes" },
      { name: "--tags", use: "Push all tags to the remote" }
    ],
    tag: "Remote Operations"
  },
  {
    name: "git rebase <branch>",
    use: "Reapply commits from the current branch on top of the specified base branch",
    flags: [
      { name: "--interactive", use: "Use interactive mode for rebasing" },
      { name: "--abort", use: "Abort the rebase operation" }
    ],
    tag: "Branching"
  },
  {
    name: "git reset <commit>",
    use: "Reset the current branch to the specified commit",
    flags: [
      { name: "--soft", use: "Reset only the commit history, leaving staged changes intact" },
      { name: "--hard", use: "Reset everything, including working directory changes" }
    ],
    tag: "Changes"
  },
  {
    name: "git restore <file>",
    use: "Restore the specified file to its last committed state",
    flags: [
      { name: "--staged", use: "Restore file changes in the staging area" }
    ],
    tag: "Changes"
  },
  {
    name: "git revert <commit-hash>",
    use: "Revert the specified commit by creating a new commit that undoes the changes",
    flags: [
      { name: "--no-edit", use: "Use the existing commit message without opening the editor" }
    ],
    tag: "Changes"
  },
  {
    name: "git rm <file>",
    use: "Remove the specified file from the working directory and the staging area",
    flags: [
      { name: "--cached", use: "Remove the file only from the staging area, keeping it in the working directory" }
    ],
    tag: "Changes"
  },
  {
    name: "git shortlog",
    use: "Summarize the git log output by author",
    flags: [
      { name: "-n", use: "Sort authors by number of commits" },
      { name: "-s", use: "Display only commit count per author" }
    ],
    tag: "Information"
  },
  {
    name: "git show <commit>",
    use: "Display information about the specified commit, file, or reference",
    flags: [
      { name: "--stat", use: "Show diffstat of changes for the commit" }
    ],
    tag: "Information"
  },
  {
    name: "git stash",
    use: "Save changes to a temporary storage area (stash) and clean the working directory",
    flags: [
      { name: "--include-untracked", use: "Also stash untracked files" }
    ],
    tag: "Changes"
  },
  {
    name: "git status",
    use: "Show the current status of the working directory and staging area",
    flags: [
      { name: "-s", use: "Show status in short format" },
      { name: "--ignored", use: "Show ignored files as well" }
    ],
    tag: "Information"
  },
  {
    name: "git submodule <command>",
    use: "Initialize, update, or inspect submodules within a repository",
    flags: [
      { name: "--init", use: "Initialize the submodule" },
      { name: "--recursive", use: "Update submodules recursively" }
    ],
    tag: "Submodules"
  },
  {
    name: "git switch <branch-name>",
    use: "Switch to the specified branch",
    flags: [
      { name: "-c <new-branch>", use: "Create a new branch and switch to it" },
      { name: "--detach", use: "Detach the HEAD and switch to a commit" }
    ],
    tag: "Branching"
  },
  {
    name: "git tag <tag-name>",
    use: "Create, list, delete, or verify tags",
    flags: [
      { name: "-a", use: "Create an annotated tag" },
      { name: "-d", use: "Delete a tag" }
    ],
    tag: "Tagging"
  }
];


