import type { NextPage } from "next";
import Link from "next/link";
const Home: NextPage = () => {
  return (
    <>
      <main className="container mx-auto ">
        <section className="py-16 flex items-center justify-center  h-screen">
          <div>
            <Link
              href={"http://localhost:3001/api/auth/discord"}
              className="bg-gray-600 px-2 py-1 rounded hover:bg-gray-700"
            >
              Login with discord
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
/*
className="bg-gray-600 px-2 py-1 rounded hover:bg-gray-700"
*/
