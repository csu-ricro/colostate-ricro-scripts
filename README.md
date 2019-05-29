# colostate-ricro-scripts

## Usage

Install the package globably from npm

```yarn global add colostate-ricro-ui```

```npm i -g colostate-ricro-ui```

Ensure the script is working

```cru-create-app -v```

Execute the script with the desired options.

```bash
Usage: cru-create-app [options] 

Create a new RICRO app with create-react-app and colostate-ricro-ui

Options:
  -v, --version                            output the version number
  -d --dir [path]                          Specify the directory for app installation (default: ".")
  -m --manifest__name [name]               Set the `name` key in `manifest.json` (default: "Create App with colostate-ricro-ui")
  -M --manifest__short_name [shortName]    Set the `short_name` key in `manifest.json` (default: "Create CRU App")
  -a --package__author [name]              Set the `author` key in `package.json` (default: "RICRO")
  -D --package__description [description]  Specify the `description` key in `package.json` (default: "App template built with colostate-ricro-scripts/cru-create-app") 
  -h --package__homepage [path]            Specify the deployment path on the production server (default: "/")
  -n --package__name [name]                Set the `name` key in `package.json` (default: "cru-template")
  -p, --package__private                   Set the `private` key in `package.json` to `true`
  -h, --help                               output usage information
```

## Troubleshooting

### `cru-create-app: command not found`

It is likely that the PATH to the yarn or npm is not set correctly. Ensure that the paths are set correctly.