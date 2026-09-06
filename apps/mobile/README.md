# apps/mobile — Customer app (React Native + Expo, iOS & Android)

This folder is intentionally empty except for this file. Scaffold it with:

```bash
cd apps/mobile
npx create-expo-app@latest . --template blank-typescript
```

After scaffolding, add the shared packages as dependencies the same way as apps/web:

```json
"@gifting/types": "*",
"@gifting/api-client": "*",
"@gifting/validation": "*",
"@gifting/constants": "*"
```

Then run `npm install` from the **repo root**.

Note: building and testing the actual iOS binary requires a Mac (or Expo's EAS cloud build service) — you can develop and test on iOS via the Expo Go app on a physical iPhone without owning a Mac, but a Mac (or EAS) is needed for the final App Store build.

First screen to build: Home feed + Wedding landing (see gifting-app-page-structure.md in docs/).
