# jss-app-templates

## Custom App Templates for Sitecore JavaScript Services (JSS)

This repository contains [custom application templates](https://jss.sitecore.net/docs/techniques/custom-create-templates) for [JSS](https://jss.sitecore.net/).

Templates are branches of this repository starting with `template-` (e.g. `template-react-helix-layers`). Branches starting with `feature-` or anything else are work in progress.

### Create a JSS App from One of the Templates

```
jss create <appname> react --repository jflheureux/jss-app-templates --branch <template-branch-name>
```

### List of Templates in this Repository

#### [`template-react-helix-layers`](https://github.com/jflheureux/jss-app-templates/tree/template-react-helix-layers)

[Sitecore JSS react sample app](https://github.com/Sitecore/jss/tree/master/samples/react) where the source files have been rearanged in the Helix layers structure with Foundation, Feature, and Project modules.

#### [`template-react-helix-layers-eslint`](https://github.com/jflheureux/jss-app-templates/tree/template-react-helix-layers-eslint)

Same as `template-react-helix-layers`, with [ESLint](https://eslint.org/) validation of modules dependency flow.