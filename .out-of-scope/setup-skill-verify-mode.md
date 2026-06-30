# Verify mode for setup-matt-pocock-skills

This project will not add a dedicated verify/check mode for `setup-matt-pocock-skills`.

## Why this is out of scope

The intended workflow is: **run `/setup-matt-pocock-skills` and tell it to verify your current setup.** The skill is prompt-driven, so the maintainer can scope it to a verification pass ("don't rewrite anything, just check my existing files and report drift") without needing a separate code path.
