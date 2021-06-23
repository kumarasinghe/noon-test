import "../styles/globals.scss";
import Nav from "src/components/nav/nav";
import menuConfig from "src/configs/nav.config";
import { useRouter } from "next/router";
import PageContainer from "src/components/page-container/page-container"

function MyApp({ Component, pageProps }): JSX.Element {

  const router = useRouter()

  const onNavMenuSelected = (menuItem)=>{
    router.push(menuItem.url)
  }

  return (
    <div>
        <Nav menu={menuConfig} onSelectionChange={onNavMenuSelected}/>
        <PageContainer>
          <Component {...pageProps} />
        </PageContainer>
    </div>
  );
}

export default MyApp;
