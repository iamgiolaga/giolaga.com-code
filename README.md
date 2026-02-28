## What is this Repository?

This is the repository where you can find the code of [my personal website](https://giolaga.com).

## Development Workflow

### Regular Updates (without release)

When I want to update the website without creating a new version:

```bash
sh autopush.sh "description of changes"
```

This will:

- Commit and push changes in this repo
- Build the application
- Deploy to [iamgiolaga.github.io](https://github.com/iamgiolaga/iamgiolaga.github.io)
- Push the deployment

### Creating a Release

When ready to release a new version:

1. **Update the version** in `package.json`
2. **Run the release script**:
   ```bash
   sh release.sh
   ```

This automated script will:

- Commit changes (prompts for message, defaults to "Release v{VERSION}")
- Tag both repositories with the new version
- Build the application
- Deploy to root (current version at `giolaga.com`)
- Archive the version at `giolaga.com/v{VERSION}/`
- Update the versions page at `giolaga.com/versions/`
- Push everything to GitHub Pages

## Version History System

The website supports browsing past versions:

- **Current version**: [giolaga.com](https://giolaga.com)
- **Archived versions**: `giolaga.com/v2.0.4/`, `giolaga.com/v2.0.3/`, etc.
- **Version selector**: [giolaga.com/versions](https://giolaga.com/versions/)

Users can click on the version number in the footer to explore all available versions.
