import img1 from "./images/lawpic.jpg";
import img2 from "./images/vbvb.jpg";
import img3 from "./images/bnbn.jpg";
import img4 from "./images/dnkc.jpg";
import img5 from "./images/kjdf.jpg";
import img6 from "./images/aadf.png";
import img7 from "./images/ghhg.jpg";
import img8 from "./images/dbjf.jpeg";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import styles from "./gridbox1.module.css";
import styling from "./gridbox2.module.css";
import smooth from "./gridbox3.module.css";
import fine from "./gridbox4.module.css";
import winter from "./gridbox5.module.css";
import sunny from "./gridbox6.module.css";

function App() {
  return (
    <>
      <div className={sunny.gridbox6}>
        <div className={sunny.boombox}>
          <h1 className={sunny.eddy}>Hi,</h1>
          <p className={sunny.eddyy}>I'm Michael</p>
          <p className={sunny.eddyyy}>Ogunnaike</p>
          <p className={sunny.eddyyyy}>UX Writer</p>
        </div>
        <p className={sunny.eddyj}></p>
      </div>
      <div className={styles.gridbox1}>
        <img className={styles.boxpic} src={img1} alt="lawpic" />
        <div className={styles.rakuten}>
          <div className={styles.orangebox}></div>
          <div className={styles.blackbox}>
            <p className={styles.agency}>about consulting agency</p>
            <h1 className={styles.agencyy}>Growth</h1>
            <h2 className={styles.agencyyy}>Strategy</h2>
            <p className={styles.agencyyyy}>
              Image by
              <a
                className={styles.freepik}
                href="https://www.freepik.com/photos/business"
                target="_blank"
                rel="noreferrer"
              >
                Freepik
              </a>
            </p>
          </div>
          <div className={styles.missionbox}>
            <h1 className={styles.mission}>Our Mission</h1>
            <p className={styles.justo}>
              Justo nec ultrices dui sapien eget mi. Velit egestas dui id ornare
              arcu odio ut sem nulla. Fermentum posuere urna nec tincidunt
              praesent semper feugiat nibh sed.
            </p>
            <h2 className={styles.values}>Our Values</h2>
            <p className={styles.justo1}>
              Justo nec ultrices dui sapien eget mi. Velit egestas dui id ornare
              arcu odio ut sem nulla. Fermentum posuere urna nec tincidunt
              praesent semper feugiat nibh sed.
            </p>
            <h3 className={styles.consulting}>Consulting</h3>
            <p className={styles.justo2}>
              Justo nec ultrices dui sapien eget mi. Velit egestas dui id ornare
              arcu odio ut sem nulla. Fermentum posuere urna nec tincidunt
              praesent semper feugiat nibh sed.
            </p>
            <h4 className={styles.goals}>Business Goals</h4>
            <p className={styles.justo3}>
              Justo nec ultrices dui sapien eget mi. Velit egestas dui id ornare
              arcu odio ut sem nulla. Fermentum posuere urna nec tincidunt
              praesent semper feugiat nibh sed.
            </p>
            <p className={styles.line}></p>
            <p className={styles.line1}></p>
            <p className={styles.line2}></p>
            <p className={styles.line3}></p>
          </div>
        </div>
      </div>
      <div className={styling.gridbox2}>
        <div className={styling.animebox}>
          <p className={styling.ball}>What I Do.</p>
          <p className={styling.baller}>
            Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus
            <span className={styling.quis}>quis elementum</span>. Phasellus sed
            efficitur dolor, et ultricies sapien. <br />
            Images from
            <a
              className={styling.freepik1}
              href="https://www.freepik.com/photos/business"
              target="_blank"
              rel="noreferrer"
            >
              Freepik
            </a>
          </p>

          <div className={styling.ballercontainer}>
            <p className={styling.baller1}>read more</p>
            <p className={styling.baller1j}>read more</p>
          </div>

          <p className={styling.baller2}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>

          <p className={styling.baller3}>
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.
          </p>

          <p className={styling.baller4}>
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.
          </p>

          <img
            className={styling.cool}
            src={img2}
            alt="image2"
            width="170"
            height="170"
          />

          <img
            className={styling.cool1}
            src={img3}
            alt="image3"
            width="170"
            height="170"
          />

          <img
            className={styling.cool2}
            src={img4}
            alt="image4"
            width="170"
            height="170"
          />
        </div>
      </div>
      <div className={smooth.gridbox3}>
        <div className={smooth.innobox}>
          <h1 className={smooth.innovate}>Always innovating</h1>
          <p className={smooth.innovate1}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <p className={smooth.innovate2}>
            Image from
            <a
              className={smooth.freepik2}
              href="https://www.freepik.com/photos/business"
              target="_blank"
              rel="noreferrer"
            >
              Freepik
            </a>
          </p>
          <div className={smooth.innovation}>
            <p className={smooth.innovate3}>read more</p>
            <p className={smooth.innovate4}>read more</p>
          </div>
          <p className={smooth.fresh}></p>
          <img className={smooth.fresh1} src={img5} alt="image5" />
          <img className={smooth.fresh2} src={img6} alt="image6" />
        </div>
      </div>
      <div className={fine.gridbox4}>
        <div className={fine.victoria}>
          <img className={fine.victory} src={img6} alt="image6" />
          <img className={fine.victory1} src={img7} alt="image7" />
          <div className={fine.victory2}>
            <h1 className={fine.smoove}>
              We believe that for all people to prosper, economies must grow.
            </h1>
            <p className={fine.smoove1}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p className={fine.smoove2}>
              Image from
              <a
                className={fine.freepik3}
                href="https://www.freepik.com/photos/business"
                target="_blank"
                rel="noreferrer"
              >
                Freepik
              </a>
            </p>
            <div className={fine.smoove3}>
              <p className={fine.winger1}>read more</p>
              <p className={fine.winger2}>read more</p>
            </div>
          </div>
        </div>
      </div>
      <div className={winter.gridbox5}>
        <img className={winter.chelsea} src={img8} alt="image8" />
        <div className={winter.deuce}>
          <br />
          <br />
          <br />
          <p className={winter.rally}>call us</p>
          <p className={winter.rally1}>1(234)567-891</p>
          <p className={winter.rally2}>1(234)987-654</p>
          <br />
          <br />
          <p className={winter.rally3}>location</p>
          <p className={winter.rally4}>121 Rock Street, 21 Avenue,</p>
          <p className={winter.rally5}>New York, NY 92103-9000</p>
          <br />
          <br />
          <p className={winter.rally6}>our top services</p>
          <p className={winter.rally7}>Your future</p>
          <p className={winter.rally8}>Consulting</p>
          <p className={winter.rally9}>Market Intelligence</p>
        </div>
        <div className={winter.topspin}>
          <h1 className={winter.volley}>contact us</h1>
          <form>
            <label className={winter.smash1} for="fname">
              Name
            </label>
            <input type="text" className={winter.volley1} name="fname" />
            <label className={winter.smash2} for="lname">
              Email
            </label>
            <input type="text" className={winter.volley2} name="lname" />
          </form>
          <p className={winter.smash3}>Message</p>
          <form>
            <textarea className={winter.volley3}></textarea>
          </form>
          <FormGroup className={winter.bass}>
            <FormControlLabel control={<Checkbox defaultChecked />} />
          </FormGroup>
          <p className={winter.tempo}>
            I accept the
            <span className={winter.tempo1}>terms and services</span>
          </p>
          <div className={winter.volley5}>
            <p className={winter.cup1}>submit</p>
            <p className={winter.cup2}>submit</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
