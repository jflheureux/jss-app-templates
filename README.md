# jss-app-templates

## Custom App Templates for Sitecore JavaScript Services (JSS)

This repository contains [custom application templates](https://jss.sitecore.net/docs/techniques/custom-create-templates) for [JSS](https://jss.sitecore.net/) technical preview 4 (TP4).

Templates are folders in this repository.

### Create a JSS App from One of the Templates

```
jss create <appname> <template-name> --repository jflheureux/jss-app-templates
```

### List of Templates in this Repository

#### `react-helix`

[Sitecore JSS react sample app](https://github.com/Sitecore/jss/tree/master/samples/react) where the source files have been rearanged in the Helix layers structure with Foundation, Feature, and Project modules. Dependency flow is validated at compilation time using [ESLint](https://eslint.org/).