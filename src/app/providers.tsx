'use client';

import { AppProvider } from "@shopify/polaris";
import en from "@shopify/polaris/locales/en.json";
import UserContextPovider from "./(FavLoyalty)/context/UserProvider";
import RedeemPointProvider from "./(FavLoyalty)/context/RedeemPointProvider";

export function Providers({ children }: any) {
  return (
    <AppProvider i18n={en}>
      <RedeemPointProvider>
        <UserContextPovider>{children}</UserContextPovider>
      </RedeemPointProvider>
    </AppProvider>
  );
}