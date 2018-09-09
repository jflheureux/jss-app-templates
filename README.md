# jss-app-templates

## Custom App Templates for Sitecore JavaScript Services (JSS)

This repository contains [custom application templates](https://jss.sitecore.net/docs/techniques/custom-create-templates) for [JSS](https://jss.sitecore.net/).

Templates are folders in this repository.

### Create a JSS App from One of the Templates

```
jss create <appname> <template-name> --repository jflheureux/jss-app-templates
```

### List of Templates in this Repository

#### `react-helix-layers`

[Sitecore JSS react sample app](https://github.com/Sitecore/jss/tree/master/samples/react) where the source files have been rearanged in the Helix layers structure with Foundation, Feature, and Project modules.

#### `react-helix-layers-eslint`

Same as `react-helix-layers`, with [ESLint](https://eslint.org/) validation of modules dependency flow.