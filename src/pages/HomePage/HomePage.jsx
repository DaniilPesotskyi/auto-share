import css from "./HomePage.module.css";

import Icon from "../../components/Icon/Icon";
// import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      {/* <Helmet>
        <title>Homepage</title>
      </Helmet> */}
      <section className={css.hero}>
        <Icon id={"logo"} className={css.logo} />
        <h1 className={css.title}>AutoShare</h1>
      </section>
    </>
  );
};

export default HomePage;
