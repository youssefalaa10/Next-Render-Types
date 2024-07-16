import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  if (Component.getLayout)
    return Component.getLayout(<Component {...pageProps} />);
  else
    return (
      <>
        <SessionProvider session={session}>
          <Component {...pageProps} />;
        </SessionProvider>
      </>
    );
}
