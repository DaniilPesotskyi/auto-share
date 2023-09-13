import { Helmet } from "react-helmet";
import Select from "../../components/Select/Select";

const selectors = ["wow", "wow1", "wow2"];

const HomePage = () => {
  return (
    <>
      {/* <Helmet>
        <title>Homepage</title>
      </Helmet> */}
      <div>
        <h1>Home</h1>
        <br />
        <br />
        <br />
        <Select
          size={"common"}
          placeholder={"Enter the text"}
          selects={selectors}
        />
        <br />
        <br />
        <br />
        <Select size={"small"} placeholder={"To $"} selects={selectors} />
      </div>
    </>
  );
};

export default HomePage;
