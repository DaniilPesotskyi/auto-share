import css from "./HomePage.module.css";

import Icon from "../../components/Icon/Icon";

const HomePage = () => {
  return (
    <>
      <section className={css.hero}>
        <Icon id={"logo"} className={css.logo} />
        <h1 className={css.title}>AutoShare</h1>
      </section>
    </>
  );
};

export default HomePage;
