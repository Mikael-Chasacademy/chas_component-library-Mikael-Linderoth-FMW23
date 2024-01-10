import Title from "./Componenter/Title";
import Button from "./Componenter/Button";
import Alert from "./Componenter/Alert";
import Badges from "./Componenter/Badges";
import Cards from "./Componenter/Cards";
import { FiSun } from "react-icons/fi";
import { FiThermometer } from "react-icons/fi";
import { HiInformationCircle } from "react-icons/hi";
import { FiAlertTriangle } from "react-icons/fi";
import { BiSolidBadgeCheck } from "react-icons/bi";
import "./App.css";

/* import { Button } from "flowbite-react"; */

export default function MyPage() {
  return (
    <div className="whole">
      <div>
        <Title title="Disabled buttons"></Title>
        <div className="knappar">
          <Button
            color="black"
            bgcolor="pink"
            size={{ height: "100px", width: "150px" }}
            disabled={true}
          ></Button>
          <Button
            color="white"
            bgcolor="black"
            size={{ height: "60px", width: "100px" }}
            disabled={false}
          ></Button>
        </div>

        <Title title="Alerts"></Title>
        <div className="alert">
          <Alert
            alertMessage="Lost the lead!"
            Icon={HiInformationCircle}
            bgColor="lightblue"
          ></Alert>
          <Alert
            alertMessage="Intruder Alert! Red spy in base!"
            Icon={FiAlertTriangle}
            bgColor="red"
          ></Alert>
        </div>

        <Title title="Badges"></Title>
        <div className="badges">
          {/* Pass the Icon prop correctly */}
          <Badges
            Icon={FiThermometer}
            color="blue"
            bgColor="lightblue"
            badgeName="5° Celsius"
            size={{ height: "40px", width: "145px" }}
          ></Badges>
          <Badges
            Icon={FiSun}
            color="white"
            bgColor="orange"
            badgeName="Fr | 12 | Jan"
            size={{ height: "40px", width: "145px" }}
          ></Badges>
        </div>

        <Title title="Cards"></Title>
        <div className="cards">
          <Cards
            href="https://steamcdn-a.akamaihd.net/apps/tf2/artwork/expiration_date_04.jpg"
            imgAlt="image 1"
            imgSrc="src\assets\TF2_1.jpg"
          >
            <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Gentlemen</h2>
            <p>This, is a bucket!</p>
          </Cards>

          <Cards
            href="https://steamcdn-a.akamaihd.net/apps/tf2/artwork/expiration_date_03.jpg"
            imgAlt="image 2"
            imgSrc="src\assets\TF2_2.jpg"
          >
            <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
              I got a bucket of chicken.
            </h2>
            <p>i'm not one of your fried-chicken tramps!</p>
          </Cards>
          <Cards
            href="https://www.youtube.com/watch?v=GLlLQ3LmZWU"
            imgAlt="image 3"
            imgSrc="src\assets\TF2_3.png"
          >
            <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
              Team Fortress2
            </h2>
            <p>short</p>
          </Cards>
        </div>
      </div>
    </div>
  );
}
