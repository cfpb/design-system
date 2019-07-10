workflow "delete merged branch" {
  on = "pull_request"
  resolves = ["SvanBoxel/delete-merged-branch@master"]
}

action "SvanBoxel/delete-merged-branch@master" {
  uses = "SvanBoxel/delete-merged-branch@master"
  secrets = ["GITHUB_TOKEN"]
}
