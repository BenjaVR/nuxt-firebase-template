# TODO(template): title

TODO(template): description

> TODO(template): remove this section, this only explains how to use the
> template.
>
> - Do a string search for `TODO(template)` in this project and change the values.
> - Uncomment the actions in [.github/workflows](./.github/workflows).

## Getting started

### Install project

```bash
nvm use  # or `fnm use` or whatever ...
npm i
```

### Configuration

To make sure deploys via GitHub actions work, you need to add `GCP_SA_KEY` to your repo secrets.
Follow these steps to generate this key:

1. Go to https://console.cloud.google.com/iam-admin/serviceaccounts.
2. Create new credentials, e.g., `GitHub Firebase deploy`
3. Add these roles:
   - `Cloud Functions Developer`
   - `Firebase Hosting Admin`
   - `Service Account User`
   - `Viewer`
4. Under the `keys` section, press `Add new key` and save it as JSON.
5. Encode the file content, e.g. using `openssl base64 -in <your_key>.json -out output.txt` (unix).
6. Use the content of `output.txt` as value of `GCP_SA_KEY`.
7. Ensure the `Cloud Build API` is enabled:
   https://console.cloud.google.com/apis/library/cloudbuild.googleapis.com.

## Development

```bash
npm run dev
```

## Deploy

```bash
npm run build
npm run deploy
```
