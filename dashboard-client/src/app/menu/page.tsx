import { GetServerSidePropsContext, NextPage } from "next";
import { fetchMutualGuilds } from "../../utils/api";

const MenuPage: NextPage = () => <div>Menupage</div>;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return fetchMutualGuilds(context);
}




export default MenuPage;
