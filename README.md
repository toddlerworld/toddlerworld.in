# The Toddler World codebase

![workflow](https://github.com/aheedshah/toddler-world/actions/workflows/build_test_react.yml/badge.svg)
[![codecov](https://codecov.io/gh/aheedshah/toddler-world/graph/badge.svg?token=57OH7CZD9F)](https://codecov.io/gh/aheedshah/toddler-world)

This is the codebase for the Toddler World website. Please feel free to contribute to the project by forking the
repository and submitting a pull request. The PR needs to have a description of the changes and the reason for the same.
It would be appreciated if you could follow the template and include each details for your PR.

## Bugs and issues

If you have found a bug on the website or have an idea for a new feature, feel free
to [create a new issue](https://github.com/aheedshah/toddler-world/issues/new),
or suggest a fix by creating a [pull request](https://help.github.com/articles/creating-a-pull-request/). When raising
an issue, please add as much details as possible. Screenshots, video recordings, or anything else that can make it
easier to reproduce the bug you are reporting. There is a template for creating issues, please follow the same and
include as much detail as possible to make it easy for us to understand and reproduce the issue.

Every kind of help is appreciated!

## Running the project locally

**Recommended:**

Install docker and run it through docker. This will ensure that the application runs in the same environment as it
would on the server. To run the application through docker, run the following commands:

```docker-compose -f docker-compose.yml up```

The above command will create the docker image and run the application on your local machine.

The below command is used to run the application in the background:

```docker run toddler-world-dev```

If you've added packages, created new files, or added new images, keep in mind to update the docker image for it to run
using the command

`docker-compose up --build`

The application will be available on [http://localhost:3000](http://localhost:3000)

**Easiest:**

The simplest way to run this application is by cloning the repository, installing the dependencies by using the
command `yarn` and running the application on your local machine. Once everything is installed,
run `yarn start` to start the application.

## Contributing

Any help in contributing to the code is much appreciated but please maintain the following guidelines while
contributing:

1. Please ensure that the code is properly formatted and indented.
2. Please ensure that the code is commented properly.
3. Please ensure that the code is well documented.
4. Please ensure that the code is added in a way that it does not break the existing codebase and file structure.
5. Please ensure that the code is tested properly by running the code on your local machine before creating a PR.
6. Please ensure that the PR has a proper description of the changes and the reason for the same.

Thanks for your help in making this project better!

With ♥ from Toddler World!