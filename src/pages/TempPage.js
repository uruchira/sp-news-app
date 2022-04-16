import Button from "../components/Button";
import Card from "../components/Card";
import SearchBox from "../components/SearchBox";

import bookmarkIcon from "../assets/bookmark-icon.svg";
import logoOneIcon from "../assets/the.svg";
import logoTwoIcon from "../assets/peaks.svg";

function TempPage() {
  return (
    <>
      <div className="header-wrapper">
        <div className="header-container">
          <a href="/">
            <img src={logoOneIcon} alt="The" />
            <img src={logoTwoIcon} alt="Peaks" />
          </a>
          <SearchBox />
        </div>
      </div>

      <div className="main-wrapper">
        <div className="main-container">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <br />
      <br />
      <div className="main-wrapper">
        <div className="main-container">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <br />
      <br />
      <Button>
        <img src={bookmarkIcon} alt="Bookmark Icon" />
        <span>view bookmark</span>
      </Button>
      <br />
      <br />
      <Button variant="secondary">view bookmark</Button>
      <br />
      <br />
    </>
  );
}

export default TempPage;
