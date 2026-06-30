# Explicit setup pointer only for hard dependencies

Skills that need initialization state it as a precondition (`/setup-matt-pocock-skills` must be run first), not as a fallback that runs on every invocation.

## Why

A setup step that checks "is setup already done?" on every invocation adds latency, complexity, and failure modes to every use of the skill. The overhead is only justified for hard dependencies (issue tracker tokens, label definitions, doc paths) that would break the skill immediately if missing. For everything else — coding standards, common patterns — the model discovers them naturally from the codebase.
