golang-quiz-cli
===============

IN PROGRESS.

Todo: see how to offer different options after command is run. 

like 

-> goquiz begin
-> quiz on slices
-> quiz on maps

A quiz game to help sharpen your basic golang knowledge. 

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/golang-quiz-cli.svg)](https://npmjs.org/package/golang-quiz-cli)
[![Downloads/week](https://img.shields.io/npm/dw/golang-quiz-cli.svg)](https://npmjs.org/package/golang-quiz-cli)
[![License](https://img.shields.io/npm/l/golang-quiz-cli.svg)](https://github.com/Cerchie/golang-quiz-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g golang-quiz-cli
$ golang-quiz-cli COMMAND
running command...
$ golang-quiz-cli (-v|--version|version)
golang-quiz-cli/0.0.0 darwin-x64 node-v14.0.0
$ golang-quiz-cli --help [COMMAND]
USAGE
  $ golang-quiz-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`golang-quiz-cli begin [FILE]`](#golang-quiz-cli-begin-file)
* [`golang-quiz-cli hello [FILE]`](#golang-quiz-cli-hello-file)
* [`golang-quiz-cli help [COMMAND]`](#golang-quiz-cli-help-command)

## `golang-quiz-cli begin [FILE]`

describe the command here

```
USAGE
  $ golang-quiz-cli begin [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/begin.ts](https://github.com/Cerchie/golang-quiz-cli/blob/v0.0.0/src/commands/begin.ts)_

## `golang-quiz-cli hello [FILE]`

describe the command here

```
USAGE
  $ golang-quiz-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ golang-quiz-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/Cerchie/golang-quiz-cli/blob/v0.0.0/src/commands/hello.ts)_

## `golang-quiz-cli help [COMMAND]`

display help for golang-quiz-cli

```
USAGE
  $ golang-quiz-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_
<!-- commandsstop -->
