workflow "delete merged branch" {
  on = "pull_request"
  resolves = ["Delete merged branch"]
}

action "Delete merged branch" {
  uses = "cfpb/delete-merged-branch@master"
  secrets = ["GITHUB_TOKEN"]
}
